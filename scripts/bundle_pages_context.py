"""Consolida el contexto de código de cada ruta del sitio en un .txt por página.

Recorre ``src/app/``, detecta cada ``page.tsx`` del App Router, resuelve su árbol
completo de dependencias locales (componentes, hooks, server actions, lib) y
escribe un único archivo de texto plano por ruta en ``docs/paginas_en_txt/``.

El objetivo es producir un insumo legible para un agente de IA: cada archivo
consolidado lleva un encabezado con metadatos y cada bloque de código va
delimitado por un separador que identifica su rol dentro de la página.

Casos resueltos que un ``re.search`` línea a línea no cubre
-----------------------------------------------------------
* Bloques ``import`` multilínea (``import {\\n  a,\\n  b\\n} from "@/lib/x"``).
* ``import()`` dinámico (``await import("@/lib/genkit")``).
* ``require("...")`` y side-effect imports (``import "./globals.css"``).
* Alias additional de ``tsconfig.json`` (p. ej. ``@generated/*``).
* Rutas dinámicas de Next.js (``[slug]``, ``[...slug]``) en el nombre de salida.
* Colisiones de nombre al aplanar route groups ``(grupo)``.

Limitación conocida
-------------------
No se parsea TypeScript. Los especificadores se detectan sobre el código con los
comentarios eliminados, por lo que un literal de cadena que contenga
``from "@/algo"`` podría generar un candidato. Es inofensivo: el resolutor exige
que el archivo exista en disco, así que un falso positivo se descarta solo.

Uso
---
    python scripts/bundle_pages_context.py
    python scripts/bundle_pages_context.py --dry-run
    python scripts/bundle_pages_context.py --page src/app/contacto/page.tsx --clean

Códigos de salida
-----------------
``0``  Todo correcto.
``1``  Error de configuración (raíz, ``app`` dir u output dir inválidos).
``2``  Alguna página falló al escribirse.
``3``  Modo ``--strict`` y hubo especificadores locales sin resolver.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections.abc import Iterator, Mapping, Sequence
from dataclasses import dataclass, field
from enum import Enum
from pathlib import Path, PurePosixPath
from typing import Final

# --------------------------------------------------------------------------------------
# Constantes
# --------------------------------------------------------------------------------------

SEPARATOR_WIDTH: Final = 80

#: Extensiones con código: se recorren recursivamente.
CODE_EXTENSIONS: Final = (".tsx", ".ts", ".jsx", ".js", ".mjs", ".cjs")

#: Extensiones de datos: se vuelcan en el .txt pero no se recorren.
DATA_EXTENSIONS: Final = (".json",)

#: Recursos estáticos: se resuelven para silencearlos, pero no se vuelcan.
ASSET_EXTENSIONS: Final = (
    ".css",
    ".scss",
    ".sass",
    ".less",
    ".svg",
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".avif",
    ".gif",
    ".ico",
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
    ".mp4",
    ".webm",
    ".txt",
    ".md",
)

#: Directorios que nunca deben expandirse aunque un import relativo los alcance.
EXCLUDED_DIR_NAMES: Final = frozenset(
    {
        "node_modules",
        ".next",
        ".git",
        ".turbo",
        ".vercel",
        "coverage",
        "dist",
        "build",
        "out",
    }
)

#: Archivos que Next.js inyecta alrededor de la página y que forman parte de su UI.
SHELL_FILE_NAMES: Final = (
    "layout.tsx",
    "template.tsx",
    "loading.tsx",
    "error.tsx",
    "global-error.tsx",
    "not-found.tsx",
    "default.tsx",
)

DEFAULT_ALIASES: Final[Mapping[str, str]] = {"@/*": "./src/*"}

#: Roles usados en los separadores de cada bloque del .txt.
ROLE_PAGE: Final = "PÁGINA RAÍZ"
ROLE_SHELL: Final = "SHELL DEL APP ROUTER"
ROLE_DEPENDENCY: Final = "COMPONENTE ANIDADO"
ROLE_DATA: Final = "DATO JSON"

EXIT_OK: Final = 0
EXIT_CONFIG_ERROR: Final = 1
EXIT_WRITE_ERROR: Final = 2
EXIT_STRICT_ERROR: Final = 3

#: Caracteres prohibidos en nombres de archivo en Windows.
_ILLEGAL_NAME_CHARS_RE: Final = re.compile(r'[<>:"/\\|?*\[\]()@]')
_REPEATED_DASH_RE: Final = re.compile(r"-{2,}")

#: Detecta todos los especificadores de módulo tras eliminar comentarios.
_MODULE_SPECIFIER_RE: Final = re.compile(
    r"""
      \bfrom\s*(?P<from_q>['"])(?P<from_spec>[^'"\r\n]*)(?P=from_q)
    | \bimport\s*\(\s*(?P<dyn_q>['"])(?P<dyn_spec>[^'"\r\n]*)(?P=dyn_q)
    | \bimport\s+(?P<bare_q>['"])(?P<bare_spec>[^'"\r\n]*)(?P=bare_q)
    | \brequire\s*\(\s*(?P<req_q>['"])(?P<req_spec>[^'"\r\n]*)(?P=req_q)
    """,
    re.VERBOSE,
)

#: Prefijos dinámicos: `import(`./${name}`)` no se puede resolver estáticamente.
_DYNAMIC_SPEC_RE: Final = re.compile(r"[${}]")

#: Segmentos de ruta de Next.js que no forman parte de la URL pública.
_ROUTE_GROUP_RE: Final = re.compile(r"^\(.+\)$")
_PARALLEL_SLOT_RE: Final = re.compile(r"^@(.+)$")
_INTERCEPT_PREFIX_RE: Final = re.compile(r"^\(\.{1,3}\)(.*)$")
_CATCH_ALL_SEGMENT_RE: Final = re.compile(r"^\[\[?\.\.\.([^\]]+?)\]\]?$")
_DYNAMIC_SEGMENT_RE: Final = re.compile(r"^\[([^\]]+)\]$")


class CommentState(Enum):
    """Estados del escáner que elimina comentarios sin romper el código."""

    CODE = "code"
    LINE_COMMENT = "line_comment"
    BLOCK_COMMENT = "block_comment"
    STRING = "string"
    TEMPLATE = "template"


@dataclass(frozen=True, slots=True)
class BundleConfig:
    """Parámetros de una ejecución del consolidador.

    Attributes:
        project_root: Raíz del repositorio; delimita qué se puede incluir.
        app_dir: Directorio raíz del App Router.
        output_dir: Destino de los ``.txt`` generados.
        include_shell: Si se incorporan ``layout.tsx`` y archivos hermanos.
        strict: Si los especificadores sin resolver hacen fallar la ejecución.
    """

    project_root: Path
    app_dir: Path
    output_dir: Path
    include_shell: bool = True
    strict: bool = False


@dataclass(frozen=True, slots=True)
class SourceBlock:
    """Un archivo a volcar dentro del consolidado de una página.

    Attributes:
        path: Ruta absoluta del archivo.
        role: Rol dentro de la página, usado en el separador del .txt.
    """

    path: Path
    role: str


@dataclass
class PageBundle:
    """Resultado de consolidar una página y su árbol de dependencias.

    Attributes:
        page_path: Ruta absoluta del ``page.tsx``.
        route: Ruta pública de la página, tal como la ve el usuario.
        file_name: Nombre del ``.txt`` de salida.
        blocks: Archivos a volcar, en orden determinista.
        unresolved: Especificadores locales que no se pudieron resolver.
    """

    page_path: Path
    route: str
    file_name: str
    blocks: list[SourceBlock] = field(default_factory=list)
    unresolved: set[str] = field(default_factory=set)

    @property
    def code_file_count(self) -> int:
        """Cantidad de archivos de código (excluye los volcados JSON)."""
        return sum(1 for block in self.blocks if block.role != ROLE_DATA)


# --------------------------------------------------------------------------------------
# Utilidades de bajo nivel
# --------------------------------------------------------------------------------------


def force_utf8_streams() -> None:
    """Fuerza UTF-8 en stdout/stderr para no romper en consolas Windows (cp1252)."""
    for stream in (sys.stdout, sys.stderr):
        reconfigure = getattr(stream, "reconfigure", None)
        if reconfigure is None:
            continue
        try:
            reconfigure(encoding="utf-8", errors="replace")
        except (OSError, ValueError):  # pragma: no cover - depende del stream
            pass


def read_text(path: Path) -> str:
    """Lee un archivo de texto tolerando BOM y bytes no decodificables.

    Args:
        path: Archivo a leer.

    Returns:
        El contenido del archivo, o una cadena vacía si no se pudo leer.
    """
    try:
        return path.read_text(encoding="utf-8-sig")
    except (OSError, UnicodeDecodeError):
        try:
            return path.read_text(encoding="utf-8-sig", errors="replace")
        except OSError:
            return ""


def strip_json_comments(raw: str) -> str:
    """Convierte JSONC (tsconfig.json) en JSON válido.

    Args:
        raw: Contenido original del ``tsconfig.json``.

    Returns:
        El mismo contenido sin comentarios de línea ni de bloque.
    """
    without_block = re.sub(r"/\*.*?\*/", "", raw, flags=re.DOTALL)
    return re.sub(r"(?m)^\s*//.*$|(?<![:\"'])//[^\n\"']*$", "", without_block)


def to_posix(path: Path) -> str:
    """Normaliza una ruta a separadores ``/`` para mostrar en el .txt."""
    return path.as_posix()


def relative_to_root(path: Path, project_root: Path) -> str:
    """Devuelve la ruta relativa a la raíz del proyecto, con separadores ``/``."""
    try:
        return path.relative_to(project_root).as_posix()
    except ValueError:  # pragma: no cover - defensivo
        return to_posix(path)


# --------------------------------------------------------------------------------------
# Escáner de comentarios y especificadores
# --------------------------------------------------------------------------------------


def strip_comments(source: str) -> str:
    """Sustituye comentarios por espacios preservando longitud y saltos de línea.

    Las cadenas simples, dobles y los plantillas literales se conservan intactas
    para no alterar los especificadores que contienen.

    Args:
        source: Código fuente TypeScript o JavaScript.

    Returns:
        El código con los comentarios enmascarados por espacios.
    """
    out: list[str] = []
    index = 0
    length = len(source)
    state = CommentState.CODE
    quote = ""

    while index < length:
        char = source[index]
        following = source[index + 1] if index + 1 < length else ""

        if state is CommentState.CODE:
            if char == "/" and following == "/":
                state = CommentState.LINE_COMMENT
                out.append("  ")
                index += 2
            elif char == "/" and following == "*":
                state = CommentState.BLOCK_COMMENT
                out.append("  ")
                index += 2
            elif char in {"'", '"'}:
                state = CommentState.STRING
                quote = char
                out.append(char)
                index += 1
            elif char == "`":
                state = CommentState.TEMPLATE
                out.append(char)
                index += 1
            else:
                out.append(char)
                index += 1
            continue

        if state is CommentState.LINE_COMMENT:
            if char == "\n":
                state = CommentState.CODE
                out.append(char)
            else:
                out.append(" ")
            index += 1
            continue

        if state is CommentState.BLOCK_COMMENT:
            if char == "*" and following == "/":
                state = CommentState.CODE
                out.append("  ")
                index += 2
            else:
                out.append("\n" if char == "\n" else " ")
                index += 1
            continue

        # STRING y TEMPLATE se copian literales, respetando escapes.
        if char == "\\":
            out.append(source[index : index + 2])
            index += 2
            continue
        if (state is CommentState.STRING and char == quote) or (
            state is CommentState.TEMPLATE and char == "`"
        ):
            state = CommentState.CODE
            out.append(char)
            index += 1
            continue
        out.append(char)
        index += 1

    return "".join(out)


def extract_module_specifiers(source: str) -> list[str]:
    """Extrae todos los especificadores de módulo declarables de forma estática.

    Cubre imports estáticos (incluidos bloques multilínea), re-exports,
    ``import()`` dinámico con argumento literal, side-effect imports y ``require``.

    Args:
        source: Código fuente del archivo.

    Returns:
        Especificadores en orden de aparición, sin duplicados y preservando el orden.
    """
    masked = strip_comments(source)
    found: list[str] = []
    seen: set[str] = set()

    for match in _MODULE_SPECIFIER_RE.finditer(masked):
        groups = match.groupdict()
        specifier = next(
            (groups[key] for key in groups if key.endswith("_spec") and groups[key]),
            None,
        )
        if not specifier or specifier in seen:
            continue
        if _DYNAMIC_SPEC_RE.search(specifier):
            continue
        seen.add(specifier)
        found.append(specifier)

    return found


# --------------------------------------------------------------------------------------
# Aliases de tsconfig.json
# --------------------------------------------------------------------------------------


def load_path_aliases(tsconfig_path: Path) -> dict[str, str]:
    """Lee los aliases de ``compilerOptions.paths`` del ``tsconfig.json``.

    Args:
        tsconfig_path: Ruta al ``tsconfig.json``.

    Returns:
        Mapa ``prefijo -> ruta base`` con forma ``"@/" -> "<abs>/src"``. Si el
        archivo no existe o no declara ``paths``, se devuelven los aliases por
        defecto normalizados contra el directorio del ``tsconfig``.
    """
    base_dir = tsconfig_path.parent.resolve()

    if not tsconfig_path.is_file():
        return _normalize_aliases(DEFAULT_ALIASES, base_dir)

    try:
        raw = read_text(tsconfig_path)
        data = json.loads(strip_json_comments(raw))
    except (json.JSONDecodeError, OSError):
        return _normalize_aliases(DEFAULT_ALIASES, base_dir)

    paths = data.get("compilerOptions", {}).get("paths")
    if not isinstance(paths, dict):
        return _normalize_aliases(DEFAULT_ALIASES, base_dir)

    collected: dict[str, str] = {}
    for pattern, targets in paths.items():
        if not isinstance(pattern, str) or not isinstance(targets, list) or not targets:
            continue
        target = targets[0]
        if not isinstance(target, str):
            continue
        collected[pattern] = target

    return _normalize_aliases(collected, base_dir)


def _normalize_aliases(patterns: Mapping[str, str], base_dir: Path) -> dict[str, str]:
    """Convierte patrones ``"@/*" -> "./src/*"`` en prefijos y rutas absolutas.

    Los patrones sin comodín final se descartan: no se pueden resolver de forma
    segura sin conocer la lista completa de destinos que declara el proyecto.

    Args:
        patterns: Mapa ``patrón -> destino`` en sintaxis de ``tsconfig.json``.
        base_dir: Directorio del ``tsconfig.json``, contra el que se resuelven
            los destinos relativos.

    Returns:
        Mapa ``prefijo -> ruta absoluta sin barra final``.
    """
    aliases: dict[str, str] = {}
    for pattern, target in patterns.items():
        if not pattern.endswith("/*") or not target.endswith("/*"):
            continue
        base = target[:-2]
        resolved = (base_dir / base).resolve() if base else base_dir
        aliases[pattern[:-1]] = str(resolved)
    return aliases or _normalize_aliases(DEFAULT_ALIASES, base_dir)


# --------------------------------------------------------------------------------------
# Grafo de dependencias
# --------------------------------------------------------------------------------------


class DependencyGraph:
    """Resuelve y recorre el grafo de imports locales de un proyecto Next.js.

    Actúa como la única fuente de verdad de resolución de rutas: aplica los aliases
    de ``tsconfig.json``, soporta extensiones implícitas y carpetas con barril, y
    cachea lecturas yStatement para que el recorrido repetido por 20+ páginas sea barato.

    Args:
        project_root: Raíz del repositorio. Ningún archivo fuera de ella se incluye.
        aliases: Mapa ``prefijo -> ruta base`` proveniente de ``tsconfig.json``.
    """

    def __init__(self, project_root: Path, aliases: Mapping[str, str]) -> None:
        self.project_root = project_root.resolve()
        self.aliases = dict(aliases)
        self._source_cache: dict[Path, str] = {}
        self._children_cache: dict[Path, tuple[tuple[Path, str], ...]] = {}
        self.unresolved: set[str] = set()

    # -- E/S ----------------------------------------------------------------------------

    def source_of(self, path: Path) -> str:
        """Devuelve el código fuente de un archivo, con cacheo por ruta."""
        if path not in self._source_cache:
            self._source_cache[path] = read_text(path)
        return self._source_cache[path]

    # -- Resolución ---------------------------------------------------------------------

    def _is_inside_root(self, candidate: Path) -> bool:
        """Indica si la ruta existe, está bajo la raíz y no toca directorios vetados."""
        try:
            resolved = candidate.resolve()
            resolved.relative_to(self.project_root)
        except (OSError, ValueError):
            return False
        return not (set(resolved.parts) & EXCLUDED_DIR_NAMES)

    def _resolve_to_file(self, target: Path) -> Path | None:
        """Aplica la escalera de resolución: extensión explícita, implícita o barril."""
        if target.is_file() and self._is_inside_root(target):
            return target
        for extension in CODE_EXTENSIONS:
            candidate = target.with_name(target.name + extension)
            if candidate.is_file() and self._is_inside_root(candidate):
                return candidate
        if target.is_dir() and self._is_inside_root(target):
            for extension in CODE_EXTENSIONS:
                candidate = target / f"index{extension}"
                if candidate.is_file() and self._is_inside_root(candidate):
                    return candidate
        return None

    def _apply_alias(self, specifier: str) -> Path | None:
        """Traduce un especificador con alias a su ruta base, o None si no aplica.

        Los valores relativos del mapa de aliases se anclan a la raíz del
        proyecto, de modo que el grafo funciona tanto con aliases absolutos
        (los que produce ``load_path_aliases``) como relativos.
        """
        for prefix, base in sorted(self.aliases.items(), key=lambda item: -len(item[0])):
            if specifier.startswith(prefix):
                remainder = specifier[len(prefix) :]
                anchor = Path(base)
                if not anchor.is_absolute():
                    anchor = self.project_root / anchor
                return anchor / PurePosixPath(remainder)
        return None

    def resolve(self, specifier: str, current_file: Path) -> Path | None:
        """Resuelve un especificador a un archivo local de código o de datos.

        Los recursos estáticos (``.css``, ``.svg``, imágenes…) se resuelven pero se
        descartan: no aportan contexto de lógica y añadirían kilobytes de ruido
        al consolidado. Solo se devuelven archivos con extensión de código o de datos.

        Args:
            specifier: Specifier tal como aparece en el código.
            current_file: Archivo que emite el import, para resolver rutas relativas.

        Returns:
            La ruta absoluta del archivo, o ``None`` si es externa, es un asset
            estático, es dynamic o no existe en disco.
        """
        if not specifier:
            return None

        target = self._apply_alias(specifier)
        if target is None:
            if specifier.startswith("."):
                target = current_file.parent / PurePosixPath(specifier)
            else:
                return None

        resolved = self._resolve_to_file(target)
        if resolved is not None:
            if resolved.suffix.lower() in CODE_EXTENSIONS or resolved.suffix.lower() in DATA_EXTENSIONS:
                return resolved
            return None

        suffix = PurePosixPath(specifier).suffix.lower()
        if suffix in ASSET_EXTENSIONS or suffix in DATA_EXTENSIONS:
            return None

        self.unresolved.add(specifier)
        return None

    # -- Recorrido ----------------------------------------------------------------------

    def local_children(self, path: Path) -> tuple[tuple[Path, str], ...]:
        """Devuelve las dependencias locales directas de un archivo, con su rol.

        Los assets estáticos y los volcados JSON no se recorren: se incluyen en el
        consolidado pero no arrastran su propio árbol de dependencias.

        Args:
            path: Archivo a inspeccionar.

        Returns:
            Tupla de ``(ruta, rol)`` deduplicada y en orden de aparición.
        """
        cached = self._children_cache.get(path)
        if cached is not None:
            return cached

        children: list[tuple[Path, str]] = []
        seen: set[Path] = set()
        for specifier in extract_module_specifiers(self.source_of(path)):
            resolved = self.resolve(specifier, path)
            if resolved is None or resolved in seen:
                continue
            seen.add(resolved)
            role = ROLE_DATA if resolved.suffix.lower() in DATA_EXTENSIONS else ROLE_DEPENDENCY
            children.append((resolved, role))

        result = tuple(children)
        self._children_cache[path] = result
        return result

    def walk(self, roots: Sequence[tuple[Path, str]]) -> list[SourceBlock]:
        """Recorre el grafo en profundidad, en pre-orden y sin ciclos.

        Se usa un stack explícito en lugar de recursión para que una cadena de
        imports muy profunda no agote el límite de recursión de Python.

        Args:
            roots: Raíces del recorrido en orden de prioridad.

        Returns:
        Bloques consolidados, deduplicados. Un archivo alcanzado por primera
        vez conserva el rol con el que entró.
        """
        blocks: list[SourceBlock] = []
        visited: set[Path] = set()
        # `pop()` saca del final, así que las raíces se invierten para que la
        # primera (el shell del App Router) sea la primera visitada.
        stack: list[tuple[Path, str]] = list(reversed(roots))

        while stack:
            current, role = stack.pop()
            if current in visited:
                continue
            visited.add(current)
            blocks.append(SourceBlock(path=current, role=role))
            for child, child_role in reversed(self.local_children(current)):
                if child not in visited:
                    stack.append((child, child_role))

        return blocks


# --------------------------------------------------------------------------------------
# Descubrimiento de páginas y naming
# --------------------------------------------------------------------------------------


def find_pages(app_dir: Path) -> list[Path]:
    """Localiza todos los ``page.tsx`` del App Router en orden determinista."""
    return sorted(path for path in app_dir.rglob("page.tsx") if path.is_file())


def route_segments(page_path: Path, app_dir: Path) -> list[str]:
    """Convierte la ruta física de una página en segmentos de URL pública.

    Elimina route groups ``(marketing)`` y slots paralelos ``@modal``, y traduce
    segmentos dinámicos ``[slug]`` / ``[...slug]`` a ``slug``.

    Args:
        page_path: Ruta del ``page.tsx``.
        app_dir: Raíz del App Router.

    Returns:
        Segmentos ya normalizados; lista vacía para la home.
    """
    try:
        relative = page_path.parent.relative_to(app_dir)
    except ValueError:  # pragma: no cover - defensivo
        relative = Path()

    segments: list[str] = []
    for raw in relative.parts:
        if _ROUTE_GROUP_RE.match(raw):
            continue
        parallel = _PARALLEL_SLOT_RE.match(raw)
        if parallel:
            segments.append(parallel.group(1))
            continue
        intercept = _INTERCEPT_PREFIX_RE.match(raw)
        if intercept:
            raw = intercept.group(1) or raw
        catch_all = _CATCH_ALL_SEGMENT_RE.match(raw)
        if catch_all:
            segments.append(catch_all.group(1))
            continue
        dynamic = _DYNAMIC_SEGMENT_RE.match(raw)
        if dynamic:
            segments.append(dynamic.group(1))
            continue
        segments.append(raw)

    return segments


def sanitize_file_stem(segments: Sequence[str]) -> str:
    """Aplana segmentos a un nombre de archivo válido en Windows y POSIX."""
    parts = [_ILLEGAL_NAME_CHARS_RE.sub("-", segment) for segment in segments]
    stem = _REPEATED_DASH_RE.sub("-", "-".join(part for part in parts if part)).strip("-. ")
    return stem or "home"


def assign_unique_file_names(pages: Sequence[Path], app_dir: Path) -> dict[Path, str]:
    """Asigna un ``.txt`` único por página, resolviendo colisiones de aplanado.

    Dos rutas distintas pueden aplanar al mismo nombre cuando hay route groups
    (``(a)/contacto`` y ``(b)/contacto``). En vez de sobrescribir contexto por
    accidente, se anteponen directorios físicos de a uno en uno hasta que el
    nombre queda único, lo que mantiene los nombres legibles en el caso común
    (sin colisión) y determinista en el raro.

    Args:
        pages: Páginas a nombrar.
        app_dir: Raíz del App Router.

    Returns:
        Mapa ``página -> nombre de archivo`` con valores únicos.
    """
    stems: dict[Path, str] = {}
    by_stem: dict[str, list[Path]] = {}
    for page in pages:
        stem = sanitize_file_stem(route_segments(page, app_dir))
        stems[page] = stem
        by_stem.setdefault(stem, []).append(page)

    names: dict[Path, str] = {}
    taken: set[str] = set()

    for stem, group in by_stem.items():
        if len(group) == 1:
            names[group[0]] = f"{stem}.txt"
            taken.add(names[group[0]])
            continue

        for page in group:
            try:
                physical = page.parent.relative_to(app_dir).parts
            except ValueError:  # pragma: no cover - defensivo
                physical = page.parent.parts
            for depth in range(1, len(physical) + 1):
                prefix = sanitize_file_stem(physical[:depth])
                candidate = f"{prefix}-{stem}.txt"
                if candidate not in taken:
                    break
            else:  # pragma: no cover - solo con rutas físicamente idénticas
                candidate = f"{stem}-{hash(str(page))}.txt"
            names[page] = candidate
            taken.add(candidate)

    return names


def collect_shell_files(page_path: Path, app_dir: Path) -> list[tuple[Path, str]]:
    """Reúne los ``layout.tsx`` y hermanos que Next.js envuelve alrededor de la página.

    Sin esto, el consolidado omite el header, el footer y los providers: el agente
    recibiría el cuerpo de la página sin el chrome que la rodea.

    Args:
        page_path: Ruta del ``page.tsx``.
        app_dir: Raíz del App Router.

    Returns:
        Lista de ``(ruta, rol)`` desde la raíz del App Router hacia la página.
    """
    shells: list[tuple[Path, str]] = []
    directory = page_path.parent
    while True:
        for name in SHELL_FILE_NAMES:
            candidate = directory / name
            if candidate.is_file():
                shells.append((candidate, ROLE_SHELL))
                break
        if directory == app_dir or directory.parent == directory:
            break
        directory = directory.parent
    shells.reverse()
    return shells


# --------------------------------------------------------------------------------------
# Renderizado del consolidado
# --------------------------------------------------------------------------------------


def render_bundle(bundle: PageBundle, project_root: Path, app_dir: Path) -> str:
    """Construye el contenido completo del ``.txt`` de una página.

    Args:
        bundle: Página ya consolidada.
        project_root: Raíz del repositorio, para rutas relativas legibles.
        app_dir: Raíz del App Router, para deduplicar el prefijo en la cabecera.

    Returns:
        El texto listo para escribir en disco.
    """
    rule = "=" * SEPARATOR_WIDTH
    page_relative = to_posix(page_path_relative(bundle.page_path, project_root))
    app_prefix = to_posix(app_dir.relative_to(project_root)) if app_dir in bundle.page_path.parents else ""

    lines: list[str] = [
        rule,
        f"CONTEXTO CONSOLIDADO DE LA RUTA: /{bundle.route}",
        rule,
        "Generado por    : scripts/bundle_pages_context.py",
        f"Directorio app : {app_prefix or 'src/app'}",
        f"Página         : {page_relative}",
        f"Archivos       : {len(bundle.blocks)} ({bundle.code_file_count} de código, "
        f"{len(bundle.blocks) - bundle.code_file_count} de datos)",
        f"Sin resolver   : {len(bundle.unresolved)}",
        "",
    ]
    if bundle.unresolved:
        lines.append("Especificadores locales que no se pudieron resolver (revisar a mano):")
        lines.extend(f"  - {specifier}" for specifier in sorted(bundle.unresolved))
        lines.append("")

    for block in bundle.blocks:
        relative = to_posix(block.path.relative_to(project_root))
        lines.extend([rule, f"{block.role}: {relative}", rule, ""])
        lines.append(read_text(block.path).rstrip())
        lines.extend(["", ""])

    return "\n".join(lines).rstrip() + "\n"


def page_path_relative(page_path: Path, project_root: Path) -> Path:
    """Devuelve la ruta de la página relativa a la raíz del proyecto."""
    try:
        return page_path.relative_to(project_root)
    except ValueError:  # pragma: no cover - defensivo
        return page_path


# --------------------------------------------------------------------------------------
# Orquestación
# --------------------------------------------------------------------------------------


def build_bundle(
    page_path: Path, config: BundleConfig, graph: DependencyGraph, file_name: str
) -> PageBundle:
    """Consolida una página: shell del App Router más su árbol de dependencias."""
    roots: list[tuple[Path, str]] = []
    if config.include_shell:
        roots.extend(collect_shell_files(page_path, config.app_dir))
    roots.append((page_path, ROLE_PAGE))

    before = set(graph.unresolved)
    bundle = PageBundle(
        page_path=page_path,
        route="/".join(route_segments(page_path, config.app_dir)),
        file_name=file_name,
    )
    bundle.blocks = graph.walk(roots)
    bundle.unresolved = set(graph.unresolved) - before
    return bundle


def write_bundle(bundle: PageBundle, config: BundleConfig) -> None:
    """Escribe el consolidado de una página en el directorio de salida.

    Args:
        bundle: Página a volcar.
        config: Configuración de la ejecución.

    Raises:
        OSError: Si el archivo no se puede escribir.
    """
    config.output_dir.mkdir(parents=True, exist_ok=True)
    destination = config.output_dir / bundle.file_name
    destination.write_text(
        render_bundle(bundle, config.project_root, config.app_dir),
        encoding="utf-8",
    )


def remove_stale_outputs(output_dir: Path, keep: set[str]) -> list[str]:
    """Borra los ``.txt`` que ya no corresponden a ninguna ruta existente."""
    if not output_dir.is_dir():
        return []
    removed: list[str] = []
    for candidate in sorted(output_dir.glob("*.txt")):
        if candidate.name not in keep:
            candidate.unlink()
            removed.append(candidate.name)
    return removed


def run(config: BundleConfig, page_filter: Sequence[str], dry_run: bool, clean: bool) -> int:
    """Ejecuta la consolidación de todas las páginas del App Router.

    Args:
        config: Configuración de la ejecución.
        page_filter: Si no está vacío, solo se procesan estas rutas.
        dry_run: Muestra el plan sin escribir nada.
        clean: Elimina los ``.txt`` huérfanos del directorio de salida.

    Returns:
        El código de salida del proceso.
    """
    print("Iniciando consolidacion de contexto por pagina.")

    if not config.app_dir.is_dir():
        print(f"ERROR: no existe el directorio del App Router: {config.app_dir}", file=sys.stderr)
        return EXIT_CONFIG_ERROR

    pages = find_pages(config.app_dir)
    if page_filter:
        wanted = {Path(item).resolve() for item in page_filter}
        pages = [page for page in pages if page.resolve() in wanted]
        missing = wanted - {page.resolve() for page in pages}
        for item in sorted(missing):
            print(f"ERROR: la pagina indicada no existe: {item}", file=sys.stderr)
        if missing:
            return EXIT_CONFIG_ERROR

    if not pages:
        print(f"ERROR: no se detecto ningun page.tsx bajo {config.app_dir}", file=sys.stderr)
        return EXIT_CONFIG_ERROR

    aliases = load_path_aliases(config.project_root / "tsconfig.json")
    graph = DependencyGraph(config.project_root, aliases)
    file_names = assign_unique_file_names(pages, config.app_dir)

    mode = "layout + template + loading/error incluidos" if config.include_shell else "solo la pagina"
    print(f"Alias detectados: {', '.join(sorted(aliases)) or 'ninguno'}")
    print(f"Paginas detectadas: {len(pages)}  |  Modo: {mode}")
    print(f"Salida: {relative_to_root(config.output_dir, config.project_root)}")
    if dry_run:
        print("Dry-run: no se escribira nada.\n")
    print()

    if not dry_run:
        config.output_dir.mkdir(parents=True, exist_ok=True)

    failures: list[str] = []
    total_unresolved = 0

    for page in pages:
        bundle = build_bundle(page, config, graph, file_names[page])
        total_unresolved += len(bundle.unresolved)
        label = f"/{bundle.route}" if bundle.route else "/"
        warning = f"  [{len(bundle.unresolved)} sin resolver]" if bundle.unresolved else ""

        if dry_run:
            print(f"  [plan] {label:<44} -> {bundle.file_name:<40} {len(bundle.blocks)} archivos{warning}")
            continue

        try:
            write_bundle(bundle, config)
        except OSError as error:
            print(f"  [FALLO] {label}: {error}", file=sys.stderr)
            failures.append(bundle.file_name)
            continue

        size_kb = (config.output_dir / bundle.file_name).stat().st_size / 1024
        count = len(bundle.blocks)
        print(f"  [OK]    {label:<44} -> {bundle.file_name:<40} {count} archivos, {size_kb:6.1f} KB{warning}")

    if not dry_run and clean:
        for name in remove_stale_outputs(config.output_dir, set(file_names.values())):
            print(f"  [limpio] eliminado {name} (ruta inexistente)")

    written = len(pages) - len(failures)
    print()
    print(f"Resumen: {written}/{len(pages)} paginas consolidadas, {total_unresolved} especificadores sin resolver.")

    if failures:
        print(f"ERROR: {len(failures)} paginas no se pudieron escribir.", file=sys.stderr)
        return EXIT_WRITE_ERROR
    if total_unresolved and config.strict:
        print("ERROR: --strict y hay especificadores sin resolver.", file=sys.stderr)
        return EXIT_STRICT_ERROR

    print("Listo. Los archivos estan en docs/paginas_en_txt/.")
    return EXIT_OK


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    """Construye y ejecuta el parser de argumentos de la CLI."""
    parser = argparse.ArgumentParser(
        prog="bundle_pages_context.py",
        description="Consolida el contexto de codigo de cada ruta del sitio en un .txt por pagina.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
        help="Raiz del repositorio (default: directorio actual).",
    )
    parser.add_argument(
        "--app-dir",
        type=Path,
        default=None,
        help="Directorio del App Router (default: <root>/src/app).",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=None,
        help="Directorio de salida (default: <root>/docs/paginas_en_txt).",
    )
    parser.add_argument(
        "--page",
        action="append",
        default=[],
        metavar="PATH",
        help="Consolida solo esta pagina. Repetible.",
    )
    parser.add_argument(
        "--no-layout",
        action="store_true",
        help="No incorporar layout.tsx, template.tsx ni loading/error.",
    )
    parser.add_argument(
        "--clean",
        action="store_true",
        help="Borra los .txt que ya no corresponden a ninguna ruta.",
    )
    parser.add_argument("--dry-run", action="store_true", help="Muestra el plan sin escribir archivos.")
    parser.add_argument("--strict", action="store_true", help="Sale con codigo 3 si hay imports sin resolver.")
    return parser.parse_args(argv)


def resolve_config(args: argparse.Namespace) -> BundleConfig:
    """Normaliza las rutas de los argumentos a absolutas contra la raíz del proyecto."""
    root = args.project_root.resolve()
    app_dir = args.app_dir or root / "src" / "app"
    output_dir = args.output_dir or root / "docs" / "paginas_en_txt"
    return BundleConfig(
        project_root=root,
        app_dir=app_dir if app_dir.is_absolute() else (root / app_dir),
        output_dir=output_dir if output_dir.is_absolute() else (root / output_dir),
        include_shell=not args.no_layout,
        strict=args.strict,
    )


def main(argv: Sequence[str] | None = None) -> int:
    """Punto de entrada de la CLI.

    Args:
        argv: Argumentos de la línea de comandos; ``None`` usa ``sys.argv[1:]``.

    Returns:
        El código de salida del proceso.
    """
    force_utf8_streams()
    args = parse_args(argv)
    config = resolve_config(args)
    return run(config, page_filter=args.page, dry_run=args.dry_run, clean=args.clean)


if __name__ == "__main__":
    raise SystemExit(main())

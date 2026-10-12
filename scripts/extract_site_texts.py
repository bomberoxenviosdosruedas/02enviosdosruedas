#!/usr/bin/env python3
"""Extrae y consolida en Markdown todos los textos visibles del sitio web.

Analiza estáticamente las páginas del App Router (src/app/**/page.tsx) y sus
componentes locales importados, extrayendo encabezados, descripciones, listas,
beneficios, preguntas frecuentes y llamadas a la acción (CTAs) sin ruido de código
ni metadatos técnicos.

Uso:
    python scripts/extract_site_texts.py
    python scripts/extract_site_texts.py --output exports/sitio-completo-textos.md
    python scripts/extract_site_texts.py --include-admin
"""

import argparse
import html
import os
import re
import sys
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Sequence

# Agregar scripts/ al path para importar funciones del resolutor de dependencias
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
sys.path.insert(0, str(SCRIPT_DIR))

try:
    from bundle_pages_context import (
        DependencyGraph,
        find_pages,
        load_path_aliases,
        route_segments,
        strip_comments,
    )
except ImportError as err:
    print(f"Error al importar bundle_pages_context: {err}", file=sys.stderr)
    sys.exit(1)


# Componentes genéricos de UI o utilitarios técnicos que no contienen copy de dominio
IGNORED_COMPONENTS = frozenset(
    {
        "HeroProceduralBackground.tsx",
        "DoubleBezelCard.tsx",
        "RadioCardGroup.tsx",
        "InputField.tsx",
        "Knockout.tsx",
        "LogisticaNetworkCanvas.tsx",
        "utils.ts",
        "analytics.ts",
        "leaflet.ts",
        "types.ts",
        "constants.ts",
    }
)


def load_project_constants(root: Path) -> dict[str, str]:
    """Carga constantes de negocio (promises, pricing, whatsapp) para interpolar en textos."""
    constants: dict[str, str] = {
        "BASE_ADDRESS": "Friuli 1972 · Mar del Plata",
        "WHATSAPP_PHONE": "542236602699",
        "SUPPORT_PHONE": "223-660-2699",
    }

    constant_files = [
        root / "src" / "lib" / "promises.ts",
        root / "src" / "lib" / "pricing.ts",
        root / "src" / "lib" / "whatsapp.ts",
    ]

    for file_path in constant_files:
        if not file_path.is_file():
            continue
        try:
            content = file_path.read_text(encoding="utf-8")
            clean_code = strip_comments(content)
            pattern = re.compile(
                r"export\s+const\s+([A-Z0-9_]+)\s*=\s*(?:['\"`](.*?)['\"`]|([0-9]+(?:\.[0-9]+)?))",
                re.MULTILINE,
            )
            for m in pattern.finditer(clean_code):
                name = m.group(1)
                val = m.group(2) if m.group(2) is not None else m.group(3)
                if val:
                    constants[name] = val
        except Exception:
            continue

    return constants


def interpolate_constants(text: str, constants: dict[str, str]) -> str:
    """Reemplaza ${CONST_NAME} y expresiones similares con su valor real."""
    for name, val in constants.items():
        text = text.replace(f"${{{name}}}", str(val))
    text = re.sub(r"\$\{[^}]+\}", "", text)
    return text


def clean_jsx_text(raw: str, constants: dict[str, str]) -> str:
    """Limpia etiquetas JSX, clases de Tailwind, expresiones y normaliza espacios."""
    if not raw:
        return ""

    # Reemplazar componentes con semántica
    raw = re.sub(r"<Knockout[^>]*>(.*?)</Knockout>", r"**\1**", raw, flags=re.DOTALL)
    raw = re.sub(r"<strong[^>]*>(.*?)</strong[^>]*>", r"**\1**", raw, flags=re.DOTALL)
    raw = re.sub(r"<em[^>]*>(.*?)</em[^>]*>", r"*\1*", raw, flags=re.DOTALL)

    # Eliminar bloques de iconos y SVG
    raw = re.sub(r"<svg\b.*?</svg>", "", raw, flags=re.DOTALL)
    raw = re.sub(r"<[A-Z][a-zA-Z0-9]*(?:Icon|Arrow|Check|Zap|Chevron|MapPin|Clock|Building|Package|Users)[^>]*/>", "", raw)

    # Eliminar expresiones JSX de código y comentarios
    raw = re.sub(r"\{/\*.*?\*/\}", "", raw, flags=re.DOTALL)
    raw = re.sub(r"\{\s*['\"`](.*?)['\"`]\s*\}", r"\1", raw)
    raw = re.sub(r"\{[a-zA-Z0-9_.]+\s*\?[^:]+:[^}]+\}", "", raw)
    raw = re.sub(r"\{[a-zA-Z0-9_.()]+\}", "", raw)
    raw = re.sub(r"\{[^\}]*\}", "", raw)  # Cualquier otra expresión en llaves

    # Eliminar cualquier etiqueta HTML/JSX restante
    raw = re.sub(r"<[^>]+>", " ", raw)

    # Decodificar entidades HTML (&quot;, &amp;, etc.)
    raw = html.unescape(raw)

    # Interpolar constantes
    raw = interpolate_constants(raw, constants)

    # Normalizar espacios y saltos de línea
    lines = [line.strip() for line in raw.splitlines() if line.strip()]
    cleaned = " ".join(lines)
    cleaned = re.sub(r"\s{2,}", " ", cleaned).strip()

    # Descartar cadenas que parezcan puro código o clases
    if any(k in cleaned for k in ("className=", "aria-", "key=", "onClick=", "type=", "disabled=")):
        return ""
    if cleaned.startswith("}") or cleaned.startswith("{") or cleaned.endswith(">"):
        return ""
    if re.match(r"^[0-9a-fA-F#(),.\-_\s%]+$", cleaned) and len(cleaned) < 8:
        return ""

    return cleaned


@dataclass
class PageTextSection:
    route: str
    display_name: str
    blocks: list[str] = field(default_factory=list)


class StaticSiteTextExtractor:
    def __init__(self, project_root: Path, include_admin: bool = False):
        self.root = project_root
        self.app_dir = project_root / "src" / "app"
        self.include_admin = include_admin
        self.constants = load_project_constants(project_root)
        # Importante: pasar la ruta exacta a tsconfig.json para resolver aliases correctamente
        self.aliases = load_path_aliases(project_root / "tsconfig.json")
        self.graph = DependencyGraph(project_root=project_root, aliases=self.aliases)

    def extract_structured_data(self, code: str) -> list[str]:
        """Extrae objetos de datos (FAQs, listas de beneficios, características, pasos)."""
        extracted = []
        seen_texts = set()

        # Omitir bloques de metadatos SEO
        code_without_meta = re.sub(
            r"(?:export\s+const\s+metadata|const\s+openGraph|const\s+jsonLdSchema)\s*(?::\s*Metadata)?\s*=\s*\{.*?\};",
            "",
            code,
            flags=re.DOTALL,
        )

        # 1. FAQs: { question: '...', answer: '...' }
        faq_pattern = re.compile(
            r"(?:question|pregunta)\s*:\s*(['\"`])(.*?)\1\s*,\s*(?:answer|respuesta)\s*:\s*(['\"`])(.*?)\3",
            re.DOTALL,
        )
        for m in faq_pattern.finditer(code_without_meta):
            q = clean_jsx_text(m.group(2), self.constants)
            a = clean_jsx_text(m.group(4), self.constants)
            if q and a and q not in seen_texts:
                seen_texts.add(q)
                extracted.append(f"#### ¿{q.lstrip('¿')}\n\n{a}")

        # 2. Objetos con título y descripción
        card_pattern = re.compile(
            r"(?:title|titulo)\s*:\s*(['\"`])(.*?)\1\s*,.*?(?:desc|description|descripcion|content|contenido|bajada|detalle)\s*:\s*(['\"`])(.*?)\3",
            re.DOTALL,
        )
        for m in card_pattern.finditer(code_without_meta):
            title = clean_jsx_text(m.group(2), self.constants)
            desc = clean_jsx_text(m.group(4), self.constants)
            if title and desc and title not in seen_texts:
                seen_texts.add(title)
                extracted.append(f"### {title}\n\n{desc}")

        # 3. Listas de viñetas en constantes
        bullets_pattern = re.compile(r"(?:bullets|puntos|items)\s*:\s*\[(.*?)\]", re.DOTALL)
        for bm in bullets_pattern.finditer(code_without_meta):
            raw_items = bm.group(1)
            item_matches = re.findall(r"['\"`]([^'\"`]{4,})['\"`]", raw_items)
            bullets = [clean_jsx_text(it, self.constants) for it in item_matches]
            bullets = [b for b in bullets if b and b not in seen_texts]
            if bullets:
                bullet_str = "\n".join(f"- {b}" for b in bullets)
                extracted.append(bullet_str)
                seen_texts.update(bullets)

        # 4. Listas de diferenciales del ticker
        diferenciales_pattern = re.compile(r"const\s+diferenciales\s*=\s*\[(.*?)\]", re.DOTALL)
        for dm in diferenciales_pattern.finditer(code_without_meta):
            raw_items = dm.group(1)
            item_matches = re.findall(r"['\"`]([^'\"`]{3,})['\"`]", raw_items)
            dif_items = [clean_jsx_text(it, self.constants) for it in item_matches]
            dif_items = [d for d in dif_items if d and d not in seen_texts]
            if dif_items:
                extracted.append("### Diferenciales clave:\n" + "\n".join(f"- {d}" for d in dif_items))
                seen_texts.update(dif_items)

        return extracted

    def extract_jsx_elements(self, code: str) -> list[str]:
        """Extrae encabezados, párrafos, listas y CTAs de la plantilla JSX de forma lineal y segura."""
        # Limpiar tags autocerrados en atributos (ej. icon={<Zap ... />})
        sanitized = re.sub(r"=\s*\{<[^>]+/>\}", '=""', code)
        sanitized = re.sub(r"<script\b.*?</script>", "", sanitized, flags=re.DOTALL)

        target_tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "Badge", "CTANestedPill", "button"]
        found: list[tuple[int, str, str]] = []  # (start_pos, tag, inner_text)

        for tag in target_tags:
            pattern = re.compile(rf"<{tag}\b[^>]*>(.*?)</{tag}>", re.DOTALL)
            for m in pattern.finditer(sanitized):
                found.append((m.start(), tag, m.group(1)))

        # Ordenar por posición natural en el código
        found.sort(key=lambda x: x[0])

        items = []
        seen = set()

        for _, tag, inner in found:
            cleaned = clean_jsx_text(inner, self.constants)
            if not cleaned or len(cleaned) < 3 or cleaned in seen:
                continue

            if cleaned.startswith("{") and cleaned.endswith("}"):
                continue

            seen.add(cleaned)

            if tag == "h1":
                items.append(f"## {cleaned}")
            elif tag == "h2":
                items.append(f"## {cleaned}")
            elif tag == "h3":
                items.append(f"### {cleaned}")
            elif tag == "h4":
                items.append(f"#### {cleaned}")
            elif tag == "Badge":
                items.append(f"*{cleaned}*")
            elif tag == "li":
                items.append(f"- {cleaned}")
            elif tag in ("CTANestedPill", "button"):
                items.append(f"**[Botón: {cleaned}]**")
            else:  # 'p'
                items.append(cleaned)

        return items

    def process_file(self, file_path: Path) -> list[str]:
        """Extrae todo el texto útil de un archivo TSX/TS."""
        try:
            content = file_path.read_text(encoding="utf-8")
        except Exception:
            return []

        clean_code = strip_comments(content)
        texts: list[str] = []

        # 1. Datos estructurados (constantes, arrays de objetos)
        structured = self.extract_structured_data(clean_code)
        texts.extend(structured)

        # 2. Textos en elementos JSX
        jsx_items = self.extract_jsx_elements(clean_code)
        for item in jsx_items:
            clean_item_str = item.replace("#", "").replace("*", "").replace("-", "").strip()
            if not any(clean_item_str in s for s in structured if len(clean_item_str) > 10):
                texts.append(item)

        return texts

    def extract_page(self, page_path: Path) -> PageTextSection:
        """Procesa una página y todo su árbol de componentes dependientes."""
        segments = route_segments(page_path, self.app_dir)
        route = "/" if not segments else "/" + "/".join(segments)

        if route == "/":
            display_name = "Inicio"
        else:
            display_name = " / ".join(part.replace("-", " ").capitalize() for part in segments)

        # Resolver componentes dependientes
        roots = [(page_path, "PÁGINA RAÍZ")]
        blocks = self.graph.walk(roots)

        page_texts: list[str] = []
        seen_blocks = set()

        for block in blocks:
            file_name = block.path.name
            if file_name in IGNORED_COMPONENTS:
                continue
            if not (block.path.suffix in (".tsx", ".ts")):
                continue

            file_texts = self.process_file(block.path)
            for txt in file_texts:
                norm = txt.strip()
                if norm and norm not in seen_blocks:
                    seen_blocks.add(norm)
                    page_texts.append(norm)

        return PageTextSection(
            route=route,
            display_name=display_name,
            blocks=page_texts,
        )

    def generate_consolidated_markdown(self, output_path: Path) -> str:
        """Recorre todas las páginas y construye el documento Markdown unificado."""
        all_pages = find_pages(self.app_dir)
        filtered_pages = []

        for p in all_pages:
            segments = route_segments(p, self.app_dir)
            if not self.include_admin:
                if any(seg in ("admin", "revisar") for seg in segments):
                    continue
            filtered_pages.append(p)

        sections: list[PageTextSection] = []
        for page_file in filtered_pages:
            sec = self.extract_page(page_file)
            sections.append(sec)

        # Construcción del Markdown
        lines: list[str] = []
        lines.append("# Envíos DosRuedas — Textos y Contenidos de Todas las Páginas")
        lines.append("")
        lines.append(f"> Generado automáticamente el {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        lines.append(f"> Total de páginas consolidadas: {len(sections)}")
        lines.append("")
        lines.append("Este documento recopila todos los textos visibles, títulos, propuestas de valor, descripciones de servicios, preguntas frecuentes (FAQ), pautas legales y botones de acción (CTAs) de cada ruta pública de la aplicación.")
        lines.append("")

        # Tabla de Contenidos
        lines.append("## Tabla de Contenidos")
        lines.append("")
        for sec in sections:
            anchor = sec.route.strip("/").replace("/", "-")
            if not anchor:
                anchor = "inicio"
            anchor_link = f"pagina-{anchor}"
            lines.append(f"- [{sec.display_name} (`{sec.route}`)](#{anchor_link})")
        lines.append("")

        # Contenido por página
        for sec in sections:
            anchor = sec.route.strip("/").replace("/", "-")
            if not anchor:
                anchor = "inicio"
            anchor_tag = f'<a id="pagina-{anchor}"></a>'

            lines.append("---")
            lines.append("")
            lines.append(anchor_tag)
            lines.append(f"# {sec.display_name} (`{sec.route}`)")
            lines.append("")

            if not sec.blocks:
                lines.append("*(Página sin bloques de texto estático directo)*")
                lines.append("")
                continue

            for block in sec.blocks:
                lines.append(block)
                lines.append("")

        markdown_content = "\n".join(lines)

        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(markdown_content, encoding="utf-8")
        return markdown_content


def main():
    parser = argparse.ArgumentParser(
        description="Extrae los textos visibles de todas las páginas de src/app a un archivo Markdown."
    )
    parser.add_argument(
        "--output",
        type=str,
        default="exports/sitio-completo-textos.md",
        help="Ruta del archivo Markdown de salida (por defecto: exports/sitio-completo-textos.md)",
    )
    parser.add_argument(
        "--include-admin",
        action="store_true",
        help="Incluir páginas internas/técnicas (/admin/*, /revisar)",
    )
    args = parser.parse_args()

    output_path = Path(args.output)
    print(f"Extrayendo textos de src/app...")
    print(f"  Salida: {output_path.resolve()}")
    print(f"  Incluir admin: {'Sí' if args.include_admin else 'No (solo páginas públicas)'}")

    extractor = StaticSiteTextExtractor(PROJECT_ROOT, include_admin=args.include_admin)
    extractor.generate_consolidated_markdown(output_path)

    file_size_kb = output_path.stat().st_size / 1024
    print(f"\nDocumento Markdown generado con éxito!")
    print(f"  Archivo: {output_path.resolve()}")
    print(f"  Tamaño:  {file_size_kb:.1f} KB")


if __name__ == "__main__":
    main()

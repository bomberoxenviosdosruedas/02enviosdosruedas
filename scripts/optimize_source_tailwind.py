#!/usr/bin/env python3
"""
scripts/optimize_source_tailwind.py
-----------------------------------
Script profesional para optimizar y limpiar clases de Tailwind CSS en archivos HTML de `source/`.

Características principales:
  1. Convierte clases arbitrarias a sus equivalentes canónicos según Tailwind CSS v4 / v3
     (p. ej.: `focus:z-[100]` -> `focus:z-100`, `aspect-[4/3]` -> `aspect-4/3`, `h-[390px]` -> `h-97.5`,
     `text-[10px]` -> `text-2xs`, `p-[2px]` -> `p-0.5`, `stroke-[3]` -> `stroke-3`, `w-128` -> `w-lg`, etc.).
  2. Convierte gradientes arbitrarios o v3 a la sintaxis canónica v4 (`bg-gradient-to-*` -> `bg-linear-to-*`).
  3. Resuelve conflictos CSS detectados por `tailwindcss-intellisense`:
     - Conflictos de paradas múltiples `via-` (como en el bloque de Instagram).
     - Conflictos de display (`hidden` vs `flex` en alertas dinámicas).
     - Conflictos de sombras múltiples (`shadow-accent-sm` vs `shadow-md`).
     - Clases repetidas en un mismo elemento (`font-bold ... font-bold`, `p-2 ... p-0.5`).
  4. Garantiza compatibilidad en el navegador extendiendo `tailwind.config` y `<style>` cuando sea necesario.

Uso:
  python scripts/optimize_source_tailwind.py --all
  python scripts/optimize_source_tailwind.py source/contacto.html
  python scripts/optimize_source_tailwind.py --dry-run source/cotizar.html
"""

from __future__ import annotations

import argparse
import logging
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger("tailwind_optimizer")

PROJECT_ROOT = (
    Path(__file__).resolve().parent.parent
    if Path(__file__).resolve().parent.name == "scripts"
    else Path(__file__).resolve().parent
)
SOURCE_DIR = PROJECT_ROOT / "source"

# Prefijos estándar de Tailwind que soportan conversión automática de px a unidades relativas
SPACING_PREFIXES = (
    "h", "min-h", "max-h",
    "w", "min-w", "max-w",
    "top", "bottom", "left", "right", "inset", "inset-x", "inset-y",
    "p", "pt", "pb", "pl", "pr", "px", "py",
    "m", "mt", "mb", "ml", "mr", "mx", "my",
    "gap", "gap-x", "gap-y",
)

# Regex para dimensiones arbitrarias en px con variantes opcionales (sm:, md:, lg:, focus:, etc.)
# Usamos lookarounds para evitar el problema de fronteras \b junto a corchetes '[' y ']'
DIMENSION_PX_RE = re.compile(
    r"(?<![\w-])((?:[a-z0-9_-]+:)*)("
    + "|".join(re.escape(p) for p in SPACING_PREFIXES)
    + r")-\[(\d+(?:\.\d+)?)px\](?![\w-])"
)

# Mapeos directos con lookarounds
DIRECT_CANONICAL_RULES: list[tuple[re.Pattern[str], str]] = [
    # Accesibilidad y z-index
    (re.compile(r"(?<![\w-])focus:z-\[100\](?![\w-])"), "focus:z-100"),
    (re.compile(r"(?<![\w-])z-\[100\](?![\w-])"), "z-100"),
    (re.compile(r"(?<![\w-])z-\[50\](?![\w-])"), "z-50"),

    # Stroke SVG
    (re.compile(r"(?<![\w-])stroke-\[(\d+)\](?![\w-])"), r"stroke-\1"),

    # Anchos porcentuales y tamaños contenedores
    (re.compile(r"(?<![\w-])w-\[100%\](?![\w-])"), "w-full"),
    (re.compile(r"(?<![\w-])h-\[100%\](?![\w-])"), "h-full"),
    (re.compile(r"(?<![\w-])min-h-\[100%\](?![\w-])"), "min-h-full"),
    (re.compile(r"(?<![\w-])w-128\b"), "w-lg"),
    (re.compile(r"(?<![\w-])max-w-128\b"), "max-w-lg"),

    # Radios redondeados
    (re.compile(r"(?<![\w-])rounded-\[32px\](?![\w-])"), "rounded-3xl"),
    (re.compile(r"(?<![\w-])rounded-\[24px\](?![\w-])"), "rounded-2xl"),
    (re.compile(r"(?<![\w-])rounded-\[16px\](?![\w-])"), "rounded-xl"),
    (re.compile(r"(?<![\w-])rounded-\[12px\](?![\w-])"), "rounded-lg"),
    (re.compile(r"(?<![\w-])rounded-\[8px\](?![\w-])"), "rounded-md"),
    (re.compile(r"(?<![\w-])rounded-\[4px\](?![\w-])"), "rounded-sm"),

    # Gradientes canónicos v4
    (re.compile(r"\bbg-gradient-to-(t|tr|r|br|b|bl|l|tl)\b"), r"bg-linear-to-\1"),

    # Background-size
    (re.compile(r"\[background-size:(\d+px_\d+px)\]"), r"bg-size-[\1]"),
    (re.compile(r"bg-\[size:(\d+px_\d+px)\]"), r"bg-size-[\1]"),

    # Tamaños de fuente canónicos
    (re.compile(r"(?<![\w-])text-\[10px\](?![\w-])"), "text-2xs"),
    (re.compile(r"(?<![\w-])text-\[12px\](?![\w-])"), "text-xs"),
    (re.compile(r"(?<![\w-])text-\[14px\](?![\w-])"), "text-sm"),
    (re.compile(r"(?<![\w-])text-\[16px\](?![\w-])"), "text-base"),
    (re.compile(r"(?<![\w-])text-\[18px\](?![\w-])"), "text-lg"),
    (re.compile(r"(?<![\w-])text-\[20px\](?![\w-])"), "text-xl"),

    # Rotaciones canónicas (1, 2, 3, 6, 12, 45, 90, 180)
    (re.compile(r"(?<![\w-])((?:[a-z0-9_-]+:)*)rotate-\[(1|2|3|6|12|45|90|180)deg\](?![\w-])"), r"\1rotate-\2"),
    (re.compile(r"(?<![\w-])((?:[a-z0-9_-]+:)*)rotate-\[-(1|2|3|6|12|45|90|180)deg\](?![\w-])"), r"\1-rotate-\2"),
    (re.compile(r"(?<![\w-])((?:[a-z0-9_-]+:)*)-rotate-\[(1|2|3|6|12|45|90|180)deg\](?![\w-])"), r"\1-rotate-\2"),
]

# Aspect ratio regex
ASPECT_RE = re.compile(r"(?<![\w-])aspect-\[(\d+/\d+)\](?![\w-])")


@dataclass
class OptimizationStats:
    file_path: Path
    replacements_made: int = 0
    conflicts_resolved: int = 0
    duplicate_tokens_removed: int = 0
    changes_detail: list[str] = field(default_factory=list)


def px_to_spacing_unit(px_str: str) -> str | None:
    """
    Convierte un valor numérico de píxeles en su unidad canónica de Tailwind.
    1 unidad = 4px (0.25rem). Acepta enteros y medios pasos (.5).
    """
    try:
        px = float(px_str)
    except ValueError:
        return None

    units = px / 4.0
    if units.is_integer():
        return str(int(units))
    if (units * 2).is_integer():
        return f"{units:.1f}"

    return None


def optimize_class_tokens(class_str: str, stats: OptimizationStats) -> str:
    """Optimiza los tokens de clase individuales dentro de un atributo class="..."."""
    tokens = class_str.split()
    seen = set()
    cleaned_tokens: list[str] = []

    # 1. Deduplicar tokens exactos preservando orden
    for t in tokens:
        if t in seen:
            stats.duplicate_tokens_removed += 1
            stats.changes_detail.append(f"Token duplicado eliminado: '{t}'")
            continue
        seen.add(t)
        cleaned_tokens.append(t)

    # 2. Resolver conflicto 'hidden' vs 'flex' en alertas dinámicas
    if "hidden" in cleaned_tokens and "flex" in cleaned_tokens:
        cleaned_tokens = [t for t in cleaned_tokens if t != "flex"]
        if "alert-flex" not in cleaned_tokens:
            cleaned_tokens.insert(0, "alert-flex")
        stats.conflicts_resolved += 1
        stats.changes_detail.append("Conflicto 'hidden flex' resuelto a 'hidden alert-flex'")

    # 3. Resolver conflicto 'p-2' vs 'p-0.5'
    if "p-2" in cleaned_tokens and ("p-0.5" in cleaned_tokens or "p-[2px]" in cleaned_tokens):
        cleaned_tokens = [t for t in cleaned_tokens if t != "p-2"]
        stats.conflicts_resolved += 1
        stats.changes_detail.append("Conflicto de padding 'p-2' vs 'p-0.5' resuelto")

    # 4. Resolver conflicto de sombras múltiples en el mismo elemento
    if "shadow-accent-sm" in cleaned_tokens and "shadow-md" in cleaned_tokens:
        cleaned_tokens = [t for t in cleaned_tokens if t != "shadow-md"]
        stats.conflicts_resolved += 1
        stats.changes_detail.append("Conflicto de sombras 'shadow-accent-sm' vs 'shadow-md' resuelto")

    # 5. Resolver múltiples paradas 'via-' en un mismo elemento
    via_tokens = [t for t in cleaned_tokens if t.startswith("via-") or ":via-" in t]
    if len(via_tokens) > 1:
        if any("via-[#E1306C]" in t for t in via_tokens) and any("via-[#FD1D1D]" in t for t in via_tokens):
            cleaned_tokens = [t for t in cleaned_tokens if "via-[#E1306C]" not in t]
            stats.conflicts_resolved += 1
            stats.changes_detail.append("Conflicto múltiple 'via-' resuelto conservando via-[#FD1D1D]")

    return " ".join(cleaned_tokens)


def optimize_html_content(content: str, stats: OptimizationStats) -> str:
    """Aplica optimizaciones globales a todo el texto del archivo HTML."""

    # 1. Reglas canónicas directas
    for regex, replacement in DIRECT_CANONICAL_RULES:
        matches = len(regex.findall(content))
        if matches > 0:
            content = regex.sub(replacement, content)
            stats.replacements_made += matches
            stats.changes_detail.append(f"Regla canónica aplicada -> '{replacement}' ({matches} ocurrencias)")

    # 2. Aspect ratios
    def replace_aspect(m: re.Match[str]) -> str:
        ratio = m.group(1)
        stats.replacements_made += 1
        if ratio == "16/9":
            return "aspect-video"
        return f"aspect-{ratio}"

    content = ASPECT_RE.sub(replace_aspect, content)

    # 3. Conversión de dimensiones arbitrarias en px (p-[2px], h-[390px], min-h-[440px], etc.)
    def replace_dim_px(m: re.Match[str]) -> str:
        variant = m.group(1) or ""
        prefix = m.group(2)
        px_val = m.group(3)
        unit = px_to_spacing_unit(px_val)
        if unit is not None:
            stats.replacements_made += 1
            return f"{variant}{prefix}-{unit}"
        return m.group(0)

    content = DIMENSION_PX_RE.sub(replace_dim_px, content)

    # 4. Corrección de bloques de gradiente Instagram con doble via-
    ig_pattern_old = re.compile(
        r"from-\[#833AB4\]\s+via-\[#E1306C\]\s+via-\[#FD1D1D\]\s+to-\[#F77737\]"
    )
    if ig_pattern_old.search(content):
        content = ig_pattern_old.sub("from-[#833AB4] via-[#FD1D1D] to-[#F77737]", content)
        stats.conflicts_resolved += 1
        stats.changes_detail.append("Conflicto gradiente Instagram unificado a parada única via-[#FD1D1D]")

    # 5. Parsear y optimizar clases dentro de class="..."
    class_attr_re = re.compile(r'(class\s*=\s*["\'])([^"\']+)(["\'])')

    def replace_class_attr(m: re.Match[str]) -> str:
        prefix = m.group(1)
        classes = m.group(2)
        suffix = m.group(3)
        optimized = optimize_class_tokens(classes, stats)
        return f"{prefix}{optimized}{suffix}"

    content = class_attr_re.sub(replace_class_attr, content)

    # 6. Garantizar helper CSS para .alert-flex si fue inyectado
    if "alert-flex" in content and ".alert-flex" not in content:
        style_open = "<style>"
        style_replacement = """<style>
    .alert-flex:not(.hidden) {
      display: flex;
    }"""
        if style_open in content:
            content = content.replace(style_open, style_replacement, 1)
            stats.changes_detail.append("Regla CSS .alert-flex inyectada en <style>")

    # 7. Garantizar compatibilidad de .bg-linear-to-* si no está en CDN estándar
    if "bg-linear-to-" in content and ".bg-linear-to-" not in content and "<style>" in content:
        style_open = "<style>"
        linear_helper = """<style>
    .bg-linear-to-br, .bg-linear-to-tr, .bg-linear-to-t, .bg-linear-to-b, .bg-linear-to-r, .bg-linear-to-l {
      background-image: linear-gradient(var(--tw-gradient-stops));
    }"""
        content = content.replace(style_open, linear_helper, 1)
        stats.changes_detail.append("Compatibilidad de gradientes .bg-linear-to-* inyectada en <style>")

    # 8. Garantizar 2xs, 97.5, 107.5 en tailwind.config si está presente
    if "tailwind.config" in content:
        if "'2xs'" not in content and '"2xs"' not in content:
            font_anchor = "fontFamily: {"
            if font_anchor in content:
                config_extension = """fontSize: {
            '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
          },
          spacing: {
            '97.5': '24.375rem',
            '107.5': '26.875rem',
          },
          fontFamily: {"""
                content = content.replace(font_anchor, config_extension, 1)
                stats.changes_detail.append("Tokens 2xs, 97.5 y 107.5 agregados a tailwind.config")

    return content


def process_file(file_path: Path, dry_run: bool = False) -> OptimizationStats:
    """Procesa un archivo HTML individual."""
    stats = OptimizationStats(file_path=file_path)
    if not file_path.exists():
        logger.error(f"[Error] Archivo no encontrado: {file_path}")
        return stats

    content = file_path.read_text(encoding="utf-8")
    optimized = optimize_html_content(content, stats)

    total_changes = stats.replacements_made + stats.conflicts_resolved + stats.duplicate_tokens_removed
    if total_changes > 0:
        if not dry_run:
            file_path.write_text(optimized, encoding="utf-8")
            logger.info(f" [OK] {file_path.name}: {total_changes} optimizaciones aplicadas")
        else:
            logger.info(f" [DRY-RUN] {file_path.name}: {total_changes} cambios detectados")
    else:
        logger.info(f" [SIN CAMBIOS] {file_path.name} ya está optimizado")

    return stats


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Optimiza clases y resuelve advertencias de Tailwind CSS en archivos HTML de source/."
    )
    parser.add_argument(
        "files",
        nargs="*",
        type=Path,
        help="Archivos HTML específicos a optimizar",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Procesar todos los archivos .html dentro del directorio source/",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Simula la ejecución mostrando los cambios sin modificar archivos",
    )
    parser.add_argument(
        "--verbose",
        "-v",
        action="store_true",
        help="Muestra el detalle individual de cada cambio",
    )

    args = parser.parse_args()

    target_files: list[Path] = []
    if args.all or not args.files:
        target_files = sorted(SOURCE_DIR.glob("*.html"))
    else:
        for f in args.files:
            target_files.append(f if f.is_absolute() else PROJECT_ROOT / f)

    if not target_files:
        logger.warning("No se encontraron archivos HTML para procesar.")
        return 0

    logger.info(f"Iniciando optimización de {len(target_files)} archivo(s)...")
    total_files_changed = 0
    grand_total_optimizations = 0

    for f in target_files:
        stats = process_file(f, dry_run=args.dry_run)
        total_changes = stats.replacements_made + stats.conflicts_resolved + stats.duplicate_tokens_removed
        if total_changes > 0:
            total_files_changed += 1
            grand_total_optimizations += total_changes
            if args.verbose:
                for d in stats.changes_detail:
                    logger.info(f"   -> {d}")

    action = "simulados" if args.dry_run else "aplicados"
    logger.info("-" * 60)
    logger.info(
        f"Completado: {grand_total_optimizations} cambios {action} en {total_files_changed} de {len(target_files)} archivos."
    )

    return 0


if __name__ == "__main__":
    sys.exit(main())

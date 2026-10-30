#!/usr/bin/env python3
"""
Script para organizar los archivos HTML dentro de `source/` usando la estructura
canónica de `source/index.html` (Header + Mobile Drawer, Contenido Principal,
Carrusel de Redes, Footer y scripts de interactividad), tal como en `source/home.html`.

Uso:
  - Organizar todos los archivos de `source/`:
      python organize_source_html.py
  - Organizar uno o más archivos específicos:
      python organize_source_html.py source/cotizar.html
"""
import html as html_lib
import re
import sys
from pathlib import Path

PROJECT_ROOT = (
    Path(__file__).resolve().parent.parent
    if Path(__file__).resolve().parent.name == "scripts"
    else Path(__file__).resolve().parent
)
SOURCE_DIR = PROJECT_ROOT / "source"
INDEX_FILE = SOURCE_DIR / "index.html"

START_MAIN_MARKER = (
    "  <!-- ========================================================================\n"
    "       INICIO CONTENIDO PRINCIPAL\n"
    "       ======================================================================== -->"
)
END_MAIN_MARKER = (
    "  <!-- ========================================================================\n"
    "       FIN CONTENIDO PRINCIPAL\n"
    "       ======================================================================== -->"
)

SCRIPT_WITH_COMMENT_RE = re.compile(
    r"((?:[ \t]*<!--(?:(?!-->)[\s\S])*?-->\s*)*)<script\b[^>]*>([\s\S]*?)</script>",
    flags=re.IGNORECASE,
)


def extract_index_parts(index_html: str) -> dict[str, str]:
    """Extrae las secciones canónicas desde `source/index.html`."""
    head_match = re.search(r"<head\b[^>]*>.*?</head>", index_html, flags=re.DOTALL | re.IGNORECASE)
    if not head_match:
        raise ValueError("No se encontró <head> en source/index.html")

    body_open_match = re.search(r"<body\b[^>]*>", index_html, flags=re.DOTALL | re.IGNORECASE)
    if not body_open_match:
        raise ValueError("No se encontró <body> en source/index.html")

    carrusel_match = re.search(r'[ \t]*<section\s+id="carrusel-redes"', index_html)
    if not carrusel_match:
        raise ValueError('No se encontró <section id="carrusel-redes"> en source/index.html')

    footer_match = re.search(
        r'[ \t]*(?:<!--[\s=]*OPTIMIZED FOOTER.*?-->\s*)?<footer\s+id="optimized-footer"',
        index_html,
        flags=re.DOTALL,
    )
    if not footer_match:
        raise ValueError('No se encontró <footer id="optimized-footer"> en source/index.html')

    footer_end_match = re.search(r"</footer>", index_html[footer_match.start() :], flags=re.IGNORECASE)
    if not footer_end_match:
        raise ValueError("No se encontró </footer> en source/index.html")
    footer_end_pos = footer_match.start() + footer_end_match.end()

    body_close_match = re.search(r"</body>", index_html, flags=re.IGNORECASE)
    if not body_close_match:
        raise ValueError("No se encontró </body> en source/index.html")

    header_and_drawer = index_html[body_open_match.end() : carrusel_match.start()].strip("\r\n")
    header_and_drawer = re.sub(
        r"\s*<!--\s*=+\s*INICIO CONTENIDO PRINCIPAL\s*=+\s*-->.*?<!--\s*=+\s*FIN CONTENIDO PRINCIPAL\s*=+\s*-->\s*",
        "",
        header_and_drawer,
        flags=re.DOTALL,
    ).strip("\r\n")
    carrusel_block = index_html[carrusel_match.start() : footer_match.start()].strip("\r\n")
    footer_block = index_html[footer_match.start() : footer_end_pos].strip("\r\n")
    scripts_block = index_html[footer_end_pos : body_close_match.start()].strip("\r\n")

    return {
        "head": head_match.group(0),
        "body_open": body_open_match.group(0),
        "header_and_drawer": header_and_drawer,
        "carrusel": carrusel_block,
        "footer": footer_block,
        "scripts": scripts_block,
    }


def extract_title_and_description(raw_html: str, fallback_name: str) -> tuple[str, str]:
    """Extrae <title> y <meta name="description"> si existen en un HTML."""
    title_match = re.search(r"<title[^>]*>(.*?)</title>", raw_html, flags=re.DOTALL | re.IGNORECASE)
    if title_match:
        title = html_lib.unescape(re.sub(r"\s+", " ", title_match.group(1)).strip())
    else:
        clean_name = fallback_name.replace(".html", "").replace("-", " ").title()
        title = f"{clean_name} | Envíos DosRuedas"

    desc_match = re.search(
        r'<meta\s+[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\'][^>]*>'
        r'|<meta\s+[^>]*content=["\']([^"\']*)["\'][^>]*name=["\']description["\'][^>]*>',
        raw_html,
        flags=re.DOTALL | re.IGNORECASE,
    )
    description = ""
    if desc_match:
        description = html_lib.unescape((desc_match.group(1) or desc_match.group(2) or "").strip())

    return title, description


def ensure_head_dependencies(head_html: str) -> str:
    """Garantiza que el <head> tenga Lucide Icons y las clases/tokens requeridos por Header, Carrusel y Footer."""
    if "unpkg.com/lucide" not in head_html:
        lucide_tag = '  <!-- Lucide Icons -->\n  <script src="https://unpkg.com/lucide@latest"></script>\n'
        if '<script src="https://cdn.tailwindcss.com"></script>' in head_html:
            head_html = head_html.replace(
                '<script src="https://cdn.tailwindcss.com"></script>',
                lucide_tag + '  <script src="https://cdn.tailwindcss.com"></script>',
                1,
            )
        else:
            head_html = re.sub(r"</head>", f"{lucide_tag}</head>", head_html, count=1, flags=re.IGNORECASE)

    # Si usa Tailwind v4 (@theme), asegurar los tokens de sombra usados por Header, Carrusel y Footer
    if "@theme {" in head_html and "--shadow-elevated" not in head_html:
        head_html = head_html.replace(
            "@theme {",
            "@theme {\n"
            "      --shadow-elevated: 0 16px 40px rgba(9, 80, 246, 0.18);\n"
            "      --shadow-accent-sm: 0 2px 4px rgba(255, 236, 1, 0.15);",
            1,
        )

    # Si usa Tailwind v3 (tailwind.config), asegurar 'elevated' y 'accent-sm' dentro de boxShadow
    if "tailwind.config" in head_html and "boxShadow:" in head_html:
        if "'elevated'" not in head_html and '"elevated"' not in head_html:
            head_html = re.sub(
                r"(boxShadow\s*:\s*\{)",
                r"\1\n            'elevated': '0 16px 40px rgba(9, 80, 246, 0.18)',",
                head_html,
                count=1,
            )
        if "'accent-sm'" not in head_html and '"accent-sm"' not in head_html:
            head_html = re.sub(
                r"(boxShadow\s*:\s*\{)",
                r"\1\n            'accent-sm': '0 2px 4px rgba(255, 236, 1, 0.15)',",
                head_html,
                count=1,
            )

    # Asegurar utilidades CSS usadas en el header/footer si faltan en <style>
    extra_css = []
    if ".font-display" not in head_html:
        extra_css.append(
            "    .font-display {\n"
            "      font-family: 'Anton', sans-serif;\n"
            "      text-transform: uppercase;\n"
            "      letter-spacing: -0.02em;\n"
            "    }"
        )
    if ".font-subheading" not in head_html:
        extra_css.append(
            "    .font-subheading {\n"
            "      font-family: 'Bebas Neue', sans-serif;\n"
            "      text-transform: uppercase;\n"
            "      letter-spacing: 0.05em;\n"
            "    }"
        )
    if ".font-mono" not in head_html:
        extra_css.append(
            "    .font-mono {\n"
            "      font-family: 'Geist Mono', monospace;\n"
            "      font-variant-numeric: tabular-nums;\n"
            "    }"
        )
    if ".kinetic-font-stretch" not in head_html:
        extra_css.append(
            "    .kinetic-font-stretch {\n"
            "      display: inline-block;\n"
            "      transition: transform 0.3s ease, letter-spacing 0.3s ease;\n"
            "    }\n"
            "    .kinetic-font-stretch:hover {\n"
            "      transform: scaleX(1.06);\n"
            "    }"
        )

    if extra_css:
        joined_css = "\n\n".join(extra_css)
        if "</style>" in head_html:
            head_html = head_html.replace("</style>", f"\n{joined_css}\n  </style>", 1)
        else:
            head_html = head_html.replace("</head>", f"  <style>\n{joined_css}\n  </style>\n</head>", 1)

    return head_html


def is_base_index_script(script_code: str) -> bool:
    """Detecta si un bloque <script> es únicamente el script base de navegación de `index.html`."""
    if "function toggleMobileNav" not in script_code:
        return False
    custom_indicators = (
        "handleFormSubmit",
        "handleCopyPhone",
        "initNetworkCanvas",
        "FAQ_DATA",
        "calcularCotizacion",
        "calcularTarifa",
    )
    return not any(ind in script_code for ind in custom_indicators)


def extract_ready_page_body_and_scripts(raw_html: str) -> tuple[str, str]:
    """
    Extrae el contenido principal (secciones) y los scripts propios de una página
    maquetada, removiendo cualquier copia previa de Header, Drawer Mobile,
    Carrusel de Redes, Footer o scripts base de `index.html`.
    """
    body_match = re.search(r"<body\b[^>]*>(.*)</body>", raw_html, flags=re.DOTALL | re.IGNORECASE)
    if not body_match:
        return "", ""

    body_inner = body_match.group(1)

    # Si ya tiene nuestros marcadores de contenido principal, extraer desde ahí
    marker_pattern = re.compile(
        r"<!--\s*=+\s*INICIO CONTENIDO PRINCIPAL\s*=+\s*-->(.*?)<!--\s*=+\s*FIN CONTENIDO PRINCIPAL\s*=+\s*-->",
        flags=re.DOTALL,
    )
    marker_match = marker_pattern.search(body_inner)

    # Extraer todos los bloques <script> dentro del body que sean propios de la página
    page_scripts: list[str] = []
    for script_match in SCRIPT_WITH_COMMENT_RE.finditer(body_inner):
        script_full = script_match.group(0)
        script_code = script_match.group(2)
        if is_base_index_script(script_code):
            continue
        cleaned_full = re.sub(r"^\s*lucide\.createIcons\(\);\s*$", "", script_full, flags=re.MULTILINE)
        page_scripts.append(cleaned_full.strip("\r\n"))

    if marker_match:
        main_content = marker_match.group(1)
        main_content = re.sub(
            r"[ \t]*<!--\s*TODO:\s*Pegar aquí las secciones del cuerpo[^>]*-->\s*",
            "",
            main_content,
        )
        # Si alguien pegó un <script> dentro de los marcadores, quitarlo de main_content porque ya pasó a page_scripts
        main_content = SCRIPT_WITH_COMMENT_RE.sub("", main_content).strip("\r\n")
        return main_content, "\n\n".join(page_scripts)

    work = body_inner

    # 1. Si tiene #mobile-navigation-dialog, cortar todo hasta el inicio de la primera sección real del cuerpo
    if 'id="mobile-navigation-dialog"' in work:
        first_section = re.search(
            r'(\n[ \t]*<!--[\s=]*1\.\s*|\n[ \t]*<section\b|\n[ \t]*<main\b|\n[ \t]*<header\s+id="(?!optimized-header))',
            work[work.find('id="mobile-navigation-dialog"') :],
            flags=re.IGNORECASE,
        )
        if first_section:
            start_idx = work.find('id="mobile-navigation-dialog"') + first_section.start()
            work = work[start_idx:]

    # 2. Cortar desde #carrusel-redes o #optimized-footer hacia abajo
    carrusel_pos = re.search(r'[ \t]*<section\s+id="carrusel-redes"', work)
    footer_pos = re.search(
        r'[ \t]*(?:<!--[\s=]*OPTIMIZED FOOTER.*?-->\s*)?<footer\s+id="optimized-footer"',
        work,
        flags=re.DOTALL,
    )
    cut_positions = [m.start() for m in (carrusel_pos, footer_pos) if m is not None]
    if cut_positions:
        work = work[: min(cut_positions)]

    # 3. Remover bloques <script> (y sus comentarios de encabezado) del cuerpo principal
    work = SCRIPT_WITH_COMMENT_RE.sub("", work)

    return work.strip("\r\n"), "\n\n".join(page_scripts)


def is_ready_custom_page(file_path: Path, raw_html: str) -> bool:
    """
    Determina si un archivo HTML ya tiene su propio cuerpo maquetado en Tailwind CDN
    en lugar de ser un dump de Next.js o un placeholder vacío.
    """
    if "_next/static" in raw_html or "__next_f" in raw_html:
        return False
    if "TODO: Pegar aquí las secciones del cuerpo" in raw_html:
        marker_match = re.search(
            r"<!--\s*=+\s*INICIO CONTENIDO PRINCIPAL\s*=+\s*-->(.*?)<!--\s*=+\s*FIN CONTENIDO PRINCIPAL\s*=+\s*-->",
            raw_html,
            flags=re.DOTALL,
        )
        if not marker_match:
            return False
        inner_lower = marker_match.group(1).lower()
        if not any(tag in inner_lower for tag in ("<section", "<header", "<article", "<div")):
            return False
    return True


def build_organized_custom_page(raw_html: str, index_parts: dict[str, str]) -> str:
    """Construye un HTML completo con el Header, Carrusel y Footer de `index.html` y el cuerpo propio de la página."""
    head_match = re.search(r"<head\b[^>]*>.*?</head>", raw_html, flags=re.DOTALL | re.IGNORECASE)
    head_html = ensure_head_dependencies(head_match.group(0)) if head_match else index_parts["head"]

    main_content, page_scripts = extract_ready_page_body_and_scripts(raw_html)

    parts = [
        "<!DOCTYPE html>",
        '<html lang="es" class="scroll-smooth">',
        "",
        head_html,
        "",
        index_parts["body_open"],
        "",
        index_parts["header_and_drawer"],
        "",
        START_MAIN_MARKER,
        main_content,
        END_MAIN_MARKER,
        "",
        index_parts["carrusel"],
        "",
        index_parts["footer"],
        "",
        index_parts["scripts"],
    ]
    if page_scripts:
        parts.extend(["", page_scripts])
    parts.extend(["</body>", "", "</html>", ""])
    return "\n".join(parts)


def build_template_placeholder_page(file_path: Path, raw_html: str, index_parts: dict[str, str]) -> str:
    """
    Construye un HTML limpio basado en `source/index.html` conservando el <title> y
    <meta name="description"> del archivo, con el espacio delimitado para pegar el
    resto del cuerpo luego.
    """
    title, description = extract_title_and_description(raw_html, file_path.name)
    head_html = index_parts["head"]

    head_html = re.sub(
        r"<title>.*?</title>",
        f"<title>{title}</title>",
        head_html,
        count=1,
        flags=re.DOTALL | re.IGNORECASE,
    )
    if description:
        escaped_desc = html_lib.escape(description, quote=True)
        head_html = re.sub(
            r'<meta\s+name="description"\s+content="[^"]*">',
            f'<meta name="description"\n    content="{escaped_desc}">',
            head_html,
            count=1,
            flags=re.DOTALL | re.IGNORECASE,
        )

    placeholder_block = (
        f"{START_MAIN_MARKER}\n"
        f'  <main id="main-content" class="flex-1 pt-20">\n\n'
        f"    <!-- TODO: Pegar aquí las secciones del cuerpo de {file_path.name} -->\n\n"
        f"  </main>\n"
        f"{END_MAIN_MARKER}"
    )

    parts = [
        "<!DOCTYPE html>",
        '<html lang="es" class="scroll-smooth">',
        "",
        head_html,
        "",
        index_parts["body_open"],
        "",
        index_parts["header_and_drawer"],
        "",
        placeholder_block,
        "",
        index_parts["carrusel"],
        "",
        index_parts["footer"],
        "",
        index_parts["scripts"],
        "</body>",
        "",
        "</html>",
        "",
    ]
    return "\n".join(parts)


def main(argv: list[str] | None = None) -> int:
    if argv is None:
        argv = sys.argv[1:]

    if not INDEX_FILE.exists():
        print(f"[Error] No existe {INDEX_FILE}")
        return 1

    index_html = INDEX_FILE.read_text(encoding="utf-8")
    index_parts = extract_index_parts(index_html)

    if "INICIO CONTENIDO PRINCIPAL" not in index_html:
        organized_index = build_template_placeholder_page(INDEX_FILE, index_html, index_parts)
        INDEX_FILE.write_text(organized_index, encoding="utf-8")
        print(f"[OK] Plantilla base actualizada con espacio de contenido: {INDEX_FILE.name}")

    if argv:
        html_files = []
        for arg in argv:
            p = Path(arg)
            if not p.is_absolute():
                p = (PROJECT_ROOT / p).resolve()
            if p.exists() and p.name != "index.html":
                html_files.append(p)
            else:
                print(f"[Warn] Archivo omitido o no encontrado: {arg}")
    else:
        html_files = sorted(f for f in SOURCE_DIR.glob("*.html") if f.name != "index.html")

    custom_count = 0
    template_count = 0

    for html_file in html_files:
        raw_html = html_file.read_text(encoding="utf-8", errors="ignore")

        if is_ready_custom_page(html_file, raw_html):
            new_html = build_organized_custom_page(raw_html, index_parts)
            html_file.write_text(new_html, encoding="utf-8")
            custom_count += 1
            print(f"[OK - Cuerpo + Layout] {html_file.name}")
        else:
            new_html = build_template_placeholder_page(html_file, raw_html, index_parts)
            html_file.write_text(new_html, encoding="utf-8")
            template_count += 1
            print(f"[OK - Plantilla lista] {html_file.name}")

    print("-" * 60)
    print(
        f"Organización completada: {custom_count} páginas con cuerpo completo y "
        f"{template_count} páginas con plantilla base de index.html listas para completar."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

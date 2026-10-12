#!/usr/bin/env python3
"""Genera un archivo PDF continuo de alta fidelidad para una página Next.js.

Diseñado para capturar la página completa tal como se ve en el navegador/servidor
(resolución Desktop de 1440px de ancho y altura dinámica completa de una sola página),
preservando fondos, colores de Tailwind, canvas y recursos diferidos (lazy loading).

Uso:
    # Con servidor de desarrollo o producción local:
    python scripts/generate_page_pdf.py

    # Apuntando a la URL pública:
    python scripts/generate_page_pdf.py --url https://enviosdosruedas.com

    # Especificando ruta de salida personalizada:
    python scripts/generate_page_pdf.py --output exports/mi-pagina.pdf

    # Usando el canal del navegador del sistema (Google Chrome o Microsoft Edge):
    python scripts/generate_page_pdf.py --channel chrome
"""

import argparse
import os
import sys
import time
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright, Error as PlaywrightError
except ImportError:
    print("Error: 'playwright' no está instalado en el entorno de Python actual.", file=sys.stderr)
    print("Podés instalarlo ejecutando: pip install playwright", file=sys.stderr)
    sys.exit(1)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Genera un PDF continuo de pantalla completa de una página web."
    )
    parser.add_argument(
        "--url",
        type=str,
        default="http://localhost:3000",
        help="URL de la página a capturar (por defecto: http://localhost:3000)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="exports/home-desktop.pdf",
        help="Ruta del archivo PDF resultante (por defecto: exports/home-desktop.pdf)",
    )
    parser.add_argument(
        "--width",
        type=int,
        default=1440,
        help="Ancho del viewport en píxeles (por defecto: 1440)",
    )
    parser.add_argument(
        "--settle-delay",
        type=float,
        default=3.0,
        help="Segundos de espera tras el scroll para estabilizar animaciones y canvas (por defecto: 3.0)",
    )
    parser.add_argument(
        "--channel",
        type=str,
        default=None,
        choices=["chrome", "msedge", "chromium"],
        help="Canal del navegador a usar (opcional: chrome, msedge o chromium)",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=60000,
        help="Timeout máximo de navegación en milisegundos (por defecto: 60000)",
    )
    return parser.parse_args()


def launch_browser_with_fallback(p, requested_channel: str | None):
    """Intenta iniciar el navegador en Chromium o hace fallback a canales del sistema."""
    launch_attempts = []

    if requested_channel:
        if requested_channel == "chromium":
            launch_attempts.append({})
        else:
            launch_attempts.append({"channel": requested_channel})
    else:
        # Prioridad por defecto: Chromium nativo -> Chrome del sistema -> Edge del sistema
        launch_attempts.append({})
        launch_attempts.append({"channel": "chrome"})
        launch_attempts.append({"channel": "msedge"})

    last_error = None
    for kwargs in launch_attempts:
        channel_name = kwargs.get("channel", "chromium (empaquetado)")
        try:
            browser = p.chromium.launch(headless=True, **kwargs)
            return browser, channel_name
        except Exception as e:
            last_error = e
            continue

    raise RuntimeError(
        f"No se pudo iniciar ningún navegador compatible con Playwright. Último error: {last_error}\n"
        "Si no tenés instalados los navegadores de Playwright, ejecutá: python -m playwright install chromium"
    )


def generate_pdf(url: str, output_path: Path, width: int, settle_delay: float, channel: str | None, timeout: int):
    output_path.parent.mkdir(parents=True, exist_ok=True)

    print(f"Iniciando captura de PDF...")
    print(f"  URL objetivo:     {url}")
    print(f"  Viewport:         {width}px de ancho")
    print(f"  Archivo destino:  {output_path}")

    with sync_playwright() as p:
        browser, used_channel = launch_browser_with_fallback(p, channel)
        print(f"  Navegador activo: {used_channel}")

        context = browser.new_context(
            viewport={"width": width, "height": 900},
            device_scale_factor=1,
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        )

        page = context.new_page()

        try:
            print(f"Cargando página...")
            try:
                page.goto(url, wait_until="networkidle", timeout=timeout)
            except PlaywrightError:
                print("  Aviso: 'networkidle' superó el tiempo límite. Continuando con 'domcontentloaded'...")
                page.goto(url, wait_until="domcontentloaded", timeout=timeout)

            # Emular vista de pantalla para no perder colores ni fondos
            page.emulate_media(media="screen")

            print("Ejecutando scroll progresivo para activar lazy-loading de imágenes y componentes...")
            page.evaluate("""
                async () => {
                    const scrollStep = 450;
                    const delay = 120;
                    const totalHeight = document.scrollingElement.scrollHeight;
                    
                    let currentPosition = 0;
                    while (currentPosition < totalHeight) {
                        window.scrollBy(0, scrollStep);
                        currentPosition += scrollStep;
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                    
                    // Volver arriba de forma suave
                    window.scrollTo(0, 0);
                }
            """)

            print(f"Esperando {settle_delay}s para estabilización de animaciones y canvas...")
            time.sleep(settle_delay)

            # Calcular la altura total real del documento
            scroll_height = page.evaluate("""
                () => Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                )
            """)

            print(f"Altura calculada del documento: {scroll_height}px")

            print("Generando archivo PDF continuo...")
            page.pdf(
                path=str(output_path),
                width=f"{width}px",
                height=f"{scroll_height}px",
                print_background=True,
                prefer_css_page_size=False,
                margin={"top": "0px", "right": "0px", "bottom": "0px", "left": "0px"},
            )

            file_size_kb = output_path.stat().st_size / 1024
            print(f"\nPDF generado exitosamente!")
            print(f"  Ruta:   {output_path.resolve()}")
            print(f"  Tamaño: {file_size_kb:.1f} KB")

        finally:
            browser.close()


def main():
    args = parse_args()
    output_path = Path(args.output)

    try:
        generate_pdf(
            url=args.url,
            output_path=output_path,
            width=args.width,
            settle_delay=args.settle_delay,
            channel=args.channel,
            timeout=args.timeout,
        )
    except Exception as e:
        print(f"\nError durante la generación del PDF: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

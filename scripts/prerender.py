#!/usr/bin/env python3
"""
Prerender Next.js pages to static HTML using Playwright.
This properly handles Server Actions, API routes, opengraph images, and all dynamic features.
"""
import asyncio
import os
import shutil
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

PROJECT_ROOT = Path("C:/Users/prest/proyectos/02enviosdosruedassetiembre")
SOURCE_DIR = PROJECT_ROOT / "source"
CONFIG_FILE = PROJECT_ROOT / "next.config.ts"
DEV_SERVER_PORT = 3000
DEV_SERVER_URL = f"http://localhost:{DEV_SERVER_PORT}"

# Pages to prerender (route -> output filename)
PAGES = {
    "/": "home.html",
    "/servicios": "servicios.html",
    "/servicios/envios-express": "servicios-envios-express.html",
    "/servicios/envios-lowcost": "servicios-envios-lowcost.html",
    "/servicios/enviosflex": "servicios-enviosflex.html",
    "/servicios/deposito-fulfillment": "servicios-deposito-fulfillment.html",
    "/servicios/empresas-cuenta-corriente": "servicios-empresas-cuenta-corriente.html",
    "/servicios/plan-emprendedores": "servicios-plan-emprendedores.html",
    "/cotizar": "cotizar.html",
    "/contacto": "contacto.html",
    "/nosotros": "nosotros.html",
    "/nosotros/sobre-nosotros": "nosotros-sobre-nosotros.html",
    "/nosotros/preguntas-frecuentes": "nosotros-preguntas-frecuentes.html",
    "/nosotros/nuestras-redes": "nosotros-nuestras-redes.html",
    "/cobertura": "cobertura.html",
    "/logistica-dosruedas": "logistica-dosruedas.html",
    "/mardelivery": "mardelivery.html",
    "/politica-de-privacidad": "politica-de-privacidad.html",
    "/terminos-y-condiciones": "terminos-y-condiciones.html",
    "/revisar": "revisar.html",
    "/guias/envios-flex-mar-del-plata": "guias-envios-flex-mar-del-plata.html",
}


def toggle_static_export(disable: bool) -> bool:
    """Temporarily comment out output: 'export' so dynamic features/Server Actions work in dev."""
    if not CONFIG_FILE.exists():
        return False

    content = CONFIG_FILE.read_text(encoding="utf-8")
    if disable:
        if "output: 'export'" in content and "// output: 'export'" not in content:
            CONFIG_FILE.write_text(
                content.replace("output: 'export'", "// output: 'export'"),
                encoding="utf-8",
            )
            return True
    else:
        if "// output: 'export'" in content:
            CONFIG_FILE.write_text(
                content.replace("// output: 'export'", "output: 'export'"),
                encoding="utf-8",
            )
            return True
    return False


def is_port_open(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(1.0)
        return s.connect_ex(("127.0.0.1", port)) == 0


def stop_process_tree(proc: subprocess.Popen) -> None:
    """Terminate process and all child processes cleanly on Windows and POSIX."""
    if proc.poll() is not None:
        return
    if os.name == "nt":
        subprocess.run(
            ["taskkill", "/F", "/T", "/PID", str(proc.pid)],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    else:
        proc.terminate()
        try:
            proc.wait(timeout=10)
        except subprocess.TimeoutExpired:
            proc.kill()


async def prerender_pages():
    """Use Playwright to prerender all pages."""
    from playwright.async_api import async_playwright

    SOURCE_DIR.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1280, "height": 800},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        )

        page = await context.new_page()

        # Enable console logging
        page.on(
            "console",
            lambda msg: print(f"  [Browser] {msg.type}: {msg.text}")
            if msg.type == "error"
            else None,
        )
        page.on("pageerror", lambda err: print(f"  [Page Error] {err}"))

        for route, filename in PAGES.items():
            url = urljoin(DEV_SERVER_URL, route)
            print(f"Prerendering: {route} -> {filename}")

            try:
                response = await page.goto(url, wait_until="domcontentloaded", timeout=60000)

                if response and response.status >= 400:
                    print(f"  [Warning] HTTP {response.status} for {route}")

                # Wait for hydration and dynamic content
                try:
                    await page.wait_for_load_state("networkidle", timeout=10000)
                except Exception:
                    pass
                await asyncio.sleep(1.5)  # Allow Server Actions, images, etc. to load

                # Get the fully rendered HTML
                html = await page.content()

                # Fix paths for static hosting
                html = html.replace('href="/', 'href="./')
                html = html.replace('src="/', 'src="./')
                html = html.replace('action="/', 'action="./')

                # Fix absolute URLs to relative
                html = html.replace("https://www.enviosdosruedas.com/", "./")

                output_path = SOURCE_DIR / filename
                output_path.write_text(html, encoding="utf-8")
                print(f"  [OK] Saved {len(html)} chars to {output_path}")

            except Exception as e:
                print(f"  [Error] Failed to prerender {route}: {e}")

        await browser.close()


def main():
    print("=" * 60)
    print("Prerendering Next.js pages to static HTML")
    print("=" * 60)

    pnpm_bin = shutil.which("pnpm") or "pnpm"
    toggled_config = toggle_static_export(disable=True)
    dev_server = None

    try:
        # Start dev server in background if not already running
        print("\n[1/3] Starting Next.js dev server...")
        lock_file = PROJECT_ROOT / ".next" / "dev" / "lock"
        if not is_port_open(DEV_SERVER_PORT) and lock_file.exists():
            try:
                lock_file.unlink()
            except OSError:
                pass

        dev_server = subprocess.Popen(
            [pnpm_bin, "dev"],
            cwd=PROJECT_ROOT,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )

        # Wait for server socket to listen, then warm up root route
        print("  Waiting for server to be ready...")
        ready = False
        for _ in range(60):
            if dev_server.poll() is not None:
                break
            if is_port_open(DEV_SERVER_PORT):
                try:
                    with urllib.request.urlopen(DEV_SERVER_URL, timeout=30) as resp:
                        if resp.status < 500:
                            print(f"  Server ready at {DEV_SERVER_URL}")
                            ready = True
                            break
                except urllib.error.HTTPError as e:
                    print(f"  [Warning] Server responded with HTTP {e.code}, retrying...")
                    time.sleep(2)
                except Exception:
                    time.sleep(1)
            else:
                time.sleep(1)

        if not ready:
            print("  [Error] Server failed to start")
            return 1

        # Prerender pages
        print("\n[2/3] Prerendering pages with Playwright...")
        asyncio.run(prerender_pages())

        # Also copy assets
        print("\n[3/3] Copying assets...")
        assets_src = PROJECT_ROOT / "public"
        assets_dst = SOURCE_DIR / "assets"
        if assets_src.exists():
            if assets_dst.exists():
                shutil.rmtree(assets_dst)
            shutil.copytree(assets_src, assets_dst)
            print(f"  Copied assets to {assets_dst}")

        print("\n" + "=" * 60)
        print("Prerendering complete!")
        print(f"Static files in: {SOURCE_DIR}")
        print("=" * 60)
        return 0

    finally:
        if dev_server is not None:
            print("\nStopping dev server...")
            stop_process_tree(dev_server)
        if toggled_config:
            toggle_static_export(disable=False)


if __name__ == "__main__":
    sys.exit(main())

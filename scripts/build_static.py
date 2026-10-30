#!/usr/bin/env python3
"""
Build script optimized for extracting static structure without Server Action crashes.
"""
import os
import shutil
import subprocess
import sys
from pathlib import Path

PROJECT_ROOT = Path("C:/Users/prest/proyectos/02enviosdosruedassetiembre")
CONFIG_FILE = PROJECT_ROOT / "next.config.ts"
if not CONFIG_FILE.exists():
    CONFIG_FILE = PROJECT_ROOT / "next.config.js"

def comment_static_export(comment=True):
    """Temporarily toggles output: 'export' to avoid Server Action build blockers."""
    if not CONFIG_FILE.exists():
        return
    
    content = CONFIG_FILE.read_text(encoding='utf-8')
    if comment:
        # Desactiva temporalmente la exportación estática nativa agresiva
        if "output: 'export'" in content and not "// output: 'export'" in content:
            content = content.replace("output: 'export'", "// output: 'export'")
            CONFIG_FILE.write_text(content, encoding='utf-8')
            print("[-] Temporarily bypassed static export constraint in configuration.")
    else:
        # Restaura el estado original
        if "// output: 'export'" in content:
            content = content.replace("// output: 'export'", "output: 'export'")
            CONFIG_FILE.write_text(content, encoding='utf-8')
            print("[+] Restored static export constraint in configuration.")

def main():
    try:
        # Comentar la restricción estática para permitir compilar Server Actions en páginas
        comment_static_export(comment=True)
        
        print("Running pnpm build...")
        result = subprocess.run(
            ["pnpm", "build"],
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True,
            timeout=300
        )
        
        if result.stdout:
            print(result.stdout)
        if result.stderr:
            print(result.stderr, file=sys.stderr)
        
        if result.returncode != 0:
            print(f"Build failed with exit code {result.returncode}")
            return result.returncode
        
        # Generar u obtener la carpeta estática exportada
        # Si Next.js compiló de manera estándar, los HTMLs base se encuentran en .next/server/app
        source_dir = PROJECT_ROOT / "source"
        next_app_out = PROJECT_ROOT / ".next" / "server" / "app"
        
        if next_app_out.exists():
            print(f"Extracting built pages from {next_app_out} to {source_dir}")
            if not source_dir.exists():
                source_dir.mkdir(parents=True, exist_ok=True)
            
            # Copiar solo archivos estructurales html limpios
            for html_file in next_app_out.glob("**/*.html"):
                dest_file = source_dir / html_file.name
                shutil.copy2(html_file, dest_file)
                print(f" -> Migrated structure: {html_file.name}")
                
            print(f"[✓] Successfully updated templates inside {source_dir}")
        else:
            print(f"Warning: Production build directory artifacts not found!")
            return 1
        
        return 0
        
    finally:
        # Garantizar que el archivo de configuración siempre regrese a su estado original
        comment_static_export(comment=False)

if __name__ == "__main__":
    sys.exit(main())

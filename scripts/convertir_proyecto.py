import os
import re
import markdown
from markitdown import MarkItDown
from xhtml2pdf import pisa

# Inicializar conversor MarkItDown
md = MarkItDown()

# Rutas
project_dir = r"E:\proyectos\02enviosdosruedashector"
output_md = r"E:\proyectos\02enviosdosruedashector\document.md"
output_html = r"E:\proyectos\02enviosdosruedashector\document.html"
output_pdf = r"E:\proyectos\02enviosdosruedashector\document.pdf"

# Directorios a ignorar
ignore_dirs = {'.git', 'node_modules', '__pycache__', 'venv', '.venv', 'env', 'dist', 'build', '.next'}

# Extensiones de archivos que quieres procesar
supported_extensions = {
    '.pdf', '.docx', '.xlsx', '.pptx', '.txt', '.csv', '.json', '.xml', '.epub', '.html',
    '.py', '.js', '.ts', '.css', '.md'
}

print(f"Iniciando escaneo de: {project_dir}")

markdown_content = ""

for root, dirs, files in os.walk(project_dir):
    # Filtrar directorios ignorados en el camino
    dirs[:] = [d for d in dirs if d not in ignore_dirs]
    
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in supported_extensions:
            file_path = os.path.join(root, file)
            
            # Evitar autoprocesar los archivos de salida
            if file_path in [output_md, output_html, output_pdf]:
                continue
            
            rel_path = os.path.relpath(file_path, project_dir)
            print(f"Procesando: {rel_path}...")
            
            markdown_content += f"\n\n# Archivo: {rel_path}\n"
            markdown_content += "---\n"
            
            try:
                result = md.convert(file_path)
                markdown_content += result.text_content
            except Exception as e:
                markdown_content += f"\n*Error al convertir este archivo: {e}*\n"

# 1. Guardar archivo Markdown
print("Guardando Markdown...")
with open(output_md, "w", encoding="utf-8") as out:
    out.write(markdown_content)

# 2. Generar y guardar archivo HTML con estilos limpios
print("Generando HTML...")
html_body = markdown.markdown(markdown_content)

# Limpiar bloques <style>...</style> para evitar que xhtml2pdf los intente interpretar
html_body_cleaned = re.sub(r'<style\b[^>]*>([\s\S]*?)</style>', '', html_body, flags=re.IGNORECASE)

# Sanear tablas HTML vacías o con 0 columnas para evitar que reportlab/xhtml2pdf explote
def sanitize_tables(html_str):
    # Eliminar tablas vacías inmediatamente
    html_str = re.sub(r'<table\b[^>]*>\s*</table>', '', html_str, flags=re.IGNORECASE)
    
    def process_table(table_match):
        table_html = table_match.group(0)
        # Buscar todas las filas (tr)
        rows = re.findall(r'<tr\b[^>]*>([\s\S]*?)</tr>', table_html, flags=re.IGNORECASE)
        if not rows:
            return "" # Eliminar la tabla si no tiene filas
            
        new_rows = []
        has_cells = False
        for row in rows:
            # Buscar celdas (td o th) en cada fila
            cells = re.findall(r'<(td|th)\b[^>]*>([\s\S]*?)</\1>', row, flags=re.IGNORECASE)
            if not cells:
                # Si una fila no tiene celdas, le agregamos una vacía para que no tenga 0 columnas
                row_fixed = "<td>&nbsp;</td>"
                new_rows.append(f"<tr>{row_fixed}</tr>")
            else:
                has_cells = True
                new_rows.append(f"<tr>{row}</tr>")
                
        if not has_cells:
            return "" # Eliminar tabla si ninguna fila tiene celdas
            
        # Reconstruir la tabla saneada
        # Obtenemos los atributos originales de la etiqueta <table> (ej: class, id, etc.)
        table_start = re.match(r'(<table\b[^>]*>)', table_html, flags=re.IGNORECASE).group(1)
        return f"{table_start}\n" + "\n".join(new_rows) + "\n</table>"

    return re.sub(r'<table\b[^>]*>([\s\S]*?)</table>', process_table, html_str, flags=re.IGNORECASE)

html_body_cleaned = sanitize_tables(html_body_cleaned)

styled_html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
    body {{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.6;
        margin: 40px;
        color: #333;
    }}
    h1 {{
        border-bottom: 2px solid #555;
        padding-bottom: 10px;
        margin-top: 50px;
        color: #111;
        font-size: 24px;
        page-break-before: always;
    }}
    h2 {{
        color: #222;
        font-size: 18px;
        margin-top: 30px;
    }}
    pre {{
        background: #f8f8f8;
        border: 1px solid #e0e0e0;
        padding: 15px;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 11px;
        white-space: pre-wrap;
    }}
    code {{
        font-family: 'Courier New', Courier, monospace;
        background: #f8f8f8;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 11px;
    }}
    hr {{
        border: 0;
        border-top: 1px solid #ddd;
        margin: 20px 0;
    }}
</style>
</head>
<body>
{html_body_cleaned}
</body>
</html>
"""

with open(output_html, "w", encoding="utf-8") as f:
    f.write(styled_html)

# 3. Generar y guardar archivo PDF
print("Generando PDF...")
with open(output_pdf, "wb") as f:
    pisa_status = pisa.CreatePDF(styled_html, dest=f)

if not pisa_status.err:
    print(f"¡Éxito! Archivos generados correctamente:\n- MD: {output_md}\n- HTML: {output_html}\n- PDF: {output_pdf}")
else:
    print("Ocurrió un error al compilar el archivo PDF.")
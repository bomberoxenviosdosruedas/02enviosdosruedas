import os
import re
import sys

# Configuraciones globales
SRC_DIR = os.path.join("src")
APP_DIR = os.path.join(SRC_DIR, "app")
OUTPUT_DIR = os.path.join("docs", "paginas_en_txt")

# Extensiones de archivo admitidas para resolución de componentes
EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"]

# Expresión regular para capturar imports locales (relativos o con alias @/)
# Ignora node_modules como 'next/...', 'react', 'lucide-react', etc.
IMPORT_REGEX = re.compile(
    r'(?:import|export)\s+(?:[\w\s{},*]+\s+from\s+)?[\'"]((?:\@\/|\.\/|\.\.\/).+?)[\'"]'
)

def resolver_ruta_archivo(import_path, current_file_path):
    """
    Resuelve un string de importación a una ruta física real en el disco.
    Soporta Path Aliases (@/) e imports relativos (./ o ../).
    """
    if import_path.startswith("@/"):
        # Reemplazar el alias @/ por la ruta base de src/
        base_path = os.path.join(SRC_DIR, import_path[2:])
    elif import_path.startswith(".") or import_path.startswith(".."):
        # Resolver ruta relativa basada en el directorio del archivo actual
        current_dir = os.path.dirname(current_file_path)
        base_path = os.path.normpath(os.path.join(current_dir, import_path))
    else:
        return None

    # 1. Intentar resolver si el import ya tiene extensión implícita
    if os.path.isfile(base_path):
        return base_path

    # 2. Intentar resolver añadiendo extensiones directas (ej: Componente -> Componente.tsx)
    for ext in EXTENSIONS:
        if os.path.isfile(base_path + ext):
            return base_path + ext

    # 3. Intentar resolver como directorio / carpeta barrel (ej: ui/button -> ui/button/index.tsx)
    if os.path.isdir(base_path):
        for ext in EXTENSIONS:
            index_path = os.path.join(base_path, f"index{ext}")
            if os.path.isfile(index_path):
                return index_path

    return None

def extraer_imports(file_path):
    """Lee un archivo y extrae todas las rutas de importación locales válidas."""
    imports = []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            for line in f:
                match = IMPORT_REGEX.search(line)
                if match:
                    imports.append(match.group(1))
    except Exception as e:
        print(f"⚠️ Error al leer imports de {file_path}: {e}", file=sys.stderr)
    return imports

def rastrear_dependencias_recursivo(file_path, procesados):
    """
    Rastrea de forma recursiva (DFS) todos los componentes locales importados
    por un archivo, evitando bucles/ciclos infinitos de importación.
    """
    if file_path in procesados:
        return []

    procesados.add(file_path)
    componentes_encontrados = [(file_path, "PÁGINA RAÍZ" if "page.tsx" in file_path else "COMPONENTE ANIDADO")]

    import_strings = extraer_imports(file_path)
    for imp in import_strings:
        ruta_resuelta = resolver_ruta_archivo(imp, file_path)
        if ruta_resuelta and ruta_resuelta not in procesados:
            # Llamada recursiva para bajar un nivel más en el árbol
            componentes_encontrados.extend(
                rastrear_dependencias_recursivo(ruta_resuelta, procesados)
            )

    return componentes_encontrados

def generar_nombre_salida(page_path):
    """
    Convierte la ruta física del archivo 'page.tsx' en un nombre limpio para el archivo .txt.
    Ejemplo: src/app/contacto/page.tsx -> contacto.txt
    Ejemplo: src/app/cotizar/express/page.tsx -> cotizar-express.txt
    Ejemplo: src/app/page.tsx -> home.txt
    """
    # Obtener la ruta relativa desde la carpeta app/
    rel_path = os.path.relpath(os.path.dirname(page_path), APP_DIR)
    
    if rel_path == ".":
        return "home.txt"
    
    # Reemplazar los separadores de carpetas por guiones para aplanar el nombre
    nombre_limpio = rel_path.replace(os.sep, "-")
    
    # Limpiar posibles grupos de rutas de Next.js (ej: (marketing) o (auth))
    nombre_limpio = re.sub(r"\([\w-]+\)-?", "", nombre_limpio)
    if nombre_limpio.endswith("-"):
        nombre_limpio = nombre_limpio[:-1]
        
    return f"{nombre_limpio}.txt"

def procesar_proyecto():
    """Función principal que orquesta el escaneo de todo el proyecto."""
    print("🚀 Iniciando extracción general de contexto tradicional...")
    
    if not os.path.exists(APP_DIR):
        print(f"❌ Error: No se encontró el directorio base '{APP_DIR}'. Asegúrate de ejecutar el script en la raíz del proyecto.")
        return

    # Asegurar existencia del directorio de salida
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 1. Buscar todas las páginas 'page.tsx' de la aplicación de forma general
    paginas_encontradas = []
    for root, _, files in os.walk(APP_DIR):
        for file in files:
            if file == "page.tsx":
                paginas_encontradas.append(os.path.join(root, file))

    print(f"📂 Se detectaron {len(paginas_encontradas)} páginas autónomas en el App Router.\n")

    # 2. Procesar cada página de manera independiente
    for page_path in paginas_encontradas:
        txt_name = generar_nombre_salida(page_path)
        output_file_path = os.path.join(OUTPUT_DIR, txt_name)
        
        print(f"📄 Analizando árbol recursivo para: {os.path.relpath(page_path, APP_DIR)}")
        
        # Conjunto para rastrear archivos ya incluidos en ESTA página (evita ciclos)
        archivos_procesados_en_pagina = set()
        arbol_completo = rastrear_dependencias_recursivo(page_path, archivos_procesados_en_pagina)

        # 3. Escribir el consolidado en el archivo .txt correspondiente
        try:
            with open(output_file_path, "w", encoding="utf-8") as out_file:
                for file_fisi, tipo in arbol_completo:
                    # Separador visual estructurado amigable para agentes de IA
                    out_file.write("=" * 80 + "\n")
                    out_file.write(f"{tipo}: {file_fisi.replace(os.sep, '/')}\n")
                    out_file.write("=" * 80 + "\n\n")
                    
                    # Leer y pegar el código fuente del archivo
                    with open(file_fisi, "r", encoding="utf-8") as f_src:
                        out_file.write(f_src.read())
                    
                    out_file.write("\n\n")
                    
            print(f"   ✅ Guardado con éxito en: {output_file_path} ({len(arbol_completo)} archivos consolidados)")
        except Exception as e:
            print(f"   ❌ Error al escribir el archivo de salida {txt_name}: {e}", file=sys.stderr)

    print("\n🎉 ¡Proceso finalizado con éxito! Todos los contextos tradicionales están unificados.")

if __name__ == "__main__":
    procesar_proyecto()

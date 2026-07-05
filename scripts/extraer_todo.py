import os
import time
import csv
import random
import browser_cookie3
from instagrapi import Client
from datetime import datetime, timedelta

# ========================================================
# 🔧 CONFIGURACIÓN
# ========================================================
navegador_usuario = "firefox" 
cuenta_objetivo = "enviosdosruedas"  

# Calculamos la fecha límite de hace 2 años (Julio 2024)
fecha_limite = datetime.now() - timedelta(days=2*365)
# ========================================================

try:
    print(f"Buscando cookies de Instagram en tu navegador '{navegador_usuario}'...")
    cookies = browser_cookie3.firefox(domain_name='.instagram.com')
    
    session_id = None
    for cookie in cookies:
        if cookie.name == 'sessionid':
            session_id = cookie.value
            break
            
    if not session_id:
        raise Exception("No se encontro la cookie 'sessionid' en Firefox. Asegurate de iniciar sesion en Instagram en Firefox y luego cerrar el navegador.")
        
    print("Cookie de sesion encontrada!")
    
    cl = Client()
    print("Iniciando sesion en Instagram mediante Session ID...")
    cl.login_by_sessionid(session_id)
    print("Conectado exitosamente!")
    
    print(f"Buscando el perfil de @{cuenta_objetivo}...")
    user_id = cl.user_id_from_username(cuenta_objetivo)
    
    # Creamos la carpeta principal para guardar todo
    carpeta_destino = f"{cuenta_objetivo}_datos_2_anos"
    os.makedirs(carpeta_destino, exist_ok=True)
    
    # ========================================================
    # 👥 PARTE 1: EXTRAER SEGUIDORES
    # ========================================================
    print(f"\n👥 Extrayendo lista de seguidores de @{cuenta_objetivo}...")
    archivo_seguidores = os.path.join(carpeta_destino, "seguidores.csv")
    
    with open(archivo_seguidores, mode='w', newline='', encoding='utf-8') as f_seg:
        writer_seg = csv.writer(f_seg)
        writer_seg.writerow(['ID_Usuario', 'Username', 'Nombre_Completo'])
        
        # Traemos los seguidores (amount=0 intenta traer el primer bloque seguro)
        seguidores = cl.user_followers(user_id, amount=0)
        
        contador_seg = 0
        for seg_id, seg_info in seguidores.items():
            writer_seg.writerow([seg_id, seg_info.username, seg_info.full_name])
            contador_seg += 1
            
    print(f"✅ Lista de {contador_seg} seguidores guardada en: {archivo_seguidores}")

    # ========================================================
    # 📊 PARTE 2: EXTRAER METADATA Y MULTIMEDIA (2 AÑOS)
    # ========================================================
    print(f"\n📅 Buscando publicaciones desde el {fecha_limite.strftime('%d/%m/%Y')}...")
    archivo_posts = os.path.join(carpeta_destino, "datos_publicaciones.csv")
    
    # Pedimos un lote grande de publicaciones (ej. 150 posts)
    medias = cl.user_medias(user_id, amount=150)
    
    with open(archivo_posts, mode='w', newline='', encoding='utf-8') as f_posts:
        writer_posts = csv.writer(f_posts)
        # Columnas de nuestra tabla de Excel
        writer_posts.writerow(['ID_Post', 'Fecha_Publicacion', 'Tipo', 'Me_Gusta', 'Comentarios', 'Texto_Publicacion', 'Enlace_Web'])
        
        print(f"Se revisaran las publicaciones disponibles en el feed...")
        
        contador_descargas = 0
        for media in medias:
            # Convertimos la fecha del post para poder compararla
            fecha_post = media.date_utc.replace(tzinfo=None)
            
            # Si el post es más antiguo que la fecha límite de 2 años, detenemos el ciclo
            if fecha_post < fecha_limite:
                print(f"⏱️ Se alcanzo un post antiguo del {fecha_post.strftime('%d/%m/%Y')}. Frenando busqueda cronologica.")
                break
                
            print(f"⬇️ Procesando post {contador_descargas + 1} (Fecha: {fecha_post.strftime('%d/%m/%Y')}, Tipo: {media.media_type})...")
            
            # Identificamos el tipo de archivo en texto
            tipo_str = "Imagen" if media.media_type == 1 else "Video/Reel" if media.media_type == 2 else "Carrusel"
            enlace_instagram = f"https://instagram.com{media.code}"
            
            # Guardamos la metadata en el archivo CSV
            writer_posts.writerow([media.pk, media.date_utc, tipo_str, media.like_count, media.comment_count, media.caption_text, enlace_instagram])
            
            # Descargamos los archivos multimedia dentro de la carpeta
            try:
                if media.media_type == 1:
                    cl.photo_download(media.pk, folder=carpeta_destino)
                elif media.media_type == 2:
                    cl.video_download(media.pk, folder=carpeta_destino)
                elif media.media_type == 8:
                    cl.album_download(media.pk, folder=carpeta_destino)
                else:
                    print(f"   Tipo no soportado, metadata guardada pero archivo omitido.")
            except Exception as ex_media:
                print(f"   ⚠️ No se pudo descargar el archivo visual de este post: {ex_media}")
                
            contador_descargas += 1
            # Pausa aleatoria entre 4 y 7 segundos para que Instagram no sospeche de la cuenta
            time.sleep(random.uniform(4.0, 7.0))
            
    print("\n=============================================")
    print("🎉 ¡PROCESO DE 2 AÑOS COMPLETADO CON ÉXITO!")
    print(f"Se extrajeron {contador_seg} seguidores.")
    print(f"Se descargaron y registraron {contador_descargas} posts.")
    print(f"Busca la carpeta '{carpeta_destino}' en tu proyecto.")
    print("=============================================")

except Exception as e:
    print(f"\n[ERROR] Ocurrio un error: {e}")
    print("\nNOTA DE CONFIGURACION:")
    print("1. Abre Firefox, entra a Instagram.com y asegúrate de tener la sesion iniciada.")
    print("2. Cierra Firefox por completo antes de ejecutar este script.")

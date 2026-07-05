import os
import time
import browser_cookie3
from instagrapi import Client

# ========================================================
# 🔧 CONFIGURACIÓN
# ========================================================
navegador_usuario = "firefox" 
cuenta_objetivo = "enviosdosruedas"  
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
    
    print("Perfil encontrado. Obteniendo las 10 publicaciones mas recientes...")
    medias = cl.user_medias(user_id, amount=10)
    
    os.makedirs(cuenta_objetivo, exist_ok=True)
    
    print(f"Iniciando descarga de {len(medias)} publicaciones en la carpeta '{cuenta_objetivo}'...")
    
    contador = 0
    for media in medias:
        print(f"Descargando post {contador + 1} (ID: {media.code}, Tipo: {media.media_type})...")
        try:
            if media.media_type == 1:
                cl.photo_download(media.pk, folder=cuenta_objetivo)
            elif media.media_type == 2:
                cl.video_download(media.pk, folder=cuenta_objetivo)
            elif media.media_type == 8:
                cl.album_download(media.pk, folder=cuenta_objetivo)
            else:
                print(f"Tipo de post no soportado ({media.media_type}), omitiendo...")
                continue
                
            contador += 1
            time.sleep(3) # Pausa de seguridad
        except Exception as ex:
            print(f"Error al descargar post {media.code}: {ex}")
            
    print("\n=============================================")
    print(f"Proceso terminado. Se descargaron {contador} posts.")
    print(f"Busca la carpeta '{cuenta_objetivo}' en tu proyecto.")
    print("=============================================")

except Exception as e:
    print(f"\n[ERROR] Ocurrio un error: {e}")
    print("\nNOTA DE CONFIGURACION:")
    print("1. Abre Firefox, entra a Instagram.com y asegurate de tener la sesion iniciada alli.")
    print("2. Cierra Firefox por completo antes de ejecutar este script para liberar los permisos de los archivos.")

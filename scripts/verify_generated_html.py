# -*- coding: utf-8 -*-
import os
import re

files = [
    'servicios-completo.html',
    'contacto-completo.html',
    'cotizador-completo.html',
    'sobre-nosotros-completo.html'
]

dir_path = r'docs\Nueva carpeta'

prohibited = [
    r'\ben 2 horas\b',
    r'\ben 3 hs\b',
    r'\bmenos de 2 h\b',
    r'\b60 a 90\b',
    r'\b15 kg\b',
    r'\bsin sorpresas\b'
]

all_ok = True

for f in files:
    full_path = os.path.join(dir_path, f)
    with open(full_path, 'r', encoding='utf-8') as fh:
        text = fh.read()
    print(f'Checking {f} ({len(text)} bytes):')
    for p in prohibited:
        matches = re.findall(p, text, re.IGNORECASE)
        if matches:
            print(f'  [VIOLATION] Found prohibited pattern "{p}": {matches}')
            all_ok = False

if all_ok:
    print('\nRESULTADO: TODAS LAS SALVAGUARDAS DE COPY PASARON EXITOSAMENTE (0 VIOLACIONES).')
else:
    print('\nRESULTADO: Hubo violaciones que deben corregirse.')

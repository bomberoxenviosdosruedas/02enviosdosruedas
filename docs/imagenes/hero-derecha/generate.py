"""Genera las imágenes de la columna derecha de los hero desde PROMPTS.md.

Uso:  python docs/imagenes/hero-derecha/generate.py [slug ...]
      python docs/imagenes/hero-derecha/generate.py --cutout-only [slug ...]
      python docs/imagenes/hero-derecha/generate.py --prompts docs/imagenes/hero-derecha/servicio-express.md [slug ...]
Requiere GEMINI_API_KEY, google-genai, Pillow y numpy.
"""

import io
import os
import re
import sys
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
CHROMA_DIR = HERE / "chroma"
OUT_DIR = ROOT / "public" / "img" / "heroes"
# Pro para finales 3D; HERO_IMAGE_MODEL=gemini-2.5-flash-image para iterar rápido.
MODEL = os.environ.get("HERO_IMAGE_MODEL", "gemini-3-pro-image-preview")
# Tinte magenta residual en renders 3D: R no puede superar a G por más de esto donde B > G.
SPILL_MARGIN = 24.0
DEFAULT_ASPECT = "4:3"

# Alfa: 0 si el píxel está a < T0 del chroma, 1 si está a > T1 (distancia RGB).
T0, T1 = 60.0, 140.0


def load_prompts(path: Path = HERE / "PROMPTS.md") -> dict[str, dict]:
    """slug -> {prompt, aspect, pending, refs} desde cada entrada `### slug` del archivo."""
    text = path.read_text(encoding="utf-8")
    pattern = re.compile(r"^### ([a-z0-9-]+)\s*$(.*?)```text\n(.*?)```", re.S | re.M)
    entries = {}
    for slug, meta, body in pattern.findall(text):
        aspect = re.search(r"\*\*Aspect ratio:\*\*\s*`(\d+:\d+)`", meta)
        refs_line = re.search(r"\*\*Referencias:\*\*(.*)", meta)
        entries[slug] = {
            "prompt": body.strip(),
            "aspect": aspect.group(1) if aspect else DEFAULT_ASPECT,
            "pending": "pendiente" in meta.lower(),
            # Imágenes de referencia en orden ("first reference image", ...), relativas a la raíz.
            "refs": [ROOT / r for r in re.findall(r"`([^`]+)`", refs_line.group(1))] if refs_line else [],
        }
    return entries


def generate(slug: str, prompt: str, aspect: str, refs: list[Path]) -> Path:
    from google import genai
    from google.genai import types

    images = []
    for ref in refs:
        with Image.open(ref) as im:
            images.append(im.convert("RGBA") if im.mode in ("P", "LA") else im.copy())

    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    response = client.models.generate_content(
        model=MODEL,
        contents=[*images, prompt],
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            image_config=types.ImageConfig(aspect_ratio=aspect),
        ),
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            path = CHROMA_DIR / f"{slug}.png"
            Image.open(io.BytesIO(part.inline_data.data)).convert("RGB").save(path)
            return path
    raise RuntimeError(f"{slug}: la respuesta no trae imagen")


def cutout(slug: str) -> None:
    rgb = np.asarray(Image.open(CHROMA_DIR / f"{slug}.png").convert("RGB")).astype(np.float32)
    h, w, _ = rgb.shape
    k = max(4, min(h, w) // 40)
    corners = np.concatenate([
        rgb[:k, :k].reshape(-1, 3), rgb[:k, -k:].reshape(-1, 3),
        rgb[-k:, :k].reshape(-1, 3), rgb[-k:, -k:].reshape(-1, 3),
    ])
    key = np.median(corners, axis=0)

    dist = np.linalg.norm(rgb - key, axis=2)
    alpha = np.clip((dist - T0) / (T1 - T0), 0.0, 1.0)

    # Despill: quitar la mezcla con el chroma en bordes semitransparentes.
    a = alpha[..., None]
    safe = np.where(a > 0, a, 1.0)
    unmixed = np.clip((rgb - (1.0 - a) * key) / safe, 0, 255)
    color = np.where(a < 1.0, unmixed, rgb)

    # Anti-tinte: azules con reflejo magenta tienden a violeta (R y B altos sobre G).
    r, g, b = color[..., 0], color[..., 1], color[..., 2]
    purple = (r > g + SPILL_MARGIN) & (b > g)
    color[..., 0] = np.where(purple, g + SPILL_MARGIN, r)

    rgba = np.dstack([color, alpha * 255.0]).round().astype(np.uint8)
    img = Image.fromarray(rgba, "RGBA")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    img.save(OUT_DIR / f"{slug}.png", optimize=True)
    img.save(OUT_DIR / f"{slug}.webp", quality=90, method=6)
    print(f"{slug}: chroma {key.round().astype(int).tolist()} -> {img.size}, "
          f"transparente {(alpha == 0).mean():.0%}")


def main() -> None:
    args = sys.argv[1:]
    prompts_file = HERE / "PROMPTS.md"
    if "--prompts" in args:
        i = args.index("--prompts")
        prompts_file = Path(args[i + 1]).resolve()
        del args[i:i + 2]
    cutout_only = "--cutout-only" in args
    slugs = [a for a in args if not a.startswith("--")]
    prompts = load_prompts(prompts_file)
    # Sin slugs explícitos se saltean las entradas pendientes (páginas sin hero 7/5).
    targets = slugs or [s for s, e in prompts.items() if not e["pending"]]
    CHROMA_DIR.mkdir(parents=True, exist_ok=True)
    failed = []
    for slug in targets:
        try:
            if not cutout_only:
                entry = prompts[slug]
                generate(slug, entry["prompt"], entry["aspect"], entry["refs"])
            cutout(slug)
        except Exception as exc:  # noqa: BLE001 — seguir con el resto
            failed.append(slug)
            print(f"{slug}: ERROR {exc}")
    if failed:
        sys.exit(f"Fallaron: {', '.join(failed)}")


if __name__ == "__main__":
    main()

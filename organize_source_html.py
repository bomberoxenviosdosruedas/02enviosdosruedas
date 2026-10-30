import runpy
from pathlib import Path

script_path = Path(__file__).resolve().parent / "scripts" / "organize_source_html.py"
runpy.run_path(str(script_path), run_name="__main__")

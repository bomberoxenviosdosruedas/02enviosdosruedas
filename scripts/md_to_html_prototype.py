#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""scripts/md_to_html_prototype.py
---------------------------------
Generador de prototipos HTML completos, autónomos y fieles a los documentos
consolidados en `source/paginas-md/*.md`.

Reglas y principios:
1. Lee y procesa exclusivamente el archivo Markdown consolidado (`source/paginas-md/home.md`).
2. Genera el contenido tal cual lo especifica `home.md`:
   - Encabezado con título, descripción y metadatos.
   - Tabla de Contenidos interactiva completa con los 36 archivos numerados.
   - Despliegue de los 36 bloques de código TSX/TS con sus anclas `#srcapp...`, roles y enlaces.
   - Integración visual del Prototipo Home (Page + Layout) con toggle accesible.
3. Cumple con las Web Interface Guidelines:
   - Semántica HTML5 (header, main, nav, section, footer, article).
   - Accesibilidad WCAG 2.1 AA (skip link, focus visible, contraste, aria-labels).
   - Voseo rioplatense en los textos dirigidos a humanos.
   - Cero dependencias rotas y etiquetas estrictamente cerradas.
"""

from __future__ import annotations

import argparse
import html as html_lib
import logging
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Final, Sequence

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger("md_to_html_prototype")

PROJECT_ROOT: Final[Path] = (
    Path(__file__).resolve().parent.parent
    if Path(__file__).resolve().parent.name == "scripts"
    else Path(__file__).resolve()
)

DEFAULT_MD_DIR: Final[Path] = PROJECT_ROOT / "source" / "paginas-md"
DEFAULT_PROTOTYPES_DIR: Final[Path] = DEFAULT_MD_DIR / "prototipos"

# --------------------------------------------------------------------------------------
# Modelos de Datos
# --------------------------------------------------------------------------------------

@dataclass(slots=True)
class MarkdownBlock:
    number: int
    relative_path: str
    role: str
    code: str
    extension: str

    @property
    def anchor_id(self) -> str:
        # Ancla idéntica a la generada en home.md: <a id="srcapplayouttsx"></a>
        return re.sub(r"[^a-z0-9]", "", self.relative_path.lower())


@dataclass(slots=True)
class ParsedPageContext:
    source_file: Path
    title: str
    route: str
    entrypoint: str
    description: str
    total_files: int
    blocks: list[MarkdownBlock] = field(default_factory=list)
    blocks_by_path: dict[str, MarkdownBlock] = field(default_factory=dict)

    @property
    def stem(self) -> str:
        return self.source_file.stem


# --------------------------------------------------------------------------------------
# Parser de Markdown Consolidado
# --------------------------------------------------------------------------------------

class MarkdownContextParser:
    _TITLE_RE = re.compile(r"^#\s+Contexto Consolidado:\s+([^(]+)\s+\(`([^`]+)`\)", re.MULTILINE)
    _DESC_RE = re.compile(r"^>\s+([^\n]+(?:\n>\s+[^\n]+)*)", re.MULTILINE)
    _ROUTE_RE = re.compile(r"^\*\s+\*\*Ruta de la página:\*\*\s+`([^`]+)`", re.MULTILINE)
    _ENTRY_RE = re.compile(r"^\*\s+\*\*Punto de entrada:\*\*\s+\[`([^`]+)`\]", re.MULTILINE)
    _COUNT_RE = re.compile(r"^\*\s+\*\*Cantidad total de archivos incluidos:\*\*\s+(\d+)", re.MULTILINE)

    _SECTION_HEADER_RE = re.compile(
        r"^##\s+(\d+)\.\s+`([^`]+)`\s*\n\*\s+\*\*Rol:\*\*\s+([^\n]+)\s*\n\*\s+\*\*Archivo:\*\*\s+[^\n]+\s*\n\n```(\w+)\n([\s\S]*?)\n```",
        re.MULTILINE,
    )

    @classmethod
    def parse(cls, md_path: Path) -> ParsedPageContext:
        if not md_path.is_file():
            raise FileNotFoundError(f"No existe el archivo markdown: {md_path}")

        raw_text = md_path.read_text(encoding="utf-8")

        title = "Home (Inicio)"
        route = "/"
        entrypoint = "src/app/page.tsx"
        description = "Documento generado automáticamente para referencia e integración completa."
        total_files = 36

        title_match = cls._TITLE_RE.search(raw_text)
        if title_match:
            title = title_match.group(1).strip()
            route = title_match.group(2).strip()

        desc_match = cls._DESC_RE.search(raw_text)
        if desc_match:
            lines = [line.lstrip("> ").strip() for line in desc_match.group(0).splitlines()]
            description = " ".join(lines)

        route_match = cls._ROUTE_RE.search(raw_text)
        if route_match:
            route = route_match.group(1).strip()

        entry_match = cls._ENTRY_RE.search(raw_text)
        if entry_match:
            entrypoint = entry_match.group(1).strip()

        count_match = cls._COUNT_RE.search(raw_text)
        if count_match:
            total_files = int(count_match.group(1))

        blocks: list[MarkdownBlock] = []
        blocks_by_path: dict[str, MarkdownBlock] = {}

        for match in cls._SECTION_HEADER_RE.finditer(raw_text):
            num = int(match.group(1))
            rel_path = match.group(2).strip().replace("\\", "/")
            role = match.group(3).strip()
            extension = match.group(4).strip()
            code = match.group(5)

            block = MarkdownBlock(
                number=num,
                relative_path=rel_path,
                role=role,
                code=code,
                extension=extension,
            )
            blocks.append(block)
            blocks_by_path[rel_path] = block

        return ParsedPageContext(
            source_file=md_path,
            title=title,
            route=route,
            entrypoint=entrypoint,
            description=description,
            total_files=total_files if total_files == len(blocks) else len(blocks),
            blocks=blocks,
            blocks_by_path=blocks_by_path,
        )


# --------------------------------------------------------------------------------------
# Generador HTML Completo y Fiel
# --------------------------------------------------------------------------------------

class HtmlPrototypeGenerator:
    """Genera el HTML que refleja el contenido exacto de home.md."""

    @classmethod
    def generate(cls, context: ParsedPageContext) -> str:
        # Generar Tabla de Contenidos interactiva
        toc_items = []
        for b in context.blocks:
            anchor = b.anchor_id
            toc_items.append(
                f"""          <li class="toc-item flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-brand-blue-50 border border-slate-200/80 hover:border-brand-blue-200 transition-all group" data-filter="{b.relative_path.lower()} {b.role.lower()}">
            <a href="#{anchor}" class="font-mono text-sm text-brand-blue hover:text-brand-blue-600 font-semibold flex items-center gap-2.5 truncate">
              <span class="w-6 text-xs text-brand-blue-400 font-bold shrink-0">#{b.number}</span>
              <span class="truncate">{html_lib.escape(b.relative_path)}</span>
            </a>
            <span class="text-2xs px-2.5 py-1 rounded-full bg-brand-blue-100 text-brand-blue font-sans font-bold uppercase tracking-wider shrink-0 ml-2">
              {html_lib.escape(b.role)}
            </span>
          </li>"""
            )
        toc_html = "\n".join(toc_items)

        # Generar bloques de código (36 archivos)
        block_articles = []
        for b in context.blocks:
            anchor = b.anchor_id
            escaped_code = html_lib.escape(b.code.strip())
            file_link = f"file:///{PROJECT_ROOT.as_posix()}/{b.relative_path}"
            
            block_articles.append(
                f"""      <!-- Bloque #{b.number}: {b.relative_path} -->
      <article id="{anchor}" class="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md">
        <a id="{anchor}"></a>
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3 mb-5">
          <div>
            <div class="flex items-center gap-2.5 mb-2">
              <span class="px-2.5 py-0.5 rounded-md bg-brand-yellow text-brand-blue font-mono text-xs font-bold shadow-xs">#{b.number}</span>
              <span class="text-xs font-mono font-semibold uppercase text-brand-blue-400 tracking-wider">{html_lib.escape(b.role)}</span>
            </div>
            <h3 class="font-mono text-lg sm:text-xl font-bold text-brand-blue flex items-center gap-2">
              <code>{html_lib.escape(b.relative_path)}</code>
            </h3>
          </div>
          
          <div class="flex items-center gap-3">
            <a href="{file_link}" target="_blank" rel="noopener noreferrer" 
               class="text-xs font-mono text-slate-500 hover:text-brand-blue bg-slate-100 hover:bg-brand-blue-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors">
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Abrir Archivo
            </a>
            <a href="#tabla-de-contenidos" 
               class="text-xs font-sans text-brand-blue-400 hover:text-brand-blue hover:underline inline-flex items-center gap-1">
              <i data-lucide="arrow-up" class="w-3.5 h-3.5"></i> Índice
            </a>
          </div>
        </div>

        <div class="relative group/code">
          <div class="absolute top-3 right-3 z-10 opacity-80 group-hover/code:opacity-100 transition-opacity">
            <button type="button" onclick="copyCode(this)" data-code-target="code-block-{b.number}"
                    class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 shadow-sm border border-slate-700 transition-colors">
              <i data-lucide="copy" class="w-3.5 h-3.5"></i> Copiar Código
            </button>
          </div>
          <pre id="code-block-{b.number}" class="bg-[#0f172a] text-[#f8fafc] p-4 sm:p-5 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto max-h-[500px] leading-relaxed border border-slate-800 selection:bg-brand-yellow selection:text-brand-blue"><code>{escaped_code}</code></pre>
        </div>
      </article>"""
            )
        catalog_html = "\n\n".join(block_articles)

        # Prototipo visual completo de la Home
        home_visual_preview = """
    <!-- PROTOTIPO VISUAL INTEGRADO: HOME (PAGE + LAYOUT) -->
    <div id="vista-prototipo-visual" class="hidden space-y-12 bg-white rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-sm">
      
      <div class="p-4 rounded-2xl bg-brand-blue-50 border border-brand-blue-200 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <span class="font-mono text-xs font-bold text-brand-blue uppercase">Vista Previa Interactiva del Layout y Page</span>
        </div>
        <span class="text-xs font-mono text-brand-blue-500/70">8 Secciones de page.tsx + OptimizedHeader + OptimizedFooter</span>
      </div>

      <!-- Header del prototipo visual -->
      <header class="rounded-2xl bg-white border border-brand-blue-100 p-4 flex items-center justify-between shadow-xs">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center font-display text-xl">2R</div>
          <div>
            <div class="font-display text-xl text-brand-blue leading-none">ENVÍOS DOSRUEDAS</div>
            <div class="font-mono text-2xs text-brand-blue/70">Mar del Plata • Flota Propia</div>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-brand-blue">
          <a href="#hero-animado-prev" class="hover:underline font-semibold">Inicio</a>
          <a href="#segmentos-prev" class="hover:underline">Soluciones</a>
          <a href="#servicios-prev" class="hover:underline">Servicios</a>
          <a href="#cobertura-prev" class="hover:underline">Cobertura 5 Radios</a>
        </nav>
        <a href="https://wa.me/5492235246756" target="_blank" rel="noopener noreferrer"
           class="px-5 py-2 rounded-full bg-brand-yellow text-brand-blue font-subheading text-lg font-bold uppercase hover:bg-brand-yellow-400 transition-colors">
          Cotizá por WhatsApp
        </a>
      </header>

      <!-- Hero del prototipo visual -->
      <section id="hero-animado-prev" class="py-16 px-6 sm:px-10 rounded-3xl bg-gradient-to-b from-brand-blue-50/70 via-white to-white border border-brand-blue-100 text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue text-xs font-mono font-bold uppercase">
          5 Radios de Cobertura en Mar del Plata • Base Friuli 1972
        </div>
        <h2 class="font-display text-4xl sm:text-6xl uppercase tracking-tight text-brand-blue leading-none max-w-4xl mx-auto">
          Logística Urbana y Mensajería en Moto
        </h2>
        <p class="font-sans text-base sm:text-lg text-brand-blue/80 max-w-2xl mx-auto leading-relaxed">
          Conectamos toda la ciudad con flota propia, sin intermediarios. Envíos Express en 3 hs, Mercado Envíos Flex en el día y tarifas transparentes.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="https://wa.me/5492235246756" target="_blank" rel="noopener noreferrer"
             class="px-8 py-4 rounded-full bg-brand-blue text-white font-subheading text-xl uppercase font-bold tracking-wider hover:bg-brand-blue-600 transition-colors shadow-elevated">
            Cotizá tu Envío Ahora
          </a>
          <a href="#cobertura-prev" class="px-6 py-4 rounded-full bg-white border border-brand-blue-200 text-brand-blue font-subheading text-xl uppercase font-bold hover:bg-brand-blue-50 transition-colors">
            Ver 5 Radios
          </a>
        </div>
      </section>

      <!-- Segmentos visuales -->
      <section id="segmentos-prev" class="space-y-6">
        <div class="text-center space-y-2">
          <span class="font-mono text-xs font-bold text-brand-blue uppercase bg-brand-blue-50 px-3 py-1 rounded-full">Segmentos</span>
          <h3 class="font-display text-3xl uppercase text-brand-blue">Soluciones a Medida</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-3">
            <h4 class="font-display text-xl uppercase text-brand-blue">Particulares & Trámites</h4>
            <p class="font-sans text-xs text-brand-blue/80">Cadetería rápida, trámites bancarios y encomiendas en franjas de 3 hs a elección.</p>
          </div>
          <div class="p-6 rounded-2xl bg-brand-blue-50/50 border-2 border-brand-yellow space-y-3">
            <h4 class="font-display text-xl uppercase text-brand-blue">Comercios & Flex</h4>
            <p class="font-sans text-xs text-brand-blue/80">Mercado Envíos Flex con retiro a las 15:00 hs y entrega garantizada en el día.</p>
          </div>
          <div class="p-6 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-3">
            <h4 class="font-display text-xl uppercase text-brand-blue">Empresas & Cta Cte</h4>
            <p class="font-sans text-xs text-brand-blue/80">Cuentas corrientes mensuales con Factura A, remitos conformados y gestor dedicado.</p>
          </div>
        </div>
      </section>

      <!-- Servicios visuales -->
      <section id="servicios-prev" class="space-y-6">
        <div class="text-center space-y-2">
          <span class="font-mono text-xs font-bold text-brand-blue uppercase bg-brand-blue-50 px-3 py-1 rounded-full">Servicios</span>
          <h3 class="font-display text-3xl uppercase text-brand-blue">Modalidades Operativas</h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-5 rounded-xl bg-white border border-brand-blue-100 space-y-2">
            <div class="font-mono text-xs font-bold text-brand-blue-400">01 / EXPRESS</div>
            <div class="font-display text-lg uppercase text-brand-blue">Envíos Express</div>
            <div class="text-xs text-brand-blue/70">Franja prioritaria de 3 horas.</div>
          </div>
          <div class="p-5 rounded-xl bg-white border-2 border-brand-yellow space-y-2">
            <div class="font-mono text-xs font-bold text-brand-blue-400">02 / FLEX</div>
            <div class="font-display text-lg uppercase text-brand-blue">Mercado Flex</div>
            <div class="text-xs text-brand-blue/70">Corte 15:00 hs, entrega en el día.</div>
          </div>
          <div class="p-5 rounded-xl bg-white border border-brand-blue-100 space-y-2">
            <div class="font-mono text-xs font-bold text-brand-blue-400">03 / SAME DAY</div>
            <div class="font-display text-lg uppercase text-brand-blue">Same Day</div>
            <div class="text-xs text-brand-blue/70">Despacho en el día planificado.</div>
          </div>
          <div class="p-5 rounded-xl bg-white border border-brand-blue-100 space-y-2">
            <div class="font-mono text-xs font-bold text-brand-blue-400">04 / LOWCOST</div>
            <div class="font-display text-lg uppercase text-brand-blue">Reparto LowCost</div>
            <div class="text-xs text-brand-blue/70">Tarifa ultra económica en 24 hs.</div>
          </div>
        </div>
      </section>

      <!-- Cobertura 5 Radios visual -->
      <section id="cobertura-prev" class="p-8 rounded-3xl bg-brand-blue text-white space-y-6">
        <div class="space-y-2">
          <span class="font-mono text-xs font-bold text-brand-yellow uppercase">Base Friuli 1972</span>
          <h3 class="font-display text-3xl uppercase text-white">5 Radios de Cobertura en Mar del Plata</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
          <div class="p-3 rounded-xl bg-white/10"><strong>Radio 1:</strong> Centro, Macrocentro, La Perla</div>
          <div class="p-3 rounded-xl bg-white/10"><strong>Radio 2:</strong> Puerto, Playa Grande, Constitución</div>
          <div class="p-3 rounded-xl bg-white/10"><strong>Radio 3:</strong> Mogotes, Bosque Peralta Ramos</div>
          <div class="p-3 rounded-xl bg-white/10"><strong>Radio 4:</strong> Batán, Sierra de los Padres</div>
          <div class="p-3 rounded-xl bg-white/10"><strong>Radio 5:</strong> Santa Clara, Chapadmalal</div>
        </div>
      </section>

      <!-- Footer visual -->
      <footer class="p-8 rounded-2xl bg-brand-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div>© 2026 Envíos DosRuedas • Friuli 1972, Mar del Plata • +54 9 223 524-6756</div>
        <div class="text-brand-yellow">Flota Propia en Moto • Sin Tercerización</div>
      </footer>

    </div>
"""

        # Ensamble de la página HTML completa
        full_html = f"""<!DOCTYPE html>
<html lang="es" class="scroll-smooth" data-scroll-behavior="smooth">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contexto Consolidado: {html_lib.escape(context.title)} ({html_lib.escape(context.route)}) — Envíos DosRuedas</title>
  <meta name="description" content="{html_lib.escape(context.description)}">
  <meta name="author" content="Envíos DosRuedas">
  <meta name="robots" content="noindex, nofollow">

  <!-- Tipografías Oficiales de Envíos DosRuedas -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Geist+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN Oficial -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Tokens de Marca Oficiales según AGENTS.md -->
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          colors: {{
            brand: {{
              blue: '#0950F6',
              'blue-50': '#E6EEFE',
              'blue-100': '#BACEFD',
              'blue-200': '#8EAFFB',
              'blue-300': '#628FF9',
              'blue-400': '#3570F8',
              'blue-500': '#0950F6',
              'blue-600': '#0840c4',
              'blue-900': '#06287c',
              yellow: '#FFEC01',
              'yellow-50': '#FFFDE6',
              'yellow-100': '#FFFAB8',
              'yellow-200': '#FFF78A',
              'yellow-300': '#FFF45C',
              'yellow-400': '#FFF12E',
              'yellow-500': '#FFEC01',
              'yellow-600': '#E6D400',
              ink: '#0950F6',
              white: '#FFFFFF',
            }}
          }},
          fontSize: {{
            '2xs': ['0.625rem', {{ lineHeight: '0.75rem' }}],
          }},
          fontFamily: {{
            sans: ['Outfit', 'sans-serif'],
            display: ['Anton', 'sans-serif'],
            subheading: ['Bebas Neue', 'sans-serif'],
            mono: ['Geist Mono', 'monospace'],
          }},
          boxShadow: {{
            'float': '0 25px 50px -12px rgba(9, 80, 246, 0.15)',
            'elevated': '0 16px 40px rgba(9, 80, 246, 0.18)',
            'cta-glow': '0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)',
          }}
        }}
      }}
    }}
  </script>

  <style>
    .font-display {{ font-family: 'Anton', sans-serif; letter-spacing: -0.025em; text-transform: uppercase; }}
    .font-subheading {{ font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em; text-transform: uppercase; }}
    .font-mono {{ font-family: 'Geist Mono', monospace; font-variant-numeric: tabular-nums; }}
  </style>
</head>

<body class="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col selection:bg-brand-yellow selection:text-brand-blue">

  <!-- Saltar al contenido principal (Accesibilidad WCAG 2.1 AA) -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-brand-yellow focus:text-brand-blue focus:font-bold focus:rounded-lg shadow-lg">
    Saltar al contenido principal
  </a>

  <!-- BARRA DE NAVEGACIÓN SUPERIOR PERSISTENTE -->
  <aside aria-label="Navegación del Documento" class="sticky top-0 z-50 bg-[#06287c] text-white py-2.5 px-4 shadow-md border-b border-brand-yellow/30">
    <div class="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
      <div class="flex items-center gap-3">
        <span class="px-2.5 py-0.5 rounded-full bg-brand-yellow text-brand-blue font-bold uppercase tracking-wider">
          CONTEXTO ACTIVO
        </span>
        <span class="hidden sm:inline font-sans font-medium text-white/90">
          <strong>{html_lib.escape(context.source_file.name)}</strong> ({context.total_files} Componentes)
        </span>
      </div>

      <div class="flex items-center gap-3">
        <button id="toggle-view-btn" type="button" onclick="toggleMainView()"
                class="px-3 py-1 rounded-full bg-brand-yellow text-brand-blue font-bold font-sans hover:bg-brand-yellow-400 transition-colors flex items-center gap-1.5 shadow-xs">
          <i data-lucide="eye" class="w-3.5 h-3.5"></i>
          <span id="toggle-view-text">Ver Prototipo Visual</span>
        </button>
        <a href="#tabla-de-contenidos" class="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1">
          <i data-lucide="list" class="w-3.5 h-3.5 text-brand-yellow"></i>
          <span>Índice (#1 a #{context.total_files})</span>
        </a>
      </div>
    </div>
  </aside>

  <!-- CONTENIDO PRINCIPAL -->
  <main id="main-content" class="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-12">

    <!-- ====================================================================
         1. ENCABEZADO OFICIAL DE CONTEXTO CONSOLIDADO (home.md)
         ==================================================================== -->
    <header class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <i data-lucide="file-code" class="w-4 h-4"></i> Contexto Consolidado de Página
          </div>
          <h1 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-brand-blue">
            Contexto Consolidado: {html_lib.escape(context.title)} (<code class="text-brand-blue-600 font-mono">{html_lib.escape(context.route)}</code>)
          </h1>
        </div>

        <div class="flex items-center gap-3">
          <div class="text-right hidden sm:block font-mono text-xs">
            <div class="text-slate-400">Total Componentes</div>
            <div class="text-xl font-bold text-brand-blue">{context.total_files} Archivos</div>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-brand-blue text-brand-yellow font-display text-2xl flex items-center justify-center shadow-xs">
            {context.total_files}
          </div>
        </div>
      </div>

      <!-- Blockquote Oficial -->
      <blockquote class="p-4 sm:p-5 rounded-2xl bg-brand-blue-50/60 border-l-4 border-brand-blue text-brand-blue/90 font-sans text-sm sm:text-base leading-relaxed">
        {html_lib.escape(context.description)}
      </blockquote>

      <!-- Metadatos de la Página -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <span class="text-slate-400 block mb-1">Ruta de la página:</span>
          <span class="font-bold text-brand-blue text-sm">{html_lib.escape(context.route)}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <span class="text-slate-400 block mb-1">Punto de entrada:</span>
          <span class="font-bold text-brand-blue text-sm truncate block">{html_lib.escape(context.entrypoint)}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <span class="text-slate-400 block mb-1">Archivos consolidados:</span>
          <span class="font-bold text-brand-blue text-sm">{context.total_files} bloques TSX / TS</span>
        </div>
      </div>
    </header>

    <!-- ====================================================================
         2. TABLA DE CONTENIDOS INTERACTIVA (#1 AL #36)
         ==================================================================== -->
    <section id="tabla-de-contenidos" aria-labelledby="toc-title" class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 scroll-mt-20">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 id="toc-title" class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue flex items-center gap-2.5">
            <i data-lucide="list-ordered" class="w-6 h-6 text-brand-yellow-600"></i>
            Tabla de Contenidos ({context.total_files} Archivos)
          </h2>
          <p class="font-sans text-xs sm:text-sm text-slate-500 mt-1">
            Hacé clic en cualquier componente para saltar directamente a su código fuente TSX.
          </p>
        </div>

        <!-- Buscador en tiempo real de componentes -->
        <div class="relative w-full sm:w-72">
          <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input type="text" id="toc-search" placeholder="Filtrar componentes..." oninput="filterToc(this.value)"
                 class="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-blue">
        </div>
      </div>

      <!-- Lista Interactiva de los 36 elementos -->
      <nav aria-label="Índice de componentes">
        <ol id="toc-list" class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
{toc_html}
        </ol>
      </nav>
    </section>

    <!-- ====================================================================
         3. PROTOTIPO VISUAL INTEGRADO (OCULTO/VISIBLE POR TOGGLE)
         ==================================================================== -->
    {home_visual_preview}

    <!-- ====================================================================
         4. CATÁLOGO COMPLETO DE LOS 36 BLOQUES DE CÓDIGO (home.md)
         ==================================================================== -->
    <section id="catalogo-bloques" class="space-y-8">
      <div class="flex items-center justify-between border-b border-slate-200 pb-4">
        <h2 class="font-display text-2xl uppercase tracking-tight text-brand-blue flex items-center gap-2.5">
          <i data-lucide="code-2" class="w-6 h-6 text-brand-blue-400"></i>
          Código Fuente Consolidado (#1 al #{context.total_files})
        </h2>
        <span class="text-xs font-mono text-slate-400 font-semibold uppercase">
          {context.total_files} Archivos TSX/TS
        </span>
      </div>

      <div class="space-y-8">
{catalog_html}
      </div>
    </section>

  </main>

  <!-- FOOTER INFORMATIVO -->
  <footer class="bg-white border-t border-slate-200 py-8 text-center text-xs font-mono text-slate-500 mt-16">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div>Envíos DosRuedas • Mar del Plata • Prototipo Consolidado Generado desde <code class="font-bold text-brand-blue">source/paginas-md/home.md</code></div>
      <div>Base física: Friuli 1972, Mar del Plata • Flota propia sin tercerización</div>
    </div>
  </footer>

  <!-- SCRIPT DE INTERACTIVIDAD (LUCIDE, FILTRO TOC, COPIAR Y VISTA PREVIA) -->
  <script>
    // Inicializar Lucide Icons
    if (window.lucide) {{
      window.lucide.createIcons();
    }}

    // Filtrar Tabla de Contenidos
    function filterToc(query) {{
      const term = query.toLowerCase().trim();
      const items = document.querySelectorAll('.toc-item');
      items.forEach(item => {{
        const text = item.getAttribute('data-filter') || '';
        item.style.display = text.includes(term) ? '' : 'none';
      }});
    }}

    // Copiar código al portapapeles
    function copyCode(btn) {{
      const targetId = btn.getAttribute('data-code-target');
      const el = document.getElementById(targetId);
      if (!el) return;
      const text = el.innerText || el.textContent;
      navigator.clipboard.writeText(text).then(() => {{
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-green-400"></i> Copiado!';
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {{
          btn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }}, 2000);
      }}).catch(err => {{
        console.error('Error al copiar:', err);
      }});
    }}

    // Alternar entre Vista Documento y Vista Prototipo Visual
    function toggleMainView() {{
      const preview = document.getElementById('vista-prototipo-visual');
      const btnText = document.getElementById('toggle-view-text');
      if (!preview || !btnText) return;
      
      const isHidden = preview.classList.contains('hidden');
      if (isHidden) {{
        preview.classList.remove('hidden');
        btnText.textContent = 'Ocultar Prototipo Visual';
        preview.scrollIntoView({{ behavior: 'smooth' }});
      }} else {{
        preview.classList.add('hidden');
        btnText.textContent = 'Ver Prototipo Visual';
      }}
    }}
  </script>

</body>
</html>
"""
        return full_html


# --------------------------------------------------------------------------------------
# CLI
# --------------------------------------------------------------------------------------

def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generador de prototipos HTML completos desde Markdown consolidado."
    )
    parser.add_argument(
        "--file",
        type=str,
        default="home.md",
        help="Archivo Markdown a procesar dentro de source/paginas-md/ (defecto: home.md)",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_PROTOTYPES_DIR,
        help="Directorio de destino para los prototipos HTML",
    )
    return parser.parse_args(argv)


def main(argv: Sequence[str] | None = None) -> int:
    args = parse_args(argv)
    output_dir: Path = args.output_dir
    output_dir.mkdir(parents=True, exist_ok=True)

    target = DEFAULT_MD_DIR / args.file
    if not target.is_file():
        target = Path(args.file)
    if not target.is_file():
        logger.error(f"Error: no se encontró el archivo {args.file} en {DEFAULT_MD_DIR}")
        return 1

    logger.info(f"Procesando: {target.name}...")
    context = MarkdownContextParser.parse(target)
    logger.info(f"Ruta: {context.route} | Título: {context.title}")
    logger.info(f"Bloques extraídos de {target.name}: {len(context.blocks)}")

    html_output = HtmlPrototypeGenerator.generate(context)

    destination = output_dir / f"{context.stem}.html"
    destination.write_text(html_output, encoding="utf-8")
    logger.info(f"✓ Prototipo y Catálogo generado con éxito: {destination} ({len(html_output)} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())

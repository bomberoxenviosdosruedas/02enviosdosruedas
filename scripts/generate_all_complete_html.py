# -*- coding: utf-8 -*-
"""
Generador integral de los 4 archivos HTML completos y autónomos:
1. servicios-completo.html
2. contacto-completo.html
3. cotizador-completo.html
4. sobre-nosotros-completo.html

Ubicación de destino: docs/Nueva carpeta/
"""

import os
import re

BASE_DIR = r"C:\Users\prest\proyectos\02enviosdosruedassetiembre"
HOME_HTML_PATH = os.path.join(BASE_DIR, "docs", "Nueva carpeta", "home-completo.html")
OUTPUT_DIR = os.path.join(BASE_DIR, "docs", "Nueva carpeta")

with open(HOME_HTML_PATH, "r", encoding="utf-8") as f:
    home_html = f.read()

# 1. Extraer bloque de estilos inlined
style_match = re.search(r'<style id="inlined-site-styles">.*?</style>', home_html, re.DOTALL)
if not style_match:
    raise RuntimeError("No se encontró inlined-site-styles")
INLINED_STYLES = style_match.group(0)

# 2. Extraer el header
header_match = re.search(r'<header.*?</header>', home_html, re.DOTALL)
BASE_HEADER = header_match.group(0)

# 3. Extraer el drawer móvil si existe
drawer_match = re.search(r'(<!-- Mobile Menu Drawer -->.*?<!-- End Mobile Menu Drawer -->|<div[^>]*id="mobile-drawer".*?</div>\s*</div>)', home_html, re.DOTALL)
BASE_DRAWER = drawer_match.group(0) if drawer_match else ""

# 4. Extraer el footer
footer_match = re.search(r'<footer.*?</footer>', home_html, re.DOTALL)
BASE_FOOTER = footer_match.group(0)

def render_page(title, description, canonical, json_ld, active_nav, main_content, extra_js=""):
    hdr = BASE_HEADER
    if active_nav == "servicios":
        hdr = hdr.replace('href="/servicios"', 'href="/servicios" aria-current="page" class="px-4 py-2.5 rounded-xl text-base font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold"')
    elif active_nav == "contacto":
        hdr = hdr.replace('href="/contacto"', 'href="/contacto" aria-current="page" class="px-4 py-2.5 rounded-xl text-base font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold"')
    elif active_nav == "cotizar":
        hdr = hdr.replace('href="/cotizar"', 'href="/cotizar" aria-current="page" class="px-4 py-2.5 rounded-xl text-base font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold"')
    elif active_nav == "nosotros":
        hdr = hdr.replace('href="/nosotros/sobre-nosotros"', 'href="/nosotros/sobre-nosotros" aria-current="page" class="px-4 py-2.5 rounded-xl text-base font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold"')

    template = """<!DOCTYPE html>
<html lang="es" class="outfit_352537e7-module__OP6NZW__variable anton_9490a88b-module__7WFhHG__variable bebas_neue_bbea6fe1-module__H_MGqW__variable geist_mono_5209f050-module__lwqvDa__variable scroll-smooth" data-scroll-behavior="smooth">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="preconnect" href="https://api.whatsapp.com"/>
<title>__TITLE__</title>
<meta name="description" content="__DESCRIPTION__"/>
<meta name="author" content="Envíos DosRuedas"/>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="__CANONICAL__"/>
<meta property="og:title" content="__TITLE__"/>
<meta property="og:description" content="__DESCRIPTION__"/>
<meta property="og:url" content="__CANONICAL__"/>
<meta property="og:locale" content="es_AR"/>
<meta property="og:image" content="https://www.enviosdosruedas.com/og-image.jpg"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="__TITLE__"/>
<meta name="twitter:description" content="__DESCRIPTION__"/>
<meta name="twitter:image" content="https://www.enviosdosruedas.com/og-image.jpg"/>
<script type="application/ld+json">
__JSON_LD__
</script>
__INLINED_STYLES__
<style>
/* Reglas de soporte visual y animaciones */
.revealed { opacity: 1 !important; transform: none !important; }
.card-scale:hover { transform: translateY(-4px); transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
.active-tab { background-color: #FFEC01 !important; color: #0950F6 !important; border-color: #FFEC01 !important; }
</style>
</head>
<body class="bg-white text-brand-blue-500 font-sans antialiased selection:bg-brand-yellow-500 selection:text-brand-blue-500">
<!-- Canvas procedural de fondo -->
<canvas id="hero-canvas" class="fixed inset-0 pointer-events-none z-0 opacity-40" aria-hidden="true"></canvas>

<div class="relative z-10 flex min-h-screen flex-col">
__HEADER__
__DRAWER__

<main id="main-content" class="grow pt-20">
__MAIN__
</main>

__FOOTER__
</div>

<script>
(function() {
  'use strict';

  // 1. Reveal elements con estilo de opacidad
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]').forEach(el => observer.observe(el));

  // 2. Header Sticky Glassmorphism
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-md', 'backdrop-blur-md');
    } else {
      header?.classList.remove('shadow-md', 'backdrop-blur-md');
    }
  }, { passive: true });

  // 3. Mobile Drawer Toggle
  const mobileBtn = document.querySelector('header button[aria-label*="menú"], header button[aria-label*="Menú"], header button[aria-expanded]');
  const mobileDrawer = document.getElementById('mobile-drawer') || document.querySelector('[role="dialog"]');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('hidden', 'translate-x-full');
      mobileDrawer.classList.add('translate-x-0');
    }
    if (drawerBackdrop) drawerBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('translate-x-full');
      setTimeout(() => mobileDrawer.classList.add('hidden'), 250);
    }
    if (drawerBackdrop) drawerBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  mobileBtn?.addEventListener('click', () => {
    const isHidden = mobileDrawer?.classList.contains('hidden');
    if (isHidden) openDrawer(); else closeDrawer();
  });
  closeDrawerBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  // 4. Dropdowns Desktop
  const navDropdownTriggers = document.querySelectorAll('header div.relative');
  navDropdownTriggers.forEach(div => {
    const menu = div.querySelector('div[role="menu"], ul, div.absolute');
    if (menu) {
      div.addEventListener('mouseenter', () => {
        menu.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
        menu.classList.add('opacity-100');
      });
      div.addEventListener('mouseleave', () => {
        menu.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => menu.classList.add('hidden'), 150);
      });
    }
  });

  // 5. Back to top button
  const backToTopBtn = document.querySelector('footer button[aria-label="Volver arriba"]');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 6. Canvas de fondo procedural liviano
  const canvas = document.getElementById('hero-canvas');
  if (canvas && window.innerWidth > 640) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(9, 80, 246, 0.2)' : 'rgba(255, 236, 1, 0.25)'
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });
  }

  __EXTRA_JS__
})();
</script>
</body>
</html>"""

    full_html = template.replace("__TITLE__", title) \
                        .replace("__DESCRIPTION__", description) \
                        .replace("__CANONICAL__", canonical) \
                        .replace("__JSON_LD__", json_ld) \
                        .replace("__INLINED_STYLES__", INLINED_STYLES) \
                        .replace("__HEADER__", hdr) \
                        .replace("__DRAWER__", BASE_DRAWER) \
                        .replace("__MAIN__", main_content) \
                        .replace("__FOOTER__", BASE_FOOTER) \
                        .replace("__EXTRA_JS__", extra_js)
    return full_html
    return full_html


# ==============================================================================
# 1. SERVICIOS (servicios-completo.html)
# ==============================================================================
servicios_json_ld = """{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicios de Logística y Mensajería Envíos DosRuedas",
  "description": "Envíos Express en franja de 3 hs, LowCost en el día, Mercado Envíos Flex, Cuenta Corriente Flexible y E-commerce con stock en depósito.",
  "url": "https://www.enviosdosruedas.com/servicios",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Envíos DosRuedas",
    "telephone": "+54-223-660-2699",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Friuli 1972",
      "addressLocality": "Mar del Plata",
      "addressCountry": "AR"
    }
  }
}"""

servicios_main = """
<!-- Hero Servicios -->
<section class="relative bg-brand-blue-500 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-brand-blue-400">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest -rotate-1 shadow-glow-yellow">
      <span class="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse"></span>
      Flota Propia · Tarifas Transparentes 2026
    </div>
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-tight max-w-5xl mx-auto">
      SERVICIOS DE LOGÍSTICA Y MENSAJERÍA EN MAR DEL PLATA
    </h1>
    <p class="font-sans text-base sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
      Desde encomiendas prioritarias con franja horaria a elección hasta fulfillment e-commerce con stock en Friuli 1972. Cada servicio cuenta con SLA garantizado, remito digital y trazabilidad directa por WhatsApp.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
      <a href="/cotizar" class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-6 py-3 font-subheading text-sm uppercase tracking-wider text-brand-blue-500 transition-all hover:bg-brand-yellow-400 hover:shadow-lg font-bold">
        Cotizá online en segundos
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-500 text-brand-yellow-500 text-xs">→</span>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20consultar%20por%20los%20servicios%20de%20mensajer%C3%ADa." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-subheading text-sm uppercase tracking-wider text-white transition-all hover:bg-white/20">
        Escribinos por WhatsApp
      </a>
    </div>
  </div>
</section>

<!-- Filtros interactivos -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist" aria-label="Filtrar servicios">
    <button class="filter-tab active-tab px-4 py-2 rounded-full border border-brand-blue-200 text-xs sm:text-sm font-subheading uppercase tracking-wider transition-colors" data-filter="all">
      Todos los servicios (6)
    </button>
    <button class="filter-tab px-4 py-2 rounded-full border border-brand-blue-200 bg-brand-blue-50 text-brand-blue-500 text-xs sm:text-sm font-subheading uppercase tracking-wider transition-colors hover:bg-brand-blue-100" data-filter="urgencias">
      Urgencias y Trámites
    </button>
    <button class="filter-tab px-4 py-2 rounded-full border border-brand-blue-200 bg-brand-blue-50 text-brand-blue-500 text-xs sm:text-sm font-subheading uppercase tracking-wider transition-colors hover:bg-brand-blue-100" data-filter="ecommerce">
      E-Commerce & MercadoLibre
    </button>
    <button class="filter-tab px-4 py-2 rounded-full border border-brand-blue-200 bg-brand-blue-50 text-brand-blue-500 text-xs sm:text-sm font-subheading uppercase tracking-wider transition-colors hover:bg-brand-blue-100" data-filter="empresas">
      Empresas & Depósito
    </button>
  </div>
</section>

<!-- Catálogo Grid de Servicios -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">

    <!-- 1. Express -->
    <article class="service-card card-scale rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between" data-category="urgencias">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider border border-brand-yellow-500/40">
              PRIORIDAD 1
            </span>
            <span class="font-mono text-xs text-white/70">Hasta 5 kg</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            ENVÍOS EXPRESS
          </h2>
          <p class="font-sans text-sm text-white/85 leading-relaxed">
            Mensajería prioritaria en moto con franja horaria de 3 horas a tu elección. Ideal para trámites urgentes, repuestos, documentos y paquetes que no pueden demorarse.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500">Tarifa base (0-3 km)</span>
              <span class="font-mono text-xl font-bold text-brand-yellow-500 tabular-nums">$3.700</span>
            </div>
            <p class="font-sans text-2xs text-white/75">Corte 15:00 hs con al menos 2 hs de anticipación.</p>
          </div>
          <ul class="space-y-2 text-xs font-sans text-white/90">
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Franja horaria de 3 hs (ej. 10 a 13 hs)</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Medida estándar hasta 40 x 40 x 30 cm</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Ruteo directo sin paradas innecesarias</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Comprobante digital por WhatsApp</li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15">
          <a href="/cotizar" class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-5 py-2.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Cotizar Express
            <span>→</span>
          </a>
        </div>
      </div>
    </article>

    <!-- 2. LowCost -->
    <article class="service-card card-scale rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between" data-category="ecommerce">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider border border-brand-yellow-500/40">
              MÁS ECONÓMICO
            </span>
            <span class="font-mono text-xs text-white/70">Hasta 5 kg</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            ENVÍOS LOWCOST
          </h2>
          <p class="font-sans text-sm text-white/85 leading-relaxed">
            Reparto programado económico en el día, sin selección de horario. La mejor relación costo-beneficio para emprendedores y comercios con envíos diarios.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500">Tarifa base (0-3 km)</span>
              <span class="font-mono text-xl font-bold text-brand-yellow-500 tabular-nums">$3.000</span>
            </div>
            <p class="font-sans text-2xs text-white/75">Corte 13:00 hs · Entrega antes de las 19:00 hs.</p>
          </div>
          <ul class="space-y-2 text-xs font-sans text-white/90">
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Entrega garantizada en el día</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Tarifa individual por distancia</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Hasta 5 kg o 40 x 40 x 30 cm</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Sin mínimos de paquetes</li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15">
          <a href="/cotizar" class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-5 py-2.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Cotizar LowCost
            <span>→</span>
          </a>
        </div>
      </div>
    </article>

    <!-- 3. Flex -->
    <article class="service-card card-scale rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between" data-category="ecommerce">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider border border-brand-yellow-500/40">
              MERCADOLIBRE
            </span>
            <span class="font-mono text-xs text-white/70">SLA 99.8%</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            MERCADO ENVÍOS FLEX
          </h2>
          <p class="font-sans text-sm text-white/85 leading-relaxed">
            Logística especializada para MercadoLíderes. Entregas en el día con acuse fotográfico y firma digital. Cuidamos tu medalla y reputación en la plataforma.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500">Tarifa Nivel 1</span>
              <span class="font-mono text-xl font-bold text-brand-yellow-500 tabular-nums">$3.000</span>
            </div>
            <p class="font-sans text-2xs text-white/75">Corte 15:00 hs · Entrega antes de las 20:00 hs.</p>
          </div>
          <ul class="space-y-2 text-xs font-sans text-white/90">
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> 100% entregas Same-Day antes de 20 hs</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Múltiples retiros diarios en tu local</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Segunda visita bonificada</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Escaneo QR y comprobante con foto</li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15">
          <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Tengo%20cuenta%20en%20MercadoLibre%20y%20quiero%20activar%20Flex." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-5 py-2.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Activar Mercado Flex
            <span>→</span>
          </a>
        </div>
      </div>
    </article>

    <!-- 4. Cuenta Corriente -->
    <article class="service-card card-scale rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between" data-category="empresas">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider border border-brand-yellow-500/40">
              EMPRESAS Y PYMES
            </span>
            <span class="font-mono text-xs text-white/70">Sin mínimos</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            CUENTA CORRIENTE FLEXIBLE
          </h2>
          <p class="font-sans text-sm text-white/85 leading-relaxed">
            Tu equipo de cadetería externa sin costos fijos. Tarifas LowCost con franja de 3 hs como en Express y facturación semanal, quincenal o mensual consolidada.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500">Tarifa preferencial</span>
              <span class="font-mono text-xl font-bold text-brand-yellow-500 tabular-nums">Tarifas LowCost</span>
            </div>
            <p class="font-sans text-2xs text-white/75">Franja de 3 hs con corte 15:00 hs para clientes de cuenta.</p>
          </div>
          <ul class="space-y-2 text-xs font-sans text-white/90">
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Liquidación semanal, quincenal o mensual</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Paga el remitente o el destinatario</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Cobranza contrareembolso sin comisión</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Canal prioritario por WhatsApp</li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15">
          <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quisiera%20abrir%20una%20cuenta%20corriente%20para%20mi%20empresa." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-5 py-2.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Solicitar Cuenta Corriente
            <span>→</span>
          </a>
        </div>
      </div>
    </article>

    <!-- 5. E-Commerce 24hs -->
    <article class="service-card card-scale rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between" data-category="ecommerce">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider border border-brand-yellow-500/40">
              NEXT DAY
            </span>
            <span class="font-mono text-xs text-white/70">Mar del Plata</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            E-COMMERCE 24HS
          </h2>
          <p class="font-sans text-sm text-white/85 leading-relaxed">
            Se retira hoy en tu comercio o depósito y se entrega al día hábil siguiente en cualquier punto de Mar del Plata. Recolección bonificada desde 10 envíos.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500">Tarifa plana</span>
              <span class="font-mono text-xl font-bold text-brand-yellow-500 tabular-nums">$4.000</span>
            </div>
            <p class="font-sans text-2xs text-white/75">DropOFF en Friuli 1972: 20% OFF ($3.200).</p>
          </div>
          <ul class="space-y-2 text-xs font-sans text-white/90">
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Entrega en 24 hs hábiles garantizada</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Recolección gratis a partir de 10 bultos</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Descuento directo entregando en base</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Rendición de cobros al día siguiente</li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15">
          <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20coordinar%20env%C3%ADos%20E-Commerce%2024hs." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-5 py-2.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Consultar Plan 24hs
            <span>→</span>
          </a>
        </div>
      </div>
    </article>

    <!-- 6. E-Commerce Same-Day -->
    <article class="service-card card-scale rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100 flex flex-col justify-between" data-category="empresas">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider border border-brand-yellow-500/40">
              STOCK EN DEPÓSITO
            </span>
            <span class="font-mono text-xs text-white/70">Fulfillment</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            E-COMMERCE SAME-DAY
          </h2>
          <p class="font-sans text-sm text-white/85 leading-relaxed">
            Dejás stock en nuestra base de Friuli 1972 con picking QR. Tus ventas hasta las 15:00 hs se despachan y entregan en el día con tarifa plana para toda la ciudad.
          </p>
          <div class="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div class="flex items-baseline justify-between">
              <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500">Tarifa fija por despacho</span>
              <span class="font-mono text-xl font-bold text-brand-yellow-500 tabular-nums">$6.000</span>
            </div>
            <p class="font-sans text-2xs text-white/75">Ventas hasta 15:00 hs se entregan antes de 20:00 hs.</p>
          </div>
          <ul class="space-y-2 text-xs font-sans text-white/90">
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Almacenamiento seguro en Friuli 1972</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Picking y empaque profesional incluido</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Tarifa fija a toda la ciudad de Mar del Plata</li>
            <li class="flex items-center gap-2"><span class="text-brand-yellow-500 font-bold">✓</span> Control de inventario en tiempo real</li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15">
          <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Me%20interesa%20almacenar%20stock%20en%20su%20dep%C3%B3sito%20y%20hacer%20Same-Day." target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow-500 px-5 py-2.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Consultar Depósito y Fulfillment
            <span>→</span>
          </a>
        </div>
      </div>
    </article>

  </div>
</section>

<!-- Tabla Comparativa -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="space-y-4 mb-8 text-center sm:text-left">
    <span class="inline-block px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase tracking-widest border border-brand-blue-100">
      Comparativa 2026
    </span>
    <h2 class="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-500">
      COMPARÁ LOS 6 SERVICIOS DE UN VISTAZO
    </h2>
    <p class="font-sans text-brand-blue-400 text-sm sm:text-base max-w-2xl">
      Elegí según tu urgencia, tu presupuesto y la necesidad de tus clientes. Todos cuentan con comprobante y seguimiento.
    </p>
  </div>

  <div class="overflow-x-auto rounded-3xl border border-brand-blue-100 bg-brand-blue-50/40 p-2 shadow-sm">
    <table class="w-full min-w-160 text-left border-collapse bg-white rounded-2xl overflow-hidden">
      <thead>
        <tr class="bg-brand-blue-500 text-white font-subheading text-xs uppercase tracking-wider">
          <th class="p-4">Característica</th>
          <th class="p-4 text-brand-yellow-500 font-bold">Express</th>
          <th class="p-4">LowCost</th>
          <th class="p-4">Flex (ML)</th>
          <th class="p-4">Cta. Cte.</th>
          <th class="p-4">E-Com 24hs</th>
          <th class="p-4">Same-Day</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-brand-blue-100 text-xs font-sans text-brand-blue-500">
        <tr class="hover:bg-brand-blue-50/60">
          <td class="p-4 font-bold">Tiempo de entrega</td>
          <td class="p-4 text-brand-blue-500 font-bold bg-brand-yellow-500/10">Franja de 3 hs</td>
          <td class="p-4">Hasta las 19:00 hs</td>
          <td class="p-4">Hasta las 20:00 hs</td>
          <td class="p-4">Franja de 3 hs</td>
          <td class="p-4">Día hábil siguiente</td>
          <td class="p-4">Antes de 20:00 hs</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/60">
          <td class="p-4 font-bold">Horario de corte</td>
          <td class="p-4 bg-brand-yellow-500/10">15:00 hs (2h ant.)</td>
          <td class="p-4">13:00 hs</td>
          <td class="p-4">15:00 hs</td>
          <td class="p-4">15:00 hs (2h ant.)</td>
          <td class="p-4">Retiro en el día</td>
          <td class="p-4">15:00 hs</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/60">
          <td class="p-4 font-bold">Elección de franja</td>
          <td class="p-4 font-bold text-brand-blue-500 bg-brand-yellow-500/10">Sí (a elección)</td>
          <td class="p-4">No</td>
          <td class="p-4">No (estándar ML)</td>
          <td class="p-4">Sí (a elección)</td>
          <td class="p-4">No</td>
          <td class="p-4">A coordinar</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/60">
          <td class="p-4 font-bold">Tarifa base</td>
          <td class="p-4 font-mono font-bold text-brand-blue-500 bg-brand-yellow-500/10">$3.700</td>
          <td class="p-4 font-mono font-bold">$3.000</td>
          <td class="p-4 font-mono font-bold">$3.000</td>
          <td class="p-4 font-mono font-bold">Tarifa LowCost</td>
          <td class="p-4 font-mono font-bold">$4.000</td>
          <td class="p-4 font-mono font-bold">$6.000 fijo</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/60">
          <td class="p-4 font-bold">Ideal para</td>
          <td class="p-4 bg-brand-yellow-500/10">Urgencias y trámites</td>
          <td class="p-4">Envíos esporádicos</td>
          <td class="p-4">MercadoLíderes</td>
          <td class="p-4">Comercios y PyMEs</td>
          <td class="p-4">Tiendas online</td>
          <td class="p-4">Stock en Friuli 1972</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Banner de Conversión final -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
  <div class="rounded-3xl p-8 sm:p-12 bg-brand-blue-500 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-widest border border-brand-yellow-500/40">
      ¿Tenés dudas sobre cuál elegir?
    </div>
    <h2 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white max-w-2xl mx-auto">
      Te asesoramos en el momento por WhatsApp
    </h2>
    <p class="font-sans text-sm sm:text-base text-white/90 max-w-xl mx-auto font-light">
      Contanos qué necesitás despachar y nuestro equipo te recomienda la opción más rápida o más económica para tu caso.
    </p>
    <div class="pt-2 flex flex-wrap justify-center gap-4">
      <a href="/cotizar" class="rounded-full bg-brand-yellow-500 px-6 py-3 font-subheading text-sm uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
        Cotizá online
      </a>
      <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Necesito%20ayuda%20para%20elegir%20el%20servicio%20adecuado." target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-subheading text-sm uppercase tracking-wider text-white hover:bg-white/20 transition-colors">
        Hablar con un asesor
      </a>
    </div>
  </div>
</section>
"""

servicios_js = """
  // Filtros de categoría de servicios
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.service-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active-tab');
        t.classList.add('bg-brand-blue-50', 'text-brand-blue-500');
      });
      tab.classList.add('active-tab');
      tab.classList.remove('bg-brand-blue-50', 'text-brand-blue-500');

      const filter = tab.getAttribute('data-filter');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
"""


# ==============================================================================
# 2. CONTACTO (contacto-completo.html)
# ==============================================================================
contacto_json_ld = """{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto - Envíos DosRuedas",
  "description": "Contacto oficial y cotización inmediata de Envíos DosRuedas en Mar del Plata.",
  "url": "https://www.enviosdosruedas.com/contacto",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Envíos DosRuedas",
    "telephone": "+54-223-660-2699",
    "email": "matiascejas@enviosdosruedas.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Friuli 1972",
      "addressLocality": "Mar del Plata",
      "postalCode": "7600",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -38.0055,
      "longitude": -57.5426
    }
  }
}"""

contacto_main = """
<!-- Hero Contacto -->
<section class="relative bg-brand-blue-500 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-brand-blue-400">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest -rotate-1 shadow-glow-yellow">
      <span class="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse"></span>
      Base Central · Friuli 1972, Mar del Plata
    </div>
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-tight max-w-4xl mx-auto">
      CONTACTO DIRECTO CON NUESTRA BASE
    </h1>
    <p class="font-sans text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
      Escribinos por WhatsApp o visitanos en nuestra base operativa. Respuestas en menos de 2 minutos y atención personalizada para comercios y particulares.
    </p>

    <!-- Barra de estado operativo en tiempo real -->
    <div class="max-w-xl mx-auto p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-between text-xs font-mono">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-ping"></span>
        <span class="text-white font-bold uppercase">Atención comercial:</span>
      </div>
      <span class="text-brand-yellow-500 font-bold">Lun a Vie 09 a 18 hs · Sáb 10 a 15 hs</span>
    </div>
  </div>
</section>

<!-- Sección interactiva: Formulario + Bento Grid de Canales -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

    <!-- Columna Izquierda: Formulario Comercial (5 cols) -->
    <div class="lg:col-span-5 rounded-3xl p-2 bg-brand-blue-50 border border-brand-blue-100 shadow-xl">
      <div class="rounded-2xl bg-white p-6 sm:p-8 space-y-6 border border-brand-blue-100">
        <div>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 text-xs font-subheading uppercase tracking-wider mb-2">
            Cotización Comercial
          </span>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
            Contanos sobre tu negocio
          </h2>
          <p class="font-sans text-xs sm:text-sm text-brand-blue-400 mt-1">
            Completá tus datos y abrimos WhatsApp con el mensaje formateado para coordinar tu tarifa.
          </p>
        </div>

        <form id="contact-form" class="space-y-4">
          <div>
            <label for="input-nombre" class="block font-subheading text-xs uppercase tracking-wider text-brand-blue-500 mb-1">
              Tu Nombre y Apellido *
            </label>
            <input type="text" id="input-nombre" required placeholder="Ej. Juan Pérez" class="w-full px-4 py-3 rounded-xl border border-brand-blue-200 bg-brand-blue-50/30 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-brand-blue-500 placeholder:text-brand-blue-300"/>
          </div>

          <div>
            <label for="input-empresa" class="block font-subheading text-xs uppercase tracking-wider text-brand-blue-500 mb-1">
              Nombre de tu Comercio o Empresa (opcional)
            </label>
            <input type="text" id="input-empresa" placeholder="Ej. Tienda Online MDP" class="w-full px-4 py-3 rounded-xl border border-brand-blue-200 bg-brand-blue-50/30 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-brand-blue-500 placeholder:text-brand-blue-300"/>
          </div>

          <div>
            <label for="input-volumen" class="block font-subheading text-xs uppercase tracking-wider text-brand-blue-500 mb-1">
              Volumen mensual estimado
            </label>
            <select id="input-volumen" class="w-full px-4 py-3 rounded-xl border border-brand-blue-200 bg-brand-blue-50/30 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-brand-blue-500">
              <option value="Envíos esporádicos o urgentes">Envíos esporádicos o particulares</option>
              <option value="Menos de 50 envíos mensuales">Menos de 50 envíos mensuales</option>
              <option value="50 a 200 envíos mensuales">50 a 200 envíos mensuales</option>
              <option value="Más de 200 envíos mensuales (Cuenta Corriente)">Más de 200 envíos mensuales (Cuenta Corriente)</option>
              <option value="Mercado Envíos Flex diario">Mercado Envíos Flex diario</option>
            </select>
          </div>

          <div id="form-error" class="hidden p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-sans"></div>
          <div id="form-success" class="hidden p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-sans font-bold"></div>

          <button type="submit" class="w-full py-3.5 px-6 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-sm uppercase tracking-wider font-bold hover:bg-brand-yellow-400 transition-colors shadow-md flex items-center justify-center gap-2">
            Iniciar contacto por WhatsApp
            <span>→</span>
          </button>
          <p class="text-center font-sans text-2xs text-brand-blue-300">
            Sin spam · Te respondemos en menos de 2 minutos.
          </p>
        </form>
      </div>
    </div>

    <!-- Columna Derecha: Bento Grid Canales (7 cols) -->
    <div class="lg:col-span-7 space-y-6">

      <!-- Tarjeta WhatsApp Principal -->
      <div class="rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100">
        <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="inline-block px-2.5 py-0.5 rounded bg-brand-yellow-500 text-brand-blue-500 font-mono text-xs font-bold uppercase tracking-wider">
              Canal Oficial Inmediato
            </span>
            <h3 class="font-display text-2xl uppercase tracking-tight text-white">
              WhatsApp Comercial
            </h3>
            <p class="font-sans text-sm text-white/85 max-w-md">
              Cotizaciones en el acto, despacho de encomiendas y seguimiento directo con nuestros coordinadores.
            </p>
            <p class="font-mono text-lg font-bold text-brand-yellow-500 tabular-nums">
              +54 223 660-2699
            </p>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Vengo%20del%20sitio%20web%20y%20quiero%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" class="shrink-0 rounded-full bg-brand-yellow-500 px-6 py-3 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
            Chatear ahora
          </a>
        </div>
      </div>

      <!-- Tarjeta Base Central Friuli 1972 -->
      <div class="rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-100">
        <div class="rounded-2xl bg-white p-6 sm:p-7 space-y-4 border border-brand-blue-100">
          <div class="flex items-center justify-between">
            <span class="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 bg-brand-blue-50 px-2.5 py-1 rounded-full border border-brand-blue-100">
              Base Logística y DropOFF
            </span>
            <span class="font-mono text-xs font-bold text-brand-blue-500">Mar del Plata</span>
          </div>
          <h3 class="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
            Friuli 1972, Mar del Plata
          </h3>
          <p class="font-sans text-sm text-brand-blue-400 leading-relaxed">
            Acá recibimos tus paquetes para DropOFF con 20% de descuento en E-Commerce 24hs, custodiamos stock para Same-Day y coordinamos las salidas de la flota.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans text-brand-blue-500">
            <div class="p-3 rounded-xl bg-brand-blue-50 border border-brand-blue-100">
              <span class="font-bold block mb-0.5">Lunes a Viernes:</span>
              <span>09:00 a 18:00 hs</span>
            </div>
            <div class="p-3 rounded-xl bg-brand-blue-50 border border-brand-blue-100">
              <span class="font-bold block mb-0.5">Sábados:</span>
              <span>10:00 a 15:00 hs</span>
            </div>
          </div>
          <div class="pt-2">
            <a href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 underline font-bold">
              Ver ubicación en Google Maps →
            </a>
          </div>
        </div>
      </div>

      <!-- Tarjeta Redes Sociales -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-2xl p-5 bg-brand-blue-50 border border-brand-blue-100 space-y-2">
          <span class="font-mono text-2xs uppercase tracking-wider text-brand-blue-400">Instagram</span>
          <h4 class="font-display text-lg uppercase text-brand-blue-500">@enviosdosruedas</h4>
          <p class="font-sans text-xs text-brand-blue-400">Novedades de la flota, fotos reales y consejos logísticos.</p>
          <a href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" class="inline-block pt-1 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:underline">
            Seguinos en Instagram →
          </a>
        </div>
        <div class="rounded-2xl p-5 bg-brand-blue-50 border border-brand-blue-100 space-y-2">
          <span class="font-mono text-2xs uppercase tracking-wider text-brand-blue-400">Facebook</span>
          <h4 class="font-display text-lg uppercase text-brand-blue-500">Página Oficial</h4>
          <p class="font-sans text-xs text-brand-blue-400">Información del servicio y avisos a la comunidad.</p>
          <a href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" class="inline-block pt-1 font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold hover:underline">
            Visitar Facebook →
          </a>
        </div>
      </div>

    </div>

  </div>
</section>
"""

contacto_js = """
  // Formulario interactivo de contacto
  const form = document.getElementById('contact-form');
  const errorDiv = document.getElementById('form-error');
  const successDiv = document.getElementById('form-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('input-nombre').value.trim();
    const empresa = document.getElementById('input-empresa').value.trim();
    const volumen = document.getElementById('input-volumen').value;

    if (!nombre) {
      errorDiv.textContent = 'Por favor, completá tu nombre para que podamos atenderte.';
      errorDiv.classList.remove('hidden');
      return;
    }

    errorDiv.classList.add('hidden');
    successDiv.textContent = '¡Abriendo WhatsApp con tu consulta!';
    successDiv.classList.remove('hidden');

    let msg = '¡Hola Envíos DosRuedas! Vengo de la página de contacto. Mi nombre es *' + nombre + '*';
    if (empresa) msg += ' de la empresa *' + empresa + '*';
    msg += '. Mi volumen estimado es: ' + volumen + '. Quisiera recibir más información y coordinar una cotización.';

    const url = 'https://api.whatsapp.com/send/?phone=542236602699&text=' + encodeURIComponent(msg);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  });
"""


# ==============================================================================
# 3. COTIZADOR (cotizador-completo.html)
# ==============================================================================
cotizador_json_ld = """{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cotizador de Envíos en Moto Envíos DosRuedas",
  "description": "Calculá al instante la tarifa para tu envío Express o LowCost en Mar del Plata. Tarifas por distancia vial transparentes.",
  "url": "https://www.enviosdosruedas.com/cotizar",
  "areaServed": "Mar del Plata"
}"""

cotizador_main = """
<!-- Hero Cotizador -->
<section class="relative bg-brand-blue-500 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-brand-blue-400">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest -rotate-1 shadow-glow-yellow">
      <span class="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse"></span>
      Dos servicios · Una sola medición de distancia
    </div>
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-tight max-w-4xl mx-auto">
      COTIZÁ TU ENVÍO Y COMPARÁ AL INSTANTE
    </h1>
    <p class="font-sans text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
      Ingresá los kilómetros o elegí la zona de tu envío en Mar del Plata. Vas a ver la tarifa Express y LowCost sobre la misma distancia vial, con tarifas transparentes y recargos estipulados claros.
    </p>

    <!-- Pasos del flujo -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4 text-left">
      <div class="p-4 rounded-2xl bg-white/10 border border-white/20">
        <span class="font-mono text-xs text-brand-yellow-500 font-bold block mb-1">01. MEDÍS DISTANCIA</span>
        <span class="font-subheading text-sm uppercase text-white block">Distancia vial real</span>
        <span class="font-sans text-xs text-white/75">Por calle, nunca en línea recta.</span>
      </div>
      <div class="p-4 rounded-2xl bg-white/10 border border-white/20">
        <span class="font-mono text-xs text-brand-yellow-500 font-bold block mb-1">02. COMPARÁS TARIFAS</span>
        <span class="font-subheading text-sm uppercase text-white block">Express vs LowCost</span>
        <span class="font-sans text-xs text-white/75">Elegís entre franja de 3 hs o día completo.</span>
      </div>
      <div class="p-4 rounded-2xl bg-white/10 border border-white/20">
        <span class="font-mono text-xs text-brand-yellow-500 font-bold block mb-1">03. PEDÍS POR WHATSAPP</span>
        <span class="font-subheading text-sm uppercase text-white block">Confirmación al instante</span>
        <span class="font-sans text-xs text-white/75">Te asignamos cadete con foto y remito.</span>
      </div>
    </div>
  </div>
</section>

<!-- ISLA DEL COTIZADOR INTERACTIVO REACTIVO -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

    <!-- Formulario / Selector de Distancia (7 cols) -->
    <div class="lg:col-span-7 rounded-3xl p-2 bg-brand-blue-50 border border-brand-blue-100 shadow-xl">
      <div class="rounded-2xl bg-brand-blue-500 text-white p-6 sm:p-8 space-y-6">
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider mb-2">
            Paso 1: Parámetros del viaje
          </span>
          <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            Calculador por Kilometraje
          </h2>
          <p class="font-sans text-xs sm:text-sm text-white/80">
            Deslizá el control o seleccioná una distancia típica en Mar del Plata.
          </p>
        </div>

        <!-- Slider de distancia -->
        <div class="space-y-3 bg-white/10 p-5 rounded-2xl border border-white/10">
          <div class="flex items-center justify-between">
            <label for="km-range" class="font-subheading text-sm uppercase tracking-wider text-white">
              Distancia de recorrido:
            </label>
            <span id="km-display" class="font-mono text-2xl font-bold text-brand-yellow-500 tabular-nums">
              3 km
            </span>
          </div>
          <input type="range" id="km-range" min="1" max="22" step="0.5" value="3" class="w-full accent-brand-yellow-500 cursor-pointer h-2 bg-white/20 rounded-lg"/>
          <div class="flex justify-between text-2xs font-mono text-white/60">
            <span>1 km (Microcentro)</span>
            <span>10 km (Constitución/Puerto)</span>
            <span>20+ km (Periferia)</span>
          </div>
        </div>

        <!-- Botones de distancias y barrios rápidos -->
        <div class="space-y-2">
          <span class="font-subheading text-xs uppercase tracking-wider text-white/80 block">
            Accesos directos por trayecto típico:
          </span>
          <div class="flex flex-wrap gap-2">
            <button type="button" class="quick-km px-3 py-1.5 rounded-lg bg-white/15 hover:bg-brand-yellow-500 hover:text-brand-blue-500 font-mono text-xs font-bold transition-colors" data-km="2">
              Centro a Chauvín (2 km)
            </button>
            <button type="button" class="quick-km px-3 py-1.5 rounded-lg bg-white/15 hover:bg-brand-yellow-500 hover:text-brand-blue-500 font-mono text-xs font-bold transition-colors" data-km="4.5">
              Centro a Puerto (4.5 km)
            </button>
            <button type="button" class="quick-km px-3 py-1.5 rounded-lg bg-white/15 hover:bg-brand-yellow-500 hover:text-brand-blue-500 font-mono text-xs font-bold transition-colors" data-km="7.5">
              Centro a Mogotes (7.5 km)
            </button>
            <button type="button" class="quick-km px-3 py-1.5 rounded-lg bg-white/15 hover:bg-brand-yellow-500 hover:text-brand-blue-500 font-mono text-xs font-bold transition-colors" data-km="9.5">
              Centro a Constitución (9.5 km)
            </button>
            <button type="button" class="quick-km px-3 py-1.5 rounded-lg bg-white/15 hover:bg-brand-yellow-500 hover:text-brand-blue-500 font-mono text-xs font-bold transition-colors" data-km="14">
              Camet / Bosque Peralta (14 km)
            </button>
          </div>
        </div>

        <!-- Adicionales y recargos operativos -->
        <div class="pt-4 border-t border-white/15 space-y-3">
          <span class="font-subheading text-xs uppercase tracking-wider text-brand-yellow-500 block">
            Adicionales operativos:
          </span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <label class="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/10 cursor-pointer hover:bg-white/15">
              <input type="checkbox" id="check-bulto" class="accent-brand-yellow-500 w-4 h-4"/>
              <span>Bulto especial (>5 kg / caja grande) <strong class="text-brand-yellow-500 block font-mono">+$1.800</strong></span>
            </label>
            <label class="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/10 cursor-pointer hover:bg-white/15">
              <input type="checkbox" id="check-parada" class="accent-brand-yellow-500 w-4 h-4"/>
              <span>Parada extra intermedia <strong class="text-brand-yellow-500 block font-mono">+$1.800</strong></span>
            </label>
            <label class="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/10 cursor-pointer hover:bg-white/15 sm:col-span-2">
              <input type="checkbox" id="check-lluvia" class="accent-brand-yellow-500 w-4 h-4"/>
              <span>Día de lluvia (recargo operativo por calzada mojada) <strong class="text-brand-yellow-500 block font-mono">+50% en tarifa base</strong></span>
            </label>
          </div>
        </div>

      </div>
    </div>

    <!-- Comparativa en Vivo: Express vs LowCost (5 cols) -->
    <div class="lg:col-span-5 space-y-6">

      <!-- Tarjeta Express Resultado -->
      <div class="rounded-3xl p-1.5 bg-brand-yellow-500/20 border-2 border-brand-yellow-500 shadow-xl">
        <div class="rounded-2xl bg-brand-blue-500 text-white p-6 space-y-4">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-mono text-xs font-bold uppercase tracking-wider">
              Opción Prioritaria
            </span>
            <span class="text-xs font-mono text-brand-yellow-500 font-bold">FRANJA DE 3 HS</span>
          </div>
          <div>
            <h3 class="font-display text-2xl uppercase tracking-tight text-white">
              ENVÍO EXPRESS
            </h3>
            <p class="font-sans text-xs text-white/80 mt-0.5">
              Entrega en la franja horaria que elijas (ej. 10 a 13 hs). Corte 15:00 hs con 2h de anticipación.
            </p>
          </div>
          <div class="flex items-baseline justify-between pt-2 border-t border-white/15">
            <span class="font-subheading text-xs uppercase text-white/80">Total estimado:</span>
            <span id="price-express" class="font-mono text-3xl font-bold text-brand-yellow-500 tabular-nums">
              $3.700
            </span>
          </div>
          <a id="btn-wa-express" href="#" target="_blank" rel="noopener noreferrer" class="w-full py-3 px-4 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-xs uppercase tracking-wider font-bold hover:bg-brand-yellow-400 transition-colors flex items-center justify-center gap-2 shadow-md">
            Pedir Express por WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>

      <!-- Tarjeta LowCost Resultado -->
      <div class="rounded-3xl p-1.5 bg-brand-blue-50 border border-brand-blue-200 shadow-md">
        <div class="rounded-2xl bg-white text-brand-blue-500 p-6 space-y-4 border border-brand-blue-100">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-500 font-mono text-xs font-bold uppercase tracking-wider border border-brand-blue-100">
              Opción Económica
            </span>
            <span class="text-xs font-mono text-brand-blue-400 font-bold">HASTA 19:00 HS</span>
          </div>
          <div>
            <h3 class="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              ENVÍO LOWCOST
            </h3>
            <p class="font-sans text-xs text-brand-blue-400 mt-0.5">
              Reparto programado en el día. Pedidos antes de las 13:00 hs, entrega antes de las 19:00 hs sin horario fijo.
            </p>
          </div>
          <div class="flex items-baseline justify-between pt-2 border-t border-brand-blue-100">
            <span class="font-subheading text-xs uppercase text-brand-blue-400">Total estimado:</span>
            <span id="price-lowcost" class="font-mono text-3xl font-bold text-brand-blue-500 tabular-nums">
              $3.000
            </span>
          </div>
          <a id="btn-wa-lowcost" href="#" target="_blank" rel="noopener noreferrer" class="w-full py-3 px-4 rounded-full border-2 border-brand-blue-500 text-brand-blue-500 font-subheading text-xs uppercase tracking-wider font-bold hover:bg-brand-blue-50 transition-colors flex items-center justify-center gap-2">
            Pedir LowCost por WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- Tabla Oficial de Tarifas 2026 -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div class="space-y-4 mb-6">
    <span class="inline-block px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase tracking-widest border border-brand-blue-100">
      Transparencia de Costos
    </span>
    <h2 class="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
      TABLA OFICIAL DE TARIFAS POR KILÓMETRO (2026)
    </h2>
    <p class="font-sans text-xs sm:text-sm text-brand-blue-400 max-w-3xl">
      Las dos columnas se calculan sobre la misma distancia vial. El tramo extendido superior a 10 km tiene cálculo lineal directo por km adicional. Más allá de 20 km se deriva a atención personalizada.
    </p>
  </div>

  <div class="overflow-x-auto rounded-2xl border border-brand-blue-100 bg-white shadow-sm">
    <table class="w-full text-left border-collapse text-xs sm:text-sm font-sans">
      <thead>
        <tr class="bg-brand-blue-500 text-white font-subheading uppercase tracking-wider">
          <th class="p-3.5 sm:p-4">Rango de distancia</th>
          <th class="p-3.5 sm:p-4 text-brand-yellow-500">Servicio Express (Franja 3 hs)</th>
          <th class="p-3.5 sm:p-4">Servicio LowCost (En el día)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-brand-blue-100 text-brand-blue-500">
        <tr class="hover:bg-brand-blue-50/50">
          <td class="p-3.5 sm:p-4 font-mono font-bold">0 a 3 km (Base)</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold text-brand-blue-500 bg-brand-yellow-500/10">$3.700</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold">$3.000</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/50">
          <td class="p-3.5 sm:p-4 font-mono font-bold">3 a 5 km</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold text-brand-blue-500 bg-brand-yellow-500/10">$4.600</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold">$3.700</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/50">
          <td class="p-3.5 sm:p-4 font-mono font-bold">5 a 8 km</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold text-brand-blue-500 bg-brand-yellow-500/10">$5.500</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold">$4.500</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/50">
          <td class="p-3.5 sm:p-4 font-mono font-bold">8 a 10 km</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold text-brand-blue-500 bg-brand-yellow-500/10">$6.800</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold">$5.600</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/50">
          <td class="p-3.5 sm:p-4 font-mono font-bold">Más de 10 km (hasta 20 km)</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold text-brand-blue-500 bg-brand-yellow-500/10">$680 por km lineal directo</td>
          <td class="p-3.5 sm:p-4 font-mono font-bold">$560 por km lineal directo</td>
        </tr>
        <tr class="hover:bg-brand-blue-50/50">
          <td class="p-3.5 sm:p-4 font-mono font-bold">Más de 20 km (Periferia / Batán)</td>
          <td class="p-3.5 sm:p-4 font-mono text-brand-blue-400 bg-brand-yellow-500/10">Consultar cotización</td>
          <td class="p-3.5 sm:p-4 font-mono text-brand-blue-400">Consultar cotización</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Recargos operativos claros -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="p-5 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 space-y-2">
      <span class="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold block">01. LLUVIA</span>
      <p class="font-sans text-xs text-brand-blue-400">Aplica recargo operativo de +50% en la tarifa base por seguridad vial de los cadetes.</p>
    </div>
    <div class="p-5 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 space-y-2">
      <span class="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold block">02. ESPERA</span>
      <p class="font-sans text-xs text-brand-blue-400">Primeros 10 minutos sin cargo. Desde el minuto 11 aplica recargo proporcional por tiempo.</p>
    </div>
    <div class="p-5 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 space-y-2">
      <span class="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold block">03. PARADA EXTRA</span>
      <p class="font-sans text-xs text-brand-blue-400">Cada escala o parada intermedia en el recorrido suma $1.800 fijos.</p>
    </div>
    <div class="p-5 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 space-y-2">
      <span class="font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold block">04. BULTOS GRANDES</span>
      <p class="font-sans text-xs text-brand-blue-400">Todo bulto que exceda 5 kg o 40x40x30 cm se coordina con recargo desde $1.800.</p>
    </div>
  </div>
</section>
"""

cotizador_js = """
  // Motor de cálculo del Cotizador Oficial
  const kmRange = document.getElementById('km-range');
  const kmDisplay = document.getElementById('km-display');
  const priceExpEl = document.getElementById('price-express');
  const priceLowEl = document.getElementById('price-lowcost');
  const btnExp = document.getElementById('btn-wa-express');
  const btnLow = document.getElementById('btn-wa-lowcost');

  const chkBulto = document.getElementById('check-bulto');
  const chkParada = document.getElementById('check-parada');
  const chkLluvia = document.getElementById('check-lluvia');
  const quickBtns = document.querySelectorAll('.quick-km');

  function calculateBaseExpress(km) {
    if (km <= 3) return 3700;
    if (km <= 5) return 4600;
    if (km <= 8) return 5500;
    if (km <= 10) return 6800;
    if (km <= 20) return km * 680; // cálculo lineal directo sin Math.ceil
    return 'consultar';
  }

  function calculateBaseLowCost(km) {
    if (km <= 3) return 3000;
    if (km <= 5) return 3700;
    if (km <= 8) return 4500;
    if (km <= 10) return 5600;
    if (km <= 20) return km * 560; // cálculo lineal directo sin Math.ceil
    return 'consultar';
  }

  function updatePrices() {
    const km = parseFloat(kmRange.value);
    kmDisplay.textContent = km + ' km';

    const baseExp = calculateBaseExpress(km);
    const baseLow = calculateBaseLowCost(km);

    const bultoExtra = chkBulto.checked ? 1800 : 0;
    const paradaExtra = chkParada.checked ? 1800 : 0;
    const lluvia = chkLluvia.checked;

    let totalExpText = '';
    let totalLowText = '';

    if (baseExp === 'consultar') {
      totalExpText = 'Consultar';
    } else {
      let finalExp = baseExp;
      if (lluvia) finalExp = Math.round(finalExp * 1.5);
      finalExp += bultoExtra + paradaExtra;
      totalExpText = '$' + finalExp.toLocaleString('es-AR');
    }

    if (baseLow === 'consultar') {
      totalLowText = 'Consultar';
    } else {
      let finalLow = baseLow;
      if (lluvia) finalLow = Math.round(finalLow * 1.5);
      finalLow += bultoExtra + paradaExtra;
      totalLowText = '$' + finalLow.toLocaleString('es-AR');
    }

    priceExpEl.textContent = totalExpText;
    priceLowEl.textContent = totalLowText;

    // Actualizar links de WhatsApp con el mensaje exacto
    const expMsg = '¡Hola Envíos DosRuedas! Quiero pedir un *Envío Express* para una distancia estimada de ' + km + ' km (' + totalExpText + ').' + (bultoExtra ? ' [Con bulto especial]' : '') + (paradaExtra ? ' [Con parada extra]' : '') + (lluvia ? ' [Día de lluvia]' : '');
    const lowMsg = '¡Hola Envíos DosRuedas! Quiero pedir un *Envío LowCost* en el día para una distancia estimada de ' + km + ' km (' + totalLowText + ').' + (bultoExtra ? ' [Con bulto especial]' : '') + (paradaExtra ? ' [Con parada extra]' : '') + (lluvia ? ' [Día de lluvia]' : '');

    btnExp.href = 'https://api.whatsapp.com/send/?phone=542236602699&text=' + encodeURIComponent(expMsg);
    btnLow.href = 'https://api.whatsapp.com/send/?phone=542236602699&text=' + encodeURIComponent(lowMsg);
  }

  kmRange?.addEventListener('input', updatePrices);
  chkBulto?.addEventListener('change', updatePrices);
  chkParada?.addEventListener('change', updatePrices);
  chkLluvia?.addEventListener('change', updatePrices);

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      kmRange.value = btn.getAttribute('data-km');
      updatePrices();
    });
  });

  updatePrices();
"""


# ==============================================================================
# 4. SOBRE NOSOTROS (sobre-nosotros-completo.html)
# ==============================================================================
nosotros_json_ld = """{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Sobre Nosotros - Envíos DosRuedas",
  "description": "Historia, valores y equipo de Envíos DosRuedas en Mar del Plata. Más de 7 años de trayectoria en logística urbana y última milla.",
  "url": "https://www.enviosdosruedas.com/nosotros/sobre-nosotros",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Envíos DosRuedas",
    "telephone": "+54-223-660-2699",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Friuli 1972",
      "addressLocality": "Mar del Plata",
      "postalCode": "7600",
      "addressCountry": "AR"
    }
  }
}"""

nosotros_main = """
<!-- Hero Sobre Nosotros -->
<section class="relative bg-brand-blue-500 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-brand-blue-400">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest -rotate-1 shadow-glow-yellow">
      <span class="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse"></span>
      Trayectoria y Compromiso en Mar del Plata
    </div>
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-tight max-w-5xl mx-auto">
      MÁS DE 7 AÑOS MOVIENDO MAR DEL PLATA CON FLOTA PROPIA
    </h1>
    <p class="font-sans text-base sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
      Nacimos como una mensajería de confianza y hoy somos el socio estratégico de logística urbana para cientos de emprendedores, comercios y marcas líderes de la ciudad.
    </p>

    <!-- Grid de Métricas Principales -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
      <div class="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
        <span class="font-mono text-3xl sm:text-4xl font-bold text-brand-yellow-500 block tabular-nums">+7</span>
        <span class="font-subheading text-xs uppercase tracking-wider text-white/90 mt-1 block">Años de trayectoria</span>
      </div>
      <div class="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
        <span class="font-mono text-3xl sm:text-4xl font-bold text-brand-yellow-500 block tabular-nums">+45.000</span>
        <span class="font-subheading text-xs uppercase tracking-wider text-white/90 mt-1 block">Envíos completados</span>
      </div>
      <div class="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
        <span class="font-mono text-3xl sm:text-4xl font-bold text-brand-yellow-500 block tabular-nums">+18</span>
        <span class="font-subheading text-xs uppercase tracking-wider text-white/90 mt-1 block">Motos en calle</span>
      </div>
      <div class="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
        <span class="font-mono text-3xl sm:text-4xl font-bold text-brand-yellow-500 block tabular-nums">99.8%</span>
        <span class="font-subheading text-xs uppercase tracking-wider text-white/90 mt-1 block">SLA de puntualidad</span>
      </div>
    </div>
  </div>
</section>

<!-- 4 Ventajas Territoriales -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
    <span class="inline-block px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase tracking-widest border border-brand-blue-100">
      Por qué elegirnos
    </span>
    <h2 class="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-500">
      NUESTRAS CUATRO VENTAJAS ESTRATÉGICAS
    </h2>
    <p class="font-sans text-brand-blue-400 text-sm sm:text-base">
      Combinamos infraestructura física real, tecnología ágil de ruteo y un equipo humano con vocación de servicio.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="p-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 space-y-3 card-scale">
      <div class="w-10 h-10 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold font-mono">
        01
      </div>
      <h3 class="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
        Base Central en Friuli 1972
      </h3>
      <p class="font-sans text-sm text-brand-blue-400 leading-relaxed">
        Contamos con sede física propia para recepción DropOFF, almacenamiento seguro de stock e-commerce y coordinación operativa centralizada. No somos una app fantasma: sabemos dónde está cada paquete.
      </p>
    </div>

    <div class="p-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 space-y-3 card-scale">
      <div class="w-10 h-10 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold font-mono">
        02
      </div>
      <h3 class="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
        Flota Propia Coordinada
      </h3>
      <p class="font-sans text-sm text-brand-blue-400 leading-relaxed">
        Nuestros cadetes están capacitados en trato comercial, manejo seguro de paquetería y normas viales. Conocen cada rincón y atajo de Mar del Plata para llegar siempre en tiempo y forma.
      </p>
    </div>

    <div class="p-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 space-y-3 card-scale">
      <div class="w-10 h-10 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold font-mono">
        03
      </div>
      <h3 class="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
        Acuse Digital con Foto y Firma
      </h3>
      <p class="font-sans text-sm text-brand-blue-400 leading-relaxed">
        Cada entrega se respalda con remito digital, foto del paquete entregado y firma de quien recibe. Tenés certeza total y comprobante inmediato para compartirle a tu cliente.
      </p>
    </div>

    <div class="p-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 space-y-3 card-scale">
      <div class="w-10 h-10 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold font-mono">
        04
      </div>
      <h3 class="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
        Ruteo Inteligente por Zonas
      </h3>
      <p class="font-sans text-sm text-brand-blue-400 leading-relaxed">
        Agrupamos los recorridos de manera eficiente para reducir tiempos de tránsito, optimizar el consumo de combustible y trasladar ese ahorro a tarifas más convenientes para tu negocio.
      </p>
    </div>
  </div>
</section>

<!-- Línea de Tiempo Histórica -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-brand-blue-50/50 rounded-3xl border border-brand-blue-100 my-8">
  <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
    <span class="inline-block px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 font-subheading text-xs uppercase tracking-widest border border-brand-blue-100">
      Evolución
    </span>
    <h2 class="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-500">
      NUESTRA HISTORIA EN MAR DEL PLATA
    </h2>
  </div>

  <div class="max-w-4xl mx-auto space-y-6">
    <div class="p-6 rounded-2xl bg-white border border-brand-blue-100 flex items-start gap-4">
      <span class="font-mono text-xl font-bold text-brand-blue-500 bg-brand-yellow-500/20 px-3 py-1 rounded-lg shrink-0">2017</span>
      <div>
        <h4 class="font-subheading text-base uppercase text-brand-blue-500 font-bold">Los Primeros Kilómetros</h4>
        <p class="font-sans text-xs sm:text-sm text-brand-blue-400 mt-1">
          Iniciamos operaciones con dos motos dedicadas a trámites bancarios, cadetería judicial y gestiones comerciales en el microcentro de la ciudad.
        </p>
      </div>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-brand-blue-100 flex items-start gap-4">
      <span class="font-mono text-xl font-bold text-brand-blue-500 bg-brand-yellow-500/20 px-3 py-1 rounded-lg shrink-0">2020</span>
      <div>
        <h4 class="font-subheading text-base uppercase text-brand-blue-500 font-bold">La Revolución del E-Commerce</h4>
        <p class="font-sans text-xs sm:text-sm text-brand-blue-400 mt-1">
          Acompañamos a más de 120 emprendedores y comercios gastronómicos y de retail durante la digitalización forzada, garantizando repartos seguros en el día.
        </p>
      </div>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-brand-blue-100 flex items-start gap-4">
      <span class="font-mono text-xl font-bold text-brand-blue-500 bg-brand-yellow-500/20 px-3 py-1 rounded-lg shrink-0">2022</span>
      <div>
        <h4 class="font-subheading text-base uppercase text-brand-blue-500 font-bold">Inauguración de la Base Central</h4>
        <p class="font-sans text-xs sm:text-sm text-brand-blue-400 mt-1">
          Abrimos nuestra sede operativa en Friuli 1972, incorporando depósito de paquetería, zona de preparación de pedidos y punto DropOFF para tiendas online.
        </p>
      </div>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-brand-blue-100 flex items-start gap-4">
      <span class="font-mono text-xl font-bold text-brand-blue-500 bg-brand-yellow-500/20 px-3 py-1 rounded-lg shrink-0">2026</span>
      <div>
        <h4 class="font-subheading text-base uppercase text-brand-blue-500 font-bold">Plataforma Logística Integral</h4>
        <p class="font-sans text-xs sm:text-sm text-brand-blue-400 mt-1">
          Consolidamos más de 18 motos en simultáneo, homologación Mercado Envíos Flex de alto rendimiento y sistema de fulfillment Same-Day con picking QR.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Misión y Cierre -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
  <div class="rounded-3xl p-8 sm:p-12 bg-brand-blue-500 text-white text-center space-y-6 shadow-xl">
    <span class="inline-block px-3.5 py-1.5 rounded-full bg-brand-yellow-500/20 text-brand-yellow-500 font-subheading text-xs uppercase tracking-widest border border-brand-yellow-500/40">
      Nuestra Misión
    </span>
    <h2 class="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white max-w-3xl mx-auto">
      HACER QUE CADA ENTREGA EN MAR DEL PLATA SEA PUNTUAL, HUMANA Y TRANSPARENTE
    </h2>
    <p class="font-sans text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
      Sabemos el esfuerzo que hay detrás de cada paquete que despachás. Por eso cuidamos tu reputación como si fuera la nuestra.
    </p>
    <div class="pt-4 flex flex-wrap justify-center gap-4">
      <a href="/cotizar" class="rounded-full bg-brand-yellow-500 px-6 py-3 font-subheading text-sm uppercase tracking-wider text-brand-blue-500 font-bold hover:bg-brand-yellow-400 transition-colors">
        Cotizá tu envío ahora
      </a>
      <a href="/contacto" class="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-subheading text-sm uppercase tracking-wider text-white hover:bg-white/20 transition-colors">
        Contactá con el equipo
      </a>
    </div>
  </div>
</section>
"""

nosotros_js = """
  // Script de soporte para animaciones
"""


# ==============================================================================
# EJECUCIÓN Y GENERACIÓN DE LOS ARCHIVOS
# ==============================================================================
files_to_generate = [
    (
        "servicios-completo.html",
        "Servicios de Mensajería y Envíos en Mar del Plata | Envíos DosRuedas",
        "Servicios de logística y mensajería en moto en Mar del Plata: Express con franja de 3 hs, LowCost en el día, Mercado Envíos Flex y almacenamiento en depósito.",
        "https://www.enviosdosruedas.com/servicios",
        servicios_json_ld,
        "servicios",
        servicios_main,
        servicios_js
    ),
    (
        "contacto-completo.html",
        "Contacto y Base Central | Envíos DosRuedas",
        "Contacto directo con la base central de Envíos DosRuedas en Friuli 1972, Mar del Plata. Cotizaciones inmediatas por WhatsApp y atención personalizada.",
        "https://www.enviosdosruedas.com/contacto",
        contacto_json_ld,
        "contacto",
        contacto_main,
        contacto_js
    ),
    (
        "cotizador-completo.html",
        "Cotizá tu Envío en Moto | Envíos DosRuedas",
        "Calculá al instante la tarifa para tu envío Express o LowCost en Mar del Plata. Tarifas por distancia vial transparentes y confirmación directa por WhatsApp.",
        "https://www.enviosdosruedas.com/cotizar",
        cotizador_json_ld,
        "cotizar",
        cotizador_main,
        cotizador_js
    ),
    (
        "sobre-nosotros-completo.html",
        "Sobre Nosotros y Trayectoria | Envíos DosRuedas",
        "Conocé la historia y valores de Envíos DosRuedas. Más de 7 años de trayectoria en logística urbana, cadetería y última milla e-commerce en Mar del Plata con flota propia.",
        "https://www.enviosdosruedas.com/nosotros/sobre-nosotros",
        nosotros_json_ld,
        "nosotros",
        nosotros_main,
        nosotros_js
    ),
]

for filename, title, desc, canonical, json_ld, active_nav, main_content, js in files_to_generate:
    out_path = os.path.join(OUTPUT_DIR, filename)
    content = render_page(title, desc, canonical, json_ld, active_nav, main_content, js)
    with open(out_path, "w", encoding="utf-8") as f_out:
        f_out.write(content)
    size_kb = len(content) / 1024
    print(f"Generado con éxito: {filename} ({size_kb:.1f} KB)")

print("Todos los archivos fueron generados correctamente en:", OUTPUT_DIR)

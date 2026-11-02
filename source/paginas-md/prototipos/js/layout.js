/**
 * ENVÍOS DOSRUEDAS — INTERACTIVIDAD DE LAYOUT Y SHELL (layout.js)
 * Manejo nativo de Header, Drawer Móvil, Dropdowns, Escape Key y Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar iconos de Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Elevación del Header en scroll
  const header = document.querySelector('.header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Dropdowns de Escritorio (Accesibilidad por Teclado y Click)
  const dropdownContainers = document.querySelectorAll('.nav-dropdown');
  dropdownContainers.forEach(container => {
    const trigger = container.querySelector('.dropdown-trigger');
    const menu = container.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = menu.classList.contains('is-open');

      // Cerrar otros dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('is-open'));
      document.querySelectorAll('.dropdown-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));

      if (!isOpen) {
        menu.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Cerrar dropdown al hacer click afuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('is-open'));
      document.querySelectorAll('.dropdown-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
    }
  });

  // 4. Manejo accesible de tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Cerrar drawer
      toggleMobileNav(false);
      // Cerrar dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('is-open'));
      document.querySelectorAll('.dropdown-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
    }
  });
});

/**
 * Control del Drawer Móvil
 * @param {boolean} open - true para abrir, false para cerrar
 */
function toggleMobileNav(open) {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const toggleBtn = document.getElementById('menu-toggle-btn');

  if (!drawer || !backdrop) return;

  if (open) {
    backdrop.classList.add('is-active');
    drawer.classList.add('is-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  } else {
    backdrop.classList.remove('is-active');
    drawer.classList.remove('is-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/**
 * Acordeón de submenús en el Drawer Móvil
 * @param {string} submenuId - ID del contenedor de submenú
 * @param {HTMLElement} btn - Botón activador
 */
function toggleMobileSubmenu(submenuId, btn) {
  const submenu = document.getElementById(submenuId);
  if (!submenu || !btn) return;

  const arrow = btn.querySelector('.dropdown-chevron');
  const isOpen = submenu.classList.contains('is-open');

  if (isOpen) {
    submenu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    if (arrow) arrow.style.transform = '';
  } else {
    submenu.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }
}

/**
 * Scroll suave hacia el inicio de la página
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

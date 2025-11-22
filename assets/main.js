// Theme toggle & basic interactions
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');

  // Set current year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Persist theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    if (savedTheme === 'light') root.setAttribute('data-theme', 'light');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'light' ? null : 'light';
      if (next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
      localStorage.setItem('theme', next || 'dark');
      toggle.textContent = next ? '☀️' : '🌙';
    });
  }

  // Mobile nav
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();


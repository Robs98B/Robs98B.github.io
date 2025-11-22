// assets/main.js
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  const yearSpan = document.getElementById('year');

  // 1. Theme Management
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    root.setAttribute('data-theme', 'dark');
  }

  if (toggle) {
    updateIcon(root.getAttribute('data-theme') === 'light');
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const newTheme = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme === 'light');
    });
  }

  function updateIcon(isLight) {
    // Usa icone semplici o SVG se preferisci
    toggle.textContent = isLight ? '☀️' : '🌙';
  }

  // 2. Mobile Navigation
  if (navToggle && navList) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita chiusure immediate
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.textContent = isOpen ? '✕' : '☰';
    });

    // Chiudi menu cliccando fuori
    document.addEventListener('click', (e) => {
      if (navList.classList.contains('open') && !navList.contains(e.target) && !navToggle.contains(e.target)) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.textContent = '☰';
      }
    });
  }

  // 3. Auto-Year
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 4. Fade-in Animation for Cards (Scroll Reveal)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .timeline-item').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
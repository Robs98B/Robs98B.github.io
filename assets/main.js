// assets/main.js
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  
  // 1. Gestione Tema (Dark/Light)
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    root.setAttribute('data-theme', 'dark');
  }

  if (toggle) {
    toggle.innerHTML = root.getAttribute('data-theme') === 'light' 
      ? '<span style="font-size:1.4rem">☀️</span>' 
      : '<span style="font-size:1.4rem">🌙</span>';
      
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggle.innerHTML = next === 'light' ? '<span style="font-size:1.4rem">☀️</span>' : '<span style="font-size:1.4rem">🌙</span>';
    });
  }

  // 2. Mobile Menu
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      navToggle.textContent = navList.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 3. Staggered Animations (Effetto entrata fluido)
  // Applica un ritardo progressivo agli elementi .card basato sulla loro posizione
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Aggiunge un piccolo delay inline per l'effetto a cascata
        entry.target.style.animationDelay = `${index * 100}ms`;
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .timeline-event').forEach(el => {
    el.style.animationPlayState = 'paused'; // Mette in pausa finché non visibile
    observer.observe(el);
  });

  // 4. Copyright Year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
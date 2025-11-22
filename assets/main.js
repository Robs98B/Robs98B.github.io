/* assets/main.js */

/* --- TRANSLATION DICTIONARY --- */
const i18n = {
  en: {
    nav_home: "Home", nav_about: "About", nav_resume: "Resume", nav_science: "Science", nav_projects: "Projects", nav_contact: "Contact",
    hero_title: "Exploring the intersection of AI & Neuroscience",
    hero_desc: "PhD Student at Unibo. Focusing on Neural Decoding, Brain-Computer Interfaces and biologically plausible learning models.",
    btn_science: "Explore Science", btn_contact: "Contact Me",
    sect_focus: "Focus", sect_dev: "Dev & Tech", sect_career: "Career", sect_profile: "Profile",
    card_science_desc: "My scientific publications, conference abstracts and posters.",
    card_projects_desc: "Software development, robotic prototypes (MAIA) and open source code.",
    card_resume_desc: "My complete academic path, education and milestones.",
    card_about_desc: "Who I am, my research interests and vision.",
    filters_cat: "Category", filters_year: "Year",
    lbl_pub: "Publications", lbl_abs: "Abstracts", lbl_pos: "Posters",
    form_name: "Your Name", form_email: "Your Email", form_msg: "Message", form_send: "Send Message",
    resume_phd_title: "PhD Student", resume_phd_desc: "Dept. of Biomedical and Neuromotor Sciences — University of Bologna.",
    resume_msc_title: "MSc in Artificial Intelligence", resume_msc_desc: "110/110 cum laude — University of Bologna.",
    resume_bsc_title: "BSc in Computer Engineering", resume_bsc_desc: "University of Palermo.",
    contact_title: "Get in Touch", contact_sub: "Send me a message or visit my institutional page.",
    contact_unibo: "Visit Unibo Profile"
  },
  it: {
    nav_home: "Home", nav_about: "Chi Sono", nav_resume: "Curriculum", nav_science: "Ricerca", nav_projects: "Progetti", nav_contact: "Contatti",
    hero_title: "Esplorando l'intersezione tra AI e Neuroscienze",
    hero_desc: "Dottorando presso Unibo. Mi occupo di Decodifica Neurale, Interfacce Cervello-Computer e modelli di apprendimento biologicamente plausibili.",
    btn_science: "Esplora Ricerca", btn_contact: "Scrivimi",
    sect_focus: "Focus", sect_dev: "Sviluppo", sect_career: "Carriera", sect_profile: "Profilo",
    card_science_desc: "Le mie pubblicazioni scientifiche, abstract per conferenze e poster.",
    card_projects_desc: "Sviluppo software, prototipi robotici (MAIA) e codice open source.",
    card_resume_desc: "Il mio percorso accademico, formazione e traguardi.",
    card_about_desc: "Chi sono, i miei interessi di ricerca e la mia visione.",
    filters_cat: "Categoria", filters_year: "Anno",
    lbl_pub: "Pubblicazioni", lbl_abs: "Abstract", lbl_pos: "Poster",
    form_name: "Il tuo Nome", form_email: "La tua Email", form_msg: "Messaggio", form_send: "Invia Messaggio",
    resume_phd_title: "Dottorando (PhD)", resume_phd_desc: "Dip. di Scienze Biomediche e Neuromotorie — Università di Bologna.",
    resume_msc_title: "Laurea Magistrale in AI", resume_msc_desc: "110/110 e lode — Università di Bologna.",
    resume_bsc_title: "Laurea Triennale in Ing. Informatica", resume_bsc_desc: "Università di Palermo.",
    contact_title: "Contattami", contact_sub: "Invia un messaggio o visita la pagina istituzionale.",
    contact_unibo: "Visita Profilo Unibo"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  
  // 1. Language Toggle Logic
  const langBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';
  
  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        // Handle input placeholders specifically
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          // Update placeholder if used, or label logic
        } else if (el.tagName === 'LABEL') {
           el.textContent = i18n[lang][key];
        } else {
           el.textContent = i18n[lang][key];
        }
      }
    });
    // Update button text
    if(langBtn) langBtn.textContent = lang === 'en' ? '🇮🇹 IT' : '🇬🇧 EN';
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }
  
  // Initial Apply
  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'it' : 'en';
      applyLanguage(newLang);
    });
  }

  // 2. Theme Toggle
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
    });
  }

  // 3. Mobile Menu
  const navToggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      navToggle.textContent = navList.classList.contains('open') ? '✕' : '☰';
    });
  }
  
  // 4. Year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
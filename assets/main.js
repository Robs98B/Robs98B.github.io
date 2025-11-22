/* assets/main.js */

const translations = {
  en: {
    // Nav
    nav_about: "About",
    nav_resume: "Resume",
    nav_science: "Science",
    nav_projects: "Projects",
    nav_activities: "Activities",
    nav_contact: "Contact",
    btn_lang: "🇮🇹 IT",

    // Profile
    role_title: "PhD Student",
    role_inst: "University of Bologna",
    btn_unibo: "Unibo Page",
    bio_title: "About Me",
    bio_text: "I am a PhD student at the Department of Biomedical and Neuromotor Sciences, University of Bologna. My research lies at the intersection of Artificial Intelligence and Neuroscience, focusing on how we can bridge the gap between biological and artificial learning.",
    interests_title: "Research Interests",
    int_ml: "Machine & Deep Learning",
    int_bci: "Brain-Computer Interfaces",
    int_nc: "Neural Coding & Modeling",
    int_sp: "Signal Processing",

    // Resume
    resume_title: "Resume",
    res_curr_date: "2024 — Present",
    res_phd_title: "PhD Student",
    res_phd_desc: "Dept. of Biomedical and Neuromotor Sciences — University of Bologna.",
    res_msc_date: "2021 — 2024",
    res_msc_title: "MSc in Artificial Intelligence",
    res_msc_desc: "110/110 cum laude — University of Bologna.",
    res_bsc_date: "2017 — 2021",
    res_bsc_title: "BSc in Computer Engineering",
    res_bsc_desc: "University of Palermo.",

    // Science
    sci_title: "Science",
    filter_cat: "Category",
    lbl_pub: "Publications",
    lbl_abs: "Abstracts",
    lbl_pos: "Posters",
    filter_year: "Year",
    filter_all: "All",
    no_results: "No results found for current filters.",
    // Science Items
    sci_sfn_venue: "Society for Neuroscience 2025",
    sci_sfn_title: "Multi-horizon neural decoding enables delay-free, biologically plausible kinematic forecasts for brain-computer interfaces",
    sci_sfn_auth: "Roberto Bonini, et al.",

    // Projects
    proj_title: "Projects",
    proj_intro: "Selection of recent projects.",
    
    proj_maia_title: "Robotic Prototype — MAIA",
    proj_maia_desc: "Integrated prototype (wheelchair + robotic arm) to test MAIA principles for bidirectional control, developed at TECNALIA (San Sebastian, Spain).",
    proj_maia_code: "Code availability: Private",

    proj_aicamp_title: "AICAMP — MAI4CAREU",
    proj_aicamp_desc: "Presentation and discussion on AI research topics, group investigation on Large Language Models (LLMs) in collaboration with University of Cyprus and University of Bologna.",
    proj_aicamp_code: "Code availability: No code",

    // Activities
    act_title: "Academic Activities",
    act_intro: "Filter by year (since 2021). Updated list of tutoring and activities.",
    act_2024_title: "Teaching Tutor — Algorithms and Data Structures",
    act_2024_desc: "A.Y. 2024/2025 (2nd cycle) — Bachelor's Degree in Computer Science, University of Bologna.",
    act_2023_title: "Tutor — CESIA",
    act_2023_desc: "Support in admission procedures for Study Courses — University of Bologna.",
    act_2022_title: "Teaching Tutor — Master's Degree AI",
    act_2022_desc: "Support for students in difficulty — Engineering-Architecture, University of Bologna.",
    
    // Contact
    contact_title: "Get in Touch",
    contact_sub: "Send me a message or visit my institutional page.",
    lbl_name: "Your Name",
    lbl_email: "Your Email",
    lbl_msg: "Message",
    btn_send: "Send Message",
    footer_cr: "Roberto Bonini"
  },
  
  it: {
    // Nav
    nav_about: "Chi Sono",
    nav_resume: "Curriculum",
    nav_science: "Ricerca",
    nav_projects: "Progetti",
    nav_activities: "Attività Accademiche",
    nav_contact: "Contatti",
    btn_lang: "🇬🇧 EN",

    // Profile
    role_title: "Dottorando (PhD)",
    role_inst: "Università di Bologna",
    btn_unibo: "Pagina Unibo",
    bio_title: "Chi Sono",
    bio_text: "Sono un dottorando presso il Dipartimento di Scienze Biomediche e Neuromotorie dell'Università di Bologna. La mia ricerca si colloca all'intersezione tra Intelligenza Artificiale e Neuroscienze, esplorando come colmare il divario tra apprendimento biologico e artificiale.",
    interests_title: "Interessi di Ricerca",
    int_ml: "Machine & Deep Learning",
    int_bci: "Brain-Computer Interfaces",
    int_nc: "Neural Coding & Modeling",
    int_sp: "Signal Processing",

    // Resume
    resume_title: "Curriculum",
    res_curr_date: "2024 — Presente",
    res_phd_title: "Dottorando (PhD)",
    res_phd_desc: "Dip. di Scienze Biomediche e Neuromotorie — Università di Bologna.",
    res_msc_date: "2021 — 2024",
    res_msc_title: "Laurea Magistrale in AI",
    res_msc_desc: "110/110 e lode — Università di Bologna.",
    res_bsc_date: "2017 — 2021",
    res_bsc_title: "Laurea Triennale in Ing. Informatica",
    res_bsc_desc: "Università di Palermo.",

    // Science
    sci_title: "Ricerca",
    filter_cat: "Categoria",
    lbl_pub: "Pubblicazioni",
    lbl_abs: "Abstract",
    lbl_pos: "Poster",
    filter_year: "Anno",
    filter_all: "Tutti",
    no_results: "Nessun risultato per i filtri selezionati.",
    
    sci_sfn_venue: "Society for Neuroscience 2025",
    sci_sfn_title: "Multi-horizon neural decoding enables delay-free, biologically plausible kinematic forecasts for brain-computer interfaces",
    sci_sfn_auth: "Roberto Bonini, M. Filippini, F. E. Vaccari, M. De Vitis, P. Fattori",

    // Projects
    proj_title: "Progetti",
    proj_intro: "Selezione di progetti recenti.",
    
    proj_maia_title: "Multifunctional, adaptive and interactive AI system for Acting in multiple contexts (MAIA)",
    proj_maia_desc: "Prototipo integrato (sedia a rotelle + braccio robotico) per testare principi MAIA per controllo bidirezionale, sviluppato presso TECNALIA (San Sebastian, Spagna).",
    proj_maia_code: "Disponibilità codice: Privato",

    proj_aicamp_title: "AICAMP — MAI4CAREU",
    proj_aicamp_desc: "Presentazione e discussione su temi di ricerca AI, indagine del gruppo sui Large Language Models (LLMs) in collaborazione con Università di Cipro e Università di Bologna.",
    proj_aicamp_code: "Disponibilità codice: No code",

    // Activities
    act_title: "Attività Accademiche",
    act_intro: "Filtra per anno (dal 2021). Elenco aggiornato di tutorati e attività.",
    act_2024_title: "Tutor didattico — Algoritmi e Strutture di Dati",
    act_2024_desc: "A.A. 2024/2025 (2° ciclo) — Laurea Triennale in Informatica, Università di Bologna.",
    act_2023_title: "Tutor — CESIA",
    act_2023_desc: "Supporto nelle procedure di ammissione ai Corsi di studio — Università di Bologna.",
    act_2022_title: "Tutor didattico — Laurea Magistrale AI",
    act_2022_desc: "Supporto per studenti in difficoltà — Ingegneria-Architettura, Università di Bologna.",

    // Contact
    contact_title: "Contattami",
    contact_sub: "Invia un messaggio o visita la pagina istituzionale.",
    lbl_name: "Il tuo Nome",
    lbl_email: "La tua Email",
    lbl_msg: "Messaggio",
    btn_send: "Invia Messaggio",
    footer_cr: "Roberto Bonini"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- 1. THEME LOGIC ---
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (systemDark) {
    root.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // --- 2. LANGUAGE LOGIC ---
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';
  
  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
    document.documentElement.lang = lang;
    if (langToggle) langToggle.textContent = translations[lang]['btn_lang'];
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = currentLang === 'en' ? 'it' : 'en';
      applyLanguage(next);
    });
  }

  // --- 3. MOBILE NAV LOGIC ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-list');
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navList.classList.contains('open');
      if(isOpen) {
        navList.classList.remove('open');
        mobileToggle.textContent = '☰';
      } else {
        navList.classList.add('open');
        mobileToggle.textContent = '✕';
      }
    });
  }

  // --- 4. FOOTER YEAR ---
  const yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();
});
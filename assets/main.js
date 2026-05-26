/* assets/main.js */

const translations = {
  en: {
    // Nav
    nav_home: "Home",
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
    bio_text: "I am currently a Ph.D. Candidate in Theoretical and Applied Neurosciences at the Department of Biomedical and Neuromotor Sciences, University of Bologna. I hold a Master's degree in Artificial Intelligence and my research is positioned at the intersection of AI and Neurosciences. I specialize in applying Machine Learning, Deep Learning methodologies, and signal processing techniques to investigate how the brain encodes and decodes information. The ultimate goal of my work is to translate this knowledge into concrete applications, particularly within the field of Brain-Computer Interfaces (BCIs).",
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
    sci_sfn_auth: "Roberto Bonini, M. Filippini, F. E. Vaccari, M. De Vitisi, P. Fattori",

    // Projects
    proj_title: "Projects",
    proj_intro: "Selection of recent projects.",

    proj_places_title: "PLACES: PLAsticity of perception in real and virtual spaCES",
    proj_places_desc: "European Union’s Horizon Europe Research and Innovation program, focusing on the plasticity of spatial perception in real and virtual environments.",

    proj_maia_title: "MAIA: Multifunctional, Adaptive and Interactive AI system for Acting in multiple contexts",
    proj_maia_desc: "Prototype integrating wheelchair and robotic arm to demonstrate MAIA principles.",
    proj_maia_code: "Code availability: Private",

    proj_aicamp_title: "AICAMP (MAI4CAREU)",
    proj_aicamp_desc: "Presentation and discussion on AI research topics, group investigation on Large Language Models (LLMs).",
    proj_aicamp_code: "Code availability: No code",

    // Common
    btn_article: "Article",
    btn_doi: "DOI",

    // Activities
    act_title: "Academic Activities",
    act_intro: "Filter by year (since 2021). Updated list of tutoring and activities.",
    act_2026_place: "Department of Computer Science, University of Bologna",
    act_2026_title: "Teaching tutor for the Bachelor Degree in Computer Science",
    act_2026_desc: "Teaching support for the Algorithms and Data Structures course",
    act_2025_place: "Department of Computer Science, University of Bologna",
    act_2025_title: "Teaching tutor for the Bachelor Degree in Computer Science",
    act_2025_desc: "Teaching support for the Algorithms and Data Structures course",
    act_2024_place: "Department of Computer Science, University of Bologna",
    act_2024_title: "Teaching tutor for the Bachelor Degree in Computer Science",
    act_2024_desc: "Teaching support for the Algorithms and Data Structures course",
    act_2023_place: "CESIA, University of Bologna",
    act_2023_title: "Administrative support for admission procedures",
    act_2022_place: "Department of Computer Science, University of Bologna",
    act_2022_title: "Teaching tutor for Master's Degree in Artificial Intelligence",
    act_2022_desc: "Academic tutoring for AI coursework and research methodology",

    // Contact
    contact_title: "Get in Touch",
    contact_sub: "Send me a message or visit my institutional page.",
    lbl_name: "Your Name",
    lbl_email: "Your Email",
    lbl_msg: "Message",
    btn_send: "Send Message",
    footer_cr: "Roberto Bonini",

    // Resume - New dynamic cards
    res_view_details: "View Details",
    res_hide_details: "Hide Details",
    // PhD
    res_phd_position: "PhD Student",
    res_phd_department: "Dept. of Biomedical and Neuromotor Sciences",
    res_phd_university: "University of Bologna",
    res_phd_description: "Research focus on machine learning and biomedical applications",
    res_phd_children_visiting_rhul_position: "Visiting PhD Student",
    res_phd_children_visiting_rhul_department: "Virtual Reality Lab",
    res_phd_children_visiting_rhul_university: "Royal Holloway, University of London, Egham, UK",
    res_phd_children_visiting_rhul_description: "Jointly hosted by the Departments of Psychology, Computer Science, and Electronic Engineering.\n\nCollaboration with the <strong>Centre for Reliable Machine Learning</strong>.",
    res_phd_children_research_position: "Research Assistant",
    res_phd_children_research_department: "Biomedical Engineering Lab",
    res_phd_children_research_description: "Developing AI models for medical image analysis",

    // MSc
    res_msc_position: "MSc in Artificial Intelligence",
    res_msc_department: "Department of Computer Science and Engineering",
    res_msc_university: "University of Bologna",
    res_msc_description: "110/110 cum laude, thesis on deep learning for computer vision",
    res_msc_children_thesis_position: "Thesis Student",
    res_msc_children_thesis_department: "AI and Vision Lab",
    res_msc_children_thesis_description: "Thesis: 'Advanced Deep Learning Techniques for Medical Image Segmentation'",

    // BSc
    res_bsc_position: "BSc in Computer Engineering",
    res_bsc_department: "Department of Engineering",
    res_bsc_university: "University of Palermo",
    res_bsc_description: "Foundation in computer engineering and software development",
    res_bsc_children_erasmus_position: "Erasmus+ Exchange Student",
    res_bsc_children_erasmus_department: "Department of Informatics",
    res_bsc_children_erasmus_university: "University of Piraeus, Greece",
    res_bsc_children_erasmus_description: "Studied computer science and explored Greek culture from September 2019 to February 2020",
    res_bsc_children_internship_position: "Software Engineering Intern",
    res_bsc_children_internship_department: "IT Department",
    res_bsc_children_internship_description: "Developed web applications for university management system"
  },

  it: {
    // Nav
    nav_home: "Home",
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
    bio_text: "Attualmente sono Dottorando di Ricerca in Neuroscienze Teoriche e Applicate presso il Dipartimento di Scienze Biomediche e Neuromotorie dell'Università di Bologna. Ho completato la mia formazione con una Laurea Magistrale in Intelligenza Artificiale e, oggi, svolgo la mia ricerca all'intersezione tra l'AI e le Neuroscienze. Mi dedico all'applicazione di metodologie di Machine Learning, Deep Learning e tecniche di elaborazione del segnale per investigare i meccanismi di codifica e decodifica delle informazioni cerebrali. L'obiettivo finale del mio lavoro è traslare queste conoscenze in applicazioni pratiche, con particolare focus sul campo delle Interfacce Cervello-Computer (BCI).",
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
    sci_sfn_auth: "Roberto Bonini, M. Filippini, F. E. Vaccari, M. De Vitisi, P. Fattori",

    // Projects
    proj_title: "Progetti",
    proj_intro: "Selezione di progetti recenti.",

    proj_places_title: "PLACES: PLAsticity of perception in real and virtual spaCES",
    proj_places_desc: "Programma di ricerca e innovazione Horizon Europe dell'Unione Europea, focalizzato sulla plasticità della percezione spaziale in ambienti reali e virtuali.",

    proj_maia_title: "MAIA: Multifunctional, Adaptive and Interactive AI system for Acting in multiple contexts",
    proj_maia_desc: "Prototipo che integra sedia a rotelle e braccio robotico per dimostrare i principi MAIA.",
    proj_maia_code: "Disponibilità codice: Privato",

    proj_aicamp_title: "AICAMP (MAI4CAREU)",
    proj_aicamp_desc: "Presentazione e discussione su temi di ricerca AI, indagine del gruppo sui Large Language Models (LLMs).",
    proj_aicamp_code: "Disponibilità codice: No code",

    // Common
    btn_article: "Articolo",
    btn_doi: "DOI",

    // Activities
    act_title: "Attività Accademiche",
    act_2026_place: "Dipartimento di Informatica, Università di Bologna",
    act_2026_title: "Tutor didattico per il corso di Algoritmi e Strutture di Dati (Laurea Triennale in Informatica)",
    act_2026_desc: "Supporto didattico per il corso di Algoritmi e Strutture Dati",
    act_2025_place: "Dipartimento di Informatica, Università di Bologna",
    act_2025_title: "Tutor didattico per il corso di Algoritmi e Strutture di Dati (Laurea Triennale in Informatica)",
    act_2025_desc: "Supporto didattico per il corso di Algoritmi e Strutture Dati",
    act_2024_place: "Dipartimento di Informatica, Università di Bologna",
    act_2024_title: "Tutor didattico per il corso di Algoritmi e Strutture di Dati (Laurea Triennale in Informatica)",
    act_2024_desc: "Supporto didattico per il corso di Algoritmi e Strutture Dati",
    act_2023_place: "CESIA, Università di Bologna",
    act_2023_title: "Supporto amministrativo per le procedure di ammissione",
    act_2023_desc: "Assistenza per immatricolazione e procedure di ammissione ai corsi di informatica",
    act_2022_place: "Dipartimento di Informatica, Università di Bologna",
    act_2022_title: "Tutor didattico per la Laurea Magistrale in Intelligenza Artificiale",
    act_2022_desc: "Tutoraggio accademico per corsi di AI e metodologia di ricerca",

    // Contact
    contact_title: "Contattami",
    contact_sub: "Invia un messaggio o visita la pagina istituzionale.",
    lbl_name: "Il tuo Nome",
    lbl_email: "La tua Email",
    lbl_msg: "Messaggio",
    btn_send: "Invia Messaggio",
    footer_cr: "Roberto Bonini",

    // Resume - New dynamic cards
    res_view_details: "Vedi Dettagli",
    res_hide_details: "Nascondi Dettagli",
    // PhD
    res_phd_position: "Dottorando (PhD)",
    res_phd_department: "Dip. di Scienze Biomediche e Neuromotorie",
    res_phd_university: "Università di Bologna",
    res_phd_description: "Focus di ricerca su apprendimento automatico e applicazioni biomediche",
    res_phd_children_visiting_rhul_position: "Visiting PhD Student",
    res_phd_children_visiting_rhul_department: "Virtual Reality Lab",
    res_phd_children_visiting_rhul_university: "Royal Holloway, University of London, Egham, UK",
    res_phd_children_visiting_rhul_description: "Ospitato congiuntamente dai Dipartimenti di Psicologia, Informatica ed Ingegneria Elettronica.\n\nCollaborazione con il <strong>Centre for Reliable Machine Learning</strong>.",
    res_phd_children_research_position: "Assistente di Ricerca",
    res_phd_children_research_department: "Laboratorio di Ingegneria Biomedica",
    res_phd_children_research_description: "Sviluppo di modelli AI per l'analisi di immagini mediche",

    // MSc
    res_msc_position: "Laurea Magistrale in AI",
    res_msc_department: "Dipartimento di Informatica e Ingegneria",
    res_msc_university: "Università di Bologna",
    res_msc_description: "110/110 e lode, tesi su apprendimento profondo per visione artificiale",
    res_msc_children_thesis_position: "Tesista",
    res_msc_children_thesis_department: "Laboratorio AI e Visione",
    res_msc_children_thesis_description: "Tesi: 'Tecniche Avanzate di Apprendimento Profondo per Segmentazione di Immagini Mediche'",

    // BSc
    res_bsc_position: "Laurea Triennale in Ing. Informatica",
    res_bsc_department: "Dipartimento di Ingegneria",
    res_bsc_university: "Università di Palermo",
    res_bsc_description: "Fondamenti di ingegneria informatica e sviluppo software",
    res_bsc_children_erasmus_position: "Studente in Scambio Erasmus+",
    res_bsc_children_erasmus_department: "Dipartimento di Informatica",
    res_bsc_children_erasmus_university: "Università del Pireo, Grecia",
    res_bsc_children_erasmus_description: "Studi di informatica e esplorazione della cultura greca da settembre 2019 a febbraio 2020",
    res_bsc_children_internship_position: "Tirocinante Ingegneria Software",
    res_bsc_children_internship_department: "Dipartimento IT",
    res_bsc_children_internship_description: "Sviluppo di applicazioni web per sistema di gestione universitario"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- 1. THEME LOGIC ---
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let themeHoverTimeout;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (systemDark) {
    root.setAttribute('data-theme', 'dark');
  }
  const initialTheme = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
  if (!root.getAttribute('data-theme')) {
    root.setAttribute('data-theme', initialTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      const isDark = next === 'dark';
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeToggle.textContent = isDark ? '☾' : '☀';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    });
    const isDarkInit = (root.getAttribute('data-theme') || 'light') === 'dark';
    themeToggle.setAttribute('aria-pressed', isDarkInit ? 'true' : 'false');
    themeToggle.textContent = isDarkInit ? '☾' : '☀';
    themeToggle.setAttribute('aria-label', isDarkInit ? 'Switch to light theme' : 'Switch to dark theme');

    // Remove hover animation after 1 second
    themeToggle.addEventListener('mouseenter', () => {
      clearTimeout(themeHoverTimeout);
    });

    themeToggle.addEventListener('mouseleave', () => {
      themeHoverTimeout = setTimeout(() => {
        themeToggle.style.transform = '';
        themeToggle.style.background = '';
      }, 1000);
    });
  }

  // --- 2. LANGUAGE LOGIC ---
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';
  let langHoverTimeout;

  // Make applyLanguage globally accessible
  window.applyLanguage = function (lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        const val = translations[lang][key];
        if (val.includes('<') && val.includes('>')) {
          el.innerHTML = val;
        } else {
          el.innerText = val;
        }
      }
    });
    document.documentElement.lang = lang;
    if (langToggle) langToggle.textContent = translations[lang]['btn_lang'];
    localStorage.setItem('lang', lang);
    currentLang = lang;
  };

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = currentLang === 'en' ? 'it' : 'en';
      window.applyLanguage(next);
      langToggle.setAttribute('aria-label', next === 'en' ? 'Switch language' : 'Cambia lingua');
    });
    langToggle.setAttribute('aria-label', currentLang === 'en' ? 'Switch language' : 'Cambia lingua');

    // Remove hover animation after 1 second
    langToggle.addEventListener('mouseenter', () => {
      clearTimeout(langHoverTimeout);
    });

    langToggle.addEventListener('mouseleave', () => {
      langHoverTimeout = setTimeout(() => {
        langToggle.style.transform = '';
        langToggle.style.background = '';
      }, 1000);
    });
  }

  // --- 3. MOBILE NAV LOGIC ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-list');
  const siteHeader = document.querySelector('.site-header');
  function applyNavMode() {
    if (!siteHeader) return;
    const mobile = window.innerWidth <= 850;
    const has = siteHeader.classList.contains('nav-mobile');
    if (mobile && !has) {
      siteHeader.classList.add('nav-mobile');
      siteHeader.classList.add('nav-enter');
      setTimeout(() => { siteHeader.classList.remove('nav-enter'); }, 600);
    }
    if (!mobile && has) {
      siteHeader.classList.remove('nav-mobile');
      siteHeader.classList.remove('nav-enter');
    }
  }
  applyNavMode();
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navList.classList.contains('open');
      if (isOpen) {
        navList.classList.remove('open');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        navList.classList.add('open');
        mobileToggle.textContent = '✕';
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navList.classList.contains('open') &&
        !navList.contains(e.target) &&
        !mobileToggle.contains(e.target)) {
        navList.classList.remove('open');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking on nav links
    navList.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        mobileToggle.textContent = '☰';
      });
    });

    // Close menu on window resize if above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850 && navList.classList.contains('open')) {
        navList.classList.remove('open');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
      applyNavMode();
    });
  }

  // --- 4. FOOTER YEAR ---
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
});

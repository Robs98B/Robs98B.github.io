/* assets/main.js */

const translations = {
  en: {
    // Nav
    brand: "Roberto Bonini",
    nav_about: "About",
    nav_resume: "Resume",
    nav_science: "Science",
    nav_projects: "Projects",
    nav_activities: "Academic Activities",
    nav_contact: "Contact",
    btn_lang: "🇮🇹 IT",

    // Home (Index)
    hero_title: "Exploring the intersection of AI & Neuroscience",
    hero_desc: "PhD Student at Unibo focusing on Neural Decoding, Brain-Computer Interfaces and biologically plausible learning models.",
    btn_science: "Explore Science",
    btn_contact: "Contact Me",
    
    // Home Cards
    badge_focus: "Focus",
    card_sci_title: "Science",
    card_sci_desc: "My scientific publications, conference abstracts and posters.",
    badge_dev: "Dev",
    card_proj_title: "Projects",
    card_proj_desc: "Software development, robotic prototypes (MAIA) and open source code.",
    badge_career: "Career",
    card_res_title: "Resume",
    card_res_desc: "My complete academic path, education and milestones.",
    badge_profile: "Profile",
    card_about_title: "About Me",
    card_about_desc: "Who I am, my research interests and vision.",

    // About Page
    about_title: "About",
    about_intro: "I am a PhD student at the Department of Biomedical and Neuromotor Sciences — University of Bologna. I conduct research at the intersection of Artificial Intelligence and Neuroscience, with an interest in brain-computer interfaces and advanced learning models.",
    ab_card1_title: "Recent Path",
    ab_card1_desc: "Since 2024 I am a PhD student at the University of Bologna. Previously I obtained a Master's Degree in Artificial Intelligence (2021—2024, 110/110 cum laude) and a Bachelor's Degree in Computer Engineering (2017—2021).",
    ab_card2_title: "Experiences",
    ab_card2_desc: "I have carried out tutoring activities in various academic contexts and participated in research and development projects, including an integrated robotic prototype (wheelchair + robotic arm) within the MAIA project.",
    ab_card3_title: "Interests",
    ab_card3_desc: "AI, neural decoding, human-machine interfaces, LLMs and data-driven applications for adaptive systems.",

    // Resume Page
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

    // Science Page
    sci_title: "Science",
    filter_cat: "Category",
    lbl_pub: "Publications",
    lbl_abs: "Abstracts",
    lbl_pos: "Posters",
    filter_year: "Year",
    filter_all: "All",
    no_results: "No results found for current filters.",
    // Science Items
    sci_abs_2025_title: "Society for Neuroscience 2025",
    sci_abs_2025_desc: "\"Multi-horizon neural decoding enables delay-free, biologically plausible kinematic forecasts for brain-computer interfaces.\"",

    // Projects Page
    proj_title: "Projects",
    proj_intro: "Selection of recent projects.",
    proj_maia_title: "Robotic Prototype — MAIA",
    proj_maia_desc: "Integrated prototype (wheelchair + robotic arm) to test MAIA principles for bidirectional control, developed at TECNALIA (San Sebastian, Spain).",
    proj_aicamp_title: "AICAMP — MAI4CAREU",
    proj_aicamp_desc: "Presentation and discussion on AI research topics, group investigation on Large Language Models (LLMs) in collaboration with University of Cyprus and University of Bologna.",

    // Activities Page
    act_title: "Academic Activities",
    act_intro: "Filter by year (since 2021). Updated list of tutoring and activities.",
    act_2025_title: "Activities 2025–2026",
    act_2025_desc: "Ongoing teaching and academic activities (detailed entries available via Unibo page).",
    act_2024_title: "Teaching Tutor — Algorithms and Data Structures",
    act_2024_desc: "A.Y. 2024/2025 (2nd cycle) — Bachelor's Degree in Computer Science, University of Bologna.",
    act_2023_title: "Tutor — CESIA",
    act_2023_desc: "Support in admission procedures for Study Courses — University of Bologna.",
    act_2022_title: "Teaching Tutor — Master's Degree AI",
    act_2022_desc: "Support for students in difficulty — Engineering-Architecture, University of Bologna.",
    
    // Contact Page
    contact_title: "Get in Touch",
    contact_sub: "Send me a message or visit my institutional page.",
    lbl_name: "Your Name",
    lbl_email: "Your Email",
    lbl_msg: "Message",
    btn_send: "Send Message",
    btn_unibo: "Visit Unibo Profile",
    
    // Footer
    footer_cr: "Roberto Bonini"
  },
  
  it: {
    // Nav
    brand: "Roberto Bonini",
    nav_about: "Chi Sono",
    nav_resume: "Curriculum",
    nav_science: "Ricerca",
    nav_projects: "Progetti",
    nav_activities: "Attività Accademiche",
    nav_contact: "Contatti",
    btn_lang: "🇬🇧 EN",

    // Home
    hero_title: "Esplorando l'intersezione tra AI e Neuroscienze",
    hero_desc: "Dottorando presso Unibo. Mi occupo di Decodifica Neurale, Interfacce Cervello-Computer e modelli di apprendimento biologicamente plausibili.",
    btn_science: "Esplora Ricerca",
    btn_contact: "Scrivimi",

    // Home Cards
    badge_focus: "Focus",
    card_sci_title: "Ricerca",
    card_sci_desc: "Le mie pubblicazioni scientifiche, abstract per conferenze e poster.",
    badge_dev: "Sviluppo",
    card_proj_title: "Progetti",
    card_proj_desc: "Sviluppo software, prototipi robotici (MAIA) e codice open source.",
    badge_career: "Carriera",
    card_res_title: "Curriculum",
    card_res_desc: "Il mio percorso accademico, formazione e traguardi.",
    badge_profile: "Profilo",
    card_about_title: "Chi Sono",
    card_about_desc: "La mia identità, i miei interessi di ricerca e la mia visione.",

    // About
    about_title: "Chi Sono",
    about_intro: "Sono un dottorando presso il Dipartimento di Scienze Biomediche e Neuromotorie — Università di Bologna. Porto avanti ricerca all'intersezione tra Intelligenza Artificiale e Neuroscienze, con interesse per interfacce cervello-computer e modelli di apprendimento avanzati.",
    ab_card1_title: "Percorso Recente",
    ab_card1_desc: "Dal 2024 sono Dottorando all'Università di Bologna. In precedenza ho conseguito la Laurea magistrale in Artificial Intelligence (2021—2024, 110/110 cum laude) e la Laurea triennale in Ingegneria Informatica (2017—2021).",
    ab_card2_title: "Esperienze",
    ab_card2_desc: "Ho svolto attività di tutorato in diversi contesti accademici e ho partecipato a progetti di ricerca e sviluppo, tra cui un prototipo robotico integrato sedia a rotelle + braccio robotico nell'ambito del progetto MAIA.",
    ab_card3_title: "Interessi",
    ab_card3_desc: "AI, neural decoding, interfacce uomo-macchina, LLMs e applicazioni data-driven per sistemi adattivi.",

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
    sci_abs_2025_title: "Society for Neuroscience 2025",
    sci_abs_2025_desc: "\"Multi-horizon neural decoding enables delay-free, biologically plausible kinematic forecasts for brain-computer interfaces.\"",

    // Projects
    proj_title: "Progetti",
    proj_intro: "Selezione di progetti recenti.",
    proj_maia_title: "Prototipo Robotico — MAIA",
    proj_maia_desc: "Prototipo integrato (sedia a rotelle + braccio robotico) per testare principi MAIA per controllo bidirezionale, sviluppato presso TECNALIA (San Sebastian, Spagna).",
    proj_aicamp_title: "AICAMP — MAI4CAREU",
    proj_aicamp_desc: "Presentazione e discussione su temi di ricerca AI, indagine del gruppo sui Large Language Models (LLMs) in collaborazione con Università di Cipro e Università di Bologna.",

    // Activities
    act_title: "Attività Accademiche",
    act_intro: "Filtra per anno (dal 2021). Elenco aggiornato di tutorati e attività.",
    act_2025_title: "Attività 2025–2026",
    act_2025_desc: "Attività didattiche e accademiche in corso (voci dettagliate disponibili tramite pagina Unibo).",
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
    btn_unibo: "Visita Profilo Unibo",
    
    // Footer
    footer_cr: "Roberto Bonini"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- 1. THEME LOGIC ---
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check preference
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
  
  // Function to update texts
  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        // Handle input placeholders/labels
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          // Usually handled by sibling label, but if placeholder exists:
          // el.placeholder = translations[lang][key]; 
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update Button Text
    if (langToggle) {
        langToggle.textContent = translations[lang]['btn_lang'];
    }
    
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  // Init Language
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
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        navList.classList.add('open');
        mobileToggle.textContent = '✕';
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // --- 4. FOOTER YEAR ---
  const yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();
});
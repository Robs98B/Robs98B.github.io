const resumeCards = [
  {
    id: "bsc",
    yearStart: "2017",
    yearEnd: "2021",
    position: "BSc in Computer Engineering",
    university: "University of Palermo",
    icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l9 4v2H3V7l9-4z\"></path><path d=\"M5 11h2v6H5zm6 0h2v6h-2zm6 0h2v6h-2z\"></path><path d=\"M3 19h18v2H3z\"></path></svg>",
    color: "#388e3c",
    children: [
      {
        id: "erasmus",
        monthStart: "Sep",
        yearStart: "2019",
        monthEnd: "Feb",
        yearEnd: "2020",
        position: "Erasmus+ Exchange Student",
        department: "Department of Computer Science",
        university: "University of Piraeus, Greece"
      }
    ]
  },
  {
    id: "msc",
    yearStart: "2021",
    yearEnd: "2024",
    position: "MSc in Artificial Intelligence",
    university: "University of Bologna",
    icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"></rect><path d=\"M8 4v4M12 4v4M16 4v4M4 8h4M4 12h4M4 16h4M20 8h-4M20 12h-4M20 16h-4\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></svg>",
    color: "#7b1fa2",
    children: [
      {
        id: "traineeship",
        monthStart: "Sep",
        yearStart: "2023",
        monthEnd: "Dec",
        yearEnd: "2023",
        position: "Erasmus+ Traineeship",
        department: "TECNALIA Research & Innovation",
        university: "San Sebastián, Spain",
        description: "See project in the Projects section",
        link: "projects.html"
      },
      {
        id: "thesis",
        yearStart: "2023",
        yearEnd: "2024",
        position: "Thesis",
        university: "University of Bologna",
        description: "Integrating neuro-ocular data for accurate hand moving decoding in brain-controlled robotic systems"
      }
    ]
  },
  {
    id: "phd",
    yearStart: "2024",
    yearEnd: "Present",
    position: "PhD Student",
    university: "University of Bologna",
    icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l10 5-10 5L2 8l10-5z\"></path><path d=\"M4 10v5c0 3 16 3 16 0v-5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><circle cx=\"20\" cy=\"13\" r=\"1\"></circle></svg>",
    color: "#1976d2"
  }
];

const resumeTranslations = {
  en: {
    "res_bsc_position": "BSc in Computer Engineering",
    "res_bsc_university": "University of Palermo",
    "res_bsc_children_erasmus_position": "Erasmus+ Exchange Student",
    "res_bsc_children_erasmus_department": "Department of Computer Science",
    "res_bsc_children_erasmus_university": "University of Piraeus, Greece",

    "res_msc_position": "MSc in Artificial Intelligence",
    "res_msc_university": "University of Bologna",
    "res_msc_children_traineeship_position": "Erasmus+ Traineeship",
    "res_msc_children_traineeship_department": "TECNALIA Research & Innovation",
    "res_msc_children_traineeship_university": "San Sebastián, Spain",
    "res_msc_children_traineeship_description": "See project in the Projects section",
    "res_msc_children_thesis_position": "Thesis",
    "res_msc_children_thesis_university": "University of Bologna",
    "res_msc_children_thesis_description": "Integrating neuro-ocular data for accurate hand moving decoding in brain-controlled robotic systems",

    "res_phd_position": "PhD Student",
    "res_phd_university": "University of Bologna"
  },
  it: {
    "res_bsc_position": "Laurea Triennale in Ing. Informatica",
    "res_bsc_university": "Università di Palermo",
    "res_bsc_children_erasmus_position": "Studente in Scambio Erasmus+",
    "res_bsc_children_erasmus_department": "Dipartimento di Informatica",
    "res_bsc_children_erasmus_university": "Università del Pireo, Grecia",

    "res_msc_position": "Laurea Magistrale in Intelligenza Artificiale",
    "res_msc_university": "Università di Bologna",
    "res_msc_children_traineeship_position": "Tirocinio Erasmus+",
    "res_msc_children_traineeship_department": "TECNALIA Research & Innovation",
    "res_msc_children_traineeship_university": "San Sebastián, Spagna",
    "res_msc_children_traineeship_description": "Vedi progetto nella sezione Progetti",
    "res_msc_children_thesis_position": "Tesi",
    "res_msc_children_thesis_university": "Università di Bologna",
    "res_msc_children_thesis_description": "Integrazione di dati neuro-oculari per la decodifica accurata del movimento della mano in sistemi robotici controllati dal cervello",

    "res_phd_position": "Dottorando (PhD)",
    "res_phd_university": "Università di Bologna"
  }
};

// Resume cards data
const resumeCards = [
  {
    id: "phd",
    yearStart: "2024",
    yearEnd: "Present",
    position: "PhD Student",
    department: "Dept. of Biomedical and Neuromotor Sciences",
    university: "University of Bologna",
    description: "Research focus on machine learning and biomedical applications",
    icon: "🎓",
    color: "#1976d2",
    children: [
      {
        id: "phd-research",
        yearStart: "2024",
        yearEnd: "Present",
        position: "Research Assistant",
        department: "Biomedical Engineering Lab",
        university: "University of Bologna",
        description: "Developing AI models for medical image analysis"
      }
    ]
  },
  {
    id: "msc",
    yearStart: "2021",
    yearEnd: "2024",
    position: "MSc in Artificial Intelligence",
    department: "Department of Computer Science and Engineering",
    university: "University of Bologna",
    description: "110/110 cum laude, thesis on deep learning for computer vision",
    icon: "🤖",
    color: "#7b1fa2",
    children: [
      {
        id: "msc-thesis",
        yearStart: "2023",
        yearEnd: "2024",
        position: "Thesis Student",
        department: "AI and Vision Lab",
        university: "University of Bologna",
        description: "Thesis: 'Advanced Deep Learning Techniques for Medical Image Segmentation'"
      }
    ]
  },
 {
    id: "bsc",
    yearStart: "2017",
    yearEnd: "2021",
    position: "BSc in Computer Engineering",
    department: "Department of Engineering",
    university: "University of Palermo",
    description: "Foundation in computer engineering and software development",
    icon: "💻",
    color: "#388e3c",
    children: [
      {
        id: "erasmus",
        yearStart: "2019",
        yearEnd: "2020",
        position: "Erasmus+ Exchange Student",
        department: "Department of Informatics",
        university: "University of Piraeus, Greece",
        description: "Studied computer science and explored Greek culture from September 2019 to February 2020"
      },
      {
        id: "bsc-internship",
        yearStart: "2020",
        yearEnd: "2021",
        position: "Software Engineering Intern",
        department: "IT Department",
        university: "University of Palermo",
        description: "Developed web applications for university management system"
      }
    ]
  }
];

// Translations for resume cards
const resumeTranslations = {
  en: {
    // PhD
    "res_phd_position": "PhD Student",
    "res_phd_department": "Dept. of Biomedical and Neuromotor Sciences",
    "res_phd_university": "University of Bologna",
    "res_phd_description": "Research focus on machine learning and biomedical applications",
    "res_phd_children_research_position": "Research Assistant",
    "res_phd_children_research_department": "Biomedical Engineering Lab",
    "res_phd_children_research_description": "Developing AI models for medical image analysis",
    
    // MSc
    "res_msc_position": "MSc in Artificial Intelligence",
    "res_msc_department": "Department of Computer Science and Engineering",
    "res_msc_university": "University of Bologna",
    "res_msc_description": "110/110 cum laude, thesis on deep learning for computer vision",
    "res_msc_children_thesis_position": "Thesis Student",
    "res_msc_children_thesis_department": "AI and Vision Lab",
    "res_msc_children_thesis_description": "Thesis: 'Advanced Deep Learning Techniques for Medical Image Segmentation'",
    
    // BSc
    "res_bsc_position": "BSc in Computer Engineering",
    "res_bsc_department": "Department of Engineering",
    "res_bsc_university": "University of Palermo",
    "res_bsc_description": "Foundation in computer engineering and software development",
    "res_bsc_children_erasmus_position": "Erasmus+ Exchange Student",
    "res_bsc_children_erasmus_department": "Department of Informatics",
    "res_bsc_children_erasmus_university": "University of Piraeus, Greece",
    "res_bsc_children_erasmus_description": "Studied computer science and explored Greek culture from September 2019 to February 2020",
    "res_bsc_children_internship_position": "Software Engineering Intern",
    "res_bsc_children_internship_department": "IT Department",
    "res_bsc_children_internship_description": "Developed web applications for university management system"
  },
  it: {
    // PhD
    "res_phd_position": "Dottorando (PhD)",
    "res_phd_department": "Dip. di Scienze Biomediche e Neuromotorie",
    "res_phd_university": "Università di Bologna",
    "res_phd_description": "Focus di ricerca su apprendimento automatico e applicazioni biomediche",
    "res_phd_children_research_position": "Assistente di Ricerca",
    "res_phd_children_research_department": "Laboratorio di Ingegneria Biomedica",
    "res_phd_children_research_description": "Sviluppo di modelli AI per l'analisi di immagini mediche",
    
    // MSc
    "res_msc_position": "Laurea Magistrale in AI",
    "res_msc_department": "Dipartimento di Informatica e Ingegneria",
    "res_msc_university": "Università di Bologna",
    "res_msc_description": "110/110 e lode, tesi su apprendimento profondo per visione artificiale",
    "res_msc_children_thesis_position": "Tesista",
    "res_msc_children_thesis_department": "Laboratorio AI e Visione",
    "res_msc_children_thesis_description": "Tesi: 'Tecniche Avanzate di Apprendimento Profondo per Segmentazione di Immagini Mediche'",
    
    // BSc
    "res_bsc_position": "Laurea Triennale in Ing. Informatica",
    "res_bsc_department": "Dipartimento di Ingegneria",
    "res_bsc_university": "Università di Palermo",
    "res_bsc_description": "Fondamenti di ingegneria informatica e sviluppo software",
    "res_bsc_children_erasmus_position": "Studente in Scambio Erasmus+",
    "res_bsc_children_erasmus_department": "Dipartimento di Informatica",
    "res_bsc_children_erasmus_university": "Università del Pireo, Grecia",
    "res_bsc_children_erasmus_description": "Studi di informatica e esplorazione della cultura greca da settembre 2019 a febbraio 2020",
    "res_bsc_children_internship_position": "Tirocinante Ingegneria Software",
    "res_bsc_children_internship_department": "Dipartimento IT",
    "res_bsc_children_internship_description": "Sviluppo di applicazioni web per sistema di gestione universitario"
  }
};
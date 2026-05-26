// Projects cards data
const projectCards = [
  {
    id: "places",
    type: "Research Project",
    context: "Horizon Europe — Royal Holloway & University of Bologna",
    title_key: "proj_places_title",
    desc_key: "proj_places_desc",
    year: "2026",
    chips: ["Extended Reality (XR)", "Virtual Reality (VR)", "Perception", "EEG", "Eye-tracking"],
    code_availability: "none",
    article_link: "https://doi.org/10.3030/101086206",
    link_label_key: "btn_doi"
  },
  {
    id: "maia",
    type: "Robotics",
    context: "TECNALIA — San Sebastián, Spain",
    title_key: "proj_maia_title",
    desc_key: "proj_maia_desc",
    year: "2023",
    chips: ["ROS", "C++", "Python", "Hardware Integration"],
    code_note_key: "proj_maia_code",
    code_availability: "private",
    article_link: "https://doi.org/10.3030/951910",
    link_label_key: "btn_doi"
  },
  {
    id: "aicamp",
    type: "Research Group", 
    context: "University of Cyprus — University of Bologna",
    title_key: "proj_aicamp_title",
    desc_key: "proj_aicamp_desc", 
    year: "2023",
    chips: ["LLMs", "AI Ethics"],
    code_note_key: "proj_aicamp_code",
    code_availability: "none",
    article_link: "https://mai4car.eu/first-ai-camp/"
  }
];

// Export for use in main files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectCards;
}
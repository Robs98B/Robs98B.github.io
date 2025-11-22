// Projects cards data
const projectCards = [
  {
    id: "maia",
    type: "Robotics",
    context: "TECNALIA — San Sebastián, Spain",
    title_key: "proj_maia_title",
    desc_key: "proj_maia_desc",
    year: "2023",
    chips: ["ROS", "C++", "Python", "Hardware Integration"],
    code_note_key: "proj_maia_code",
    code_availability: "private"
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
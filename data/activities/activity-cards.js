// Activities cards data
const activityCards = [
  {
    id: "tutor_2024",
    role: "Teaching Tutor",
    context_key: "act_2024_place", 
    title_key: "act_2024_title",
    desc_key: "act_2024_desc",
    year: "2024"
  },
  {
    id: "tutor_2023", 
    role: "Tutor",
    context_key: "act_2023_place",
    title_key: "act_2023_title", 
    desc_key: "act_2023_desc",
    year: "2023"
  },
  {
    id: "tutor_2022",
    role: "Teaching Tutor", 
    context_key: "act_2022_place",
    title_key: "act_2022_title",
    desc_key: "act_2022_desc", 
    year: "2022"
  }
];

// Export for use in main files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = activityCards;
}
// Science cards data
const scienceCards = [
  {
    id: "copa_2026",
    category: "publication",
    year: "2026",
    venue_key: "sci_copa_venue",
    title_key: "sci_copa_title",
    authors_key: "sci_copa_auth",
    url: "https://proceedings.mlr.press/v329/bonini26a.html"
  },
  {
    id: "sfn_2025",
    category: "abstract",
    year: "2025",
    venue_key: "sci_sfn_venue",
    title_key: "sci_sfn_title", 
    authors_key: "sci_sfn_auth"
  }
];

// Export for use in main files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = scienceCards;
}
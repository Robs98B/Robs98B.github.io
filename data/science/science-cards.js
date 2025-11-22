/ Science cards data
const scienceCards = [
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
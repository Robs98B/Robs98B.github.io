// Activities section functionality
class ActivitiesSection {
  constructor() {
    this.container = document.getElementById('items');
    this.cards = activityCards;
    this.init();
  }

  init() {
    this.renderCards();
    // Re-apply translations after rendering cards
    if (typeof applyLanguage === 'function') {
      const currentLang = localStorage.getItem('lang') || 'en';
      applyLanguage(currentLang);
    }
  }

  renderCards() {
    if (!this.container) return;
    
    // Clear existing cards
    const existingCards = this.container.querySelectorAll('.card');
    existingCards.forEach(card => card.remove());
    
    this.cards.forEach((card, index) => {
      const cardElement = this.createCardElement(card, index);
      this.container.appendChild(cardElement);
    });
  }

  createCardElement(card, index) {
    const article = document.createElement('article');
    article.className = 'card item';
    article.setAttribute('data-year', card.year);
    article.style.setProperty('--delay', index + 1);

    article.innerHTML = `
      <div class="card-blob blob-b"></div>
      <div class="card-blob blob-c"></div>
      <div class="card-role">${card.role}</div>
      <div class="card-context" data-i18n="${card.context_key}"></div>
      <h3 class="card-title" data-i18n="${card.title_key}"></h3>
      <p class="card-desc" data-i18n="${card.desc_key}"></p>
      <div class="card-year">${card.year}</div>
    `;

    return article;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('items') && typeof activityCards !== 'undefined') {
    new ActivitiesSection();
  }
});

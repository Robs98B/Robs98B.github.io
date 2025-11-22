// Science section functionality
class ScienceSection {
  constructor() {
    this.container = document.getElementById('items');
    this.cards = scienceCards;
    this.init();
  }

  init() {
    this.renderCards();
  }

  renderCards() {
    if (!this.container) return;
    
    this.container.innerHTML = '';
    
    this.cards.forEach((card, index) => {
      const cardElement = this.createCardElement(card, index);
      this.container.appendChild(cardElement);
    });
  }

  createCardElement(card, index) {
    const article = document.createElement('article');
    article.className = 'card item';
    article.setAttribute('data-category', card.category);
    article.setAttribute('data-year', card.year);
    article.style.setProperty('--delay', index + 1);

    article.innerHTML = `
      <div class="card-category" data-i18n="${this.getCategoryKey(card.category)}">${this.getCategoryLabel(card.category)}</div>
      <div class="card-venue" data-i18n="${card.venue_key}"></div>
      <h3 class="card-title" data-i18n="${card.title_key}"></h3>
      <div class="card-authors" data-i18n="${card.authors_key}"></div>
      <div class="card-year">${card.year}</div>
    `;

    return article;
  }

  getCategoryKey(category) {
    const categoryMap = {
      'publication': 'lbl_pub',
      'abstract': 'lbl_abs', 
      'poster': 'lbl_pos'
    };
    return categoryMap[category] || 'lbl_pub';
  }

  getCategoryLabel(category) {
    const categoryMap = {
      'publication': 'Publication',
      'abstract': 'Abstract',
      'poster': 'Poster'
    };
    return categoryMap[category] || 'Publication';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('items') && typeof scienceCards !== 'undefined') {
    new ScienceSection();
  }
});
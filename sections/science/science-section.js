// Science section functionality
class ScienceSection {
  constructor() {
    console.log('ScienceSection constructor called');
    this.container = document.getElementById('items');
    this.cards = scienceCards;
    console.log('Container:', this.container);
    console.log('Cards:', this.cards);
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
      <div class="card-blob blob-a"></div>
      <div class="card-blob blob-c"></div>
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

// Initialize when DOM is loaded or immediately if already loaded
function initScienceSection() {
  console.log('initScienceSection called');
  console.log('items element:', document.getElementById('items'));
  console.log('scienceCards defined:', typeof scienceCards !== 'undefined');
  console.log('scienceCards data:', typeof scienceCards !== 'undefined' ? scienceCards : 'undefined');
  
  if (document.getElementById('items') && typeof scienceCards !== 'undefined' && scienceCards && scienceCards.length > 0) {
    console.log('Creating ScienceSection...');
    const section = new ScienceSection();
    console.log('ScienceSection created successfully');
    
    // Dispatch a custom event to notify that cards have been rendered
    const event = new CustomEvent('scienceCardsRendered', { 
      detail: { cardCount: scienceCards.length } 
    });
    document.dispatchEvent(event);
    console.log('scienceCardsRendered event dispatched');
  } else {
    console.log('ScienceSection not created - missing items or scienceCards or empty array');
    // Retry after a short delay
    setTimeout(initScienceSection, 500);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScienceSection);
} else {
  initScienceSection();
}

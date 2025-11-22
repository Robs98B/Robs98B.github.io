// Projects section functionality
class ProjectsSection {
  constructor() {
    this.container = document.querySelector('.cards-grid');
    this.cards = projectCards;
    this.init();
  }

  init() {
    this.renderCards();
  }

  renderCards() {
    if (!this.container) return;
    
    // Clear existing cards except any that aren't project cards
    const existingCards = this.container.querySelectorAll('.card');
    existingCards.forEach(card => {
      if (card.querySelector('.card-type')) {
        card.remove();
      }
    });
    
    this.cards.forEach((card, index) => {
      const cardElement = this.createCardElement(card, index);
      this.container.appendChild(cardElement);
    });
  }

  createCardElement(card, index) {
    const article = document.createElement('article');
    article.className = 'card';
    article.style.setProperty('--delay', index + 1);

    const chipsHtml = card.chips.map(chip => 
      `<span class="skill-chip">${chip}</span>`
    ).join('');

    const footerHtml = card.article_link ? 
      `<div class="card-footer">
         <div class="card-year">${card.year}</div>
         <a class="card-link" href="${card.article_link}" target="_blank" rel="noopener" data-i18n="btn_article">Article</a>
       </div>` :
      `<div class="card-footer">
         <div class="card-year">${card.year}</div>
       </div>`;

    const codeNoteHtml = card.code_availability === 'private' ? 
      `<div class="code-note" data-i18n="${card.code_note_key}">Code availability: Private</div>` :
      card.code_availability === 'none' ?
      '' : // Don't show code note for projects with articles
      `<div class="code-note" data-i18n="${card.code_note_key}"></div>`;

    article.innerHTML = `
      <div class="card-type">${card.type}</div>
      <div class="card-context">${card.context}</div>
      <h3 class="card-title" data-i18n="${card.title_key}"></h3>
      <p data-i18n="${card.desc_key}"></p>
      <div class="divider"></div>
      <div class="chip-list">
        ${chipsHtml}
      </div>
      ${footerHtml}
      ${codeNoteHtml}
    `;

    return article;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.cards-grid') && typeof projectCards !== 'undefined') {
    new ProjectsSection();
  }
});
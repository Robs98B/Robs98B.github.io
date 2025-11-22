// Resume Section - Dynamic Card Rendering with Material Design 3
class ResumeSection {
  constructor() {
    this.container = document.querySelector('.timeline');
    this.cards = resumeCards;
    this.currentLang = localStorage.getItem('lang') || 'en';
    
    // Merge resume translations into main translations
    if (typeof translations !== 'undefined') {
      Object.assign(translations.en, resumeTranslations.en);
      Object.assign(translations.it, resumeTranslations.it);
    }
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
      const timelineItem = this.createTimelineItem(card, index);
      this.container.appendChild(timelineItem);
    });

    // Add intersection observer for animations
    this.setupAnimations();
  }

  createTimelineItem(card, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.setProperty('--delay', index + 1);
    
    const yearRange = card.yearEnd === 'Present' ? 
      `${card.yearStart} — ${this.currentLang === 'it' ? 'Presente' : 'Present'}` : 
      `${card.yearStart} — ${card.yearEnd}`;

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <span class="timeline-date" data-i18n="res_${card.id}_date">${yearRange}</span>
      <div class="timeline-card resume-card" style="--card-color: ${card.color}">
        <div class="resume-card-header">
          <div class="resume-card-icon">${card.icon}</div>
          <div class="resume-card-info">
            <h3 class="resume-card-position" data-i18n="res_${card.id}_position">${card.position}</h3>
            <p class="resume-card-department" data-i18n="res_${card.id}_department">${card.department}</p>
            <p class="resume-card-university" data-i18n="res_${card.id}_university">${card.university}</p>
          </div>
        </div>
        ${card.description ? `<p class="resume-card-description" data-i18n="res_${card.id}_description">${card.description}</p>` : ''}
        
        ${card.children && card.children.length > 0 ? `
          <div class="resume-card-children">
            <button class="resume-card-toggle" onclick="toggleChildren('${card.id}')">
              <span data-i18n="res_view_details">View Details</span>
              <span class="toggle-icon">▼</span>
            </button>
            <div class="resume-children-container" id="children-${card.id}">
              ${card.children.map(child => this.createChildCard(child, card.id)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    return item;
  }

  createChildCard(child, parentId) {
    const yearRange = child.yearEnd === 'Present' ? 
      `${child.yearStart} — ${this.currentLang === 'it' ? 'Presente' : 'Present'}` : 
      `${child.yearStart} — ${child.yearEnd}`;

    return `
      <div class="resume-child-card">
        <div class="resume-child-card-header">
          <span class="resume-child-card-date">${yearRange}</span>
          <h4 class="resume-child-card-position" data-i18n="res_${parentId}_children_${child.id}_position">${child.position}</h4>
        </div>
        <p class="resume-child-card-department" data-i18n="res_${parentId}_children_${child.id}_department">${child.department}</p>
        <p class="resume-child-card-university" data-i18n="res_${parentId}_children_${child.id}_university">${child.university}</p>
        ${child.description ? `<p class="resume-child-card-description" data-i18n="res_${parentId}_children_${child.id}_description">${child.description}</p>` : ''}
      </div>
    `;
  }

  setupAnimations() {
    const cards = document.querySelectorAll('.resume-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }
}

// Global function to toggle children visibility
function toggleChildren(cardId) {
  const container = document.getElementById(`children-${cardId}`);
  const toggle = container.previousElementSibling;
  const icon = toggle.querySelector('.toggle-icon');
  
  if (container.classList.contains('expanded')) {
    container.classList.remove('expanded');
    icon.textContent = '▼';
    toggle.querySelector('span').textContent = window.currentLang === 'it' ? 'Vedi Dettagli' : 'View Details';
  } else {
    container.classList.add('expanded');
    icon.textContent = '▲';
    toggle.querySelector('span').textContent = window.currentLang === 'it' ? 'Nascondi Dettagli' : 'Hide Details';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const resumeSection = new ResumeSection();
  resumeSection.init();
});
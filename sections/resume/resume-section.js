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
    const sorted = this.getSortedCards();
    sorted.forEach((card, index) => {
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
    
    const yearRange = this.formatRange(card);

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <span class="timeline-date">${yearRange}</span>
      <div class="timeline-card resume-card" style="--card-color: ${card.color}">
        <div class="resume-card-header">
          <div class="resume-card-info">
            <h3 class="resume-card-position" data-i18n="res_${card.id}_position">${card.position}</h3>
            ${card.university ? `<p class="resume-card-university" data-i18n="res_${card.id}_university">${card.university}</p>` : ''}
            ${card.department ? `<p class="resume-card-department" data-i18n="res_${card.id}_department">${card.department}</p>` : ''}
          </div>
        </div>
        ${card.description ? `<p class="resume-card-description" data-i18n="res_${card.id}_description">${card.description}</p>` : ''}
        ${card.children && card.children.length > 0 ? `
          <div class="resume-card-children">
            ${card.children.map(child => this.createChildCard(child, card.id)).join('')}
          </div>
        ` : ''}
      </div>
    `;

    return item;
  }

  createChildCard(child, parentId) {
    const yearRange = this.formatRange(child);
    const desc = child.link ? '' : (child.description ? `<p class="resume-child-card-description" data-i18n="res_${parentId}_children_${child.id}_description">${child.description}</p>` : '');
    const link = child.link ? `<a class="child-project-link" href="${child.link}">Project details →</a>` : '';
    return `
      <div class="resume-child-card">
        <div class="resume-child-card-header">
          ${yearRange ? `<span class="resume-child-card-date">${yearRange}</span>` : ''}
          <h4 class="resume-child-card-position" data-i18n="res_${parentId}_children_${child.id}_position">${child.position}</h4>
        </div>
        ${child.department ? `<p class="resume-child-card-department" data-i18n="res_${parentId}_children_${child.id}_department">${child.department}</p>` : ''}
        ${child.university ? `<p class="resume-child-card-university" data-i18n="res_${parentId}_children_${child.id}_university">${child.university}</p>` : ''}
        ${desc}
        ${link}
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

  getSortedCards() {
    const monthMap = { Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };
    const parse = (obj) => {
      const y = obj.yearStart ? parseInt(obj.yearStart, 10) : 0;
      const m = obj.monthStart ? (monthMap[obj.monthStart] || 0) : 0;
      return y * 100 + m;
    };
    return this.cards.slice().sort((a, b) => parse(b) - parse(a));
  }

  formatRange(obj) {
    const lang = this.currentLang;
    const monthsEN = {Jan:'Jan',Feb:'Feb',Mar:'Mar',Apr:'Apr',May:'May',Jun:'Jun',Jul:'Jul',Aug:'Aug',Sep:'Sep',Oct:'Oct',Nov:'Nov',Dec:'Dec'};
    const monthsIT = {Jan:'Gen',Feb:'Feb',Mar:'Mar',Apr:'Apr',May:'Mag',Jun:'Giu',Jul:'Lug',Aug:'Ago',Sep:'Set',Oct:'Ott',Nov:'Nov',Dec:'Dic'};
    const mset = lang === 'it' ? monthsIT : monthsEN;
    const startM = obj.monthStart ? (mset[obj.monthStart] || obj.monthStart) : null;
    const endM = obj.monthEnd ? (mset[obj.monthEnd] || obj.monthEnd) : null;
    const startY = obj.yearStart || '';
    const endY = obj.yearEnd || '';
    const presentText = lang === 'it' ? 'Presente' : 'Present';
    if (!startY && !endY) return '';
    const endText = endY === 'Present' ? presentText : (endM ? `${endM} ${endY}` : endY);
    const startText = startM ? `${startM} ${startY}` : startY;
    return `${startText} — ${endText}`;
  }
}

 

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const resumeSection = new ResumeSection();
  resumeSection.init();
});

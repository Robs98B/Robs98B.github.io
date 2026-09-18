// Resume Section - Clean Academic Curriculum Vitae
class ResumeSection {
  constructor() {
    this.container = document.querySelector('.timeline');
    this.cards = resumeCards;
    this.currentLang = localStorage.getItem('lang') || 'en';
    
    // Merge resume translations into main translations
    if (typeof translations !== 'undefined' && typeof resumeTranslations !== 'undefined') {
      Object.assign(translations.en, resumeTranslations.en);
      Object.assign(translations.it, resumeTranslations.it);
    }
  }

  init() {
    this.renderCards();
    if (typeof applyLanguage === 'function') {
      const currentLang = localStorage.getItem('lang') || 'en';
      applyLanguage(currentLang);
    }
    window.addEventListener('languageChanged', (e) => {
      this.currentLang = e.detail?.lang || localStorage.getItem('lang') || 'en';
      this.renderCards();
      if (typeof applyLanguage === 'function') {
        applyLanguage(this.currentLang);
      }
    });
  }

  renderCards() {
    if (!this.container) return;

    this.container.innerHTML = '';
    const sorted = this.getSortedCards();
    sorted.forEach((card, index) => {
      const timelineItem = this.createTimelineItem(card, index);
      this.container.appendChild(timelineItem);
    });
  }

  createTimelineItem(card, index) {
    const item = document.createElement('article');
    item.className = 'cv-item';
    
    const yearRange = this.formatRange(card);

    item.innerHTML = `
      <div class="cv-spine">
        <div class="cv-dot"></div>
      </div>
      <div class="cv-content">
        <div class="cv-header">
          <span class="cv-date">${yearRange}</span>
          <h3 class="cv-title" data-i18n="res_${card.id}_position">${card.position}</h3>
        </div>
        <div class="cv-institution">
          ${card.university ? `<span class="cv-uni" data-i18n="res_${card.id}_university">${card.university}</span>` : ''}
          ${card.department ? `<span class="cv-dept-sep">·</span><span class="cv-dept" data-i18n="res_${card.id}_department">${card.department}</span>` : ''}
        </div>
        ${card.description ? `<p class="cv-desc" data-i18n="res_${card.id}_description">${card.description}</p>` : ''}
        ${card.children && card.children.length > 0 ? `
          <div class="cv-sub-items">
            ${card.children.map(child => this.createChildItem(child, card.id)).join('')}
          </div>
        ` : ''}
      </div>
    `;

    return item;
  }

  createChildItem(child, parentId) {
    const yearRange = this.formatRange(child);
    const desc = child.description ? `<p class="cv-sub-desc" data-i18n="res_${parentId}_children_${child.id}_description">${child.description}</p>` : '';
    const link = child.link ? `<a class="cv-sub-link" href="${child.link}">Project details →</a>` : '';

    return `
      <div class="cv-sub-item">
        <div class="cv-sub-header">
          <h4 class="cv-sub-title" data-i18n="res_${parentId}_children_${child.id}_position">${child.position}</h4>
          ${yearRange ? `<span class="cv-sub-date">${yearRange}</span>` : ''}
        </div>
        <div class="cv-sub-inst">
          ${child.department ? `<span data-i18n="res_${parentId}_children_${child.id}_department">${child.department}</span>` : ''}
          ${child.department && child.university ? `<span> · </span>` : ''}
          ${child.university ? `<span data-i18n="res_${parentId}_children_${child.id}_university">${child.university}</span>` : ''}
        </div>
        ${desc}
        ${link}
      </div>
    `;
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

document.addEventListener('DOMContentLoaded', () => {
  const resumeSection = new ResumeSection();
  resumeSection.init();
});

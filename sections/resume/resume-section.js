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
    window.addEventListener('languageChanged', (e) => {
      this.currentLang = e.detail?.lang || localStorage.getItem('lang') || 'en';
      this.renderCards();
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

    // Add intersection observer for animations
    this.setupAnimations();
  }

  createTimelineItem(card, index) {
    const item = document.createElement('article');
    item.className = 'chronicle-item';
    item.style.setProperty('--delay', index + 1);
    
    const yearRange = this.formatRange(card);

    item.innerHTML = `
      <div class="chronicle-spine">
        <div class="chronicle-node">
          <span class="node-pulse"></span>
        </div>
        <div class="chronicle-line"></div>
      </div>

      <div class="chronicle-body">
        <div class="chronicle-top-meta">
          <span class="chronicle-period-pill">${yearRange}</span>
          <span class="chronicle-type-tag">${card.id.toUpperCase()}</span>
        </div>

        <div class="chronicle-main-card">
          <h3 class="chronicle-position" data-i18n="res_${card.id}_position">${card.position}</h3>
          <div class="chronicle-institution-row">
            ${card.university ? `<span class="chronicle-uni" data-i18n="res_${card.id}_university">${card.university}</span>` : ''}
            ${card.department ? `<span class="chronicle-dept-divider">/</span><span class="chronicle-dept" data-i18n="res_${card.id}_department">${card.department}</span>` : ''}
          </div>

          ${card.description ? `
            <div class="chronicle-annotation">
              <span class="annotation-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              </span>
              <span class="annotation-text" data-i18n="res_${card.id}_description">${card.description}</span>
            </div>
          ` : ''}

          ${card.children && card.children.length > 0 ? `
            <div class="chronicle-milestones-group">
              <div class="milestones-header">
                <span class="milestones-header-line"></span>
                <span class="milestones-header-label">APPOINTMENTS & RESEARCH STAYS</span>
                <span class="milestones-header-line"></span>
              </div>
              <div class="chronicle-milestones-list">
                ${card.children.map(child => this.createChildMilestone(child, card.id)).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    return item;
  }

  createChildMilestone(child, parentId) {
    const yearRange = this.formatRange(child);
    const desc = child.description ? `<p class="milestone-desc" data-i18n="res_${parentId}_children_${child.id}_description">${child.description}</p>` : '';
    const link = child.link ? `<a class="milestone-link-btn" href="${child.link}"><span data-i18n="btn_details">Project Brief</span> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>` : '';
    
    let milestoneTag = 'MILESTONE';
    if (child.id.includes('visiting')) milestoneTag = 'VISITING RESEARCH';
    else if (child.id.includes('traineeship')) milestoneTag = 'TRAINEESHIP';
    else if (child.id.includes('thesis')) milestoneTag = 'MASTER\'S THESIS';
    else if (child.id.includes('erasmus')) milestoneTag = 'EXCHANGE';

    return `
      <div class="chronicle-milestone">
        <div class="milestone-indicator">
          <span class="milestone-pip"></span>
        </div>
        <div class="milestone-content">
          <div class="milestone-meta-row">
            <span class="milestone-tag">${milestoneTag}</span>
            ${yearRange ? `<span class="milestone-date">${yearRange}</span>` : ''}
          </div>
          <h4 class="milestone-title" data-i18n="res_${parentId}_children_${child.id}_position">${child.position}</h4>
          <div class="milestone-inst-row">
            ${child.department ? `<span class="milestone-dept" data-i18n="res_${parentId}_children_${child.id}_department">${child.department}</span>` : ''}
            ${child.university ? `<span class="milestone-uni" data-i18n="res_${parentId}_children_${child.id}_university">${child.university}</span>` : ''}
          </div>
          ${desc}
          ${link}
        </div>
      </div>
    `;
  }

  setupAnimations() {
    const cards = document.querySelectorAll('.chronicle-item');
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

// Generic filter engine
(function () {
  const itemsContainer = document.getElementById('items');
  console.log('Filters.js loaded, itemsContainer:', itemsContainer);
  if (!itemsContainer) return;

  const noResults = document.getElementById('no-results');

  function getYearFilterGroup() {
    const groups = Array.from(document.querySelectorAll('.filters-container .filter-group'));
    const target = groups.find(g => g.querySelector('input[name="year"]') || g.querySelector('[data-i18n="filter_year"]')) || (groups.length === 1 ? groups[0] : null);
    return target ? target.querySelector('.pill-list') : null;
  }

  function getCategoryFilterGroup() {
    const groups = Array.from(document.querySelectorAll('.filters-container .filter-group'));
    const target = groups.find(g => g.querySelector('input[name="category"]') || g.querySelector('[data-i18n="filter_cat"]')) || null;
    return target ? target.querySelector('.pill-list') : null;
  }

  function getItems() {
    return Array.from(itemsContainer.querySelectorAll('.item'));
  }

  function computeSets() {
    const items = getItems();
    console.log('computeSets - items found:', items.length);
    const years = new Set();
    const categories = new Set();
    items.forEach(el => {
      const y = el.getAttribute('data-year');
      const c = el.getAttribute('data-category');
      if (y) years.add(y);
      if (c) categories.add(c);
    });
    console.log('computeSets - years:', years, 'categories:', categories);
    return { years, categories };
  }

  function renderYearFilters(years) {
    const yearFilterGroup = getYearFilterGroup();
    if (!yearFilterGroup) return;
    const prevSelected = document.querySelector('input[name="year"]:checked')?.value || 'all';
    yearFilterGroup.innerHTML = '';
    const allLabel = document.createElement('label');
    allLabel.className = 'filter-pill';
    allLabel.innerHTML = `<input type="radio" name="year" value="all" ${prevSelected === 'all' ? 'checked' : ''}><span class="pill-content" data-i18n="filter_all">All</span>`;
    yearFilterGroup.appendChild(allLabel);
    const sorted = Array.from(years).sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
    sorted.forEach(y => {
      const lab = document.createElement('label');
      lab.className = 'filter-pill';
      lab.innerHTML = `<input type="radio" name="year" value="${y}" ${prevSelected === String(y) ? 'checked' : ''}><span class="pill-content">${y}</span>`;
      yearFilterGroup.appendChild(lab);
    });
  }

  function getCategoryKey(category) {
    const map = { publication: 'lbl_pub', abstract: 'lbl_abs', poster: 'lbl_pos' };
    return map[category] || category;
  }

  function renderCategoryFilters(categories) {
    const categoryFilterGroup = getCategoryFilterGroup();
    if (!categoryFilterGroup || !categories || categories.size === 0) return;
    const prevSelected = new Set(Array.from(document.querySelectorAll('input[name="category"]')).filter(i => i.checked).map(i => i.value));
    categoryFilterGroup.innerHTML = '';
    const isSingle = categories.size === 1;
    Array.from(categories).forEach(c => {
      const lab = document.createElement('label');
      lab.className = 'filter-pill category';
      if (isSingle) lab.dataset.single = 'true';
      const checked = isSingle ? 'checked' : (prevSelected.has(c) ? 'checked' : '');
      const disabled = isSingle ? 'disabled' : '';
      lab.innerHTML = `<input type="checkbox" name="category" value="${c}" ${checked} ${disabled}><span class="pill-content" data-i18n="${getCategoryKey(c)}"></span>`;
      categoryFilterGroup.appendChild(lab);
    });
  }

  function getSelected() {
    const yearInputs = Array.from(document.querySelectorAll('input[name="year"]'));
    const categoryInputs = Array.from(document.querySelectorAll('input[name="category"]'));
    const checkedYear = yearInputs.find(i => i.checked);
    const selectedYear = checkedYear ? checkedYear.value : 'all';
    const selectedCategories = categoryInputs.length ? new Set(categoryInputs.filter(i => i.checked).map(i => i.value)) : null;
    return { selectedYear, selectedCategories, yearInputs, categoryInputs };
  }

  function applyFilters() {
    const items = getItems();
    const { selectedYear, selectedCategories } = getSelected();
    let visibleCount = 0;
    const availableCatsForYear = new Set();
    items.forEach(el => {
      const itemYear = el.getAttribute('data-year');
      const itemCat = el.getAttribute('data-category');
      const yearOk = selectedYear === 'all' || selectedYear === itemYear;
      const catOk = !selectedCategories || (itemCat && selectedCategories.has(itemCat));
      if (yearOk && itemCat) availableCatsForYear.add(itemCat);
      if (yearOk && catOk) {
        el.style.display = '';
        el.style.animation = 'none';
        void el.offsetHeight;
        el.style.animation = 'fade-in-up 0.4s var(--ease-standard) forwards';
        visibleCount++;
      } else {
        el.style.display = 'none';
      }
    });
    const categoryLabels = Array.from(document.querySelectorAll('label.filter-pill.category'));
    categoryLabels.forEach(lab => {
      const input = lab.querySelector('input[name="category"]');
      const val = input?.value;
      if (lab.dataset.single === 'true') {
        if (input) {
          input.disabled = true;
          input.checked = true;
        }
        lab.classList.remove('disabled');
        return;
      }
      const enabled = availableCatsForYear.has(val);
      if (!enabled) {
        lab.classList.add('disabled');
        input.disabled = true;
        input.checked = false;
      } else {
        lab.classList.remove('disabled');
        input.disabled = false;
      }
    });
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      noResults.hidden = visibleCount !== 0;
    }
  }

  function bindEvents() {
    const { yearInputs, categoryInputs } = getSelected();
    yearInputs.forEach(input => input.addEventListener('change', applyFilters));
    categoryInputs.forEach(input => input.addEventListener('change', applyFilters));
  }

  function initFilters() {
    console.log('initFilters called');
    const { years, categories } = computeSets();
    console.log('Computed sets:', { years, categories });
    renderYearFilters(years);
    renderCategoryFilters(categories);
    bindEvents();
    applyFilters();
    const lang = localStorage.getItem('lang') || 'en';
    if (typeof window.applyLanguage === 'function') window.applyLanguage(lang);
  }

  let debounceId;
  const observer = new MutationObserver(() => {
    clearTimeout(debounceId);
    debounceId = setTimeout(initFilters, 120);
  });
  observer.observe(itemsContainer, { childList: true, subtree: false });
  
  // Listen for the custom event from ScienceSection
  document.addEventListener('scienceCardsRendered', (event) => {
    console.log('scienceCardsRendered event received, card count:', event.detail.cardCount);
    initFilters();
  });
  
  // Initialize immediately if items already exist, otherwise wait for mutation or event
  if (itemsContainer.children.length > 0) {
    initFilters();
  }
})();

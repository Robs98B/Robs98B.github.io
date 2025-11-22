// Generic filter engine for Science and Activities pages
(function () {
  const itemsContainer = document.getElementById('items');
  if (!itemsContainer) return;
  const items = Array.from(itemsContainer.querySelectorAll('.item'));

  const yearSelect = document.getElementById('year-select');
  const categoryInputs = Array.from(document.querySelectorAll('input[name="category"]'));
  const noResults = document.getElementById('no-results');

  function applyFilters() {
    const selectedYear = yearSelect ? yearSelect.value : 'all';
    const selectedCategories = categoryInputs.length
      ? new Set(categoryInputs.filter(i => i.checked).map(i => i.value))
      : null; // activities page has no categories

    let visibleCount = 0;
    for (const el of items) {
      const itemYear = el.getAttribute('data-year');
      const itemCat = el.getAttribute('data-category');

      const yearOk = selectedYear === 'all' || selectedYear === itemYear;
      const catOk = !selectedCategories || (itemCat && selectedCategories.has(itemCat));

      if (yearOk && catOk) {
        el.style.display = '';
        visibleCount++;
      } else {
        el.style.display = 'none';
      }
    }
    if (noResults) noResults.hidden = visibleCount !== 0;
  }

  if (yearSelect) yearSelect.addEventListener('change', applyFilters);
  for (const input of categoryInputs) input.addEventListener('change', applyFilters);

  // Initial
  applyFilters();
})();


// Generic filter engine
(function () {
  const itemsContainer = document.getElementById('items');
  if (!itemsContainer) return;
  
  // Use array from to avoid nodelist issues
  const items = Array.from(itemsContainer.querySelectorAll('.item'));

  const yearSelect = document.getElementById('year-select');
  // Select all inputs with name="category" inside the filters container
  const categoryInputs = Array.from(document.querySelectorAll('input[name="category"]'));
  const noResults = document.getElementById('no-results');

  function applyFilters() {
    const selectedYear = yearSelect ? yearSelect.value : 'all';
    
    // Create a Set of checked categories
    const selectedCategories = categoryInputs.length
      ? new Set(categoryInputs.filter(i => i.checked).map(i => i.value))
      : null; 

    let visibleCount = 0;
    
    items.forEach(el => {
      const itemYear = el.getAttribute('data-year');
      const itemCat = el.getAttribute('data-category');

      const yearOk = selectedYear === 'all' || selectedYear === itemYear;
      // If no categories exist on page (like activities page), catOk is always true
      const catOk = !selectedCategories || (itemCat && selectedCategories.has(itemCat));

      if (yearOk && catOk) {
        el.style.display = '';
        // Add a slight animation replay for filtered items could be done here
        visibleCount++;
      } else {
        el.style.display = 'none';
      }
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        noResults.hidden = visibleCount !== 0; // Accessibility
    }
  }

  if (yearSelect) yearSelect.addEventListener('change', applyFilters);
  categoryInputs.forEach(input => input.addEventListener('change', applyFilters));

  // Run on load
  applyFilters();
})();
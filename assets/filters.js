// Generic filter engine
(function () {
  const itemsContainer = document.getElementById('items');
  if (!itemsContainer) return;
  
  const items = Array.from(itemsContainer.querySelectorAll('.item'));
  const noResults = document.getElementById('no-results');

  // New Selector Logic: Find all inputs with name='year' (Radios)
  const yearInputs = Array.from(document.querySelectorAll('input[name="year"]'));
  
  // Find all inputs with name='category' (Checkboxes)
  const categoryInputs = Array.from(document.querySelectorAll('input[name="category"]'));

  function applyFilters() {
    // 1. Get Selected Year
    // Find the checked radio. If none (shouldn't happen), default to 'all'.
    const checkedYearInput = yearInputs.find(input => input.checked);
    const selectedYear = checkedYearInput ? checkedYearInput.value : 'all';
    
    // 2. Get Selected Categories
    // Create Set of values from checked inputs
    const selectedCategories = categoryInputs.length
      ? new Set(categoryInputs.filter(i => i.checked).map(i => i.value))
      : null; 

    let visibleCount = 0;
    
    items.forEach(el => {
      const itemYear = el.getAttribute('data-year');
      const itemCat = el.getAttribute('data-category');

      // Logic: Show if (Filter is All OR Item matches Year) AND (Category matches OR No Category Filter exists)
      const yearOk = selectedYear === 'all' || selectedYear === itemYear;
      const catOk = !selectedCategories || (itemCat && selectedCategories.has(itemCat));

      if (yearOk && catOk) {
        el.style.display = '';
        // Optional: Reset animation to make it pop again
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = 'fade-in-up 0.4s ease forwards';
        visibleCount++;
      } else {
        el.style.display = 'none';
      }
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        noResults.hidden = visibleCount !== 0; 
    }
  }

  // Attach Listeners
  yearInputs.forEach(input => input.addEventListener('change', applyFilters));
  categoryInputs.forEach(input => input.addEventListener('change', applyFilters));

  // Run on load
  applyFilters();
})();
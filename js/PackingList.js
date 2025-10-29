"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('fieldset input[type="checkbox"]');
    const selectAllBtn = document.getElementById('selectAllBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          console.log(`Checked: ${checkbox.id}`);
        } else {
          console.log(`Unchecked: ${checkbox.id}`);
        }
      });
    });
  
    selectAllBtn.addEventListener('click', () => {
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
      });
      console.log('All checkboxes selected.');
    });
  
    clearAllBtn.addEventListener('click', () => {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      console.log('All checkboxes cleared.');
    });
  });
  
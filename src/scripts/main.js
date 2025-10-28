'use strict';

// write code here
const arrInput = document.querySelectorAll('input');

arrInput.forEach((input) => {
  const divEl = input.parentElement;
  const labelEl = document.createElement('label');
  const inputEl = divEl.querySelector('input');
  const nameInput = input.getAttribute('name');

  divEl.insertBefore(labelEl, inputEl);
  labelEl.className = 'field-label';
  labelEl.setAttribute('for', inputEl.getAttribute('id'));
  labelEl.textContent = nameInput;

  inputEl.placeholder = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
});

'use strict';

const minusBtnElement = document.getElementById('minus');
const plusBtnElement = document.getElementById('plus');
const lengthOutputElement = document.getElementById('length-output');
const upperCheckboxEl = document.getElementById('upper-check');
const lowerCheckboxEl = document.getElementById('lower-check');
const numbersCheckboxEl = document.getElementById('numbers-check');
const symbolsCheckboxEl = document.getElementById('symbols-check');
let levels = document.getElementsByClassName('level');
console.log(levels);

let passwordLength = Number(lengthOutputElement.textContent);
let strengthLevel = 0;

// Password Length
minusBtnElement.addEventListener('click', () => {
  if (passwordLength > 1) {
    passwordLength--;
    lengthOutputElement.textContent = passwordLength;
  }
});

plusBtnElement.addEventListener('click', () => {
  if (passwordLength < 10) {
    passwordLength++;
    lengthOutputElement.textContent = passwordLength;
  }
});

// Strength Level
const toggleStrenghtLevel = function (element) {
  if (element.checked) strengthLevel++;
  else if (!element.checked && strengthLevel > 0) strengthLevel--;
};

upperCheckboxEl.addEventListener('change', () => {
  toggleStrenghtLevel(upperCheckboxEl);
  showStrengthLevel(strengthLevel);
});
lowerCheckboxEl.addEventListener('change', () => {
  toggleStrenghtLevel(lowerCheckboxEl);
  showStrengthLevel(strengthLevel);
});
numbersCheckboxEl.addEventListener('change', () => {
  toggleStrenghtLevel(numbersCheckboxEl);
  showStrengthLevel(strengthLevel);
});
symbolsCheckboxEl.addEventListener('change', () => {
  toggleStrenghtLevel(symbolsCheckboxEl);
  showStrengthLevel(strengthLevel);
});

const showStrengthLevel = function (strength) {
  const clearStrengthLevel = function () {
    for (let i = 0; i < levels.length; i++) {
      levels[i].classList.remove('active');
    }
  };
  switch (strength) {
    case 0:
      clearStrengthLevel();
      break;
    case 1:
      clearStrengthLevel();
      levels[0].classList.add('active');
      break;
    case 2:
      clearStrengthLevel();
      for (let i = 0; i < strength; i++) {
        levels[i].classList.add('active');
      }
      break;
    case 3:
      clearStrengthLevel();
      for (let i = 0; i < strength; i++) {
        levels[i].classList.add('active');
      }

      break;
    case 4:
      for (let i = 0; i < levels.length; i++) {
        levels[i].classList.add('active');
      }
      break;
  }
};

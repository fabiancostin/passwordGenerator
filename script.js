'use strict';

const minusBtnElement = document.getElementById('minus');
const plusBtnElement = document.getElementById('plus');
const lengthOutputElement = document.getElementById('length-output');
const upperCheckboxEl = document.getElementById('upper-check');
const lowerCheckboxEl = document.getElementById('lower-check');
const numbersCheckboxEl = document.getElementById('numbers-check');
const symbolsCheckboxEl = document.getElementById('symbols-check');
const generateBtnEl = document.getElementById('generate-btn');
const passwordLevel = document.querySelector('.password-level');
const passwordShowEl = document.querySelector('.pass');
const copyBtnEl = document.querySelector('.copy-btn');
let levels = document.getElementsByClassName('level');

let passwordLength = Number(lengthOutputElement.textContent);
let strengthLevel = 0;
let generatedPassword = '';

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '_!@#$%&';
let randomChoice = 0;

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

const showStrengthLevel = function (strength) {
  const clearStrengthLevel = function () {
    for (let i = 0; i < levels.length; i++) {
      levels[i].classList.remove('active');
    }
  };
  switch (strength) {
    case 0:
      clearStrengthLevel();
      passwordLevel.innerHTML = 'EASY';
      break;
    case 1:
      clearStrengthLevel();
      levels[0].classList.add('active');
      passwordLevel.innerHTML = 'EASY';
      break;
    case 2:
      clearStrengthLevel();
      for (let i = 0; i < strength; i++) {
        levels[i].classList.add('active');
      }
      passwordLevel.innerHTML = 'MEDIUM';
      break;
    case 3:
      clearStrengthLevel();
      for (let i = 0; i < strength; i++) {
        levels[i].classList.add('active');
      }
      passwordLevel.innerHTML = 'MEDIUM';
      break;
    case 4:
      for (let i = 0; i < levels.length; i++) {
        levels[i].classList.add('active');
      }
      passwordLevel.innerHTML = 'HARD';
      break;
  }
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

// Password Generator

const isChecked = function (element) {
  return element.checked;
};

const passwordGenerator = function (length) {
  generatedPassword = '';
  while (generatedPassword.length < length) {
    randomChoice = Math.floor(Math.random() * 4) + 1;
    switch (randomChoice) {
      case 1:
        if (isChecked(upperCheckboxEl))
          generatedPassword += uppercase.charAt(
            Math.floor(Math.random() * uppercase.length)
          );
        break;
      case 2:
        if (isChecked(lowerCheckboxEl))
          generatedPassword += lowercase.charAt(
            Math.floor(Math.random() * lowercase.length)
          );
        break;
      case 3:
        if (isChecked(numbersCheckboxEl))
          generatedPassword += numbers.charAt(
            Math.floor(Math.random() * numbers.length)
          );
        break;
      case 4:
        if (isChecked(symbolsCheckboxEl))
          generatedPassword += symbols.charAt(
            Math.floor(Math.random() * symbols.length)
          );
        break;
    }
  }
  passwordShowEl.textContent = generatedPassword;
};

generateBtnEl.addEventListener('click', () => {
  passwordGenerator(passwordLength);
});

// Copy to clipboard
copyBtnEl.addEventListener('click', () => {
  navigator.clipboard.writeText(generatedPassword).then(() => {
    alert('Copied to clipboard');
  });
});

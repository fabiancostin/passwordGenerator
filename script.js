'use strict';

const minusBtnElement = document.getElementById('minus');
const plusBtnElement = document.getElementById('plus');
const lengthOutputElement = document.getElementById('length-output');

let passwordLength = Number(lengthOutputElement.textContent);

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

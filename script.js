'use strict';

const displayResult = document.getElementById('display-result');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const value = button.value;
    if (button.value === 'C') {
      currentInput = '';
      display.value = '';
      displayResult.value = '';
    } else if (button.value === '←') {
      display.value = display.value.slice(0, -1);
      currentInput = display.value;
    } else if (button.value === '.') {
      const lastNumber = String(currentInput)
        .split(/[\+\-\*\/]/)
        .pop();
      if (!lastNumber.includes('.')) {
        currentInput = currentInput + button.value;
        display.value = currentInput;
      }
    } else if (button.value === '=') {
      try {
        const result = parseFloat(eval(currentInput).toFixed(5));
        displayResult.value = display.value;
        display.value = result;
        currentInput = result;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      currentInput = currentInput + button.value;
      display.value = currentInput;
      displayResult.value = '';
    }
  });
});

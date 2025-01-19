const display = document.getElementById('display');
const equation = document.getElementById('equation');

let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay(value) {
  display.textContent = value;
}

function updateEquationDisplay() {
  equation.textContent = `${previousInput} ${operator || ''} ${currentInput}`;
}

function handleNumber(num) {
  if (currentInput.length < 10) {
    if (currentInput === '0' && num === '0') return; 
    currentInput += num;
    updateDisplay(currentInput);
    updateEquationDisplay();
  } else {
    updateDisplay('Error: Too large');
  }
}

function handleOperator(op) {
  if (currentInput === '') return;
  if (operator !== null) evaluate();
  previousInput = currentInput;
  currentInput = '';
  operator = op;
  updateEquationDisplay();
}

function evaluate() {
  if (operator === null || previousInput === '' || currentInput === '') return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;
  if (operator === '/') {
    if (num2 === 0) {
      updateDisplay("Can't divide by 0");
      return;
    }
    result = num1 / num2;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay(currentInput);
  equation.textContent = ''; 
}

function clear() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('0');
  updateEquationDisplay();
}

function handleBackspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || '0');
  updateEquationDisplay();
}


document.getElementById('clear').addEventListener('click', clear);
document.getElementById('backspace').addEventListener('click', handleBackspace);
document.getElementById('equals').addEventListener('click', evaluate);
document.getElementById('decimal').addEventListener('click', () => {
  if (!currentInput.includes('.')) {
    currentInput += '0.';
    updateDisplay(currentInput);
    updateEquationDisplay();
  }
});


document.getElementById('zero').addEventListener('click', () => handleNumber('0'));
document.getElementById('one').addEventListener('click', () => handleNumber('1'));
document.getElementById('two').addEventListener('click', () => handleNumber('2'));
document.getElementById('three').addEventListener('click', () => handleNumber('3'));
document.getElementById('four').addEventListener('click', () => handleNumber('4'));
document.getElementById('five').addEventListener('click', () => handleNumber('5'));
document.getElementById('six').addEventListener('click', () => handleNumber('6'));
document.getElementById('seven').addEventListener('click', () => handleNumber('7'));
document.getElementById('eight').addEventListener('click', () => handleNumber('8'));
document.getElementById('nine').addEventListener('click', () => handleNumber('9'));


document.getElementById('add').addEventListener('click', () => handleOperator('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperator('-'));
document.getElementById('multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('divide').addEventListener('click', () => handleOperator('/'));

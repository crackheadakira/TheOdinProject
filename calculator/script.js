const buttons = document.querySelectorAll('.digitButton')
const resultBar = document.querySelector('.resultBar')
const clearButton = document.querySelector('.clearButton');
const addButton = document.querySelector('#addButton');
const equalsButton = document.querySelector('#equalsButton')

let displayResult = [];
let number1;
let number2 = 20;
let finalNumber;
let operator;

function clear() {
    displayResult = [];
    resultBar.textContent = displayResult;
}

function add(nr1, nr2) {
    return nr1 + nr2
}

function subtract(nr1, nr2) {
    return nr1 - nr2
}

function multiply(nr1, nr2) {
    return nr1 * nr2
}

function divide(nr1, nr2) {
    return nr1 / nr2
}

function operate(operator, nr1, nr2) {
    switch (operator) {
        case add:
            return add(nr1, nr2)
        case subtract:
            return subtract(nr1, nr2)
        case multiply:
            return multiply(nr1, nr2)
        case divide:
            return divide(nr1, nr2)
    }
}

function display(number) {
    displayResult = displayResult.concat(number)
    displayResult = displayResult.toString().replaceAll(',', "")
    resultBar.textContent = +displayResult;
}

function calculate(cOperator, nr1, nr2) {
    cOperator = operator
    operate(cOperator, nr1,nr2)
}

equalsButton.addEventListener('click', () => {
    finalNumber = operate(operator, +number1, +number2);
    resultBar.textContent = displayResult;
})

clearButton.addEventListener('click', () => {
    clear()
})

addButton.addEventListener('click', () => {
    number1 = displayResult
    operator = add;
    console.log(number1)
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display(e.target.firstChild.data);
    })
})
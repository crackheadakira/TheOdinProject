const buttons = document.querySelectorAll('.digitButton');
const resultBar = document.querySelector('.resultBar');
const clearButton = document.querySelector('.clearButton');
const equalsButton = document.querySelector('#equalsButton');
const operatorButtons = document.querySelectorAll('.operatorButton');

let displayResult = [];
let number1 = 0;
let number2 = 0;
let operator;

function clear() {
    displayResult = [];
    number1 = 0;
    number2 = 0;
    operator = undefined;
    resultBar.textContent = displayResult;
}

function add(nr1, nr2) {
    return nr1 + nr2
}

function subtract(nr1, nr2) {
    return nr2 - nr1
}

function multiply(nr1, nr2) {
    return nr1 * nr2
}

function divide(nr1, nr2) {
    return nr2 / nr1
}

function operate(nr1, nr2) {
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
    number1 = +displayResult;
}

function calculate(nr1, nr2) {
    number1 = operate(nr1, nr2);
    resultBar.textContent = number1;
    number2 = 0;
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id == "equalsButton") { return }
        if(operator != undefined) { calculate(number1, number2)}
        number2 = number1;
        number1 = 0;
        displayResult = [];
        resultBar.textContent = displayResult;
        switch (e.target.id) {
            case "addButton":
                operator = add;
                break
            case "subtractButton":
                operator = subtract;
                break
            case "multiplyButton":
                operator = multiply;
                break
            case "divideButton":
                operator = divide;
                break
        }
    })
})

equalsButton.addEventListener('click', () => {
    calculate(number1, number2);
})

clearButton.addEventListener('click', () => {
    clear()
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display(e.target.firstChild.data);
    })
})
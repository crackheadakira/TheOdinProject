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

const buttons = document.querySelectorAll('.buttons')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.firstChild.data);
    })
})
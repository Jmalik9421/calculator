let num1;
let operator;
let num2;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 / num1;
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        console.log('calculaton is not valid. enter a valid calculation')
    }
}

console.log(operate(5, "*", 6));
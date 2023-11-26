const display = document.getElementById('display');

let num1;
let operator;
let num2;

function defineNum(btn) {
    const numBtnValue = btn.textContent;
    let numSpanElement = document.createElement('span');
    numSpanElement.textContent = numBtnValue;
    numSpanElement.setAttribute('class', 'calculation')
    display.appendChild(numSpanElement);
}

function defineOp(btn) {
    const opBtnValue = btn.textContent;
    let opSpanElement = document.createElement('span');
    opSpanElement.textContent = opBtnValue;
    opSpanElement.setAttribute('class', 'calculation')
    display.appendChild(opSpanElement)
}

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

function calculate() {
    let calculationSpans = document.getElementsByClassName('calculation');
    let calculationArray = [];

    for (let i = 0; i < calculationSpans.length; i++) {
        calculationArray.push(calculationSpans[i].textContent)
    }
    
    console.log(calculationArray);

    // I AM HERE
    // I HAVE CREATED THIS CALCULATE() FUNCTION TO:
    // 1. CREATE AN ARRAY WHERE EVERY ELEMENT IS A DIGIT OF THE CALCULATION
    // 2. FIND THE INDEX OF THE OPERATOR 
    // 3. NUM1 WILL BE DEFINED AS ALL THE ELEMENTS BEFORE THE OPERATOR. THIS CAN BE DONE BY CONCATENATING ALL THE ELEMENTS AND THEN CONVERTING THEM TO A NUMBER
    // 4. NUM2 WILL BE DEFINED AS ALL THE ELEMENTS AFTER THE OPERATOR. THIS CAN BE DONE BY CONCATENATING ALL THE ELEMENTS AND THEN CONVERTING THEM TO A NUMBER.
    // 5. SET UP CONDITIONAL LOGIC TO PERFORM ONE OF THE VARIOUS OPERATION FUNCTIONS (ADD, SUBTRACT, MULTIPLE, DIVIDE) DEPENDING ON THE OPERATOR SPECIFIED
    // 6. CLEAR THE DISPLAY AND THEN ONLY SHOW THE RESULT
    // 
    // PROJECT CAN BE EXPANDED TO INCLUDE FLOATS, NOT JUST INTS
}

console.log(operate(5, "*", 6));


// IN JS, CREATE A FUNCTION TO DEFINE NUM1 AND NUM2
// DEFINITION WILL BE DEPENDENT ON WHAT NUMBERS ARE PRESSED 
// IN HTML RUN THE FUNCTION WHEN THE BUTTONS ARE CLICKED 
// IN THE FUNCTION, DEFINE THE NUMBER AS STRINGS SO IT IS EASIER TO CONCATENATE, THEN CONVERT TO NUMBER
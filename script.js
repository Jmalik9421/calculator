const display = document.getElementById('display');

function getNumber(btn) {
    const numBtnValue = btn.textContent;
    let numSpanElement = document.createElement('span');
    numSpanElement.textContent = numBtnValue;
    numSpanElement.setAttribute('class', 'calculation')
    display.appendChild(numSpanElement);
}

function getOperator(btn) {
    const opBtnValue = btn.textContent;
    let opSpanElement = document.createElement('span');
    opSpanElement.textContent = opBtnValue;
    opSpanElement.setAttribute('class', 'calculation')
    display.appendChild(opSpanElement)
}

function clearDisplay() {
    let displayChildNodes = Array.from(document.getElementById('display').childNodes);
    for (let i = 0; i < displayChildNodes.length; i++) {
        displayChildNodes[i].remove();
    }
}

function add(num1, num2) {
    const result = num1 + num2;
    let resultSpanElement = document.createElement('span');
    resultSpanElement.textContent = result;
    display.appendChild(resultSpanElement); 
}

function subtract(num1, num2) {
    const result = num1 - num2;
    let resultSpanElement = document.createElement('span');
    resultSpanElement.textContent = result;
    display.appendChild(resultSpanElement);
}

function multiply(num1, num2) {
    const result = num1 * num2;
    let resultSpanElement = document.createElement('span');
    resultSpanElement.textContent = result;
    display.appendChild(resultSpanElement);
}

function divide(num1, num2) {
    const result = num1 / num2;
    let resultSpanElement = document.createElement('span');
    resultSpanElement.textContent = result;
    display.appendChild(resultSpanElement);
}

function calculate() {
    let num1;
    let num2;
    let calculationSpans = document.getElementsByClassName('calculation');
    let calculationArray = [];
    for (let i = 0; i < calculationSpans.length; i++) {
        calculationArray.push(calculationSpans[i].textContent)
    }
    // unable to declare calculationSpans and calculationArray globally as must be calculated upon click of '=' button which triggers 'calculate()' function

    let operators = ['+', '-', '*', '/'];
    for (let i = 0; i < operators.length; i++) {
        if (calculationArray.includes(operators[i])) {
            let operatorIndex = calculationArray.indexOf(operators[i]);
            num1 = Number(calculationArray.slice(0, operatorIndex).join(""));
            num2 = Number(calculationArray.slice(operatorIndex + 1).join(""));

            clearDisplay();

            switch (calculationArray[operatorIndex]) {
                case '+':
                    add(num1, num2);
                    break;
                case '-':
                    subtract(num1, num2);
                    break;
                case '*':
                    multiply(num1, num2);
                    break;
                case '/':
                    divide(num1, num2);
                    break;
                default:
                    alert('Invalid operator');
            }
        }
    }
    // I AM HERE
    // I HAVE CREATED THIS CALCULATE() FUNCTION TO:
    // DONE 1. CREATE AN ARRAY WHERE EVERY ELEMENT IS A DIGIT OF THE CALCULATION
    // DONE 2. FIND THE INDEX OF THE OPERATOR 
    // DONE 3. NUM1 WILL BE DEFINED AS ALL THE ELEMENTS BEFORE THE OPERATOR. THIS CAN BE DONE BY CONCATENATING ALL THE ELEMENTS AND THEN CONVERTING THEM TO A NUMBER
    // DONE 4. NUM2 WILL BE DEFINED AS ALL THE ELEMENTS AFTER THE OPERATOR. THIS CAN BE DONE BY CONCATENATING ALL THE ELEMENTS AND THEN CONVERTING THEM TO A NUMBER.
    // DONE 5. SET UP CONDITIONAL LOGIC TO PERFORM ONE OF THE VARIOUS OPERATION FUNCTIONS (ADD, SUBTRACT, MULTIPLE, DIVIDE) DEPENDING ON THE OPERATOR SPECIFIED
    // DONE 6. CLEAR THE DISPLAY AND THEN ONLY SHOW THE RESULT
    // 7. SET DATA VALIDATION SO THIS PROGRAM DOES NOT BREAK
    // DONE 8. CLEAN UP
    // 
    // PROJECT CAN BE EXPANDED TO INCLUDE FLOATS, NOT JUST INTS
}

// IN JS, CREATE A FUNCTION TO DEFINE NUM1 AND NUM2
// DEFINITION WILL BE DEPENDENT ON WHAT NUMBERS ARE PRESSED 
// IN HTML RUN THE FUNCTION WHEN THE BUTTONS ARE CLICKED 
// IN THE FUNCTION, DEFINE THE NUMBER AS STRINGS SO IT IS EASIER TO CONCATENATE, THEN CONVERT TO NUMBER///
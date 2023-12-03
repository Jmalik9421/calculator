const display = document.getElementById('display');

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

    if (calculationArray.includes('+')) {
        let operatorIndex = calculationArray.indexOf('+');
        let num1 = '';
        for (let i = 0; i < operatorIndex; i++) {
            iString = calculationArray[i].toString();
            num1 += iString; 
        }
        num1 = Number(num1);

        let num2 = '';
        for (let i = operatorIndex + 1; i < calculationArray.length; i++) {
            iString = calculationArray[i].toString();
            num2 += iString;
        }
        num2 = Number(num2);

        clearDisplay();
        add(num1, num2);
    } else if (calculationArray.includes('-')) {
        let operatorIndex = calculationArray.indexOf('-');
        let num1 = '';
        for (let i = 0; i < operatorIndex; i++) {
            iString = calculationArray[i].toString();
            num1 += iString; 
        }
        num1 = Number(num1);

        let num2 = '';
        for (let i = operatorIndex + 1; i < calculationArray.length; i++) {
            iString = calculationArray[i].toString();
            num2 += iString;
        }
        num2 = Number(num2);

        clearDisplay();
        subtract(num1, num2);
    } else if (calculationArray.includes('*')) {
        let operatorIndex = calculationArray.indexOf('*');
        let num1 = '';
        for (let i = 0; i < operatorIndex; i++) {
            iString = calculationArray[i].toString();
            num1 += iString; 
        }
        num1 = Number(num1);

        let num2 = '';
        for (let i = operatorIndex + 1; i < calculationArray.length; i++) {
            iString = calculationArray[i].toString();
            num2 += iString;
        }
        num2 = Number(num2);

        clearDisplay();
        multiply(num1, num2);
    } else if (calculationArray.includes('/')) {
        let operatorIndex = calculationArray.indexOf('/');
        let num1 = '';
        for (let i = 0; i < operatorIndex; i++) {
            iString = calculationArray[i].toString();
            num1 += iString; 
        }
        num1 = Number(num1);

        let num2 = '';
        for (let i = operatorIndex + 1; i < calculationArray.length; i++) {
            iString = calculationArray[i].toString();
            num2 += iString;
        }
        num2 = Number(num2);

        clearDisplay();
        divide(num1, num2);
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
    // 8. CLEAN UP
    // 
    // PROJECT CAN BE EXPANDED TO INCLUDE FLOATS, NOT JUST INTS
}

// IN JS, CREATE A FUNCTION TO DEFINE NUM1 AND NUM2
// DEFINITION WILL BE DEPENDENT ON WHAT NUMBERS ARE PRESSED 
// IN HTML RUN THE FUNCTION WHEN THE BUTTONS ARE CLICKED 
// IN THE FUNCTION, DEFINE THE NUMBER AS STRINGS SO IT IS EASIER TO CONCATENATE, THEN CONVERT TO NUMBER///
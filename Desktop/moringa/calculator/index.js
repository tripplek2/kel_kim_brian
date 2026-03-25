// History array
const history = [];

// Function to add calculation to history
function addToHistory(num1, num2, operator, result) {
    const record = {
        operand1: num1,
        operand2: num2,
        operator: operator,
        result: result
    };
    history.push(record);
}

// Arithmetic functions
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error");
        return null;
    }
    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}

// Function to display history
function displayHistory() {
    if (history.length === 0) {
        console.log("No calculations yet.");
        return;
    }

    console.log("Calculation History:");
    history.forEach((item, index) => {
        console.log(
            `${index + 1}: ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
        );
    });
}


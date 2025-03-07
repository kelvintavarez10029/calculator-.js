const readline = require('readline-sync');
const calculator = require('./calculator'); // Import calculator function

function getUserInput(promptMessage) {
    let value = readline.question(promptMessage);
    value = Number(value);
    
    if (isNaN(value)) {
        console.log('Please enter a valid number.');
        return getUserInput(promptMessage); 
    }
    return value;
}

function getOperation() {
    let operation = readline.question('Enter the operation (+, -, *, /): ');

    if (!['+', '-', '*', '/'].includes(operation)) {
        console.log("That is not a valid operation.");
        return getOperation(); 
    }

    return operation;
}

const operation = getOperation();
const num1 = getUserInput('Enter the first number: ');
const num2 = getUserInput('Enter the second number: ');

const result = calculator(operation, num1, num2);
console.log(`The result is: ${result}`);


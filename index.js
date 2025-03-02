

const readline = require('readline-sync');
const calculator = require('./calculator');



const operation = readline.question('Enter the operation (+, -, *, /): ');

if (!['+', '-', '*', '/'].includes(operation)) {
    console.log("That is not a valid operation.");
   process.exit();
}

let num1 = Number(readline.question('Enter the first number: '));
if (isNaN(num1)) {
    console.log('Please enter a valid number');
    process.exit();
  
}

console.log(`The first number is: ${num1}`);

let num2 = Number(readline.question('Enter the second number: '));
if (isNaN(num2)) {
    console.log('Please enter a valid number');
    process.exit();
}

console.log(`The second number is: ${num2}`);

const result = calculator(operation, num1, num2);

console.log(`The result is: ${result}`);

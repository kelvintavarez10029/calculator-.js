function calculator(operation, num1, num2) {
  switch (operation) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
      default: return "Invalid operation";
  }
}

module.exports = calculator;



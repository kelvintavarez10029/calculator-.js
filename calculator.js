
function calculator(operation, num1, num2) {
    switch (operation) {

        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;

        case '*':
            return num1 * num2;
            break;

        case '/':
            return num1 / num2;
            break;

        default:
    }}
    module.exports = calculator;
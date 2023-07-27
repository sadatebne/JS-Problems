//Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return NaN;
    }
  }
  

  const a = 7;
  const b = 6;
  const operator = '-';
  const result = calculator(a, b, operator);
  console.log(`Result of ${a} ${operator} ${b} = ${result}`); 
  
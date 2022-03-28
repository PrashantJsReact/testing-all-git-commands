const userInput1 = parseFloat(prompt('Please enter first number'));
const userInput2 = parseFloat(prompt('Please enter second number'));

// function to calculate sum of two number

const sum = (num1, num2) => `sum is = ${num1 + num2}`;

const result = sum(userInput1, userInput2);
console.log(result);

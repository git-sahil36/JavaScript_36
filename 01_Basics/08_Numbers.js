// how to declare a number in JS
const score = 400
console.log(score);

// how to explicitly declare that the value stored should/is a number.
const balance = new Number(  100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed());

// To precision workss from left to right and counts all the digits present and rounds off the last digit if present after a decimal point. May provide answers in exponents form. USE WITH CAUTION !!
const num2 = 123.845697
console.log(num2.toPrecision(5));

// Indian/US number system
const num3 = 1000000000000
console.log(num3.toLocaleString('en-IN'));

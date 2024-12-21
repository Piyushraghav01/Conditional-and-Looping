/** Ternary Operator */

let num1 = 10;
let num2 = 599;
let num3 = 50;
let greater =
  num1 > num2
    ? num1 > num3
      ? num1
      : num3
    : num2 > num3
    ? num2
    : num3;

// if (num1 > num2) {
//   greater = num1;
// } else {
//   greater = num2;
// }

console.log('Greater number is ' + greater);

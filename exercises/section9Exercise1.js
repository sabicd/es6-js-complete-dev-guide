// Problem convert it to use template literal
/*
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}
*/
// Solution
const doubleMessage = (number) => `Your number doubled is ${2 * number}`;

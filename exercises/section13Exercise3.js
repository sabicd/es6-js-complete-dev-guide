// Problem: refactor function to use rest operator
/*
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/
// Solution
const unshift = (array, ...rest) => [...rest, ...array];

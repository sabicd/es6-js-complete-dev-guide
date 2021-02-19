// Problem: refactor this function to use rest operator
/*
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
*/
// Solution
const product = (...numbers) => numbers.reduce((acc, number) => acc *= number,1);

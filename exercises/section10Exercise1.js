// Problem: refactor this to use arrow function declaration instead
/*
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/
// Solution
const fibonacci = n => n < 3
  ? 1
  : fibonacci(n - 1) + fibonacci(n - 2);

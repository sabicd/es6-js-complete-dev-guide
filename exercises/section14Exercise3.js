// Problem: double the numbers in the array with recursion based function, no array helpers
const numbers = [1, 2, 3];

// Solution
const double = ([current,...rest]) => ( [current * 2, ...(rest.length ? double(rest) : []) ]);

// Problem: Refactor this function to use template literals
/*
function fullName(firstName, lastName) {
  return firstName + lastName;
}
*/
// Solution
const fullName =(firstName, lastName) => `${firstName} ${lastName}`;

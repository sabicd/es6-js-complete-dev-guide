// Problem: find out if every user submitted the form.
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];
// Solution
const hasSubmitted = users.every(user => user.hasSubmitted);

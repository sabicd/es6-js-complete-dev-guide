// Problem: find the admin user
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
// Solution
const admin = users.find(user => user.admin);

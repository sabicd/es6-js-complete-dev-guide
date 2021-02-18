// Problem: find the account with the balance of 12
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

// Solution:
const account = accounts.find(account => account.balance === 12);

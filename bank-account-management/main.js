const BankAccount = require('./BankAccount');

// Create instances of BankAccount
let account1 = new BankAccount('12345', 'John Doe', 1000);
let account2 = new BankAccount('67890', 'Jane Smith', 500);

// Perform transactions
account1.deposit(200);
account1.withdraw(300);
account2.deposit(100);
account2.withdraw(700);

// Display account information
account1.displayAccountInfo();
account2.displayAccountInfo();
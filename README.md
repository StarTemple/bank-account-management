# Bank Account Management System

This project implements a simple bank account management system using Object-Oriented Programming (OOP) principles in JavaScript.

## BankAccount Class

The `BankAccount` class models a bank account with basic functionalities to manage account transactions and display information.

### Attributes

- **\_accountNumber**: Stores the unique identifier of the bank account.
- **\_accountHolder**: Stores the name of the account holder.
- **\_balance**: Stores the current balance of the account.

### Methods

- **constructor(accountNumber, accountHolder, initialBalance)**:
  - Initializes a new instance of the `BankAccount` class with provided account details.

- **deposit(amount)**:
  - Adds the specified amount to the account balance.

- **withdraw(amount)**:
  - Subtracts the specified amount from the account balance, if sufficient funds are available.

- **getBalance()**:
  - Retrieves and returns the current balance of the account.

- **displayAccountInfo()**:
  - Displays the account number, account holder name, and current balance.

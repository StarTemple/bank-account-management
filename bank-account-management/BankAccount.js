class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        this._accountNumber = accountNumber;
        this._accountHolder = accountHolder;
        this._balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposit of $${amount} successful. New balance is $${this._balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this._balance) {
                this._balance -= amount;
                console.log(`Withdrawal of $${amount} successful. New balance is $${this._balance}`);
            } else {
                console.log('Error: Insufficient funds.');
            }
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    getBalance() {
        return this._balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this._accountNumber}`);
        console.log(`Account Holder: ${this._accountHolder}`);
        console.log(`Balance: $${this._balance}`);
    }
}

module.exports = BankAccount;
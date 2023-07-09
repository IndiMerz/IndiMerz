// underscore convention

class Wallet {
    constructor () {
        this._balance = 0;
        this._transaction = [];
    }

    deposit(amount){
        this._processDeposit(amount);
        this._balance += amount;
    }

    withdraw(amount){
        if (amount > this._balance){
            console.log('Transaction Failed: Not Enough Funds available');
            return;
        }
        this._processWithdraw(amount);
        this._balance -= amount;
    }

    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._transaction.push({
            type: 'deposit',
            amount,
        })
    }

    _processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);

        this._transaction.push({
            type: 'withdraw',
            amount,
        })
    }

    get balance() {
        return this._balance;
    }

    get transaction() {
        return this._transaction;
    }
}

const wallet = new Wallet();

wallet.deposit(200);
wallet.withdraw(120);

wallet.deposit(20);
wallet.withdraw(30);

wallet.deposit(140);
wallet.withdraw(270);

wallet.deposit(70);
wallet.withdraw(120);

wallet.deposit(180);
wallet.withdraw(120);

console.log(wallet);
console.log(wallet.balance);
console.log(wallet.transaction);


// Private Class Fields

class Wallet2 {

    #balance = 0;
    #transaction = [];
    

    deposit(amount){
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdraw(amount){
        if (amount > this.#balance){
            console.log('Transaction Failed: Not Enough Funds available');
            return;
        }
        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this.#transaction.push({
            type: 'deposit',
            amount,
        })
    }

    #processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);

        this.#transaction.push({
            type: 'withdraw',
            amount,
        })
    }

    get balance() {
        return this.#balance;
    }

    get transaction() {
        return this.#transaction;
    }
}


const wallet2 = new Wallet2();
wallet2.deposit(500);
wallet2.withdraw(320);

console.log(wallet2);
console.log(wallet2.balance);
console.log(wallet2.transaction);
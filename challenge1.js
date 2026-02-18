// LEVEL 1 — Core OOP Foundations
// 🧩 Exercise 1: Bank Account System

// Create a BankAccount class:

// Requirements:

// Properties: owner, balance

// Method: deposit(amount)

// Method: withdraw(amount)

// Method: getBalance()

// Getter: formattedBalance (returns "$500.00")

// Prevent negative withdrawals
// Add a static method compareAccounts(acc1, acc2)
// that returns the richer account.

class BankAccount{
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance 
    }

    deposit(amount){
        if(amount <= 0){
            alert("Invalid amount");
            return;
        }
        else{
            this.balance += amount
            console.log(`Deposit Made. Your new balance is ${this.balance}`);
        }
    }

    withdraw(amount){
        if(amount > this.balance || amount <= 0){
            alert("Invalid amount.");
            return;
        }else{
            this.balance -= amount;
            console.log(`You have made a withdrawal of ${amount}.
    Your new balance is ${this.balance}`);
        }
    }

    getBalance(){
        console.log(`Your balance is $${this.balance}`)
    }

    formattedBalance(){
        console.log(`Balance is $${this.balance.toFixed(2)}`);
    }

    static compareAccounts(acc1, acc2){
        if(acc1.balance > acc2.balance){
            console.log(`${acc1.owner} is richer than ${acc2.owner}`);
        }else if(acc2.balance > acc1.balance){
            console.log(`${acc1.owner} is richer than ${acc2.owner}`);
        }else{
            console.log("Two rich guy. Enjoy.")
        }
    }
}

const dave = new BankAccount("dave", 60000);
const peter = new BankAccount("Peter", 890000)
dave.getBalance();
dave.formattedBalance();
dave.deposit(70000);
dave.withdraw(20000);
dave.getBalance();
peter.getBalance();
BankAccount.compareAccounts(dave, peter);


const MyBankProto = {
    init(owner, balance){
        this.owner = owner
        this.balance = balance
    },

    getBalance(){
        console.log(`Your balance is $${this.balance}`)
    },

    formattedBalance(){
        console.log(`Balance is $${this.balance.toFixed(2)}`);
    }
}

const newBank = Object.create(MyBankProto)
newBank.balance = 10807;
newBank.owner = "Dave"
newBank.getBalance();
newBank.formattedBalance();

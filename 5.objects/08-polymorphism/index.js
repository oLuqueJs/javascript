// * Superclass
function Account(agency, number, balance) {
  this.agency = agency;
  this.number = number;
  this.balance = balance;
}

Account.prototype.withdraw = function(value) {
  if (value > this.balance) {
    console.log("Insufficient funds")
    return;
  }

  this.balance -= value;
  this.getBalance()
}

Account.prototype.deposit = function(value) {
  this.balance += value;
  this.getBalance();
}

Account.prototype.getBalance = function() {
  return this.balance.toFixed(2);
}

const c1 = new Account(11, 123, 9000.00)
c1.deposit(5000)
c1.withdraw(15000)
console.log(c1)


// * Checking Account + Polymorphism
function checkingAccount(agency, number, balance, limit) {
  Account.call(this, agency, number, balance)
  this.limit = limit;
}

checkingAccount.prototype = Object.create(Account.prototype) // ? Linking Prototypes
checkingAccount.prototype.constructor = checkingAccount

// * Polymorphism
checkingAccount.prototype.withdraw = function(value) {
  if (value > (this.balance + this.limit)) {
    console.log("Insufficient funds")
    return;
  }

  this.balance -= value;
  console.log(this.getBalance())
}

const c2 = new checkingAccount(11, 124, 9000, 5000)
c2.withdraw(10000)
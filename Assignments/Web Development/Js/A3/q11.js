function BankAccount(accountNumber, accountHolderName, accountBalance, isSalary = false, odLimit = NaN) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.isSalary = isSalary;
    this.odLimit = odLimit;
}

BankAccount.withDraw() = function(drawAmount) {
    if (this.isSalary) {
        if (this.accountBalance > drawAmount) {
            this.accountBalance -= drawAmount;
            console.log('Withdrawn Successfully');
        }
        console.log('Insufficient Funds');
    } else {
        if (drawAmount < accountBalance + odLimit) {
            this.accountBalance -= drawAmount;
            console.log('Withdrawn Successfully');
        }
        console.log('Insufficient Funds');
    }
}
var account1 = new BankAccount(1, 'Shirdi', 1000, true);
var account1 = new BankAccount(2, 'Venkat', 5000, false, 1000);
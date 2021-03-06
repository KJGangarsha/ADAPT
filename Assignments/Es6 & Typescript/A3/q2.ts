class Account{
    balance: any;
    constructor(id,name,balance){
        id= this.id;
        name = this.name;
        balance  = this.balance;
    }
    }
    class SavingAccount extends Account {
        interest: any;
        cash_credit: any;
        constructor(id,name,balance,interest,cash_credit){
              super(id,name,balance);
              interest = this.interest;
              cash_credit = this.cash_credit;
        }
          showName(){
              let n = this.name;
            console.log(n); 
        }
        showBalance = ()=>{let b = this.interest*this.cash_credit
        console.log('the balance in your account is: '+b);}
    }
    class CurrentAccount extends Account {
        interest: any;
        cash_credit: any;
        constructor(id,name,balance,interest,cash_credit){
              super(id,name,balance);
              interest = this.interest;
              cash_credit = this.cash_credit;
        }
        showBalance = ()=>{let b = this.interest*this.cash_credit
        console.log('the balance in your account is: '+b);}
    }
    var p = new SavingAccount(1,'Tom',10000,0.5,2000);
    p.showBalance();
    p.showName();
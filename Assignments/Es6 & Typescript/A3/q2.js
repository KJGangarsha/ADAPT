var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        id = this.id;
        name = this.name;
        balance = this.balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.showBalance = function () {
            var b = _this.interest * _this.cash_credit;
            console.log('the balance in your account is: ' + b);
        };
        interest = _this.interest;
        cash_credit = _this.cash_credit;
        return _this;
    }
    SavingAccount.prototype.showName = function () {
        var n = this.name;
        console.log(n);
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, interest, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.showBalance = function () {
            var b = _this.interest * _this.cash_credit;
            console.log('the balance in your account is: ' + b);
        };
        interest = _this.interest;
        cash_credit = _this.cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var p = new SavingAccount(1, 'Tom', 10000, 0.5, 2000);
p.showBalance();
p.showName();

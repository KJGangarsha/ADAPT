package q9;

public class SavingAccount extends Assignment3Q9 {
	private double acc_balance;
    private int acc_ID;
    private String accountHolderName;
    private boolean isSalaryAccount;
    
    public SavingAccount(double acc_balance, int acc_ID, String accountHolderName, boolean isSalaryAccount) {
        super();
        this.setAcc_balance(acc_balance);
        this.acc_ID = acc_ID;
        this.setAccountHolderName(accountHolderName);
        this.setSalaryAccount(isSalaryAccount);
    }
    
    public int getAcc_ID() 
    {
    	return acc_ID;
    }

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public double getAcc_balance() {
		return acc_balance;
	}

	public void setAcc_balance(double acc_balance) {
		this.acc_balance = acc_balance;
	}

	public boolean isSalaryAccount() {
		return isSalaryAccount;
	}

	public void setSalaryAccount(boolean isSalaryAccount) {
		this.isSalaryAccount = isSalaryAccount;
	}
	 public double withdraw(double x) {
	        if(acc_balance<x)
	        return -1;
	        else
	        {
	            acc_balance-=x;
	            return acc_balance;
	        }
	    }
	    
	 public double deposit(double x)
	    {
	        acc_balance+=x;
	        return acc_balance;
	    }
}

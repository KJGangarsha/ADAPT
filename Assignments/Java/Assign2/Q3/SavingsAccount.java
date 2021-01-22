package q3;

public class SavingsAccount extends Assignment2Q3{
	int totalDeposits = 10000;
    int fixedDepositAmount = 5000;
    
    public int getCash() {
    	return totalDeposits+fixedDepositAmount;
    }
}

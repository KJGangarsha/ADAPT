package q3;

public class CurrentAccount extends Assignment2Q3{
	int totalDeposits = 10000;
    int creditLimit = 2000;
    
    public int getCash() {
    	return totalDeposits+creditLimit;
    }
}

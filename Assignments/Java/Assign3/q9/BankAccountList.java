package q9;
import java.util.*;
public class BankAccountList extends Assignment3Q9 {
	 private TreeSet<SavingAccount> savingAccounts = new TreeSet<>(Comparator.comparing(SavingAccount::getAcc_ID));
	    
	    public BankAccountList() 
	    {
	        super();
	        
	    }

	    public BankAccountList(TreeSet<SavingAccount> savingAccounts) 
	    {
	    	this.savingAccounts = savingAccounts;
	   	}
	    
	    int  a= savingAccounts.size();

	    public boolean addSavingAccount(SavingAccount savingAccount) {
	        savingAccounts.add(savingAccount);
	        int b= savingAccounts.size();
	        if (b==a) 
	        	return false;
	        return true;
	    }

	    public List<Integer> displaySavingAccountIds() {
	        List<Integer> list = new ArrayList<>(); 
	        savingAccounts.stream().forEach(e -> list.add(e.getAcc_ID()));
	        return list;
	    }
}

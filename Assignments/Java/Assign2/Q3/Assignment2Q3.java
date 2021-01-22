package q3;
import java.util.ArrayList;
public class Assignment2Q3 {
	public static int totalCashInBank(ArrayList<Integer> cash){
		 int TotalCash=0;
	        for(int x:cash)
	        {
	            TotalCash+=x;
	        }
	        return TotalCash;
	    }
	    public int getCash(){
	    return 0;
	}
    
	public static void main(String[] args) {
		ArrayList<Integer> cash= new ArrayList<Integer>();
        Assignment2Q3 s= new SavingsAccount();
        Assignment2Q3 c= new CurrentAccount();
        cash.add(s.getCash());
        cash.add(c.getCash());
        System.out.println(totalCashInBank(cash));
	}

}

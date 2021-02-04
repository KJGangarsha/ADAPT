package q4;

import java.util.Comparator;
import java.util.*;
public class Assignment5Q4 {
	public static void main(String[] args) {
    	List<Transaction> list = new ArrayList<>();
		Scanner scan= new Scanner(System.in);
		
		System.out.print("Enter the number of traders: ");
		int n= scan.nextInt();
		
        for(int i=0;i<n;i++) {
	   		 
	   		System.out.print("Enter the name of trader "+(i+1)+"   : ");
	   		String name= scan.next();
			
			System.out.print("Enter the city of trader "+(i+1)+"   : ");
			String city= scan.next();
			
			System.out.print("Enter year of transaction "+(i+1)+"  : ");
	   		int year= scan.nextInt();
	   		
	   		System.out.print("Enter value of transaction "+(i+1)+" : ");
	   		int value= scan.nextInt();
	   	    
	   	    System.out.println("\n");
	   		 
	   		list.add(new Transaction(new Trader(name,city),year,value));
	   	 }
        scan.close();
        
        sortTransactions(list).forEach(k-> System.out.println(k));
        System.out.println("\n");
        transaction3sValuesDelhi(list).forEach(k-> System.out.println(k));
        System.out.println("\n");
        System.out.println("highest value : "+highestTransaction2(list));
        System.out.println("\n");
        System.out.print("lowest value : "+smallestTransaction1(list));
    }
    
    
    
    public static List<Transaction> sortTransactions(List <Transaction> transactions) {
        List<Transaction> l = new ArrayList<>();
        transactions.stream().filter(c -> c.getYear()==2011).forEach(e -> l.add(e));
  	    Collections.sort(l,new Sortbyvalue());
  	    return l;
     }
    
    

    public static List<Integer> transaction3sValuesDelhi(List<Transaction> transactions) {
        List<Integer> l = new ArrayList<>();
        transactions.stream().filter(c -> c.getTrader().getCity().equalsIgnoreCase("delhi")).forEach(e -> l.add(e.getValue()));
   	    return l;
     }
     
   
     
    public static int highestTransaction2(List<Transaction> transactions){
     	List<Integer> l = new ArrayList<>();
     	transactions.stream().forEach(e -> l.add(e.getValue()));

     	int max = l.stream().max(Comparator.comparing(i -> i)).get();
     	return max;
     }

     
     
    public static int smallestTransaction1(List<Transaction> transactions){
     	List<Integer> l = new ArrayList<>();
     	transactions.stream().forEach(e -> l.add(e.getValue()));

     	int min = l.stream().max(Comparator.comparing(i -> -i)).get();
     	return min;
     }
}

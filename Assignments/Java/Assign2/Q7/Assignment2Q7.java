package q7;
import java.util.*;
public class Assignment2Q7 {

	 public static void main(String[] args) { Assignment2Q7 obj= new Assignment2Q7();
     obj.selectRoles();
     }
	    private void selectRoles(){
	    	 Scanner in = new Scanner(System.in);
	         System.out.println("Select Roles: \n1.Owner\n2.Customer");
	         int x=0;
	         x=in.nextInt();
	         if(x==1)
	         roles("Owner");
	         else
	         roles("Customer");
	         in.close();
	    }
	    private void roles(String role){
	    	 if(role.equals("Owner"))
	    	        addItems();
	    	 else
	    		 	placeOrder();
	    }
	    private void addItems() {
	    	System.out.println("Add Items: \n1.Candy\n2.Cookie\n3.IceCream");
	        Scanner in = new Scanner(System.in);
	        int x=in.nextInt();
	        addItemsOperation(x);
	        in.close();
	    }
	    private void addItemsOperation(int choice) {
	    	 if(choice==1)
	         {
	             Candy x= new Candy();
	             Scanner in = new Scanner(System.in);
	             System.out.println("Quantity to be added:");
	             int candies=in.nextInt();
	             x.addCandies(candies);
	             System.out.println("Total Quantity "+x.quant);
	             in.close();
	         }
	         else if(choice ==2)
	         {
	             Cookie x= new Cookie();
	             Scanner in = new Scanner(System.in);
	             System.out.println("Quantity to be added:");
	             int candies=in.nextInt();
	             x.addCookies(candies);
	             System.out.println("Total Quantity "+x.quant);
	             in.close();
	         }
	         else
	         {
	             IceCream x= new IceCream();
	             Scanner in = new Scanner(System.in);
	             System.out.println("Quantity to be added:");
	             int candies=in.nextInt();
	             x.addIceCreams(candies);
	             System.out.println("Total Quantity "+x.quant);
	             in.close();
	         }
	    }
	    private void placeOrder() {
	    	  System.out.println("Add Items: \n1.Candy\n2.Cookie\n3.IceCream");
	          Scanner in = new Scanner(System.in);
	          int x=in.nextInt();
	          placeOrderOperation(x);
	          in.close();
	    }
	    private void placeOrderOperation(int choice) {
	    	 if(choice==1)
	         {
	             Candy x= new Candy();
	             Scanner in = new Scanner(System.in);
	             System.out.println("Quantity to be added:");
	             int candies=in.nextInt();
	             x.addCandies(candies);
	             System.out.println("Total Amount: "+x.getCost());
	             in.close();
	         }
	         else if(choice ==2)
	         {
	             Cookie x= new Cookie();
	             Scanner in = new Scanner(System.in);
	             System.out.println("Quantity to be added:");
	             int candies=in.nextInt();
	             x.addCookies(candies);
	             System.out.println("Total Amount: "+x.getCost());
	             in.close();
	         }
	         else
	         {
	             IceCream x= new IceCream();
	             Scanner in = new Scanner(System.in);
	             System.out.println("Quantity to be added:");
	             int candies=in.nextInt();
	             x.addIceCreams(candies);
	             System.out.println("Total Amount: "+x.getCost());
	             in.close();
	         }
	     
	    }

}

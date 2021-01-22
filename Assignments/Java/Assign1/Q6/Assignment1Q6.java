package q6;
import java.util.*;
public class Assignment1Q6 extends Login{

	public static void main(String[] args) {
		 Scanner in = new Scanner(System.in);
	        String user,pass;
	     
	        while(i<3)
	        {
	            user=in.nextLine();
	            pass=in.nextLine();
	            String s=loginUser(user,pass);
	            if(s.equals("Yes")) {
	            	System.out.println("Welcome "+user);
	            }
	            else
	            {
	            	System.out.println("You have entered wrong credentials ,please enter the right credentials.");
	            }
	            i++;
	        }
	        if(i==3)
	        	System.out.println("Contact Admin");
	        in.close();

	}

}

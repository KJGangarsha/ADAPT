package q4;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	 public static void main( String[] args )
	    {
	        @SuppressWarnings("resource")
			ApplicationContext context = new ClassPathXmlApplicationContext("q4.xml");
	        Controller b = (Controller)context.getBean("controller");
	        b.deposit(375345,10000);
	        b.withdraw(375345, 500);
	        b.getBalance(375345);
	    }
}

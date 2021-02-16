package q7;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test 
{
    public static void main( String[] args ) {
    	@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext("q7.xml");
    	@SuppressWarnings("unused")
		SpELOper spelOperators = (SpELOper) context.getBean("SpELOper");
    	@SuppressWarnings("unused")
		Car car =(Car)context.getBean("someCar");
    	@SuppressWarnings("unused")
		Engine engine= (Engine)context.getBean("engine");
    }
}
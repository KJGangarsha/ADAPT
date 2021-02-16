package q4;
import java.util.*;
import java.util.Map.Entry;


public class Assignment3Q4 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
 
		DateClass d1=new DateClass(27,6,1999);
		DateClass d2=new DateClass(21,10,2000);
		DateClass d3=new DateClass(23,8,1997);
		DateClass d4=new DateClass(2,7,1996);
		 
		employee e1=new employee("jagan");
		employee e2=new employee("magan");
		employee e3=new employee("gagan");
		employee e4=new employee("lokan");
		
		Map<DateClass,employee> object=new HashMap<DateClass,employee>();
		object.put(d1, e1);
		object.put(d2, e2);
		object.put(d3, e3);
		object.put(d4, e4);
		 Set<Entry<DateClass,employee>>entryset=object.entrySet();
		    for (Entry<DateClass,employee> entry :entryset)
		    {
		    	System.out.println(entry.getKey());
		    	System.out.println(entry.getValue());
		    }
	}
}
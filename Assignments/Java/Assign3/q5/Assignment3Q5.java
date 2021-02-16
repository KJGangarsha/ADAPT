package q5;
import java.util.*;
import java.util.Map.Entry;
public class Assignment3Q5 {


		
		public static void main(String[] args) {
			

			Employee e1=new Employee(1001,"venkat","venkat@gmail.com");
			@SuppressWarnings("unused")
			Employee e2=new Employee(1002,"sai","sai@gmail.com");
			Employee e3=new Employee(1003,"ram","ram@gmail.com");
		 
			department d1=new department("datascience",2001);
			department d2=new department("cloud",2002);
	   
			Map <Employee,department> object=new HashMap<>();
			object.put(e1, d2);
			object.put(e3, d1);
			
			Set<Entry<Employee,department>> EntrySet=object.entrySet();
			for(Entry<Employee,department>entry:EntrySet)
			{
				System.out.println(entry.getKey());
				System.out.println(entry.getValue());
			}
		}
	}



package q1;
import java.util.*;


public class Assignment3Q1 {

	public static void main(String[] args) {
		Set<Person> set= new TreeSet<>(new weightFunc());
		set.add(new Person("Harsha",165,70));
		set.add(new Person("Mega",180,80));
		set.add(new Person("Lakshmi",155,75));
		set.add(new Person("Ramesh",160,70));
		for(Person p:set)
			System.out.println(p.getName());
	}

}

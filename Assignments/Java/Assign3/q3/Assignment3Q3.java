package q3;
import java.util.*;
public class Assignment3Q3 {
	public static List<String> traverseReverse(ArrayList<String> aList){
		List<String> it=new ArrayList<>();
		ListIterator<String> itr=aList.listIterator(aList.size());
		while(itr.hasPrevious())
		{
			it.add(itr.previous());
		}
        return it;
	 }
	public static void main(String[] args) {
	
		 ArrayList<String> aList= new ArrayList<>();
	        aList.add("Ganga");
	        aList.add("Mega");
	        aList.add("Ramesh");
	        aList.add("Lakshmi"); 
	        System.out.println(aList);
	        System.out.println("---------------------------------------");
	        System.out.println(traverseReverse(aList));
	}

}

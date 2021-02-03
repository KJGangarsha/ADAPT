package q2;
import java.util.*;
public class Assignment3Q2 {
    public static LinkedHashSet<Integer> ordered(LinkedHashSet<Integer> linkedHashSet){ 
    	linkedHashSet.add(2);
    	linkedHashSet.add(20);
    	linkedHashSet.add(12);
    	linkedHashSet.add(5);
    	linkedHashSet.add(9);
    	return linkedHashSet;
    }
    public static HashSet<Integer> unordered(HashSet<Integer> hashSet){
    	hashSet.add(2);
    	hashSet.add(20);
    	hashSet.add(12);
    	hashSet.add(5);
    	hashSet.add(9);
    	return hashSet;
    }
	public static void main(String[] args) { 
		LinkedHashSet<Integer> numset = new LinkedHashSet<Integer>();
    	LinkedHashSet<Integer> numset1 = new LinkedHashSet<Integer>();
    	
    	numset1=ordered(numset);
    	System.out.print("LinkedHashSet: ");
    	System.out.println(numset1);
    	
    	
    	HashSet<Integer> numSet = new HashSet<Integer>();
    	HashSet<Integer> numSet1 = new HashSet<Integer>();
    	
    	numSet1=unordered(numSet);
    	System.out.print("HashSet: ");
    	System.out.print(numSet1);
	}
}

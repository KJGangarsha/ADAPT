package q4;
import java.util.*;
public class Sortbyvalue implements Comparator<Transaction> {
	 public int compare(Transaction a, Transaction b) { return a.getValue()-(b.getValue()); } 
	
}

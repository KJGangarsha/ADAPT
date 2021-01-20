package q7;

public class SearchArray {
	  public static boolean searchArray(int[] arr,int toCheckValue){
		  for(int i=0;i<15;i++)
		  {
			  if(arr[i]==toCheckValue)
				  return true;
		  }
		  return false;
	  }
}

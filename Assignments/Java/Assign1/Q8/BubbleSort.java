package q8;

public class BubbleSort {
	public static int[] bubbleSort(int arr[]) {
		int n=arr.length;
	      for(int i=0;i<n;i++)
	      {
	          for(int j=1;j<(n-i);j++)
	          {
	              if(arr[j-1]>arr[j])
	              {
	                  int x=arr[j];
	                  arr[j]=arr[j-1];
	                  arr[j-1]=x;
	              }
	          }
	      }
	      return arr;
	  }
	}
	  


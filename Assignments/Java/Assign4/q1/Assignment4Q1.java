package q1;
interface FunctionalInterface {
	void operation();
}

public class Assignment4Q1 {
	public void addition(int num1,int num2)
 	{
	 FunctionalInterface x=()->System.out.println(num1+num2);
     x.operation();
    }
    public void subtraction(int num1,int num2){
    	FunctionalInterface x=()->System.out.println(num1-num2);
        x.operation();
    }
    public void multiplication(int num1,int num2){
    	FunctionalInterface x=()->System.out.println(num1*num2);
        x.operation();
    }
    public void division(int num1,int num2){
    	FunctionalInterface x=()->System.out.println(num1/num2);
        x.operation();
    }   
   
	public static void main(String[] args) 
	{
	        Assignment4Q1 o= new Assignment4Q1();
	        o.addition(3,7);
	        o.subtraction(9,8);
	        o.multiplication(3,5);
	        o.division(9,3);    

	}
}
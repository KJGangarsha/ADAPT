package q3;

class SiCi {
    public static double simpleInterest(double principalAmount,int time,double interestRate){
    	return ((principalAmount*time*interestRate)/100);
    }
    public static double compoundInterest(double principalAmount,int time,double interestRate){
    	 double x=Math.pow(1+interestRate,time);
         return principalAmount*x-principalAmount;
    }
}

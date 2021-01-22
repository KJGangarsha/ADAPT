package q5;

import java.util.Scanner;

public class Assignment1Q5 extends  TaxAmount{
    public static void main(String args[]) 
    {
        Scanner in = new Scanner(System.in);
        int ctc=in.nextInt();
       
        System.out.println(calculateTaxAmount(ctc));
        in.close();    
    }
    
}

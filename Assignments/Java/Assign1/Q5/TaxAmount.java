package q5;

public class TaxAmount {
	public static double calculateTaxAmount(int ctc){
		if(ctc<180001) return 0;
		else if(ctc>180001 && ctc<=300000) return ctc/10;
		else if(ctc>300001 && ctc<=500000) return ctc/20;
		else if(ctc>500001 && ctc<=1000000) return ctc/30;
		else return -1;
	}
}

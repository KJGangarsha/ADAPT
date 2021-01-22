package q7;

public class IceCream extends DesertItem{
	
		 int quant;
		    public int addIceCreams(int candies){
		        quant+=candies;
		        return quant;
		    }
		    public int getCost()
		    {
		        return quant*10;
		    }
	
}

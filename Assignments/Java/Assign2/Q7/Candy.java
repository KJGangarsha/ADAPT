package q7;

public class Candy extends DesertItem{
	 int quant;
	    public int addCandies(int candies){
	        quant+=candies;
	        return quant;
	    }
	    public int getCost()
	    {
	        return quant*60;
	    }
}

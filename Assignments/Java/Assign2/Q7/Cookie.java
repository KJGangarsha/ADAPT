package q7;

public class Cookie extends DesertItem {
	int quant;
    public int addCookies(int candies){
        quant+=candies;
        return quant;
    }
    public int getCost(){
        return quant*70;
    }
}

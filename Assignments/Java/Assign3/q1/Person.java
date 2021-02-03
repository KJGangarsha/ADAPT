package q1;

public class Person extends Assignment3Q1{
	private String name;
    private int height;
    private double weight;
    Person(String name,int height,double weight)
    {
    	this.name=name;
    	this.height=height;
    	this.weight=weight;
    }
    public String getName() {
    	return name;
    }
    public int getHeight() {
    	return height;
    }
    public double getWeight() {
    	return weight;
    }
}

package q5;

public class department {
	String name;
	Integer id;
	public department(String name, Integer id) {
		super();
		this.name = name;
		this.id = id;
	}
	public String toString()
	{
		return "department [ department: "+name +" id: " +id ;
	}

}

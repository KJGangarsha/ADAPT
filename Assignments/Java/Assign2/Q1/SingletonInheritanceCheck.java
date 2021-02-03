package q1;

public class SingletonInheritanceCheck extends Assignment2Q1 {
	private static String name="Ganga";
	static SingletonInheritanceCheck obj= new SingletonInheritanceCheck();
    private SingletonInheritanceCheck(){}
    public static SingletonInheritanceCheck getInstace()
    {
        return obj;
    }
	public String getName() {
		return SingletonInheritanceCheck.name;
	}
	public void setName(String name) {
		SingletonInheritanceCheck.name = name;
	}
	
}

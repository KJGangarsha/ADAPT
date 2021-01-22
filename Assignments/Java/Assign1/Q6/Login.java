package q6;

public class Login {
	public static int i=0;
	static String userId = "Ajay",password = "password";
	    public static String loginUser(String user, String pass) {
	    	if(user.equals(userId) && pass.equals(password))
	    	return "Yes";
	    	
	    	return "No";
	    }
}

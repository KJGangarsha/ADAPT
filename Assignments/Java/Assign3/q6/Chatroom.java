package q6;
import java.util.*;
public class Chatroom {
	 private String name;
	    static Set<String> username;
	    private List<String> messages;
	    Chatroom()
	    {
	        name = "";
	        username = new HashSet<String>();
	        messages = new ArrayList<String>();
	    }
	    public boolean removeUser(String username) {
	    	 Chatroom.username.remove(username);
	         if(Chatroom.username.contains(username))
	         return false;
	         return true;
	    }
	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public static Set<String> getUsername() {
	        return username;
	    }

	    public void setUsername(Set<String> username) {
	        Chatroom.username = username;
	    }

	    public List<String> getMessages() {
	        return messages;
	    }

	    public void setMessages(String message) {
	        messages.add(message);
	    }
}

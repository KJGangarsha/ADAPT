package q7;

public class ParkingSlot {
	private String ownerName;
    private int carNumber;
    private int token;
    private int level;
    private int section;
    private int slot;
    
    public ParkingSlot(String ownerName, int carNumber, int token, int level, int section, int slot) {
		super();
		this.ownerName = ownerName;
		this.carNumber = carNumber;
		this.token = token;
		this.level = level;
		this.section = section;
		this.slot = slot;
	}
	
    public String getOwnerName() 
	{
		return ownerName;
	}
	
	public int getCarNumber() 
	{
		return carNumber;
	}
	
	public int getToken() 
	{
		return token;
	}
	
	public int getLevel() 
	{
		return level;
	}
	
	public int getSection() 
	{
		return section;
	}
	
	public int getSlot() 
	{
		return slot;
	}
	
	public void setOwnerName(String ownerName) 
	{
		this.ownerName = ownerName;
	}
	
	public void setCarNumber(int carNumber) 
	{
		this.carNumber = carNumber;
	}
	
	public void setToken(int token) 
	{
		this.token = token;
	}
	
	public void setLevel(int level) 
	{
		this.level = level;
	}
	
	public void setSection(int section) 
	{
		this.section = section;
	}
	
	public void setSlot(int slot) 
	{
		this.slot = slot;
	}
}

package q7;

public class Assignment3Q7 {
	  private String name;
	    private String carModel;
	    private int carNo;
	    private int mobileNumber;
	    private String address;
	    
	    public Assignment3Q7(){}
	    
	    public String getName() 
	    {
	    	return name;
	    }
		
	    public String getCarModel() 
	    {
	    	return carModel;
	    }
		
	    public int getCarNo() 
	    {
	    	return carNo;
	    }
		
	    public int getMobileNumber() 
	    {
	    	return mobileNumber;
	    }
		
	    public String getAddress() 
	    {
	    	return address;
	    }
		
		public void setName(String name) {
			this.name = name;
		}

		public void setCarModel(String carModel) {
			this.carModel = carModel;
		}

		public void setCarNo(int carNo) {
			this.carNo = carNo;
		}

		public void setMobileNumber(int mobileNumber) {
			this.mobileNumber = mobileNumber;
		}

		public void setAddress(String address) {
			this.address = address;
		}
		
		public Assignment3Q7(String name, String carModel, int carNo, int mobileNumber, String address) {
			super();
			this.name = name;
			this.carModel = carModel;
			this.carNo = carNo;
			this.mobileNumber = mobileNumber;
			this.address = address;
		}

		public static void main(String[] args) {
	    	
	    	@SuppressWarnings("unused")
			Assignment3Q7 answer= new Assignment3Q7();
	    }
	   
}

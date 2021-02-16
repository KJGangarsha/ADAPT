package q7;
import java.util.*;
public class Parked_CarOwenerList {
	int levels = 3;
    int sections = 4;
    int slots = 20;
    
    ArrayList<ParkingSlot> parkingSlot= new ArrayList<>();
    
    public void add_new_car(Assignment3Q7 obj){
    	for(int i=1;i<4;i++) {
    		for(int j=1;j<5;j++) {
    			for(int k=1;k<21;k++) {
    				ParkingSlot all = null;
    				if(parkingSlot.size()==0) {
				    	all= new ParkingSlot(obj.getName(),obj.getCarNo(),(i*100+j*10+k),i,j,k);
				    }
    				else {
    					for(ParkingSlot c:parkingSlot) {
    	    				if(c.getLevel()!=(i) || c.getSection()!=j || c.getSlot()!=k) {
    	    					all= new ParkingSlot(obj.getName(),obj.getCarNo(),(i*100+j*10+k),i,j,k);
    					    
    	    				}
    	    			}
    				}
    				parkingSlot.add(all);
    			}
    		}
    	}			
    }
    public void remove_car(String name,int carNo){
    	parkingSlot.removeIf(c -> c.getOwnerName().equals(name) && c.getCarNumber()==(carNo));
    }
    public String get_parked_car_location(int token){
    	String str="";
    	for(ParkingSlot slot:parkingSlot) {
	    	if(slot.getToken()==token) {
		    	str="level : "+slot.getLevel()+",section : "+slot.getSection()+",slot: "+slot.getSlot()+".";
		    }
    	}
	return str;
}
}


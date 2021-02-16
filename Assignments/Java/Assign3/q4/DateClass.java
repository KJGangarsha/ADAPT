package q4;

public class DateClass extends Assignment3Q4 {
	Integer date;
	Integer month;
	Integer year;
	
	public DateClass(Integer date, Integer month, Integer year) {
		super();
		this.date = date;
		this.month = month;
		this.year = year;
	}
	
	public Integer getDate() {
		return date;
	}
	public Integer getMonth() {
		return month;
	}
	public Integer getYear() {
		return year;
	}
	public String toString()
	{
		return "Dob :"+date +"-" +month+"-"+year;
	}
}

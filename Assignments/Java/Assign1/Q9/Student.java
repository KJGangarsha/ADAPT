package q9;

public class Student {
	private int subjectA,subjectB,subjectC;
	  Student(int x,int y, int z)
	    {
	        subjectA=x;
	        subjectB=y;
	        subjectC=z;
	    }
    public static int studentsTotalMarksInAllSubjects(Student[] students) {
    	 int sum=0;
         for(Student s:students)
         {
             sum+=s.subjectA+s.subjectB+s.subjectC;
         }
         return sum;
    }

    public static double studentsAverageMarksInAllSubjects(Student[] students) {
    	double avg=0;
    	int sum=0;
    	for(Student s:students)
    	{
    		sum+=s.subjectA+s.subjectB+s.subjectC;
    	}
    	avg=sum/3;
    	return avg;
    }
    
    public static int subjectATotalByStudents(Student[] students) {
    	int sum=0;
    	for (Student s:students)
    	{
    		sum+=s.subjectA;
    	}
    	return sum;
    }
    public static int subjectBTotalByStudents(Student[] students) {
    	int sum=0;
    	for (Student s:students)
    	{
    		sum+=s.subjectB;
    	}
    	return sum;
    }
    public static int subjectCTotalByStudents(Student[] students) {
    	int sum=0;
    	for (Student s:students)
    	{
    		sum+=s.subjectC;
    	}
    	return sum;
    }

    public static double subjectAAverageByStudents(Student[] students) {
    	double avg=0;
    	int sum=0;
    	for (Student s:students)
    	{
    		sum+=s.subjectA;
    	}
    	avg=sum/3;
    	return avg;
    }
    public static double subjectBAverageByStudents(Student[] students) {
    	double avg=0;
    	int sum=0;
    	for (Student s:students)
    	{
    		sum+=s.subjectB;
    	}
    	avg=sum/3;
    	return avg;
    }
    public static double subjectCAverageByStudents(Student[] students) {
    	double avg=0;
    	int sum=0;
    	for (Student s:students)
    	{
    		sum+=s.subjectC;
    	}
    	avg=sum/3;
    	return avg;
    }

}

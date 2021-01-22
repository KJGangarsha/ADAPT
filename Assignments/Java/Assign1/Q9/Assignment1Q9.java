package q9;

public class Assignment1Q9 extends Student{
	Assignment1Q9(int x,int y,int z){
		super(x,y,z);
	}
	public static void main(String[] args) {
		Student s1=new Student(10,20,30);
		Student s2=new Student(10,20,30);
		Student s3=new Student(10,20,30);
		Student s[]= {s1,s2,s3};
		System.out.println(studentsTotalMarksInAllSubjects(s));
        System.out.println(studentsAverageMarksInAllSubjects(s));
        System.out.println(subjectATotalByStudents(s));
        System.out.println(subjectAAverageByStudents(s));
        System.out.println(subjectBTotalByStudents(s));
        System.out.println(subjectBAverageByStudents(s));
        System.out.println(subjectCTotalByStudents(s));
        System.out.println(subjectCAverageByStudents(s));
	}

}

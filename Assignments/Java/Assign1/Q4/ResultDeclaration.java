package q4;

public class ResultDeclaration {
	 public static String declareResults( double subject1Marks, double subject2Marks, double subject3Marks) {
		 double x=subject1Marks, y=subject2Marks, z=subject3Marks;
		 if(x+y+z>60) return "passed";
		 else if(x<60 || y<60 || z<60) return "promoted";
		 else return "failed";
	 }
}

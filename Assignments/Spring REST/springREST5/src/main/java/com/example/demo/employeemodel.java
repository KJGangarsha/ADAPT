package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Document(collection="Employee")
public class employeemodel {
	@Id
	public String EmployeeId;
	public String EmployeeName;
	public String EmployeeDepartment;
	public String EmployeeDesignation;
	public long EmployeeSalary;
	
	/*
	 * public employeemodel(String employeeId, String employeeName, String
	 * employeeDepartment, String employeeDesignation, long employeeSalary) {
	 * super(); EmployeeId = employeeId; EmployeeName = employeeName;
	 * EmployeeDepartment = employeeDepartment; EmployeeDesignation =
	 * employeeDesignation; EmployeeSalary = employeeSalary; }
	 */
	/*
	 * public employeemodel() { super();
	 * 
	 * }
	 */
	public String getEmployeeId() {
		return EmployeeId;
	}
	public void setEmployeeId(String employeeId) {
		EmployeeId = employeeId;
	}
	public String getEmployeeName() {
		return EmployeeName;
	}
	public void setEmployeeName(String employeeName) {
		EmployeeName = employeeName;
	}
	public String getEmployeeDepartment() {
		return EmployeeDepartment;
	}
	public void setEmployeeDepartment(String employeeDepartment) {
		EmployeeDepartment = employeeDepartment;
	}
	public String getEmployeeDesignation() {
		return EmployeeDesignation;
	}
	public void setEmployeeDesignation(String employeeDesignation) {
		EmployeeDesignation = employeeDesignation;
	}
	public long getEmployeeSalary() {
		return EmployeeSalary;
	}
	public void setEmployeeSalary(long employeeSalary) {
		EmployeeSalary = employeeSalary;
	}
	

}

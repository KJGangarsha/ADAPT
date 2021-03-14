package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	@Autowired
	private employeerepository repo;
	@GetMapping("/emp")
	public ResponseEntity<?> getAllStudents(){
		List<employeemodel> emp = repo.findAll();
		if(emp.size()>0) {
			return new ResponseEntity<List<employeemodel>>(emp, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("No student available", HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping("/employees")
	public ResponseEntity<?> createStudent(@RequestBody employeemodel emp){
		try {

			repo.save(emp);
			return new ResponseEntity<employeemodel>(emp, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getSingleStudent(@PathVariable("id")String id){
		Optional<employeemodel> empOptional =repo.findById(id);
		if(empOptional.isPresent()) {
			return new ResponseEntity<>(empOptional.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>("student not found with id"+id,HttpStatus.NOT_FOUND);
		}
		
	}
	@PutMapping("/employee/{id}")
	public ResponseEntity<?> updateById(@PathVariable("id")String id, @RequestBody employeemodel emp){
		Optional<employeemodel> empOptional = repo.findById(id);
		if(empOptional.isPresent()) {
			employeemodel empToSave = empOptional.get();
			empToSave.setEmployeeName(emp.getEmployeeName() != null ?emp.getEmployeeName():empToSave.getEmployeeName());
			empToSave.setEmployeeDepartment(emp.getEmployeeDepartment() != null ? emp.getEmployeeDepartment():empToSave.getEmployeeDepartment());
			empToSave.setEmployeeDesignation(emp.getEmployeeDesignation() != null ? emp.getEmployeeDesignation():empToSave.getEmployeeDesignation());
			empToSave.setEmployeeSalary(emp.getEmployeeSalary() != 0 ? emp.getEmployeeSalary():empToSave.getEmployeeSalary());

			repo.save(empToSave);
			return new ResponseEntity<>(empToSave, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("student not found with id"+id,HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") String id){
		try {
			repo.deleteById(id);
			return new ResponseEntity<>("Successfully deleted with id"+id, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	
}


package com.newCalculator;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculationController {
	ServiceProvider s =new ServiceProvider();
	
@RequestMapping("/add")
@ResponseBody
public int giveAdd(@RequestParam("num1") int n,@RequestParam("num2") int m) {
	int result=s.addService(n, m);
	return result;}
@RequestMapping("/subract")
@ResponseBody
public int giveSubract(@RequestParam("num1") int n,@RequestParam("num2") int m) {
	int result=s.subractionService(n, m);
	return result;}
@RequestMapping("/multiply")
@ResponseBody
public int giveMultiply(@RequestParam("num1") int n,@RequestParam("num2") int m) {
	int result=s.multiplicationService(n, m);
	return result;}
@RequestMapping("/divide")
@ResponseBody
public int giveDivision(@RequestParam("num1") int n,@RequestParam("num2") int m) {
	int result=s.divisionService(n, m);
	return result;}
}

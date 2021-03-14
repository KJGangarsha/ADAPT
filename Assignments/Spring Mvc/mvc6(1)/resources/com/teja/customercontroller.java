package com.teja;



import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.ass6.Customer;


@Controller
public class customercontroller {
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		
	}
	
	@RequestMapping(value="/register", method=RequestMethod.GET)
	public ModelAndView displayRegister()

	{
		ModelAndView mv= new ModelAndView("register.jsp");
		return mv;
	}
	
	@RequestMapping(value="/registeragain", method=RequestMethod.POST)
	public String submitForm(@Valid @ModelAttribute("customer") Customer customer, BindingResult result , Model m)
	{
		if(result.hasFieldErrors())
		{
			m.addAttribute("customer", new Customer());
			return "register.jsp";
		}
		else
		{
			return "submited.jsp";
		}
	}
}

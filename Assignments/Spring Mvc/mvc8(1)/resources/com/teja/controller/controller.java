package com.teja.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
@Controller
public class controller {
	@RequestMapping("/login")
	public String view() {
		return "web";
}
}

package com.ez.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ez.commons.web.ModelAndViewFactory;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@RequestMapping("")
	public String index() {
		return "redirect:sheet/index";
	}
}

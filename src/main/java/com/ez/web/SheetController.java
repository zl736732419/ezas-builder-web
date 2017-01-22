package com.ez.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ez.commons.web.ModelAndViewFactory;

@Controller
@RequestMapping("/sheet")
public class SheetController {

	@RequestMapping("/")
	public ModelAndView index() {
		return ModelAndViewFactory.newModelAndViewFor("make/index").build();
	}
}

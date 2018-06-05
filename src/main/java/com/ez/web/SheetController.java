package com.ez.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/sheet")
public class SheetController {
	
	/**
	 * 跳转到首页基本信息设置界面
	 *
	 * @return
	 */
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public ModelAndView index() {
		return new ModelAndView("make/index");
	}
	
	/**
	 * 题卡制作页面
	 *
	 * @return
	 */
	@RequestMapping(value = "/make", method = RequestMethod.GET)
	public ModelAndView make() {
		return new ModelAndView("make/make");
	}
	
}

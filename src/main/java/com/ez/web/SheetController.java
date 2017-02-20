package com.ez.web;

import com.ez.commons.web.ModelAndViewFactory;
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
		return ModelAndViewFactory.newModelAndViewFor("make/index").build();
	}
	
	/**
	 * 题卡制作页面
	 *
	 * @return
	 */
	@RequestMapping(value = "/make", method = RequestMethod.GET)
	public ModelAndView make() {
		return ModelAndViewFactory.newModelAndViewFor("make/make").build();
	}
	
}

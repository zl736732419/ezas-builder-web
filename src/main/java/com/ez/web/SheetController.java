package com.ez.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ez.commons.web.ModelAndViewFactory;

@Controller
@RequestMapping("/sheet")
public class SheetController {
	
	/**
	 * 跳转到首页基本信息设置界面
	 * @return
	 */
	@RequestMapping("/index")
	public ModelAndView index() {
		return ModelAndViewFactory.newModelAndViewFor("make/index").build();
	}
	
	/**
	 * 跳转到题卡头信息设置界面
	 * @return
	 */
	@RequestMapping("/headerSetting") 
	public ModelAndView headerSetting() {
		return ModelAndViewFactory.newModelAndViewFor("make/headerSetting").build(); 
	}
}

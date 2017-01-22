/**
 * requirejs 加载script入口
 * Created by zhenglian on 2017/1/18.
 */
//数组删除
Array.prototype.remove = function(obj) {
	var index = -1;
	for(var i = 0; i < this.length; i++) {
		if(this[i] == obj) {
			index = i;
			break;
		}
	}
	
	if(index != -1) {
		this.splice(index, 1);
	}
};

//数组包含
Array.prototype.contains = function(obj) {
	var index = -1;
	for(var i = 0; i < this.length; i++) {
		if(this[i] == obj) {
			index = i;
			break;
		}
	}
	
	return index > -1;
};

//数组元素去重
Array.prototype.unique = function() {
	var n = {},r=[]; //n为hash表，r为临时数组
	for(var i = 0; i < this.length; i++) //遍历当前数组
	{
		if (!n[this[i]]) //如果hash表中没有当前项
		{
			n[this[i]] = true; //存入hash表
			r.push(this[i]); //把当前数组的当前项push到临时数组里面
		}
	}
	return r;
};

/**
 * 元素id标识
 * @returns {number}
 */
function randomUUID() {
    return new Date().getTime();
}
/**
 * 判断某个对象类型是否是函数
 * @param obj
 * @returns {boolean}
 */
function isFunction(obj) {
    return typeof(obj) == 'function';
}

function getUrlFileName(){
    var pathname = window.location.pathname;
    if(pathname == '' || pathname == '/') return 'index';
    var pathArr  = pathname.split("/");
    var fileName = (pathArr[pathArr.length-1]=='') ? 'index':pathArr[pathArr.length-1].split(".")[0];
    return fileName;
}

function getBrowser(){
    var browser = {};
    var ua = navigator.userAgent.toLowerCase();

    var s;
    //浏览器
    (s = ua.match(/msie ([\d.]+)/)) ? browser.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? browser.opera = s[1] :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;

    //移动设备
    (s = ua.match(/ipad/i)) ? browser.ipad = true:
        (s = ua.match(/iphone os/i)) ? browser.iphone = true:
            (s = ua.match(/midp/i)) ? browser.midp = strue:
                (s = ua.match(/android/i)) ? browser.android = true:
                    (s = ua.match(/windows ce/i)) ? browser.windowsCE = true:
                        (s = ua.match(/windows mobile/i)) ? browser.windowsMobile = true:0;

    browser.isMobile = function(){
        return browser.ipad||browser.iphone||browser.midp||browser.android||browser.windowsCE||browser.windowsMobile;
    };
    
    return browser;
}

window['Joy'] = Joy = {
    version : '1.0'
};

if(!window.app){
    //如果没有设置 window.app
    var includeEntry = document.body.getAttribute('entry');
    if(includeEntry != null){
        //如果body内有设置entry属性
        var includeRootPath = document.body.getAttribute('rootPath');
        if(includeRootPath != null) {
            window.app = {rootPath:includeRootPath,entry:includeEntry};
        } else {
            window.app = {rootPath:"",entry:includeEntry};
        }
    } else {
        //如果两个都没有设置则自动加载与网址后缀名相同的js
        window.app = {rootPath:"",entry:getUrlFileName(),jsMethod:'render'};
    }
}

var browser = getBrowser();
var jqueryPath = "lib/jquery/jquery.min"; //2.1.4

if(browser.ie && browser.ie * 1 < 10){
    jqueryPath = "lib/jquery/jquery-1.11.3.min"; //1.11.3
}

//IEMobile10 
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.querySelector('head').appendChild(msViewportStyle);
}

//IE禁止响应式布局
if(browser.ie && !browser.isMobile()){
    var metas = document.getElementsByTagName('meta');
    for(var i=0;i<metas.length;i++){
        var name = metas[i].attributes["name"]
        if(name && name.value === "viewport"){
            metas[i].parentNode.removeChild(metas[i]);
            break;
        }
    }
}

var config = {
    contextPath: window.app.rootPath,
    baseUrl: window.app.rootPath + 'static/scripts/',
    optimize: 'none',
    paths: {
        jquery: jqueryPath,
        bootstrap : "lib/bootstrap/bootstrap.min",
        select : "lib/bootstrap/plugins/select/bootstrap-select.min",
        datapicker : "lib/bootstrap/plugins/bootstrap-datetimepicker",
        fwBootstrap : "lib/bootstrap/plugins/formValidation/framework/bootstrap",
        formValidation : "lib/bootstrap/plugins/formValidation/formValidation",
        icheck : "lib/bootstrap/plugins/iCheck/icheck.min",
        bootstrapSlider : "lib/bootstrap/plugins/bootstrap-slider/bootstrap.slider.v4",
        lodash:"lib/lodash/lodash.min",
        nicescroll:"lib/jquery/nicescroll/jquery.nicescroll",
        cookie : "lib/jquery/cookie/jquery.cookie",
        //config
        settingsA3: 'app/config/defaultSetting-a3',
        settingsA4: 'app/config/defaultSetting-a4',
        settings8K: 'app/config/defaultSetting-8k',
        settings16K: 'app/config/defaultSetting-16k',
        settings: 'app/config/defaultSetting',
        cacheConfig: 'app/config/cacheConfig',
        //utils
        logger:"utils/logger",
        ajaxwrapper: 'utils/ajaxwrapper',
        download: 'utils/download',
        eventBuilder: 'utils/eventBuilder',
        formToJson:"utils/formToJson",
        uiBuilder: 'utils/uiBuilder',
        uiwrapper: 'utils/uiwrapper',
        bubbleTip: 'utils/bubbleTip',
        
        
        
    },
    shim: {
        'bootstrap': {deps:['jquery']},
        'select': {deps:['bootstrap']},
        'icheck': {deps:['bootstrap']},
        'formValidation': {deps:['bootstrap']},
        'fwBootstrap': {deps:['formValidation']},
        'nicescroll': {deps:['jquery']},
        'datapicker': {deps:['jquery','bootstrap']},
        'logger': {deps: ['jquery']},
        'formToJosn': {deps:['jquery']}
    }
};

requirejs.config(config);

require(['jquery'], function($) {
    
    var p = ['app/' + window.app.entryjs];
    require(p, function(module) {
        //Android4.1 系统默认的浏览器将不会显示侧边栏控件
        if(browser.android){
            $('select.form-control').removeClass('form-control').css('width', '100%')
        }

        if(module){ //加载js自定义load方法
            if(window.app.jsMethod && window.app.jsMethod != ''){
                module[window.app.jsMethod]();
            }else{
                module.render();
            }
        }
    });
    
});


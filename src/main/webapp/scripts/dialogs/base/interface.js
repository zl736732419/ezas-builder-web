/**
 * 鸭式变形法定义接口
 * 这里定义一个接口的描述，相当于java中的interface定义
 * Created by zhenglian on 2017/2/16.
 */
(function() {
    'use strict';
    
    define(['jquery', 'logger', 'uiwrapper'], function($, logger, ui) {
        function Interface() {
            var self = this;
            self.name = null;
            self.methods = [];

            /**
             * 用于创建一个接口描述
             * @param name
             * @param methods
             */
            self.init = function(name, methods) {
                if(arguments.length < 2) {
                    ui.toastr.error('定义接口至少需要两个参数!');
                }
                
                self.name = name;
                var method = null;
                for(var i = 1; i < arguments.length; i++) {
                    method = arguments[i];
                    if(typeof(method) != 'string') {
                        ui.toastr.error('传入的接口函数方法名必须是string类型!');
                    }
                    self.methods.push(method);
                }
            };

            /**
             * 检查实例是否实现了指定的方法
             * @param instance
             */
            self.checkImpl = function(instance) {
                if(arguments.length < 2) {
                    ui.toastr.error('检查接口实现必须要求2个参数!');
                }
                
                var interf = null;
                for(var i = 1; i < arguments.length; i++) {
                    interf = arguments[i];
                    
                    if(interf.constructor != Interface) {
                        ui.toastr.error('目标对象所检查的实例必须是Interface');
                    }
                    
                    var methods = interf.methods;
                    var method = null;
                    for(var i = 0; i < methods.length; i++) {
                        method = methods[i];
                        if(!instance[method] || typeof(instance[method]) != 'function') {
                            ui.toastr.error('实例' + instance.toString() + '必须实现接口' + interf + '中的方法' + method + '!');
                        }
                    }
                }
            };
        }
        
        return new Interface();
    });
})();

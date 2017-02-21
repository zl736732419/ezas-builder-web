/**
 * jquery事件绑定器
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(['jquery', 'logger'], function($, logger) {
        $.extend({
            /**
             * 绑定事件
             * @param ui 事件源对象
             * @param event 事件名称
             * @param callback 回调函数
             */
            bindEvent: function(ui, event, callback) {
                var target = $(ui)[0].tagName + '[class=' + $(ui).attr('class') + ']';
                logger.log('为'+target+'添加事件'+event+'...');
                $(ui).off(event).on(event, function(e) {
                    return callback && callback(e, this);
                });
            },
            /**
             * 自定义js继承
             * @param sub
             * @param sup
             */
            customExtend: function(sub, sup) {
                var F = function() {},
                    subclassProto,
                    superclassProto = sup.prototype;
                
                F.prototype = superclassProto; //做中转的位置，将父类的原型转给了这个空函数F
                subclassProto = sub.prototype = new F(); //原型继承
                subclassProto.constructor = sub; //还原构造函数
                sub.superclass = superclassProto;
                if(superclassProto.constructor === Object.prototype.constructor) {
                    superclassProto.constructor = sup;
                }
            }
        });
    });
})();

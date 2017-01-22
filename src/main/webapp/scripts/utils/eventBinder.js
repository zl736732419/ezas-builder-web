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
                var tagName = $(ui)[0].tagName;
                logger.log('为%s添加事件%s...', tagName, event);
                $(ui).off(event).on(event, function(e) {
                    return callback && callback(e, this);
                })
            }
        });
    });
})();

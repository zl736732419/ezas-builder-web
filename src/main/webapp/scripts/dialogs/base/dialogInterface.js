/**
 * 对话框接口，定义一个对话框需要实现的方法
 * Created by zhenglian on 2017/2/16.
 */
(function() {
    'use strict';
    
    define(['jquery', 'logger', './interface'], function($, logger, dialogInterface) {
        dialogInterface.init('dialogInterface', ['renderDialog', 'initCustomEvent']);
        return dialogInterface;
    });
    
})();

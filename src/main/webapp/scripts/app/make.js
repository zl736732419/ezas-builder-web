/**
 * 题卡制作界面处理逻辑
 * Created by zhenglian on 2017/2/15.
 */
(function() {
    'use strict';
    
    define(['jquery', 'logger', 'uiwrapper', './operationBar', './operationTip', './userGuide'], 
        function($, logger, ui, operationBar, operationTip, userGuide) {
    
        return {
            render: function() {
                logger.log('render sheet makeing page ');
                //TODO render;
                operationBar.loadBar();
                operationTip.loadTip();
                userGuide.loadTip();
            }
        };
    });
    
})();



/**
 * 考生基本信息设置
 * Created by zhenglian on 2017/2/9.
 */
(function() {
    "use strict";
    
    define(['jquery', 'logger', 'uiwrapper', 'settings', 'defaultSetting'], 
        function($, logger, ui, settings, defaultSetting) {
        
        // 重新设置按钮显示文本
        function resetBtns() {
            logger.log('reset btns...');
            $('#savebtn').attr('id', 'prevbtn').text('上一步');
            $('#cancelbtn').attr('id', 'nextbtn').text('下一步');
        }
        
        //添加表单验证
        function initValidation() {
            logger.log('init validation...');
            //TODO
        }

            //加载点击上一步点击事件
            function initPrevStep() {
                $('#prevbtn').off('click').on('click', function() {
                    //TODO save config data and jump to header setting page !

                });
            }
        
        //加载点击下一步点击事件
        function initNextStep() {
            $('#nextbtn').off('click').on('click', function() {
                 //TODO save config data and jump to header setting page !
                
            });
        }

        // 初始化事件
        function initEvent() {
            logger.log('init event...');
            initValidation();
            initPrevStep();
            initNextStep();
        }
        
        return {
            render: function() {
                logger.log('render');
                ui.pretty($('body'));
                resetBtns();
                initEvent();
            }
        };
        
    });
})();
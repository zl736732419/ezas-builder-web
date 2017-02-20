/**
 * 操作提示工具
 * Created by zhenglian on 2017/2/15.
 */
(function() {
    'use strict';
    
    define(['jquery', 'logger', 'uiwrapper', 'ajaxwrapper'], function($, logger, ui, ajax) {
        
        var $ui = $('.operation-tip');
        var timer = null;
        
        function renderBubble() {
            var $svg = $ui.find('svg');
            var url = $svg.data('src');
            if(url) {
                ajax.async.getXml(url, function(svgDocument) {
                    $(svgDocument.documentElement).attr('data-src', url);
                    $svg.after(svgDocument.documentElement);
                    $svg.remove();
                }, function() {
                    ui.toastr.error('获取气泡样式失败!');
                });
            }
        }

        /**
         * 展开提示面板
         */
        function showTip() {
            showAndHideIcon('.tip-answer', '.tip-question');
            $ui.find('.tip-container').css({
                display: 'block'
            });

            timer = setTimeout(function(){
                $ui.find('.tip-container').addClass('active');
            }, 50);
        }

        /**
         * 隐藏提示面板
         */
        function hideTip() {
            showAndHideIcon('.tip-question', '.tip-answer');
            if(timer) {
                clearTimeout(timer);
            }
            $ui.find('.tip-container').removeClass('active');
            var cancelTimer = setTimeout(function(){
                $ui.find('.tip-container').css({
                    display: 'none'
                });
                clearTimeout(cancelTimer);
            }, 400);

        }
        
        /**
         * 隐藏或显示对应的图标
         * @param showIconCls
         * @param hideIconCls
         */
        function showAndHideIcon(showIconCls, hideIconCls) {
            $(showIconCls).css({
                display: 'inline-block'
            });

            $(hideIconCls).css({
                display: 'none'
            });
        }
        
        // 处理关闭操作提示事件
        function handleCloseTipEvent() {
            $(document).on('click', function(event) {
                //如果点击的不是弹出层的元素就隐藏
                var target = event.target;
                var localName = target.localName;

                if(localName != 'ellipse'
                    && $(target).parents('.tip-body').length == 0) {
                    hideTip();
                }
            });
        }
        
        function handleClickIcon() {
            $ui.find('div.tip-icon').off('click').on('click', function() {
                var clazz = $(this).attr('class');
                var questionCls = '.tip-question'.substring(1);
                if(clazz.indexOf(questionCls) != -1) { //展开提示信息
                    showTip();
                }

                return false;
            });
        }
        
        function initEvent() {
            handleCloseTipEvent();
            handleClickIcon();
        }
        
        return {
            loadTip: function() {
                logger.log('render operation tip');
                ui.pretty($('.tip-panel'));
                renderBubble();
                initEvent();
            }
        }
    });
})();

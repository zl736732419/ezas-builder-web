/**
 * 左下角工具提示栏
 * Created by zhenglian on 2017/1/22.
 */
(function () {
    'use strict';

    define(['jquery', 'logger', './operationTip', '../dialogs/operationDialog', 'custom', 'cookie'], 
        function ($, logger, operationTip, operationDialog) {

        var $ui = $('.operation-container');
        var $bar = $('.operation-bar');
        var $icon = $('.collapsible-icon');

        function renderCollapsiblePanel() {
            var command = $.cookie('operation-panel-status');
            if (typeof(command) === 'undefined') {
                command = 'open';
            }

            toggleOperationPanel(command);
        }

        /**
         * 初始化工具栏状态
         */
        function initCollapsiblePanel() {
            $ui.find('.collapsible-panel').off('click').on('click', function () {
                var opacity = $bar.css('opacity');
                if (opacity == 1) {
                    toggleOperationPanel('hide');
                } else {
                    toggleOperationPanel('open');
                }
            });
        }

        function toggleOperationPanel(command) {
            var height, opacity, removeIcon, addIcon, title;
            if (command === 'hide') {
                height = $('#headerBar').outerHeight() - $bar.outerHeight();
                opacity = 0;
                removeIcon = 'fa-angle-double-up';
                addIcon = 'fa-angle-double-down';
                title = '展开';
            } else {
                height = $('#headerBar').outerHeight();
                opacity = 1;
                removeIcon = 'fa-angle-double-down';
                addIcon = 'fa-angle-double-up';
                title = '折叠';
            }

            $bar.css({opacity: opacity});
            $ui.css({top: height + 'px'});
            $icon.removeClass(removeIcon).addClass(addIcon).attr('title', title);
            $.cookie('operation-panel-status', command, {expire: 1}); //保存状态一天
        }

        /**
         * 加载操作提示
         */
        function loadOperationTip() {
            operationTip.loadTip();
        }

        /**
         * 加载页面参数配置
         */
        function loadBaseConfig() {
            var ui = $ui.find('.base-config');
            $.bindEvent(ui, 'click', function () {
                logger.log('operation config setting');
                operationDialog.loadDialog();
            });
        }

        function OperationBar() {
            var self = this;

            /**
             * 加载左侧工具栏
             */
            self.loadBar = function() {
                loadOperationTip();
                loadBaseConfig();
                initCollapsiblePanel();
                renderCollapsiblePanel();
            };
        }

        return new OperationBar();
    });
})();

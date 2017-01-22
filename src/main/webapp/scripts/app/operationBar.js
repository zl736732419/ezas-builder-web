/**
 * 左下角工具提示栏
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(['jquery', 'app/operationTip', 'dialogs/operationDialog'], function($) {
        return {

            settings: {
                ui: '.operation-container',
                bar: '.operation-bar',
                icon: '.collapsible-icon',
                items: {
                    baseConfigItem: '.base-config' //参数配置
                },
                btns: {
                    showHideBtn: '.collapsible-panel'
                }
            },
            /**
             * 加载左侧工具栏
             */
            loadBar: function() {
                this.loadOperationTip();
                this.loadBaseConfig();
                this.initCollapsiblePanel();
                this.renderCollapsiblePanel();
            },

            renderCollapsiblePanel: function() {
                var command = $.cookie('operation-panel-status');
                if(typeof(command) === 'undefined') {
                    command = 'open';
                }

                this.toggleOperationPanel(command);
            },
            /**
             * 初始化工具栏状态
             */
            initCollapsiblePanel: function() {
                var dialog = this;
                $(this.settings.ui).find(this.settings.btns.showHideBtn).off('click').on('click', function() {
                    var $bar = $(dialog.settings.bar);
                    var opacity = $bar.css('opacity');
                    if(opacity == 1) {
                        dialog.toggleOperationPanel('hide');
                    }else {
                        dialog.toggleOperationPanel('open');
                    }
                });
            },
            toggleOperationPanel: function(command) {
                var dialog = this;
                var $bar = $(dialog.settings.bar);
                var $ui = $(dialog.settings.ui);
                var $icon = $(dialog.settings.icon);
                var height, opacity, removeIcon, addIcon, title;


                if(command === 'hide') {
                    height = -$bar.outerHeight();
                    opacity = 0;
                    removeIcon = 'fa-angle-double-down';
                    addIcon = 'fa-angle-double-up';
                    title = '展开';
                }else {
                    height = 0;
                    opacity = 1;
                    removeIcon = 'fa-angle-double-up';
                    addIcon = 'fa-angle-double-down';
                    title = '折叠';
                }

                $bar.css({opacity: opacity});
                $ui.css({bottom: height+'px'});
                $icon.removeClass(removeIcon).addClass(addIcon).attr('title', title);
                $.cookie('operation-panel-status', command, {expire: 1}); //保存状态一天
            },
            /**
             * 加载操作提示
             */
            loadOperationTip: function() {
                operationTip.loadTip();
            },
            /**
             * 加载页面参数配置
             */
            loadBaseConfig: function() {
                var ui = $(this.settings.ui).find(this.settings.items.baseConfigItem);
                $.bindEvent(ui, 'click', function() {
                    operationDialog.loadDialog();
                });
            }

        };
    });
})();

/**
 * 左上角工具栏参数配置dialog
 * Created by zhenglian on 2017/2/16.
 */
(function () {
    'use strict';

    define(['jquery', 'logger', 'uiwrapper', 'settings', 'custom', 'lcSwitch', './base/baseDialog'],
        function ($, logger, ui, settings) {
            var dialog = '#operationDialog';
            var form = '#operationForm';

            var config = {
                ui: dialog,
                form: form,
                btns: { //按钮class
                    close: '#operationDialog .btn-close'
                }
            };
            
            function OperationDialog() {}
            $.customExtend(OperationDialog, BaseDialog); //继承BaseDialog
            
            OperationDialog.prototype.renderDialog = function() {
                renderKeyboardStatus();
                renderUserGuideStatus();
            };
            
            OperationDialog.prototype.initCustomEvent = function() {
                initKeyBoardSwitchEvent();
                initUserGuideSwitchEvent();
            };
            
            var operationDialog = new OperationDialog();
            operationDialog.config(config);

            /**
             * 用户手册
             */
            function initUserGuideSwitchEvent() {
                var $userGuideEnable = $(dialog).find('#userGuideEnable');
                $.bindEvent($userGuideEnable, 'lcs-statuschange', function(e) {
                    var status = $($userGuideEnable).is(':checked');
                    settings.operation.userGuide = status;
                    $.cookie('operation-user-guide-enable', status, {expire: 1}); //一天有效
                    if(status) {
                        ui.toastr.info('用户手册已启用，请刷新浏览器');
                    }else {
                        ui.toastr.info('用户手册已关闭');
                    }
                });
            }
            
            /**
             * 快捷键
             */
            function initKeyBoardSwitchEvent() {
                var $keyboardEnable = $(dialog).find('#keyboardEnable');
                $.bindEvent($keyboardEnable, 'lcs-statuschange', function(e) {
                    var status = $($keyboardEnable).is(':checked');
                    settings.operation.keyboard = status;

                    if(status) {
                        var message = '快捷键已开启<br/>' +
                            'ctrl+S 保存题卡<br/>' +
                            'ctrl+P 预览题卡<br/>' +
                            'ctrl+L 跳转到题卡列表页面<br/>' +
                            'Delete键 删除选中元素<br/>';
                        ui.toastr.info(message);
                    }else {
                        ui.toastr.info('快捷键已关闭');
                    }
                });
            }

            /**
             * 初始化用户手册状态
             */
            function renderUserGuideStatus() {
                var $guideEnable = $(dialog).find('#userGuideEnable');
                var status = settings.operation.userGuide;
                if(status) {
                    $guideEnable.lcs_on();
                }else {
                    $guideEnable.lcs_off();
                }
            }
            
            /**
             * 初始化快捷键状态
             */
            function renderKeyboardStatus() {
                var status = settings.operation.keyboard;
                var $keyboard = $(dialog).find('#keyboardEnable');
                if (status) {
                    $keyboard.lcs_on();
                } else {
                    $keyboard.lcs_off();
                }
            }

            return operationDialog;
        });

})();
/**
 * dialog抽象对象，所有dialog实现都必须实现该抽象dialog
 * 使用方式：
 * 1. 引入baseDialog
 * 2. 定义dialog具体实例
 *  function OperationDialog() {
    }

    OperationDialog.prototype = new BaseDialog();

    var operationDialog = new OperationDialog();
    Object.defineProperty(operationDialog, 'constructor', {
        enumerable : false,
        value : OperationDialog
    });

    operationDialog.config(config);
    operationDialog.renderDialog = function() {
    };

    operationDialog.initCustomEvent = function() {
    };
 *  具体参考OperationDialog.js
 *  调用方式：引入具体实例dialog 并调用dialogInstance.loadDialog();
 *
 *
 * dialog.config(config).loadDialog();
 * Created by zhenglian on 2017/2/16.
 */
(function () {
    'use strict';

    define(['jquery', 'logger', 'uiwrapper'],
        function ($, logger, ui) {
            function BaseDialog() {
                var self = this;
                self.settings = {
                    ui: null,
                    form: null,
                    btns: { //按钮class
                        ok: null,
                        close: null
                    },
                    callback: { //回调事件
                        hideFn: null, // dialog隐藏时执行
                        shownFn: null, // dialog显示后执行
                        closeFn: null, // 点击关闭按钮回调事件
                        okFn: null // 点击确定按钮回调事件
                    }
                };
            }

            /**
             * 传递dialog参数
             * @param config
             */
            BaseDialog.prototype.config = function (config) {
                if (null === config || undefined === config) {
                    ui.toastr.error('dialog参数不能为空!');
                }

                $.extend(true, this.settings, config);
                return this;
            };

            /**
             * 加载dialog, 入口函数
             */
            BaseDialog.prototype.loadDialog = function () {
                this.renderDialog();
                this.initEvent();
                this.show();
            };

            /**
             * 初始化dialog中存在的事件
             */
            BaseDialog.prototype.initEvent = function () {
                this.initDialogEvent();
                this.initCustomEvent();
            };

            /**
             * dialog事件
             */
            BaseDialog.prototype.initDialogEvent = function () {
                this.initOkEvent();
                this.initCloseEvent();
                this.initShownEvent();
                this.initHideEvent();
            };

            /**
             * 点击确定按钮
             */
            BaseDialog.prototype.initOkEvent = function () {
                var settings = this.settings;
                var okBtn = settings.btns.ok;
                var okFn = settings.callback.okFn;
                if (null === okBtn) {
                    return;
                }

                $(settings.btns.ok).off('click').on('click', function () {
                    logger.log('dialog ok btn clicked');
                    var status = true;
                    if (null != okFn) {
                        status = okFn.call();
                    }

                    if (status) {
                        this.hide();
                    }
                });
            };

            /**
             * 点击关闭按钮
             */
            BaseDialog.prototype.initCloseEvent = function () {
                var self = this;
                var settings = this.settings;
                var closeBtn = settings.btns.close;
                var closeFn = settings.callback.closeFn;
                if (null === closeBtn) {
                    return;
                }

                $(settings.btns.close).off('click').on('click', function () {
                    logger.log('dialog ok btn clicked');
                    var status = true;
                    if (null != closeFn) {
                        status = closeFn.call();
                    }

                    if (status) {
                        self.hide();
                    }
                });
            };

            /**
             * dialog显示后触发
             */
            BaseDialog.prototype.initShownEvent = function () {
                var self = this;
                var settings = this.settings;
                var callback = settings.callback;
                $(settings.ui).off('shown.bs.modal').on('shown.bs.modal', function () {
                    callback.shownFn && callback.shownFn.call();
                });
            };

            BaseDialog.prototype.initHideEvent = function () {
                var settings = this.settings;
                var callback = settings.callback;
                $(settings.ui).off('hide.bs.modal').on('hide.bs.modal', function () {
                    var $form = $(settings.ui).find(settings.form);
                    $form[0].reset();
                    ui.formValidator.resetForm($form);
                    callback.hideFn && callback.hideFn.call();
                });
            };

            /**
             * 显示dialog
             */
            BaseDialog.prototype.show = function () {
                $(this.settings.ui).modal('show');
            };

            /**
             * 隐藏dialog
             */
            BaseDialog.prototype.hide = function () {
                $(this.settings.ui).modal('hide');
            };

            /**
             * 渲染dialog内容
             */
            BaseDialog.prototype.renderDialog = function () {
                //TODO 需要重写
            };

            /**
             * 用户自定义事件
             */
            BaseDialog.prototype.initCustomEvent = function () {
                //TODO 需要重写
            };
            
            window.BaseDialog = BaseDialog;
        });
})();

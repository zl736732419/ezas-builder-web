/**
 * boostrap自定义弹出框
 * 允许在弹出框中添加html、表单处理逻辑
 * 使用方式 ，引入popover.custom.css/popover.custom.js
 * 调用popover.config(_opts).init();
 *
 * Created by dell on 2017/2/14.
 */
(function () {
    'use strict';

    define(['jquery', 'logger', 'uiwrapper'], function ($, logger, ui) {

        //popover内容结构
        var pop_content = '<div id="pop_content" class="popover fade right pop_custom">\
                            <div class="arrow"></div>\
                            <h2 class="popover-title">\
                                ${title}\
                            </h2>\
                            <div class="popover-content">\
                                ${content}\
                                <br />\
                                <div class="modal-footer">\
                                    <button type="button" class="btn btn-info btn-ok">确定</button>\
                                    <button type="button" class="btn btn-default btn-close">关闭</button>\
                                </div>\
                            </div>\
                          </div>';

        var popover = {
            tipObj: null,
            settings: {
                pop_btn: null, // jquery 对应的id/class标识如#popbtn
                title: '',
                content: '',
                inputs: [],
                selects: [],
                onShownEvent: null, // popover渲染出来后执行的回调函数
                onOkEvent: null, // 点击确定按钮执行的回调函数,返回true需要隐藏popover, 返回false表示出错，不隐藏popover
                onHiddenEvent: null, // popover关闭之后执行的回调函数
            },
            /**
             * 设置初始环境,格式与settings相同
             *
             * title 标题内容，可以为html格式字符串
             * content 弹出框正文内容，可以为html格式字符串
             * $pop_btn 用于触发popover的按钮 必须
             * inputs 表单内容中的input
             * selects 表单内容中的select input/select两种方式的处理不一样，需要单独指定
             * onShownEvent: null, // popover渲染出来后执行的回调函数
             * onOkEvent: null, // 点击确定按钮执行的回调函数
             * onHiddenEvent: null, // popover关闭之后执行的回调函数
             * @param _opts
             */
            config: function (_opts) {
                var settings = this.settings;
                if (null === _opts || undefined === _opts) {
                    throw new Error('popover 初始化参数错误, 参数不能为空!');
                }

                $.extend(true, settings, _opts);

                return this;
            },
            /**
             * 初始化popover
             */
            init: function () {
                var settings = this.settings;

                //判断是否存在
                this.destroy();

                var content_dom = pop_content.replace('${title}', settings.title).replace('${content}', settings.content);
                $('body').append($(content_dom));

                var titleHtml = $(".pop_custom > h2.popover-title").html();
                var contentHtml = $(".pop_custom > div.popover-content").html();

                var $pop_btn = this.getPopBtn();
                $pop_btn.popover({
                    html: true,
                    animation: true,
                    container: 'body',
                    trigger: 'manual',
                    title: titleHtml,
                    content: contentHtml,
                    placement: 'right',
                    viewport: 'body'
                });

                this.tipObj = this.getTipObj();

                this.initEvents();
            },
            initEvents: function () {
                this.initPopBtnClick();
                this.initInputEvents();
                this.initSelectEvents();
                this.initCloseEvent();
                this.initOkEvent();
                this.initShownEvent();
                this.initHiddenEvent();
            },
            initPopBtnClick: function () {
                var $pop_btn = this.getPopBtn();
                $pop_btn.on('click', function () {
                    $(this).popover('show');
                });
            },
            initShownEvent: function () {
                var popover = this;
                var $pop_btn = this.getPopBtn();
                $pop_btn.off('shown.bs.popover').on('shown.bs.popover', function () {
                    logger.log('popover shown');
                    var onShownEvent = popover.settings.onShownEvent;
                    onShownEvent && onShownEvent();
                });
            },
            initHiddenEvent: function () {
                var popover = this;
                var $pop_btn = this.getPopBtn();
                $pop_btn.off('hidden.bs.popover').on('hidden.bs.popover', function () {
                    logger.log('popover hidden');
                    var onHiddenEvent = popover.settings.onHiddenEvent;
                    onHiddenEvent && onHiddenEvent();

                    var tipObj = popover.getTipObj();
                    var $form = $(tipObj).find('#updateAttentionNotePopForm');
                    ui.formValidator.resetForm($form);
                    
                });
            },
            getPopBtn: function () {
                return $(this.settings.pop_btn);
            },
            initOkEvent: function () {
                var popover = this;
                var onOkEvent = this.settings.onOkEvent;
                var $okBtn = $('.pop_custom').find('.btn-ok');

                popover.bindContentEvent($okBtn, 'click', function (evt) {
                    logger.log('popover ok');
                    if (onOkEvent) {
                        if (onOkEvent()) {
                            popover.hide();
                        }
                    } else {
                        popover.hide();
                    }
                });
            },
            initCloseEvent: function () {
                var popover = this;
                var $closeBtn = $('.pop_custom').find('.btn-close');

                popover.bindContentEvent($closeBtn, 'click', function (evt) {
                    logger.log('popover hide');
                    popover.hide();
                });
            },
            initSelectEvents: function () {
                var popover = this;
                var selects = this.settings.selects;
                //为select添加事件
                $.each(selects, function (n, v) {
                    popover.bindContentEvent(v, 'change', function (evt) {
                        var value = evt.target.value;
                        evt.currentTarget.value = value;
                        $(v).val(value);
                    });
                });
            },
            initInputEvents: function () {
                var popover = this;
                var inputs = this.settings.inputs;
                $.each(inputs, function (n, v) {
                    popover.bindContentEvent(v, 'input', function (evt) {
                        var value = evt.target.value;
                        evt.currentTarget.value = value;
                        $(v).val(value);
                    });

                });
            },
            /**
             * 绑定在content中的事件
             * popover中的html元素要绑定事件需要经过popover的tipObj
             * @param target 事件元素
             * @param event 要绑定的事件名称
             * callback 触发的回调函数
             */
            bindContentEvent: function (target, event, callback) {
                var tipObj = this.tipObj;
                tipObj.on(event, target, function (evt) {
                    var tagName = $(target)[0].tagName;
                    var targetCls = $(target).attr('class');
                    var evtTagName = evt.target.tagName;
                    var evtCls = $(evt.target).attr('class'); //通过这两个特征来标识当前的target与触发事件的target是否是同一个元素
                    
                    if (tagName != evtTagName || targetCls != evtCls) {
                        return;
                    }

                    callback(evt);
                });
            },
            /**
             * 判断是否存在
             */
            exist: function () {
                var $pop = $('body').find('.pop_custom');
                return $pop.length > 0;
            },
            hide: function () {
                var $pop_btn = this.getPopBtn();
                $pop_btn.popover('hide');
            },
            /**
             * 销毁popover
             */
            destroy: function () {
                if (this.exist()) {
                    var $pop_btn = this.getPopBtn();
                    $pop_btn.popover('destroy');
                    var $pop = $('body').find('.pop_custom');
                    $pop.remove();
                }
            },
            getTipObj: function() {
                var $pop_btn = this.getPopBtn();
                var popObj = $pop_btn.data('bs.popover');//获取popover对象
                var tipObj = popObj.tip();//获取提示对象
                return tipObj;
            }
        };

        return popover;
    })
})();
/**
 * 元素组件详解
 * 用于在系统初始化时给用户引导
 * Created by zhenglian on 2017/2/20.
 */
(function () {
    'use strict';

    define(['jquery', 'logger', 'uiwrapper', 'settings', '../utils/bubbleTip', 'cookie'],
        function ($, logger, ui, settings, bubbleTip) {
            var masterDiv = null; //遮罩层
            var tips = []; //需要显示的tip列表
            var index = 0; //当前显示的tip索引
            var canvas = null; //遮罩层画布
            var preArea = null; //前一个打开遮罩的区域
            var closeBtn = '.closeBtn'; //关闭
            var nextTipBtn = '.nextTipBtn'; //下一步
            var tipPng = window.app.rootPath + 'static/css/images/header_tips.png';

            function initTopLeftTip($headerItem, html) {
                var left = $headerItem[0].offsetLeft;
                var width = $headerItem.outerWidth();
                var height = $headerItem.outerHeight();
                var x = left + width / 2;
                var y = height + 10;
                var tip = {
                    position: {
                        x: x,
                        y: y
                    },
                    $headerItem: $headerItem,
                    html: html
                };

                tips.push(tip);
            }

            function initTopRightTip($headerItem, html) {
                var left = $headerItem[0].offsetLeft;
                var width = $headerItem.outerWidth();
                var height = $headerItem.outerHeight();
                var x = left + width / 2 - bubbleTip.settings.size.width;
                var y = height + 10;
                var tip = {
                    position: {
                        x: x,
                        y: y
                    },
                    $headerItem: $headerItem,
                    html: html
                };

                tips.push(tip);
            }
            
            // 初始化题卡手册状态，根据operation-user-guide-enable判断是否显示手册
            function initUserGuideStatus() {
                var userGuideEnable = $.cookie('operation-user-guide-enable');
                if (typeof(userGuideEnable) === 'undefined') {
                    $.cookie('operation-user-guide-enable', $.operation.userGuide, {expire: 1});
                } else {
                    if ("true" === (userGuideEnable + "")) {
                        userGuideEnable = true;
                    } else {
                        userGuideEnable = false;
                    }

                    settings.operation.userGuide = userGuideEnable;
                }
            }

            function initChoiceQuestionTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.choice-item-btn');
                var html =
                    "<h3><span class='text text-primary'>选择题</span>用于创建选择题组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li><span class='text'>支持选择题水平和垂直排列。</span></li>\
                        <li><span class='text'>预定选项为最小2个，最大7个选项。如果预选选项不满足要求，可以对选项进行自定义。</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopLeftTip($headerItem, html);
            }

            function initFillItemTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.fill-item-btn');
                var html =
                    "<h3><span class='text text-primary'>填空题</span>用于创建规则填空题组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li><span class='text'>用于对常规填空题进行设定，(对于非常规题目请使用主观题结合划线与文本工具进行创建)。</span></li>\
                        <li><span class='text'>支持多小题的填空题目，题卡将会为该题目对应生成多个空。</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopLeftTip($headerItem, html);
            }

            function initZgItemTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.zg-item-btn');
                var html =
                    "<h3><span class='text text-primary'>主观题</span>用于创建主观题组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li><span class='text'>主观题组件结合小工具可以支持复杂的题目。</span></li>\
                        <li><span class='text text-info'>推荐使用该组件结合划线、文本、图片、序号等工具生成题卡。</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopLeftTip($headerItem, html);
            }
            
            function initChooseTodoTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.choosetodo-item-btn');
                var html =
                    "<h3><span class='text text-primary'>选做题</span>用于创建选做题组件</h3>\
                    <ul class='element-tip-panel'>\
                    <li><span class='text'>支持自定义选做题提示信息，满足各种提示要求。</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopRightTip($headerItem, html);
            }
            
            function initCompositionTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.composition-item-btn');
                var html =
                    "<h3><span class='text text-primary'>中文作文</span>用于创建中文作文组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li><span class='text'>中文作文采用网格绘制。</span></li>\
                        <li><span class='text'>可以使用该组件创建小作文，支持更多题型设置。</span></li>\
                        <li><span class='text'>支持对作文提示字数的自定义。</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopRightTip($headerItem, html);
            }
            
            function initCompositionENTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.composition-item-btn');
                var html =
                    "<h3><span class='text text-primary'>英文作文</span>用于创建英文作文组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li><span class='text'>英文作文采用线段绘制，用于英语科目作文。</span></li>\
                        <li><span class='text'>支持对作文划线数进行合理设置。</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopRightTip($headerItem, html);
            }
            
            function initForbiddenTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.forbidden-item-btn');
                var html =
                    "<h3><span class='text text-primary'>禁答区</span>用于创建禁答区组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li>禁答区设计了两种样式，纯文本样式、图形样式。</li>\
                        <li>禁答区为多余题卡空白设计的组件、提醒考生禁止在该区域中进行答题。</li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopRightTip($headerItem, html);
            }
            
            function initMistakeCorrectTip() {
                var $headerPanel = $('#headerBar');
                var $headerItem = $headerPanel.find('.mistake-item-btn');
                var html =
                    "<h3><span class='text text-primary'>改错题</span>用于创建改错题组件</h3>\
                    <ul class='element-tip-panel'>\
                        <li>该控件为纯编辑控件、需要用户在该控件上或者windows提供的文本编辑器中进行内容编辑和样式调整。</li>\
                        <li>该控件试用于需要在题卡上输入文本的科目(如英语改错题、历史地理解答题等)。</li>\
                        <li><span class='text text-danger'>请不要在word、写字板等有样式的编辑工具中进行排版</span></li>\
                    </ul>\
                    <div style='text-align: right;'><img width='40' height='40' src='"+tipPng+"'></div>";
                initTopRightTip($headerItem, html);
            }
            
            // 初始化各个元素组件的说明框
            function initTipsData() {
                initChoiceQuestionTip();
                initFillItemTip();
                initZgItemTip();
                initChooseTodoTip();
                initCompositionTip();
                initCompositionENTip();
                initForbiddenTip();
                initMistakeCorrectTip();
            }
            
            function createMasterDiv() {
                var $masterDiv = $('<div></div>', {'class': 'masterDiv modal fade in'});
                masterDiv = $masterDiv[0];
                $('body').append($masterDiv);
                $masterDiv.css({
                    display: 'block'
                });

                var width = $masterDiv.width();
                var height = $masterDiv.height();

                $('body').append('<canvas width="' + width + '" height="' + height + '" class="mask-layer"></canvas>');

                canvas = $('.mask-layer')[0];
                var context = canvas.getContext("2d");
                context.fillStyle = "rgba(0,0,0,.5)";//设置填充色（可以是渐变色或半透明色）
                context.fillRect(0,0,canvas.width,canvas.height);//填充背景我色
            }
            
            function initOptBar() {
                var optHtml = '<div class="element-tip-btns">\
                                <button type="button" class="closeBtn btn btn-default" data-dismiss="modal">关闭</button>\
                                <button type="button" class="nextTipBtn btn btn-info" data-dismiss="modal">下一步</button>\
                            </div>';
                $(masterDiv).append(optHtml);
            }

            function openMask($headerItem) {
                var context = canvas.getContext("2d");
                if(preArea != null) {
                    context.fillRect(preArea.x, preArea.y, preArea.width, preArea.height);
                }

                var x = $headerItem[0].offsetLeft;
                var y = $headerItem[0].offsetTop;
                var width = $headerItem.outerWidth();
                var height = $headerItem.outerHeight();
                var area = {
                    x: x,
                    y: y,
                    width: width,
                    height: height
                };

                context.clearRect(area.x, area.y, area.width, area.height);
                preArea = area;
            }
            
            function hide() {
                $(masterDiv).remove();
                bubbleTip.hide();
                $('.mask-layer').remove();
                $.cookie('operation-user-guide-enable',  false, {expire: 30});
            }
            
            function nextTip() {
                var $masterDiv = $(masterDiv);
                if(index === tips.length) { //显示完毕，关闭提示
                    hide();
                    return;
                }

                // 取出index处tip显示
                var tip = tips[index];
                var html = tip.html;

                bubbleTip.hide();

                var $bubbleTip;
                if(index <= 2) {
                    $bubbleTip = bubbleTip.topLeft(html);
                }else {
                    $bubbleTip = bubbleTip.topRight(html);
                }

                $masterDiv.append($bubbleTip);
                bubbleTip.position(tip.position);

                openMask(tip.$headerItem);

                index++;
            }
            
            function showFirstTip() {
                nextTip();
            }
            
            function renderTip() {
                createMasterDiv();
                initOptBar();
                showFirstTip();
            }
            
            function initCloseEvent() {
                var $masterDiv = $(masterDiv);
                $masterDiv.find(closeBtn).off('click').on('click', function() {
                    hide();
                });
            }
            
            function initNextTipEvent() {
                var $masterDiv = $(masterDiv);
                $masterDiv.find(nextTipBtn).off('click').on('click', function() {
                    nextTip();
                });
            }
            
            function initEvent() {
                initCloseEvent();
                initNextTipEvent();
            }
            
            function UserGuide() {
                var self = this;

                self.loadTip = function () {
                    initUserGuideStatus();

                    var userGuideStatus = settings.operation.userGuide;
                    if (!userGuideStatus) { //表示关闭组件提示
                        return;
                    }

                    initTipsData();
                    renderTip();
                    initEvent();
                };
            }
            return new UserGuide();
        });
})();

/**
 * 自定义提示框
 * 使用方式：引入bubbleTip.css, bubbleTip.js
 * 调用
 * var $bubbleDiv = $.bubbleTip.left(html); //html为用户要展示的页面内容
 * $(targetDiv).append($bubbleDiv); //targetDiv为bubble要被添加到的容器
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(['jquery'], function($) {
        return {
            settings: {
                bubble: null,
                size: {
                    width: 320,
                    padding: 40 //三角符号与矩形距离40px
                }
            },
            left: function(html) {
                var $bubble = $('<div></div>', {'class': 'bubble-box arrow-left'});
                $bubble.append('<div class="wrap"></div>');
                this.setSize($bubble);
                this.settings.bubble = $bubble[0];
                this.addContent(html);
                return $bubble;
            },
            right: function(html) {
                var $bubble = $('<div></div>', {'class': 'bubble-box arrow-right'});
                $bubble.append('<div class="wrap"></div>');
                this.setSize($bubble);
                this.settings.bubble = $bubble[0];
                this.addContent(html);
                return $bubble;
            },
            topLeft: function(html) {
                var $bubble = $('<div></div>', {'class': 'bubble-box arrow-top-left'});
                $bubble.append('<div class="wrap"></div>');
                this.setSize($bubble);
                this.settings.bubble = $bubble[0];
                this.addContent(html);
                return $bubble;
            },
            topRight: function(html) {
                var $bubble = $('<div></div>', {'class': 'bubble-box arrow-top-right'});
                $bubble.append('<div class="wrap"></div>');
                this.setSize($bubble);
                this.settings.bubble = $bubble[0];
                this.addContent(html);
                return $bubble;
            },
            bottom: function(html) {
                var $bubble = $('<div></div>', {'class': 'bubble-box arrow-bottom'});
                $bubble.append('<div class="wrap"></div>');
                this.setSize($bubble);
                this.settings.bubble = $bubble[0];
                this.addContent(html);
                return $bubble;
            },
            setSize: function($bubble) {
                var size = this.settings.size;
                $bubble.css({
                    width: size.width + 'px'
                });
            },
            /**
             * 将提示框设置在指定的位置
             * @param position
             */
            position: function(position) {
                var $bubble = $(this.settings.bubble);
                $bubble.css({
                    left: position.x + 'px',
                    top: position.y + 'px'
                });
            },
            /**
             * 添加内容到bubble
             * @param html
             */
            addContent: function(html) {
                var $bubble = $(this.settings.bubble);
                $bubble.find('.wrap').html(html);
            },
            getBubble: function() {
                return this.settings.bubble;
            },
            /**
             * 隐藏提示框
             */
            hide: function() {
                var bubble = this.settings.bubble;
                if(bubble != null) {
                    $(bubble).remove();
                }
            }
        };
    });
    
})();
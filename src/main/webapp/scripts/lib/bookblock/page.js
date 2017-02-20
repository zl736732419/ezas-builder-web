(function () {
    'use strict';
    
    define(['jquery','./modernizr.custom.79639',
        './jquery.mousewheel', './jquery.jscrollpane.min', './jquerypp.custom',
        './jquery.bookblock'], function($) {

        function Page() {
            ///////////////////////attrs
            var self = this;
            
            var $container = $('#container'),
                $bookBlock = $('#bb-bookblock'),
                $items = $bookBlock.children(),
                itemsCount = $items.length,
                current = 0,
                bb,
                $navNext = $('#bb-nav-next'),
                $navPrev = $('#bb-nav-prev'),
                $menuItems = $container.find('ul.menu-toc > li'),
                $tblcontents = $('#tblcontents'),
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
                transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
                supportTransitions = Modernizr.csstransitions;
            
            ///////////////////////attrs end
            self.init = function (baseSettingCallback, headerSettingCallback) {
                self.bb = bb = $('#bb-bookblock').bookblock({
                    speed: 800,
                    perspective: 2000,
                    shadowSides: 0.8,
                    shadowFlip: 0.4,
                    onEndFlip: function (old, page, isLimit) {

                        current = page;
                        // update TOC current
                        self.updateTOC();
                        // updateNavigation
                        self.updateNavigation(isLimit);
                        // initialize jScrollPane on the content div for the new item
                        self.setJSP('init');
                        // destroy jScrollPane on the content div for the old item
                        self.setJSP('destroy', old);
                        
                        //跳转到下一页时需要将examPapers传递
                        if(current == 0) {
                            baseSettingCallback && baseSettingCallback.call();
                        } else if(current == 1){
                            headerSettingCallback && headerSettingCallback.call();
                        }
                    }
                }),
                
                
                // initialize jScrollPane on the content div of the first item
                self.setJSP('init');
                self.initEvents();

            };
            
            self.initEvents = function() {

                // add navigation events
                // $navNext.on('click', function () {
                //     bb.next();
                // });
                //
                // $navPrev.on('click', function () {
                //     bb.prev();
                // });

                // add swipe events 鼠标滑动事件
                // $items.on({
                //     'swipeleft': function (event) {
                //         if ($container.data('opened')) {
                //             return false;
                //         }
                //         bb.next();
                //         return false;
                //     },
                //     'swiperight': function (event) {
                //         if ($container.data('opened')) {
                //             return false;
                //         }
                //         bb.prev();
                //         return false;
                //     }
                // });

                // show table of contents
                $tblcontents.on('click', self.toggleTOC);

                // click a menu item
                $menuItems.on('click', function () {

                    var $el = $(this),
                        idx = $el.index(),
                        jump = function () {
                            bb.jump(idx + 1);
                        };

                    current !== idx ? self.closeTOC(jump) : self.closeTOC();

                    return false;

                });

                // reinit jScrollPane on window resize
                $(window).on('debouncedresize', function () {
                    // reinitialise jScrollPane on the content div
                    self.setJSP('reinit');
                });

            };

            self.toggleTOC = function() {
                var opened = $container.data('opened');
                opened ? self.closeTOC() : self.openTOC();
            };

            self.openTOC = function() {
                $navNext.hide();
                $navPrev.hide();
                $container.addClass('slideRight').data('opened', true);
            };

            self.closeTOC = function(callback) {
                updateNavigation(current === itemsCount - 1);
                $container.removeClass('slideRight').data('opened', false);
                if (callback) {
                    if (supportTransitions) {
                        $container.on(transEndEventName, function () {
                            $(this).off(transEndEventName);
                            callback.call();
                        });
                    }
                    else {
                        callback.call();
                    }
                }

            };

            self.updateTOC = function() {
                $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
            }

            self.updateNavigation = function(isLastPage) {

                if (current === 0) {
                    $navNext.show();
                    $navPrev.hide();
                }
                else if (isLastPage) {
                    $navNext.hide();
                    $navPrev.show();
                }
                else {
                    $navNext.show();
                    $navPrev.show();
                }

            }

            self.setJSP = function(action, idx) {

                var idx = idx === undefined ? current : idx,
                    $content = $items.eq(idx).children('div.content'),
                    apiJSP = $content.data('jsp');

                if (action === 'init' && apiJSP === undefined) {
                    $content.jScrollPane({verticalGutter: 0, hideFocus: true});
                }
                else if (action === 'reinit' && apiJSP !== undefined) {
                    apiJSP.reinitialise();
                }
                else if (action === 'destroy' && apiJSP !== undefined) {
                    apiJSP.destroy();
                }

            };
        }
        return new Page();
    });
})();
/**
 * svg ui工具类
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(['jquery'], function($) {
        
        return {
            gradients: [], //已经存在的渐变 ,存放{colorStr:"innerColor+','+outerColor", id: ''}格式的项

            /**
             * 绘制矩形
             * @param x
             * @param y
             * @param width
             * @param height
             * @param fill 是否填充
             * @param stroke 是否描边
             * @param radis 是否圆角
             * @param fillColor 填充颜色
             * @param strokeColor 描边颜色
             * @param dashStroke 是否虚线描边
             */
            drawRect : function(x, y, width, height, fill, stroke, radis, fillColor, strokeColor, dashStroke) {
                var setting = $.defaultSetting;
                var unit = setting.unit;
                var lineWidth = setting.lineWidth;
                var radisWidth = setting.radis;
                var constant = $.utils.settings.constant;
                var rect = document.createElementNS(constant.SVG_NS, "rect");
                $(rect).attr('x', x+unit)
                    .attr('y', y+unit)
                    .attr('width', width+unit)
                    .attr('height', height+unit);
                if(stroke == false) {
                    $(rect).attr('stroke-width', 0);
                }else {
                    if(strokeColor == null || strokeColor == undefined) {
                        strokeColor = $.colors.COLOR_BLACK;
                    }
                    $(rect).attr('stroke-width', lineWidth+unit).attr('stroke', strokeColor);
                }

                if(dashStroke) {
                    $(rect).attr('stroke-dasharray', '3 3');
                }

                if(fill) {
                    if(fillColor == null || fillColor == undefined) {
                        fillColor = $.colors.COLOR_BLACK;
                    }else if(fillColor == 'transparent') {
                        fillColor = '#fff';
                        $(rect).attr('fill-opacity', 0);
                    }
                    $(rect).attr('fill', fillColor);
                }else {
                    $(rect).attr('fill', 'none');
                }

                if(radis) {
                    $(rect).attr('rx', radisWidth+unit);
                }
                return rect;
            },
            /**
             * 根据像素绘制矩形边框
             * @param x  px
             * @param y px
             * @param width px
             * @param height px
             * @param fill bool 是否填充
             * @param stroke bool 是否描边
             * @param radis bool 是否圆角边框
             * @param fillColor
             * @param strokeColor
             */
            drawRectWithPX: function(x, y, width, height, fill, stroke, radis, fillColor, strokeColor) {
                var setting = $.defaultSetting;
                var unit = setting.unit;
                var lineWidth = setting.lineWidth;
                var radisWidth = setting.radis;
                var constant = $.utils.settings.constant;
                var rect = document.createElementNS(constant.SVG_NS, "rect");
                $(rect).attr('x', x)
                    .attr('y', y)
                    .attr('width', width)
                    .attr('height', height);
                if(stroke == false) {
                    $(rect).attr('stroke-width', 0);
                }else {
                    if(strokeColor == null || strokeColor == undefined) {
                        strokeColor = '#000';
                    }
                    $(rect).attr('stroke-width', lineWidth+unit).attr('stroke', strokeColor);
                }
                if(fill) {
                    if(fillColor == null || fillColor == undefined) {
                        fillColor = '#000';
                    }else if(fillColor == 'transparent') {
                        fillColor = '#fff';
                        $(rect).attr('fill-opacity', 0);
                    }
                    $(rect).attr('fill', fillColor);
                }else {
                    $(rect).attr('fill', 'none');
                }

                if(radis) {
                    $(rect).attr('rx', radisWidth+unit);
                }
                return rect;
            },
            //绘制矩形框，其中包含居中的文本
            drawRectAndCenterText : function(x, y, width, height, text, fontSize,parentG, bolder, fill, fillColor, color) {
                var constant = $.utils.settings.constant;
                var g = document.createElementNS(constant.SVG_NS, 'g');
                parentG.appendChild(g);
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }
                //绘制矩形
                var rect = this.drawRect(x, y, width, height, fill, true, false, fillColor, color);
                g.appendChild(rect);
                var box = rect.getBBox();
                //绘制文本
                var textColor = color;
                if(fill && fillColor != $.colors.COLOR_WHITE) {
                    textColor = $.colors.COLOR_BLACK;
                }
                var textLabel = this.drawText(box.x, (box.y + box.height / 2), text, fontSize, bolder, textColor);
                g.appendChild(textLabel);
                this.centerText(textLabel, box.x, box.width);
                return rect;
            },
            /**
             * 绘制中括号，用户考生填涂的orm方格
             */
            drawBracket: function(x, y, width, height, parentG, color) {
                var setting = $.defaultSetting;
                var unit = setting.unit;
                var lineWidth = setting.lineWidth;
                var rectBox = this.getRectBBox(x, y, width, height, parentG);
                x = rectBox.x;
                y = rectBox.y;
                width = rectBox.width;
                height = rectBox.height;
                var pathStr = 'M ' + x + ' ' + y + ' h ' + width / 5
                    + ' M ' + x + ' ' + y + ' v ' + height
                    + ' h ' + width / 5 //绘制[
                    + ' M ' + (x + width) + ' ' + y
                    + ' h ' + (-width / 5)
                    + ' M ' + (x + width) + ' ' + y
                    + ' v ' + height
                    + ' h ' + (-width / 5); //绘制 ]

                return this.drawPath(pathStr, color, lineWidth + unit);
            },
            /**
             * 绘制中括号，用户考生填涂的orm方格
             */
            drawBracketWithPX: function(x, y, width, height, color) {
                var setting = $.defaultSetting;
                var unit = setting.unit;
                var lineWidth = setting.lineWidth;
                var pathStr = 'M ' + x + ' ' + y + ' h ' + width / 5
                    + ' M ' + x + ' ' + y + ' v ' + height
                    + ' h ' + width / 5 //绘制[
                    + ' M ' + (x + width) + ' ' + y
                    + ' h ' + (-width / 5)
                    + ' M ' + (x + width) + ' ' + y
                    + ' v ' + height
                    + ' h ' + (-width / 5); //绘制 ]

                return this.drawPath(pathStr, color, lineWidth + unit);
            },
            /**
             * 绘制中括号，同时居中内容文本
             */
            drawBracketAndCenterText: function(x, y, width, height, text, fontSize,parentG, color) {
                var constant = $.utils.settings.constant;
                var g = document.createElementNS(constant.SVG_NS, 'g');
                parentG.appendChild(g);
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }

                //为了与drawRectAndCenterText一致，这里绘制一个透明的矩形
                var rect = this.drawRect(x, y, width, height, true, false, false, $.colors.COLOR_WHITE);
                g.appendChild(rect);

                var path = this.drawBracket(x, y, width, height, parentG, color);
                g.appendChild(path);

                var box = rect.getBBox();

                var textLabel = this.drawText(box.x, (box.y + box.height / 2), text, fontSize, false, color);

                g.appendChild(textLabel);
                this.centerText(textLabel, box.x, box.width);

                return rect;
            },
            //绘制路径
            drawPath : function(pathStr, color, size) {
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }
                if(size == null || size == undefined) {
                    size = $.defaultSetting.lineWidth+$.defaultSetting.unit;
                }
                var constant = $.utils.settings.constant;
                var path = document.createElementNS(constant.SVG_NS, 'path');
                $(path).attr('d', pathStr)
                    .attr('stroke', color)
                    .attr('stroke-width', size)
                    .attr('fill', 'none');

                return path;
            },
            /**
             * 画椭圆
             * @param cx 圆心
             * @param cy
             * @param rx x半径
             * @param ry y半径
             * @param size stroke-width宽度
             * @returns {Element}
             */
            drawEllipse : function(cx, cy, rx, ry, size) {
                var constant = $.utils.settings.constant;
                var ellipse = document.createElementNS(constant.SVG_NS, 'ellipse');
                $(ellipse).attr('cx', cx)
                    .attr('cy', cy)
                    .attr('rx', rx)
                    .attr('ry', ry)
                    .attr('stroke', '#000')
                    .attr('stroke-width', size)
                    .attr('fill', 'none');

                return ellipse;
            },
            /**
             * 画圆
             */
            drawCircle : function(cx, cy, r, fill, fillColor) {
                var constant = $.utils.settings.constant;
                var circle = document.createElementNS(constant.SVG_NS, 'circle');
                var strokeWidth = $.defaultSetting.lineWidth+$.defaultSetting.unit;
                $(circle).attr('cx', cx)
                    .attr('cy', cy)
                    .attr('r', r)
                    .attr('stroke',  '#000')
                    .attr('stroke-width', strokeWidth)
                    .attr('fill', 'none');
                if(fill) {
                    if(fillColor == undefined) {
                        fillColor = '#000';
                    }else if(fillColor == 'transparent') {
                        fillColor = '#fff';
                        $(circle).attr('fill-opacity', 0);
                    }
                    $(circle).attr('fill', fillColor);
                }

                return circle;
            },
            /**
             * 绘制渐变色的圆
             * 比如用于绘制resize八个助拖点
             * @param cx
             * @param cy
             * @param r
             * @param innerColor
             * @param outerColor
             */
            drawCircleRadialGradient : function(cx, cy, r, innerColor, outerColor) {
                var constant = $.utils.settings.constant;
//            var gradientId = this.drawRadialGradient(innerColor, outerColor);
//            var fill = 'url(' + gradientId + ')';
                var fill = '#2377bf';
                var circle = document.createElementNS(constant.SVG_NS, 'circle');
                $(circle).attr('cx', cx)
                    .attr('cy', cy)
                    .attr('r', r)
                    .attr('fill', fill);

                return circle;
            },
            /**
             * @Deprecated
             * 绘制放射渐变
             * @param innerColor
             * @param outerColor
             *
             */
            drawRadialGradient : function(innerColor, outerColor) {
                var colorStr = innerColor + ',' + outerColor;

                var id = this.getGradient(colorStr);
                if(id != null) {
                    return id;
                }

                var gradientId = $.utils.randomUUID();
                var constant = $.utils.settings.constant;
                var radiusGradient = document.createElementNS(constant.SVG_NS, 'radialGradient');
                var $answerSheet = $.examPapers.settings.curSheet;
                var svg = $answerSheet.settings.svg;
                var defs = $(svg).find('defs');
                if(defs.length == 0) {
                    defs = document.createElementNS(constant.SVG_NS, 'defs');
                    $(defs).addClass('elements');
                    svg.appendChild(defs);
                }

                $(radiusGradient).attr('id', gradientId)
                    .attr('fx', '70%')
                    .attr('fy', '60%');
                var start = document.createElementNS(constant.SVG_NS, 'stop');
                $(start).attr('offset', '10%')
                    .attr('stop-color', innerColor);
                radiusGradient.appendChild(start);
                var stop = document.createElementNS(constant.SVG_NS, 'stop');
                $(stop).attr('offset', '80%')
                    .attr('stop-color', outerColor);
                radiusGradient.appendChild(stop);

                $(defs).append(radiusGradient);

                id = '#' + gradientId;

                this.gradients.push({colorStr: colorStr, id: id});

                return id;
            },
            /**
             * 根据渐变颜色查找是否存在已经生成的渐变
             */
            getGradient: function(colorStr) {
                var gradient = null;
                var id = null;
                for(var i = 0; i < this.gradients.length; i++) {
                    gradient = this.gradients[i];
                    if(gradient.colorStr == colorStr) {
                        id = gradient.id;
                        break;
                    }
                }

                return id;
            },

            /**
             * 绘制文本消息
             */
            drawText : function(x, y, label, fontSize, bolder, color) {
                if(fontSize == undefined || isNaN(fontSize)) {
                    fontSize = 15;
                }
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }
                var constant = $.utils.settings.constant;
                //绘制准考证号文字标题
                var text = document.createElementNS(constant.SVG_NS, "text");
                $(text).attr('x', x).attr('y', y);
                text.onselectstart = function() { //定义文本不可选中
                    return false;
                };
                text.textContent = label;
                $(text).css({
                    fill: color,
                    'font-family': $.defaultSetting.page.fontFamily,
                    fontSize: fontSize + 'px',
                    'user-select': 'none',
                    '-moz-user-select': 'none'
                });
                $(text).attr('xml:space', 'preserve');
                if(bolder != null && bolder != undefined && bolder) {
                    $(text).css({
                        fontWeight: 'bolder'
                    });
                }

                return text;
            },
            /**
             * 通过毫米单位绘制文本
             */
            drawTextWithMM : function(x, y, label, fontSize, bolder, color) {
                var setting = $.defaultSetting;
                var unit = setting.unit;
                var constant = $.utils.settings.constant;

                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }

                var text = document.createElementNS(constant.SVG_NS, "text");
                $(text).attr('x', x+unit).attr('y', y+unit);
                text.onselectstart = function() { //定义文本不可选中
                    return false;
                };
                text.textContent = label;
                $(text).css({
                    fill: color,
                    'font-family': $.defaultSetting.page.fontFamily,
                    fontSize: fontSize + 'px',
                    'user-select': 'none',
                    '-moz-user-select': 'none'
                });
                $(text).attr('xml:space', 'preserve');

                if(bolder != null && bolder != undefined && bolder) {
                    $(text).css({
                        fontWeight: 'bolder'
                    });
                }
                return text;
            },
            /**
             * 绘制一条直线，单位毫米
             */
            drawLine : function(x1, y1, x2, y2, lineWidth, color) {
                var unit = $.defaultSetting.unit;
                if(lineWidth == null || lineWidth == undefined) {
                    lineWidth = $.defaultSetting.lineWidth;
                }
                lineWidth += unit;
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }
                var constant = $.utils.settings.constant;
                var line = document.createElementNS(constant.SVG_NS, "line");
                $(line).attr('x1', x1+unit)
                    .attr('y1', y1 + unit)
                    .attr('x2', x2 + unit)
                    .attr('y2', y2 + unit)
                    .attr('stroke-width', lineWidth).attr('stroke', color)
                    .attr('fill', 'none');

                return line;
            },
            /**
             * 划线，单位像素
             */
            drawLineWithPX : function(x1, y1, x2, y2, lineWidth, color) {
                var unit = $.defaultSetting.unit;
                if(lineWidth == null || lineWidth == undefined) {
                    lineWidth = $.defaultSetting.lineWidth;
                }
                lineWidth += unit;
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }

                var constant = $.utils.settings.constant;
                var line = document.createElementNS(constant.SVG_NS, "line");
                $(line).attr('x1', x1)
                    .attr('y1', y1)
                    .attr('x2', x2)
                    .attr('y2', y2)
                    .attr('stroke-width', lineWidth).attr('stroke', color)
                    .attr('fill', 'none');
                return line;
            },
            /**
             * 绘制虚线
             */
            drawDottedLine: function(x1, y1, x2, y2, lineSplit, gapSplit, lineWidth, color) {
                var unit = $.defaultSetting.unit;
                //容错
                if(lineSplit == null || lineSplit == undefined) {
                    lineSplit = 3;
                }
                lineSplit = lineSplit > 10 ? 10 : lineSplit;

                if(gapSplit == null || gapSplit == undefined) {
                    gapSplit = 3;
                }
                gapSplit = gapSplit > 10 ? 10 : gapSplit;

                if(lineWidth == null || lineWidth == undefined) {
                    lineWidth = $.defaultSetting.lineWidth;
                }
                lineWidth += unit;

                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }

                var constant = $.utils.settings.constant;
                var line = document.createElementNS(constant.SVG_NS, "line");
                $(line).attr('x1', x1+unit)
                    .attr('y1', y1 + unit)
                    .attr('x2', x2 + unit)
                    .attr('y2', y2 + unit)
                    .attr('stroke-width', lineWidth).attr('stroke', color)
                    .attr('stroke-dasharray', lineSplit+","+gapSplit)
                    .attr('fill', 'none');

                return line;
            },
            /**
             * 绘制虚线
             */
            drawDottedLineWithPX: function(x1, y1, x2, y2, lineSplit, gapSplit, lineWidth, color) {
                var unit = $.defaultSetting.unit;
                //容错
                if(lineSplit == null || lineSplit == undefined) {
                    lineSplit = 3;
                }
                lineSplit = lineSplit > 10 ? 10 : lineSplit;

                if(gapSplit == null || gapSplit == undefined) {
                    gapSplit = 3;
                }
                gapSplit = gapSplit > 10 ? 10 : gapSplit;

                if(lineWidth == null || lineWidth == undefined) {
                    lineWidth = $.defaultSetting.lineWidth;
                }
                lineWidth += unit;

                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }

                var constant = $.utils.settings.constant;
                var line = document.createElementNS(constant.SVG_NS, "line");
                $(line).attr('x1', x1)
                    .attr('y1', y1)
                    .attr('x2', x2)
                    .attr('y2', y2)
                    .attr('stroke-width', lineWidth).attr('stroke', color)
                    .attr('stroke-dasharray', lineSplit+","+gapSplit)
                    .attr('fill', 'none');

                return line;
            },
            //绘制多行
            /**
             *
             * @param x
             * @param y
             * @param text 要绘制的文本字符串
             * @param padding 每行的间距
             * @param fontSize 字体大小
             * @param num 每行显示的文本数
             * @param parentG 容器g
             * @param bolder 是否加粗显示
             * @param color 字体颜色
             */
            drawMultiLineText : function(x, y, text, padding, fontSize, num, parentG, bolder, color) {
                if(padding == null || padding == undefined) {
                    padding = 15;
                }
                if(fontSize == null || fontSize == undefined) {
                    fontSize = 15;
                }
                if(num == null || num == undefined) {
                    num = 17;
                }
                if(color == null || color == undefined) {
                    color = $.colors.COLOR_BLACK;
                }
                var constant = $.utils.settings.constant;
                var textUI = document.createElementNS(constant.SVG_NS, "text");
                parentG.appendChild(textUI);
                $(textUI).attr('x', x)
                    .attr('y', y)
                    .attr('font-size', fontSize)
                    .attr('fill', color);
                $(textUI).css({
                    fontFamily: $.defaultSetting.page.fontFamily,
                    'user-select': 'none',
                    '-moz-user-select': 'none'
                });
                if(bolder != null && bolder != undefined && bolder) {
                    $(textUI).attr('font-weight', 'bolder');
                }

                textUI.onselectstart = function() { //定义文本不可选中
                    return false;
                };
                var label = '';
                var tspan = null;
                var index = 0;
                var tspanHeight = 0;
                var curY = null;
                var count = 0;//用于记录当前已经读取的文本个数，换行后重新计数
                for(var i = 0; i < text.length; i++) {
                    if((count % num == 0 || text[i] == '|') && count != 0) {
                        count = 0;
                        tspan = document.createElementNS(constant.SVG_NS, "tspan");
                        curY = y + ((tspanHeight + padding) * index++);

                        $(tspan).attr('x', x)
                            .attr('y', curY)
                            .attr('font-size', fontSize);
                        $(tspan).css({
                            'user-select': 'none',
                            '-moz-user-select': 'none'
                        });
                        tspan.textContent = label;
                        textUI.appendChild(tspan);
                        if(tspanHeight == 0) {
                            tspanHeight = tspan.getBBox().height;
                        }
                        label = '';
                    }
                    if(text[i] != '|') {
                        count++;
                        label += text[i];
                    }
                }

                if(label != '') {
                    tspan = document.createElementNS(constant.SVG_NS, "tspan");
                    $(tspan).attr('x', x)
                        .attr('y', y + ((tspanHeight + padding) * index++));
                    tspan.textContent = label;
                    textUI.appendChild(tspan);
                }

                return textUI;
            },
            /**
             * 获取垂直方向一毫米中包含的像素
             */
            getVerPXPerMM: function() {
                var $answerSheet = $.examPapers.settings.curSheet;
                var syncHeader = $answerSheet.settings.syncHeader;
                var verHeaders = syncHeader.settings.verHeaders;
                var mmHeight = $.defaultSetting.syncHeader.vertical.height;
                var pxHeight = verHeaders[0].getBBox().height;

                return pxHeight / mmHeight;
            },
            /**
             * 获取水平方向一毫米中包含的像素
             */
            getHorPXPerMM: function() {
                var $answerSheet = $.examPapers.settings.curSheet;
                var syncHeader = $answerSheet.settings.syncHeader;
                var horHeaders = syncHeader.settings.horHeaders;
                var mmWidth = $.defaultSetting.syncHeader.horizental.width;
                var pxWidth = horHeaders[0].getBBox().width;

                return pxWidth / mmHeight;
            },
            /**
             * 将准考证号标题水平垂直居中面板,需要注意的一点是，要使用该方法需要先将text加入到svg中
             * @param text 要居中的文本
             * @param x 容器左上角x坐标
             * @param containerWidth 文本容器的宽度
             */
            centerText : function(text, x, containerWidth) {
                var unit = $.defaultSetting.unit;
                var $tspan = $(text).find('tspan');
                var box = text.getBBox();
                var newX = null;
                if((x != null && x != undefined)
                    && (containerWidth != null && containerWidth != undefined)) {
                    //水平居中
                    newX = (containerWidth - box.width) / 2;
                    $(text).attr('x', x + newX);
                }
                //垂直居中
                var by = box.y;
                var y = $(text).attr('y')+'';
                if(y.indexOf(unit) != -1) { //说明当前是毫米单位，需要换算成像素
                    y = parseFloat(y) * this.getVerPXPerMM();
                } else {
                    y = Number(y);
                }
                var dy = y - (by + box.height / 2);
                if($tspan.length == 0) {
                    $(text).attr('dy', dy);
                }else {
                    for(var i = 0; i < $tspan.length; i++) {
                        if(newX != null) {
                            $($tspan[i]).attr('dx', newX);
                        }
                        $($tspan[i]).attr('dy', dy);
                    }
                }
            },
            /**
             * 将text顶点移动到y位置，在对text定位到(x,y)时，只是text的基线在y并不是顶点在y
             * @param text
             * @param x
             * @param containerWidth
             */
            bottomText: function(text, x, containerWidth) {
                var unit = $.defaultSetting.unit;
                var $tspan = $(text).find('tspan');
                var box = text.getBBox();
                var newX = null;
                if((x != null && x != undefined)
                    && (containerWidth != null && containerWidth != undefined)) {
                    //水平居中
                    newX = (containerWidth - box.width) / 2;
                    $(text).attr('x', x + newX);
                }
                var by = box.y;
                var y = $(text).attr('y')+'';
                if(y.indexOf(unit) != -1) { //说明当前是毫米单位，需要换算成像素
                    y = parseFloat(y) * this.getVerPXPerMM();
                } else {
                    y = Number(y);
                }

                var dy = y - by-3; //这里的3代表文本信息的内间距
                if($tspan.length == 0) {
                    $(text).attr('dy', dy);
                }else {
                    for(var i = 0; i < $tspan.length; i++) {
                        if(newX != null) {
                            $($tspan[i]).attr('dx', newX);
                        }
                        $($tspan[i]).attr('dy', dy);
                    }
                }
            },
            /**
             * 获取指定大小的文本box
             * @param str
             * @param fontSize
             * @param parentG
             * @returns
             */
            getTextBBox: function(str, fontSize, parentG) {
                var text = this.drawText(0, 0, str, fontSize);
                parentG.appendChild(text);
                var textBox = text.getBBox();
                $(text).remove();

                return textBox;
            },
            /**
             * 获取方格box
             */
            getRectBBox: function(x, y, width, height, parentG) {
                var rect = this.drawRect(x, y, width, height, false, true, false);
                parentG.appendChild(rect);
                var rectBox = rect.getBBox();
                $(rect).remove();
                return rectBox;
            }
        };
    });
    
})();

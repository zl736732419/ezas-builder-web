/**
 * Created by zhenglian on 2017/1/21.
 */
(function() {
    'use strict';
    
    define(function() {
        var subjects = [
            {name: '语文', value: 1},    // 语文
            {name: '英语', value: 2},   // 英语
            {name: '数学', value: 3},    // 数学
            {name: '物理', value: 4},  // 物理
            {name: '化学', value: 5},  // 化学
            {name: '政治', value: 6},  // 政治
            {name: '历史', value: 7},   // 历史
            {name: '地理', value: 8}, //地理
            {name: '生物', value: 9},   //生物
            {name: '文综', value: 10},   //文综
            {name: '理综', value: 11},   //理综
        ];
        
        //控件类型
        var elementType = {
            anchorPoint : 1,
            syncHeader: 2,
            title: 3,
            subject: 4,
            pageNum: 5,
            studentInfo: 6,
            wrongFilling: 7,
            absentBreach: 8,
            attentionNote: 9,
            zkzh: 10,
            choiceQuestion: 11,
            fillItem: 12,
            zgItem: 13,
            composition: 14,
            forbidden: 15,
            chooseToDo: 16,
            mistakeCorrect: 17,
            inset: 18,
            studentCode: 19, //条码，二维码区
            sheetABType: 20,
            tagArea: 21, //标记区
            drawText: 22, //文本绘制
            drawImage: 23, //图片绘制
            drawLine: 24, //线段绘制
            drawTable: 25, //绘制表格
            drawSerial: 26 //绘制编号
        };
        
        //颜色
        var colors = {
            COLOR_BLACK: '#000',
            COLOR_GRAY: '#CCC',
            COLOR_WHITE: '#FFF',
            COLOR_RED: '#F8C2D0',//'rgba(231,53, 98, 0.3)',
            COLOR_RED_LIGHTER: '#E8446E'//'rgb(231,53,98)'
        };

        //键盘对应键值
        var keyCodes = {
            KEY_CODE_A: 65,
            KEY_CODE_S: 83,
            KEY_CODE_P: 80,
            KEY_CODE_L: 76,
            KEY_CODE_DELETE: 46,
            KEY_CODE_LEFT: 37, // 左键
            KEY_CODE_UP: 38, // 上键
            KEY_CODE_RIGHT: 39, // 右键
            KEY_CODE_DOWN: 40 // 下键
        };

        // 作文字数，有小作文、大作文之分
        var compositionWordCount = {
            small: {
                words: [10,15,20, 50, 100, 120, 150, 200, 250, 300],
                activeIndex: 2
            },
            large: {
                words: [400, 600, 800, 1000, 1200, 1300, 1500, 2000, 2500],
                activeIndex: 3
            }
        };

        // 操作参数
        var operation = {
            keyboard: false, //是否启用快捷键
            userGuide: false //流程提示
        };
        
        return {
            /**
             * 当前科目
             */
            subject: {
                curSubject: subjects[0],
                num: 4 //四个矩形方格代表16科， 按照二进制顺序，从右到左为低到高
            },
            /**
             * 基本信息
             */
            baseInfo : {
                attentionNote : '1.答题前，考生务必用黑色签字笔填写准考证号、姓名、学校和年级，再用2B铅笔把对应准考证号码的标号涂黑。'
                +'|2.考生不得填涂缺考、违纪项。|3.保持答题卡清洁平整，不可折叠。|4.请在题目规定区域完成作答。'
            },
            /**
             * 页脚
             */
            footer : {
                copyright: '深圳市易考乐学测评有限公司制作',
                page: '第  ${curPage} 面'
            },
            /**
             * 禁答区
             */
            forbidden: {
                info: '请勿在此区域作答|或者做任何标记',
                tip: '禁止作答'
            },
            answerTip: {
                info: '请在各题目的答题区域内作答， 超出黑色矩形边框限定区域的答案无效'
            },
            chooseToDo: {
                info: '请从选做题中任选一题作答，并用2B铅笔将所选题目对应的题号方框涂黑，评阅时将按所涂题号进行评分；多涂、多答，' +
                '按所涂的首题进行评分；不涂，按本选考题的首题进行评分。',
                answerTip: '我所选答的题目是：'
            },
            constants: {//配置一些常量域
                SVG_NS : 'http://www.w3.org/2000/svg',
                LINK_NS : 'http://www.w3.org/1999/xlink',

                SHEET_TYPE_A3: 1, //A3题卡
                SHEET_TYPE_A4: 2, //A4题卡
                SHEET_TYPE_8K: 3, //8K题卡
                SHEET_TYPE_16K: 4, //16K题卡

                PRINT_TYPE_SINGLE: 1, // 单面打印
                PRINT_TYPE_DOUBLE: 2, // 双面打印

                GRID_RECT: 1, //方格
                GRID_BRACKET: 2, //中括号

                OMR_SIZE_BIGGER: 1, // 大号矩形
                OMR_SIZE_SMALLER: 2, // 小号矩形

                FORBIDDEN_WORD: 1, //文本禁答
                FORBIDDEN_GRAPH: 2, //图像禁答

                ORIENTATION_HORIZENTAL: 1, //横选
                ORIENTATION_VERTICAL: 2, //纵选

                CHOICE_TYPE_SINGLE: 1, // 单选
                CHOICE_TYPE_MULTI: 2, // 多选

                COMPOSITION_ZH: 1, // 中文作文
                COMPOSITION_EN: 2, // 英文作文

                COMPOSITION_END_OF_SHEET: 1, // 英文作文绘制到题卡末尾
                COMPOSITION_CUSTOM: 2, // 用户自定义

                LINE_FULL: 1, //实线
                LINE_DOTTED: 2, //虚线

                ZG_ITEM_GRID: 3, //主观小题网格绘制类型


                CODE_TYPE_ZKZH: 1, //准考证号
                CODE_TYPE_BAR_CODE: 2, //条形码
                CODE_TYPE_QR: 3, //二维码

                COLOR_BLACK: 1, //黑白卡
                COLOR_RED: 2, //透红卡

                SHEET_TYPE_NULL: 0,
                SHEET_TYPE_A: 1, //卷A
                SHEET_TYPE_B: 2, //卷B

                SERIAL_TYPE_CIRCLE: 1 //圆圈编号样式
            },
            paperTypeNames: ['', 'A3', 'A4', '8开', '16开'],
            subjects: subjects,
            elementType: elementType,
            colors: colors,
            keyCodes: keyCodes,
            compositionWordCount: compositionWordCount,
            operation: operation,
            
        };
        
    });
    
})();
/**
 * 最终采用的纸张配置参数
 * 标准的分辨率计算出来的毫米与像素的关系也约等于一个常数：
 * 基本上 1mm = 3.78px
 * Created by zhenglian on 2017/1/21.
 */
(function() {
    "use strict";
    
    define(['utils', 'colors', 'settings'], function(utils, colors, settings) {
        return {
            unit: 'mm', //单位毫米
            lineWidth: 0.14, //线宽
            radis: 3, //圆角mm
            mm2Px: 0, //一毫米占多少像素，在syncHeader元素中设置
            page: {
                title: '深圳南山XX小学期中考试', //题卡标题
                subTitle: '语文答题卡',
                width: null, // 答题卡纸张宽度
                height: null,  // 答题卡纸张高度
                pageNum: 1, // 答题卡共几页(一张两面算两页)
                sheetType: 2, // 题卡纸张类型，1：A3， 2：A4
                a3Column: 3, //默认A3是3栏
                omrSize: utils.settings.constant.OMR_SIZE_BIGGER, //默认为大号omr区
                printType: 1, //单面打印 1， 双面打印 2
                copyRight: 1, //版权信息
                gridType: 1, //方格类型
                isRed: false, //是否是套红卡
                color: colors.COLOR_GRAY, //默认为黑白卡
                textColor: colors.COLOR_BLACK,
                enableHideSync: true, //是否隐藏无用的垂直同步头，通过右键题卡菜单设置
                sheetsHideVerHeaderIndexs: [], //当前需要隐藏的题卡垂直同步头索引
                fontFamily: "myFont, FreesiaUPC, 'Angsana New','Courier New', Calibri, SimSun, 'Times New Roman'",
                textFontFamily: "SimSun, 'microsoft yahei',Tahoma, Helvetica, serif",
                titleFontSize: 18, //控制各个元素标题字号
                labelFontSize: 15, //标题字号，用于控制选择题、填空题、主观题等元素字号
                gridFontSize: 12, //方格中的文本字体大小
                studentTemplateEnable: 0, //是否启用动态创建学生题卡包含学生基本信息
            },
            grid : { //填涂方格大小
                width: 3.2,
                height: 1.2,
                gap: 1.88   // 5.08 - 3.2
//             width: 4.8,
//             height: 1.8,
//             gap: 3.58   // 5.08 - 3.2
            },
            content: { //页面内容参数
                width: null,
                height: null, //anchorPoint.vPadding + anchorPoint.height*2
                hPadding: null, //水平间隔
                vPadding: null //垂直间隔
            },
            anchorPoint: {
                width: 5,
                height: 5,
                // width: 6.7,
                // height: 6.7,
                hPadding: 2.58, //5.08 - 2.5 = 2.58
                vTopPadding: 20,
                vBottomPadding: 10
            },
            syncHeader: { //同步头
                horizental : { //水平同步头
                    padding: 4.79,
                    width: 3.2,
                    height: 1.2,
                    gap: 1.88 //5.08 - 3.2
                    // width: 4.7,
                    // height: 2.7,
                    // gap: 3.58
                },
                vertical: { //垂直同步头
                    padding: 6, //同步头留白6mm
                    width: 5,
                    height: 1.5,
                    gap: 2 //3.5 - 1.5/2 - 1.5/2
                    // width: 6.7,
                    // height: 3.2,
                    // gap: 3.7 //3.5 - 1.5/2 - 1.5/2
                }
            },
            detectLine: { //检测线
                lineWidth: 0.5
            },
            title: { //文本区
                padding: 15, //距离顶部距离
                fontSize:25, //字体大小
                subFontSize: 30, //科目字体大小
                gap: 3, //行间距
                /*
                 * A3 3栏  一行18字
                 * A3 2栏/A4 一行26字
                 */
                nums: 20 //一行允许的最大文本数

            },
            baseInfo: { //基本信息
                attentions: [], //要绘制的项
                zkzhCount: 14, //准考证号位数
                changeToStuMin: false, //A3，并且准考证号达到最大16位，需要将填涂要求、缺考违纪元素位置进行调整，在stu中修改
                minStuHorHeaderNum: 0, //记录最小的考生信息水平同步头个数
                codeType: utils.settings.constant.CODE_TYPE_ZKZH, //默认为准考证号标识
                sheetABType: utils.settings.constant.SHEET_TYPE_NULL,
                enableSheetABType: false, //默认是不开启AB卷的
                usedVerHeaderNum: 0, //获取基本元素中的最大垂直同步头，(左侧学生填写的字段(姓名、填涂要求、AB卷)与右侧准考证号的比较得出最大值)
            },
            studentInfo: { //考生基本信息
//			stu: { //学生基本信息，程序用于自动填涂,没有则为null
//				name: '张三',
//				grade: '六年级',
//				clazz: '3班',
//				school: '南山中学',
//				id: '12345678987654'
//			}
                stu: null
            },
            composition: { //作文区
                width: 7, //方格宽高2*(垂直同步头+gap)
                height: 7,
                verHeaderNum: 3, //一行(+行间距)共3个垂直同步头
                gap: 2, //行间距
                en: {
                    lineHeight: 8.5  // 3同步头+2间隙
                }
            },
            footer: {
                content: settings.footer.content
            }
        };
    });
    
})();
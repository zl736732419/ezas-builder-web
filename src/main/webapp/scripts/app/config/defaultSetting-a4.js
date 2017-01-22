/**
 * 答题卡为A4纸时配置参数
 * 如果需要拓展，需要重写该配置文件中涉及的参数值
 * 所有答题卡所用到的初始值都从这里面获取
 * a4纸尺寸： 210*297mm
 * 200dpi
 * 1英寸=2.54cm=25.4mm = 200px
 * ==>
 * 1mm = 7.87px
 * Created by zhenglian on 2017/1/21.
 */
(function() {
    "use strict";
    
    define(function() {
        return {
            page : { // 答题卡页面信息
                width: 210, // 答题卡纸张宽度
                height: 297  // 答题卡纸张高度
            }
        };
    });
    
})();

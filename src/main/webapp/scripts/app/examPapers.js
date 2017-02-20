/**
 * 整个科目的题卡包对象
 * Created by dell on 2017/2/10.
 */
(function() {
    'use strict';
    
    define(['jquery', 'defaultSetting', 'settings', 'settingsA3', 'settingsA4', 'settings8K', 'settings16K'], 
        function($, defaultSetting, settings, settingsA3, settingsA4, settings8K, settings16K) {
        
        function ExamPapers() {
            /////////////////////////// attrs
            var self = this;
            self.sheets = []; //整个科目的题卡
            self.curSheet = null; //当前活动的题卡页
            self.sheetConfig = null; //当前应用的纸张参数
            self.tempConfig = { // 临时参数，保存首页与学生基本信息传递过来的配置
                baseSetting: {}, // 基本配置
                headerSetting: {} // 题卡头配置
            };
            ////////////////////////// attrs end
            
            /**
             * 判断题卡类型
             * @returns {Boolean}
             */
            self.isA3Sheet = function(sheetType) {
                if((typeof sheetType) === 'undefined') {
                    sheetType = defaultSetting.page.sheetType;
                }
                var result = false;
                if(sheetType === settings.constants.SHEET_TYPE_A3) {
                    self.sheetConfig = settingsA3;
                    result = true;
                } else if(sheetType === settings.constants.SHEET_TYPE_8K) {
                    self.sheetConfig = settings8K;
                    result = true;
                } else if(sheetType === settings.constants.SHEET_TYPE_A4) {
                    self.sheetConfig = settingsA4;
                } else if(sheetType === settings.constants.SHEET_TYPE_16K) {
                    self.sheetConfig = settings16K;
                }

                return result;
            };

            /**
             * A3纸张栏目是否为3栏
             */
            self.is3Column = function() {
                return defaultSetting.page.a3Column == 3;
            };
            
        }
        
        return new ExamPapers();
    });
    
})();
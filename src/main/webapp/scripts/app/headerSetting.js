/**
 * 考生基本信息设置
 * Created by zhenglian on 2017/2/9.
 */
(function () {
    "use strict";

    define(['jquery', 'logger', 'uiwrapper', 'settings', 'defaultSetting', 'formToJson'],
        function ($, logger, ui, settings, defaultSetting) {
            
            var examPapers = null; //从首页传递过来
        
            var zkzhMaxCount = 16; //学生准考证号最大位数

            // 根据首页选择的题卡omr大小号确定考生准考证号最大位数
            function initMaxzkzhCount() { 
                logger.log('init max zkzh count');
                var baseSetting = examPapers.tempConfig.baseSetting;
                var omrSize = baseSetting.omrSize;
                if(omrSize == settings.constants.OMR_SIZE_BIGGER) {
                    zkzhMaxCount = 15;
                }
            }
            
            // 根据首页选择的题卡是否选择ab卷类型，初始化ab卷设置面板状态
            function initSheetABTypePanel() {
                logger.log('init sheet ab type panel status');
                var $form = $('#headerSettingForm');
                var baseSetting = examPapers.tempConfig.baseSetting;
                var enableABSheetType = baseSetting.enableABSheetType;
                var display = 'block';
                if(0 === Number(enableABSheetType)) {
                    display = 'none';
                }
                
                $form.find('.sheetTypePanel').css({
                    display: display
                });
            }

            //这里显示预览按钮
            function showPreviewBtn() {
                logger.log('show preview btn');
                $('.previewBtn').css({
                    display: 'block'
                });
            }
            
            function renderFormValues() {
                var headerSetting = examPapers.tempConfig.headerSetting;
                if(!$.isEmptyObject(headerSetting)) {
                    //TODO 
                }
            }
            
            //渲染页面内容
            function renderContent() {
                initMaxzkzhCount();
                initSheetABTypePanel();
                renderFormValues();
            }
            
            //添加表单验证
            function initValidation() {
                logger.log('init validation...');

                ui.formValidator.validate('#headerSettingForm', {
                    'zkzhCount': {
                        validators: {
                            notEmpty: {
                                message: '准考证号位数必填!'
                            },
                            between: {
                                min: 5,
                                max: zkzhMaxCount,
                                inclusive: true,
                                message: '准考证号位数只能是[%s, %s]之间!'
                            }
                        }
                    }
                });
            }

            //鼠标事件
            function initMouseHover() {
                $('.layout-item').off('mouseover').on('mouseover', function() {
                    $(this).removeClass('panel-info').addClass('panel-success');
                });

                $('.layout-item').off('mouseout').on('mouseout', function() {
                    $(this).removeClass('panel-success').addClass('panel-info');
                });
            }
            
            //预览
            function initPreview() {
                logger.log('init preview btn event');
                var $form = $('#headerSettingForm');
                $('.previewBtn').off('click').on('click', function() {
                    logger.log('click preview btn');
                     var valid = ui.formValidator.isFormValid($form);
                     if(!valid) {
                         ui.toastr.warning('请正确填写表单信息!');
                         return;
                     }
                     
                     var data = $form.formToJson();
                     
                     $.extend(true, examPapers.tempConfig.headerSetting, data);
                     //TODO preview answerSheet
                    
                });
            }
            
            // 初始化事件
            function initEvent() {
                logger.log('init event...');
                initValidation();
                initMouseHover();
                initPreview();
            }

            return {
                render: function (examPaperSettings) {
                    logger.log('render');
                    ui.pretty($('body'));
                    
                    examPapers = examPaperSettings;
                    showPreviewBtn();
                    renderContent();
                    initEvent();
                }
            };

        });
})();
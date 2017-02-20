/**
 * 考生基本信息设置
 * Created by zhenglian on 2017/2/9.
 */
(function () {
    "use strict";

    define(['jquery', 'logger', 'uiwrapper', 'settings', 'defaultSetting', '../utils/popover.custom', 'formToJson'],
        function ($, logger, ui, settings, defaultSetting, popover) {
            
            var rendered = false; //是否已经渲染过
        
            var examPapers = null; //从首页传递过来
        
            var zkzhMaxCount = 16; //学生准考证号最大位数

            //修改注意事项popover
            function renderUpdateAttention() {
                var title = '<b>修改注意事项</b> &emsp;(使用"|"表示换行符)';
                var content = '<form id="updateAttentionNotePopForm" class="form-horizontal">\
                                    <div class="form-group" style="margin-left:0; margin-right:0;">\
                                        <textarea id="updateAttentionNote" name="attentionNote" class="attentionNote form-control"\
                                            rows="8" style="padding:10px;"></textarea>\
                                    </div>\
                                </form>';
                var inputs = ['#updateAttentionNote'];
                var config = {
                    pop_btn: 'a.attentionNoteBtn',
                    title: title,
                    content: content,
                    inputs: inputs,

                    onShownEvent: popShownEvent,
                    onOkEvent: popOkEvent
                };
                popover.config(config).init();
            }

            function popShownEvent() {
                var attentionNote = settings.baseInfo.attentionNote;
                $('#updateAttentionNote').val(attentionNote);
                var tipObj = popover.getTipObj();
                //获取popover中的textarea设置显示的值
                $(tipObj).find('#updateAttentionNote').val(attentionNote);
                
                var $form = $(tipObj).find('#updateAttentionNotePopForm');
                
                ui.formValidator.validate($form, {
                    'attentionNote': {
                        validators: {
                            notEmpty: {
                                message: '注意事项不能为空!'
                            },
                            stringLength: {
                                max: 127,
                                message: '不能超过127个字符!'
                            }
                        }
                    }
                });
            }

            function popOkEvent() {
                var tipObj = popover.getTipObj();
                var $form = $(tipObj).find('#updateAttentionNotePopForm');
                var valid = ui.formValidator.isFormValid($form);
                
                if(valid) {
                    var attentionNote = $('#updateAttentionNote').val();
                    settings.baseInfo.attentionNote = attentionNote;
                    ui.toastr.success('注意事项修改成功!');
                } else {
                    ui.toastr.warning('请按要求填写注意事项!');
                }
                
                return valid;
            }
            
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

            //渲染页面表单数据
            function renderFormValues() {
                var headerSetting = examPapers.tempConfig.headerSetting;
                if(!$.isEmptyObject(headerSetting)) {
                    var $form = $('#headerSettingForm');
                    $form.find('#clazzName')[0].checked = (undefined != headerSetting.clazzName);
                    $form.find('input[name=stuInfo][value=' + headerSetting.stuInfo + ']')[0].checked=true;
                    $form.find('input[name=sheetABType][value=' + headerSetting.sheetABType + ']')[0].checked=true;
                    $form.find('input[name=studentCode][value=' + headerSetting.studentCode + ']')[0].checked=true;
                    $form.find('#zkzhCount').val(headerSetting.zkzhCount);
                    $form.find('#wrongFilling')[0].checked = (undefined != headerSetting.wrongFilling);
                    $form.find('input[name=absentAndTag][value=' + headerSetting.absentAndTag + ']')[0].checked=true;
                    $form.find('#attentionNote')[0].checked = (undefined != headerSetting.attentionNote);
                }
            }
            
            //渲染页面内容
            function renderContent() {
                initMaxzkzhCount();
                initSheetABTypePanel();
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
            
            // 初始化事件
            function initEvent() {
                logger.log('init event...');
                initValidation();
                initMouseHover();
            }

            return {
                render: function (examPaperSettings) {
                    if(!rendered) {
                        logger.log('render');
                        examPapers = examPaperSettings;
                        renderUpdateAttention();
                    }

                    renderContent();
                    initEvent();
                    renderFormValues();
                    rendered = true;
                }
            };

        });
})();
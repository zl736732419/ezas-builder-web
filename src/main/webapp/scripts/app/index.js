/**
 * 题卡制作主页
 * Created by zhenglian on 2017/1/18.
 */
(function () {
    "use strict";

    define(['jquery', 'logger', 'uiwrapper', 'settings', 'defaultSetting', '../lib/bookblock/page', './examPapers', 
            './headerSetting', 'ajaxwrapper', 'select', 'formToJson'],
        function ($, logger, ui, settings, defaultSetting, page, examPapers, headerSetting) {

            var id = null; // 题卡id
        
            var rendered = false; //是否已经渲染过界面
        
            // 加载科目信息
            function loadSubjects() {
                logger.log('load subjects...');
                var subjects = settings.subjects;
                //{name:'语文', value:1}
                var $curSubject = $('#curSubject');
                $curSubject.empty();
                var html = '';
                var subject = null;
                for (var i = 0; i < subjects.length; i++) {
                    subject = subjects[i];
                    html += '<option value=' + subject.value + '>' + subject.name + '</option>';
                }
                $curSubject.html(html);
                $curSubject.selectpicker('refresh');
            }

            //隐藏制作题卡按钮
            function initMakeBtnStatus() {
                var $menuBar = $('.menu-tool-btns');
                $menuBar.find('#bb-nav-make').hide();
            }

            //上一步
            function initPrevBtnClick() {
                var $menuBar = $('.menu-tool-btns');
                $menuBar.find('#bb-nav-prev').off('click').on('click', function () {
                    logger.log('prev btn click');

                    var $form = $('#headerSettingForm');
                    ui.formValidator.resetForm($form);
                    
                    $menuBar.find('#bb-nav-make').css({
                        display: 'none'
                    });
                    
                    page.bb.prev();
                });
            }

            //下一步
            function initNextBtnClick() {
                var $menuBar = $('.menu-tool-btns');
                var $form = $('#baseSettingForm');
                $menuBar.find('#bb-nav-next').off('click').on('click', function () {
                    logger.log('next btn click');
                    var valid = ui.formValidator.isFormValid($form);
                    if(!valid) {
                        ui.toastr.warning('请正确填写表单数据!');
                        return;
                    }
                    
                    var baseSetting = $form.formToJson();
                    $.extend(true, examPapers.tempConfig.baseSetting, baseSetting);
                    
                    $menuBar.find('#bb-nav-make').css({
                        display: 'inline-block'
                    });

                    page.bb.next();
                });
            }

            //制作题卡
            function initMakeBtnClick() {
                var $menuBar = $('.menu-tool-btns');
                var $form = $('#headerSettingForm');
                $menuBar.find('#bb-nav-make').off('click').on('click', function () {
                    logger.log('make btn click');

                    var valid = ui.formValidator.isFormValid($form);
                    if(!valid) {
                        ui.toastr.warning('请正确填写表单数据!');
                        return;
                    }
                    
                    var headerSetting = $form.formToJson();
                    $.extend(true, examPapers.tempConfig.headerSetting, headerSetting);
                    
                    
                    //TODO
                    
                });
            }
            
            //处理工具栏上的按钮事件
            function initMenuBtns() {
                initMakeBtnStatus();
                initPrevBtnClick();
                initNextBtnClick();
                initMakeBtnClick();
            }

            //添加表单验证
            function initValidation() {
                logger.log('init validation...');
                ui.formValidator.validate('#baseSettingForm', {
                    'num': { //最大5张
                        validators: {
                            notEmpty: {
                                message: '题卡页数不能为空!'
                            },
                            greaterThan: {
                                value: 0,
                                inclusive: false,
                                message: '题卡页数必须大于0'
                            },
                            lessThan: {
                                value: 11,
                                inclusive: false,
                                message: '题卡页数必须小于11张'
                            }
                        }
                    },
                    'curSubject': {
                        notEmpty: {
                            message: '当前科目不能为空!'
                        }
                    },
                    'title': {
                        validators: {
                            stringLength: {
                                max: defaultSetting.title.nums,
                                trim: 'trim',
                                message: '考试标题不能超过%s个字!'
                            },
                            notEmpty: {
                                message: '考试标题不能为空!'
                            }
                        }
                    },
                    'subTitle': {
                        validators: {
                            stringLength: {
                                max: defaultSetting.title.nums,
                                trim: 'trim',
                                message: '科目标题不能超过%s个字!'
                            }
                        }
                    }
                });
            }

            //处理改变题卡类型事件
            function changeSheetTypePanelStatus() {
                var $a3Columns = $('.a3Columns');
                var sheetType = Number($('select#sheetType').selectpicker('val'));
                if (examPapers.isA3Sheet(sheetType)) {
                    $a3Columns.css({
                        display: 'block'
                    });
                } else {
                    $a3Columns.css({
                        display: 'none'
                    });
                }
            }

            // 处理题卡类型改变事件
            function initUpdateSheetType() {
                $('#sheetType').on('change', function () {
                    changeSheetTypePanelStatus();
                });
            }

            // 初始化事件
            function initEvent() {
                logger.log('init event...');

                initMenuBtns();
                initValidation();
                initUpdateSheetType();
            }
            
            // 渲染基本信息设置界面数据
            function renderBaseSettingData() {
                baseSetting.render();
            }
            

            // 渲染考生信息设置页面数据
            function renderHeaderSettingData() {
                headerSetting.render(examPapers);
            }
            
            //渲染页面表单数据
            function renderFormValues() {
                var baseSetting = examPapers.tempConfig.baseSetting;
                if(!$.isEmptyObject(baseSetting)) {
                    var $form =$('#baseSettingForm');
                    
                    var mainTitle = (baseSetting.mainTitle === undefined ? '' : baseSetting.mainTitle);
                    var subTitle = (baseSetting.subTitle === undefined ? '' : baseSetting.subTitle);
                    
                    $form.find('#mainTitle').val(mainTitle);
                    $form.find('#subTitle').val(subTitle);
                    
                    $form.find('select#curSubject').selectpicker('val', baseSetting.curSubject);
                    $form.find('select#curSubject').selectpicker('refresh');
                    
                    $form.find('select#sheetType').selectpicker('val', baseSetting.sheetType);
                    $form.find('select#sheetType').selectpicker('refresh');
                 
                    $form.find('input[name=a3Column][value=' + baseSetting.a3Column + ']')[0].checked=true;
                    
                    $form.find('#pageNum').val(baseSetting.pageNum);
                    
                    $form.find('input[name=printType][value=' + baseSetting.printType + ']')[0].checked=true;
                    $form.find('input[name=enableABSheetType][value=' + baseSetting.enableABSheetType + ']')[0].checked=true;
                    $form.find('input[name=sheetColor][value=' + baseSetting.sheetColor + ']')[0].checked=true;
                    $form.find('input[name=gridType][value=' + baseSetting.gridType + ']')[0].checked=true;
                    $form.find('input[name=copyRight]')[0].checked=(undefined != baseSetting.copyRight);
                    $form.find('input[name=studentTemplateEnable]')[0].checked=(undefined != baseSetting.studentTemplateEnable);
                }
            }
            
            var baseSetting = {
                render: function () {
                    if(!rendered) {
                        logger.log('render');
                        //初始化页面翻页效果
                        page.init(renderBaseSettingData, renderHeaderSettingData);
                        ui.pretty($('body'));
                        loadSubjects();
                    }

                    renderFormValues();
                    initEvent();
                    rendered = true;
                }
            };
            
            return baseSetting;

        });
})();
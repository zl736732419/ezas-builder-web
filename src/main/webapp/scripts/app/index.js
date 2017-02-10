/**
 * 题卡制作主页
 * Created by zhenglian on 2017/1/18.
 */
(function() {
    "use strict";
    
    define(['jquery', 'logger', 'uiwrapper', 'settings', 'defaultSetting'], 
        function($, logger, ui, settings, defaultSetting) {
        
        // 加载科目信息
        function loadSubjects() {
            logger.log('load subjects...');
            var subjects = settings.subjects;
            //{name:'语文', value:1}
            var $curSubject = $('#curSubject');
            $curSubject.empty();
            var html = '';
            var subject = null;
            for(var i = 0; i < subjects.length; i++) {
                subject = subjects[i];
                html += '<option value=' + subject.value + '>' + subject.name + '</option>';
            }
            $curSubject.html(html);
            $curSubject.selectpicker('refresh');
        }
        
        // 重新设置按钮显示文本
        function resetBtns() {
            logger.log('reset btns...');
            $('#savebtn').remove();
            $('#cancelbtn').attr('id', 'nextbtn').text('下一步');
        }
        
        //添加表单验证
        function initValidation() {
            logger.log('init validation...');
            ui.formValidator.validate('#baseSettingForm',{
                'pageNum': { //最大5张
                    validators : {
                        notEmpty: {
                            message: '题卡页数不能为空!'
                        },
                        greaterThan : {
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
                'mainTitle': {
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
        
        //加载点击下一步点击事件
        function initNextStep() {
            $('#nextbtn').off('click').on('click', function() {
                 //TODO save config data and jump to header setting page !
                
                window.location.href= app.rootPath + 'sheet/headerSetting';
                
            });
        }

        // 初始化事件
        function initEvent() {
            logger.log('init event...');
            initValidation();
            initNextStep();
        }
        
        return {
            render: function() {
                logger.log('render');
                ui.pretty($('body'));
                loadSubjects();
                resetBtns();
                initEvent();
            }
        };
        
    });
})();
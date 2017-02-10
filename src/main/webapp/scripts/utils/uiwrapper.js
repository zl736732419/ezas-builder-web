/**ui工具类
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(['jquery', 'logger', 'select', 'nicescroll', 'datapicker', 'formValidation', 'fwBootstrap'], function($, logger) {
        return {
            /**
             * 表单验证器
             * @param selector
             */
            formValidator: {
                /**
                 * 判断当前form是否通过验证
                 * @param selector
                 * @returns {*|Boolean|null}
                 */
                isFormValid : function(form) {
                    logger.log('check form value is valid or not ...');
                    var validator = $(form).formValidation('validate')
                        .data('formValidation');
                    return validator.isValid();
                },
                /**
                 * 清空当前表单验证状态
                 * @param selector
                 */
                resetForm: function(form) {
                    logger.log('reset form ...');
                    var validator = $(form).formValidation('validate')
                        .data('formValidation');
                    validator.resetForm();
                },
                /**
                 * 对某一个字段重新进行验证
                 * 对于已经存在的字段进行重新验证
                 */
                revalidateExistField: function(form, fieldId) {
                    logger.log('validate exist field');
                    $(form).data('formValidation').revalidateField(fieldId);
                },
                /**
                 * 对新增的字段进行验证
                 * 主要用于动态增加字段验证
                 */
                revalidateNewField: function(form, field, options) {
                    logger.log('validate new field');
                    $(form).data('formValidation').addField(field, options);
                },
                /**
                 * 删除对某个字段的验证
                 */
                removeField: function(form, field) {
                    logger.log('remove field');
                    $(form).data('formValidation').removeField(field);
                },
                validate: function(form, opts) {
                    logger.log('validate form');
                    var setting={
                        err: {
                            container: 'tooltip'
                        },
                        icon: {
                            valid: 'glyphicon glyphicon-ok',
                            invalid: 'glyphicon glyphicon-remove',
                            validating: 'glyphicon glyphicon-refresh'
                        }
                    };

                    setting.fields=opts;
                    $(form).formValidation(setting);
                    $(form).on('submit',function(e){
                        e.preventDefault();
                        return false;
                    });
                }
            },
            nicescroll : function() {
                logger.log('nicescroll');
                $('.ezas-nicescroll').niceScroll({
                    cursorwidth: '10px',
                    enablekeyboard: false //禁止键盘方向键滚动

                });
            },
            pretty: function(html, opts) {
                logger.log('pretty ui...');
                this.nicescroll();

                var $html = $(html);
                var _opts ={
                    dataFormat:'yyyy-mm-dd'
                };

                if(opts){
                    $.extend(true,_opts,opts);
                }

                $html.find('input.date-picker').datetimepicker({
                    autoclose : true,
                    format : _opts.dataFormat,
                    weekStart : 1,
                    todayBtn : 1,
                    minView : 3
                }).next().on('click', function() {
                    $(this).prev().focus();
                });

                $html.find('select.selectpicker').each(function(){
                    var $select = $(this);
                    if($select.attr('disabled')){
                        $select.selectpicker().css({'background-color':'#eee'});
                        $select.next().css({'background-color':'#eee'});
                    }else{
                        $select.selectpicker({ noneResultsText: '没有结果与{0}匹配',noneSelectedText:'请选择'});
                        if($select.find('>option').size() > 10){
                            $select.next().find('div.dropdown-menu ul').css({'overflow-y':'auto','height':'200px'});
                        }
                        $select.next().css({'width':'100%'});
                    }
                });

                if(getBrowser().isMobile()){
                    $html.find('select.selectpicker').selectpicker('mobile');
                }
            }
        };
    });
})();

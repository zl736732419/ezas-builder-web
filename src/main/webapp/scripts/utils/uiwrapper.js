/**ui工具类
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(['jquery'], function() {
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
                    var validator = $(form).formValidation('validate')
                        .data('formValidation');
                    return validator.isValid();
                },
                /**
                 * 清空当前表单验证状态
                 * @param selector
                 */
                resetForm: function(form) {
                    var validator = $(form).formValidation('validate')
                        .data('formValidation');
                    validator.resetForm();
                },
                /**
                 * 对某一个字段重新进行验证
                 * 对于已经存在的字段进行重新验证
                 */
                revalidateExistField: function(form, fieldId) {
                    $(form).data('formValidation').revalidateField(fieldId);
                },
                /**
                 * 对新增的字段进行验证
                 * 主要用于动态增加字段验证
                 */
                revalidateNewField: function(form, field, options) {
                    $(form).data('formValidation').addField(field, options);
                },
                /**
                 * 删除对某个字段的验证
                 */
                removeField: function(form, field) {
                    $(form).data('formValidation').removeField(field);
                },
                validate: function(form, opts) {
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
                $('.as-nicescroll').niceScroll({
                    cursorwidth: '10px',
                    enablekeyboard: false //禁止键盘方向键滚动

                });
            }
        };
    });
})();

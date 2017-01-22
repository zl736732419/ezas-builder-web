/**
 * ajax工具类
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';

    
    define(['jquery'], function($) {
        var Method = {GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE', OPTIONS: 'OPTIONS'};
        var DataType = {JSON: 'json', HTML: 'html', TEXT: 'text', JSONP: 'jsonp', XML: 'xml'};
        //执行ajax请求
        function doAjax(opts) {
            var setting = {
                url: opts.url,
                //contentType	: 'application/json',
                dataType: opts.dataType,
                type: opts.type,
                async: opts.async,
                //data: JSON.stringify(opts.data),
                data: opts.data,
                cache: false,
                success: function (data) {
                    opts.callback
                    && opts.callback(data);
                },
                error: function (data) {
                    console.info(data);
                    toastr.error('发生错误!');
                    opts.error && $.utils.isFunction(opts.error) && opts.error();
                }
            };

            if (opts.contentType) {
                setting.contentType = opts.contentType;
            }

            $.ajax(setting);
        }

        return {
            sync: {
                getJson: function (url, data, callback, error) {
                    doAjax({
                        url: url,
                        dataType: DataType.JSON,
                        type: Method.GET,
                        async: false,
                        callback: callback,
                        error: error,
                        data: data
                    });
                }
            },
            async: {
                getXml: function (url, callback, error) {
                    doAjax({
                        url: url,
                        dataType: DataType.XML,
                        type: Method.GET,
                        async: true,
                        callback: callback,
                        error: error
                    });
                },
                getJson: function (url, data, callback, error) {
                    doAjax({
                        url: url,
                        dataType: DataType.JSON,
                        type: Method.GET,
                        async: true,
                        callback: callback,
                        error: error,
                        data: data
                    });
                },
                postJson: function (url, data, callback, error) {
                    doAjax({
                        url: url,
                        contentType: 'application/json',
                        dataType: DataType.JSON,
                        type: Method.POST,
                        async: true,
                        callback: callback,
                        error: error,
                        data: JSON.stringify(data)
                    });
                },
                postJsonByForm: function (url, data, callback, error) {
                    doAjax({
                        url: url,
                        dataType: DataType.JSON,
                        type: Method.POST,
                        async: true,
                        callback: callback,
                        error: error,
                        data: data
                    });
                },
                /**
                 * 防post表单提交，不能使用application/json的形式提交数据
                 */
                putJson: function (url, data, callback, error) {
                    if (data == null || data == undefined) {
                        data = {};
                    }
                    data._method = Method.PUT;

                    doAjax({
                        url: url,
                        dataType: DataType.JSON,
                        type: Method.POST,
                        async: true,
                        callback: callback,
                        error: error,
                        data: data
                    });
                },
                deleteJson: function (url, data, callback, error) {
                    if (data == null || data == undefined) {
                        data = {};
                    }
                    data._method = Method.DELETE;

                    doAjax({
                        url: url,
                        dataType: DataType.JSON,
                        type: Method.POST,
                        async: true,
                        callback: callback,
                        error: error,
                        data: data
                    });
                }
            }
        }
    });
})();

/**
 * 用于选择题组件缓存信息
 * Created by zhenglian on 2017/1/22.
 */
(function() {
    'use strict';
    
    define(function() {
        return {
            choiceQuestion: { //选择题参数，这里记录选择题产生的配置参数，这些参数由程序自动更新，请不要修改
                choiceQuestionTitle: '选择题',
                orientation: 1, //选择题中只能出现一种排列方式
                groupNum: null, //当前绘制选择题的方式(自动排列、分组排列)
                startVerHeaderNum: null, //创建选择题从垂直同步头开始的个数，便于后面绘制外围矩形窗口
                startNum:null,
                endNum: null,
                choiceOption: null, //每题选项
                otherChoiceOption: null,
                horHeaderNum: null, //当前已经占用的水平同步头数
                verHeaderNum: null, //当前已经占用的垂直同步头数,已经加上了startVerHeaderNum
                outlineG: null, //记录当前选择题的外围矩形
                preGroupNum: null, //上一次选择题分组排列方式，主要是为了方便自动排列时调整位置
                groupQuestionNum: null, //每组题数
                firstCreate:true, //是否是第一次创建,如果不是第一次创建/title/oritentation不能改变
                maxPerVerHeaderNum: 0 //一行中最大的垂直同步头数
            },
            baseInfo:{
                data: null,
                isEdit: false
            } //基本信息
        };
    });
    
})();


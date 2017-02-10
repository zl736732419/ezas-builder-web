<#include "../taglib/html.ftl"/>
<#include "headerBar.ftl">
<#import "../taglib/commons/dashboard.ftl" as dashboard/>
<#import "../taglib/commons/form.ftl" as form/>
<#assign css=['header', 'baseSetting']>
<@html entryjs="index" jsMethod="render" css=css title="题卡制作" scroll="true">
    <#--头部信息-->
    <@headerBar title="题卡制作"/>

    <#--页面内容-->
    <@dashboard.blankbar/>
    <@dashboard.content>
        <@dashboard.stepBar orderNum="1" tip="完善基础设置(进行题卡页面纸张类型、OMR型号等参数配置)"/>
        <@dashboard.blankbar/>
        <@form.edit id="baseSettingForm">
            <@form.formGroup>
                <@form.coln_m labelFor="mainTitle" labelText="考试标题" labelColClass="col-sm-2" divColClass="col-sm-8">
                    <@form.input  id="mainTitle" name="mainTitle" value=""  placeholder="请输入考试标题"/>
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="subTitle" labelText="科目标题" labelColClass="col-sm-2" divColClass="col-sm-8">
                    <@form.input id="subTitle" name="subTitle" value=""  placeholder="请输入科目标题"/>
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="curSubject" labelText="科目" labelColClass="col-sm-2" divColClass="col-sm-8">
                    <@form.select id="curSubject" name="curSubject"
                    attrs="data-size='10' data-width='100%' data-actions-box='true' data-live-search='true'">
                    <#--js代码中添加对应的科目-->
                    </@form.select>
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="sheetType" labelText="题卡类型" labelColClass="col-sm-2" divColClass="col-sm-5">
                    <@form.select id="sheetType" name="sheetType" 
                        attrs="data-size='10' data-width='100%' data-actions-box='true' data-live-search='true'">
                        <#assign sheetTypes=['A3', 'A4', '8开(390mm x 270mm)', '16开(195mm x 270mm)']>
                        <#list sheetTypes as sheetType>
                            <#if sheetType='A4'>
                                <@form.option text="${sheetType}" value="${sheetType_index+1}" 
                                    attrs="selected='selected' style='border-bottom: 1px solid #ccc;'"/>
                            <#else>
                                <@form.option text="${sheetType}" value="${sheetType_index+1}"/>
                            </#if>
                        </#list>
                    </@form.select>
                </@form.coln_m>
                <div class="a3Columns">
                    <@form.radioGroup radios=[
                        {'id':'threeColumns', 'name':'a3Column', 'text':'三栏', 'value':'3', 'checked':'true'},
                        {'id':'twoColumns', 'name':'a3Column', 'text':'两栏', 'value':'2'}] />
                </div>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="pageNum" labelText="题卡页数" labelColClass="col-sm-2" divColClass="col-sm-5">
                    <@form.input id="pageNum" name="pageNum" value="1"  placeholder="请输入题卡页数"/>
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="enableABSheetType" labelText="AB卷" labelColClass="col-sm-2 noTopPadding" divColClass="col-sm-8">
                    <@form.radioGroup radios=[
                        {'id':'enableAB', 'name':'enableABSheetType', 'text':'A/B卷', 'value':'1'},
                        {'id':'disableAB', 'name':'enableABSheetType', 'text':'无', 'value':'0', 'checked': 'true'}] />
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="sheetColor" labelText="题卡颜色" labelColClass="col-sm-2 noTopPadding" divColClass="col-sm-8">
                    <@form.radioGroup radios=[
                        {'id':'blackSheet', 'name':'sheetColor', 'text':'黑白卡', 'value':'1', 'checked':'true'},
                        {'id':'redSheet', 'name':'sheetColor', 'text':'套红卡', 'value':'2'}] />
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="printType" labelText="打印类型" labelColClass="col-sm-2 noTopPadding" divColClass="col-sm-8">
                    <@form.radioGroup radios=[
                        {'id':'printSingle', 'name':'printType', 'text':'单面', 'value':'1'},
                        {'id':'printDouble', 'name':'printType', 'text':'双面', 'value':'2', 'checked': 'true'}] />
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="gridType" labelText="方格类型" labelColClass="col-sm-2 noTopPadding" divColClass="col-sm-8">
                    <@form.radioGroup radios=[
                        {'id':'rectGrid', 'name':'gridType', 'text':'矩形(&nbsp;<img alt="" src="${request.contextPath}/static/css/images/grid_rect.png">&nbsp;)', 'value':'1', 'checked': 'true'},
                        {'id':'bracketGrid', 'name':'gridType', 'text':'中括号(&nbsp;<img alt="" src="${request.contextPath}/static/css/images/grid_bracket.png">&nbsp;)', 'value':'2'}] />
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="omrSize" labelText="OMR" labelColClass="col-sm-2" divColClass="col-sm-8">
                    <@form.radioGroup radios=[
                        {'id':'omrBigger', 'name':'omrSize', 'text':'大号', 'value':'1', 'checked': 'true'},
                        {'id':'omrSmaller', 'name':'omrSize', 'text':'小号', 'value':'2'}] />
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="copyRight" labelText="版权信息" labelColClass="col-sm-2" divColClass="col-sm-8">
                    <@form.checkbox id="copyRight" name="copyRight" value="1" text="启用" checked="true"/>
                </@form.coln_m>
            </@form.formGroup>
            <@form.formGroup>
                <@form.coln_m labelFor="studentTemplateEnable" labelText="学生模板" labelColClass="col-sm-2" divColClass="col-sm-8">
                    <@form.checkbox id="studentTemplateEnable" name="studentTemplateEnable" value="1" text="启用" tip="(导出含学生信息的题卡时使用)"/>
                </@form.coln_m>
            </@form.formGroup>
        </@form.edit>

        <#--操作提示-->
        <@dashboard.tip>
            <strong><span class="fa fa-info-circle fa-2x"></span><span class="tip-title">快捷设置：</span></strong> 
            只需添加<strong><span class="text text-warning">考试标题</span></strong>、
            <strong><span class="text text-warning">科目标题</span></strong>
            并选择<strong><span class="text text-warning">科目</span></strong>、
            <strong><span class="text text-warning">题卡类型</span></strong>
        即可完成设置.<br/>您可以通过右上角的<strong><span class="text text-warning">预览</span></strong>按钮实时预览题卡生成的效果哦~~~
        </@dashboard.tip>
    
    </@dashboard.content>
</@html>
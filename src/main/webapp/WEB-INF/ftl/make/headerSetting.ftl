<#import "../taglib/commons/dashboard.ftl" as dashboard/>
<#import "../taglib/commons/form.ftl" as form/>

<#macro layout class="" headerCls="" title="">
<div class="col-sm-4 ${class}">
    <div class="form-group" style="margin-left:0;">
        <div class="panel panel-info layout-item">
            <div class="panel-heading layout-heading ${headerCls}">${title}</div>
            <div class="panel-body">
                <div class="checkbox">
                    <#nested >
                </div>
            </div>
        </div>
    </div>
</div>
</#macro>

<#macro headerSetting>
<div class="col-sm-offset-1 col-sm-10">
<#--页面内容-->
    <@dashboard.stepBar orderNum="2" tip="考生基本信息配置(包括姓名、准考证号、学校等参数配置)"/>
    <@form.edit id="headerSettingForm" showBtnGroups=false>
        <div class="row">
            <@layout class="studentInfoArea" headerCls="label-important" title="基本信息区">
                <@form.formGroup>
                    <@form.radio id="userName" name="userName" value="userName" text="姓名" checked="true" />
                    <@form.checkbox id="clazzName" name="clazzName" value="clazzName" text="班级" checked="true"/>
                    <br/>
                    <@form.radioGroup radios=[
                    {'id':'school', 'name':'stuInfo', 'text':'学校', 'value':'school', 'checked':'true'},
                    {'id':'grade', 'name':'stuInfo', 'text':'年级', 'value':'grade'},
                    {'id':'subjectName', 'name':'stuInfo', 'text':'科目', 'value':'subjectName'}] />
                </@form.formGroup>
            </@layout>

            <@layout class="sheetTypePanel" title="答题卡类型区">
                <@form.radioGroup radios=[
                {'id':'sheetAType', 'name':'sheetABType', 'text':'A', 'value':'1', 'checked':'true'},
                {'id':'sheetBType', 'name':'sheetABType', 'text':'B', 'value':'2'}] />
            </@layout>

            <@layout class="studentCodeArea" headerCls="label-important" title="考生标识区">
                <@form.radioGroup radios=[
                {'id':'qr', 'name':'studentCode', 'text':'二维码区', 'value':'qr'},
                {'id':'barCode', 'name':'studentCode', 'text':'条形码区', 'value':'barCode'},
                {'id':'zkzh', 'name':'studentCode', 'text':'准考证号', 'value':'zkzh', 'checked':'true'}] />
                <label style="padding-left: 0;">
                    <div class="zkzhCountPanel" style="display:inline-block;">
                        <@form.input class="zkzhCount" id="zkzhCount" name="zkzhCount" value="6" attrs='style="width:40px;height:25px;display:inline-block;"' />
                    <@form.label labelFor="zkzhCount" labelText="位" colClass="noLeftPadding" />
                    </div>
                </label>
            </@layout>
        </div>
        <div class="row">
            <@layout class="fillingArea" title="正误填涂区">
                <@form.checkbox id="wrongFilling" name="wrongFilling" value="wrongFilling" text="启用" checked="true" attrs="readonly='readonly'" />
            </@layout>

            <@layout class="absentBreachArea" title="缺考违纪/标记区">
                <@form.radioGroup radios=[
                {'id':'absentAndBreach', 'name':'absentAndTag', 'text':'缺考违纪', 'value':'absentAndBreach', 'checked':'true'},
                {'id':'tagArea', 'name':'absentAndTag', 'text':'标记区', 'value':'tagArea'}] />
            </@layout>

            <@layout class="attentionArea" headerCls="label-important" title="注意事项区">
                <@form.checkbox id="attentionNote" name="attentionNote" value="attentionNote" text="启用" checked="true" />
                <a class="attentionNoteBtn mytooltip" href="javascript:void(0)"
                   data-toggle="popover">修改</a>
            </@layout>
        </div>
    </@form.edit>

    <@dashboard.blankbar />
    <#--操作提示-->
    <@dashboard.tip>
        <strong><span class="fa fa-info-circle fa-2x"></span><span class="tip-title">快捷设置：</span></strong>
        只需选择<strong><span class="text text-warning">基本信息</span></strong>、
        <strong><span class="text text-warning">考生标识</span></strong>
        并修改<strong><span class="text text-warning">注意事项</span></strong>
        即可完成设置.<br/>通过左上角的<strong><span class="text text-warning fa fa-eye"></span></strong>按钮开始设计题卡哦~~~
    </@dashboard.tip>
</div>

</#macro>
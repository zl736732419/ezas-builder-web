<#include "../taglib/html.ftl"/>
<#include "headerBar.ftl" />
<#include "baseSetting.ftl" />
<#include "headerSetting.ftl" />
<#import "../taglib/commons/dashboard.ftl" as dashboard/>
<#import "../taglib/commons/form.ftl" as form/>
<#assign css=['header', 'index', 'popover.custom', 'jquery.jscrollpane.custom', 'bookblock', 'custom']>
<#assign btns=[
{'class': 'logout-btn', 'icon_class': 'glyphicon glyphicon-log-out', 'icon_label': '退出'}
]>

<#macro content>
<div class="bb-custom-wrapper">
    <div id="bb-bookblock" class="bb-bookblock">
        <#nested >
    </div>
    <nav class="menu-tool-btns">
        <span id="bb-nav-prev" style="display:none;" title="上一步">&larr;</span>    
        <span id="bb-nav-next" title="下一步">&rarr;</span>
        <span id="bb-nav-make" title="设计题卡" style="display:none;"><i class="fa fa-check"></i></span>
    </nav>
</div>
</#macro>

<#macro item id="">
<div class="bb-item" id="item1">
    <div class="content">
        <div class="scroller">
            <#nested >
        </div>
    </div>
</div>
</#macro>

<@html entryjs="index" jsMethod="render" css=css title="题卡制作" scroll="true">
<#--头部信息-->
    <@headerBar title="题卡制作" btns=btns/>
    <@dashboard.blankbar/>

    <@dashboard.container>
        <@content>
            <@item id="item01">
                <#--基本信息设置-->
                <@baseSetting />
            </@item>
            <@item id="item02">
                <#--考生信息设置-->
                <@headerSetting />
            </@item>
        </@content>
    </@dashboard.container>

</@html>
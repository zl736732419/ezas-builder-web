<#include "../taglib/html.ftl"/>
<#include "headerBar.ftl" />
<#include "operationBar.ftl"/>
<#import "../taglib/commons/dashboard.ftl" as dashboard/>
<#import "../taglib/commons/form.ftl" as form/>
<#assign css=['header', 'make', 'operationBar', 'operationTip', 'bubbleTip', 'userGuide']>
<#assign btns=[
{'class': 'save-btn', 'icon_class': 'fa fa-floppy-o', 'icon_label': '保存'},
{'class': 'preview-btn', 'icon_class': 'fa fa-eye', 'icon_label': '预览'},
{'class': 'manage-btn', 'icon_class': 'fa fa-cogs', 'icon_label': '管理'},
{'class': 'logout-btn', 'icon_class': 'glyphicon glyphicon-log-out', 'icon_label': '退出'}
]>
<#assign elements=[
{'class': 'choice-item-btn', 'icon_class': 'glyphicon glyphicon-font', 'icon_label': '选择'},
{'class': 'fill-item-btn', 'icon_class': 'fa fa-bars', 'icon_label': '填空'},
{'class': 'zg-item-btn', 'icon_class': 'fa fa-window-maximize', 'icon_label': '主观'},
{'class': 'choosetodo-item-btn', 'icon_class': 'fa fa-heart', 'icon_label': '选做'},
{'class': 'composition-item-btn', 'icon_class': 'glyphicon glyphicon-th', 'icon_label': '作文'},
{'class': 'forbidden-item-btn', 'icon_class': 'fa fa-window-close-o', 'icon_label': '禁答'},
{'class': 'mistake-item-btn', 'icon_class': 'fa fa-pencil-square-o', 'icon_label': '改错'},
{'class': 'text-item-btn', 'icon_class': 'glyphicon glyphicon-text-size', 'icon_label': '文本'},
{'class': 'serial-item-btn', 'icon_class': 'fa fa-sort-numeric-asc', 'icon_label': '序号'},
{'class': 'image-item-btn', 'icon_class': 'fa fa-picture-o', 'icon_label': '图片'},
{'class': 'qr-item-btn', 'icon_class': 'fa fa-qrcode', 'icon_label': '二维码'},
{'class': 'line-item-btn', 'icon_class': 'fa fa-window-minimize', 'icon_label': '实线'},
{'class': 'dashline-item-btn', 'icon_class': 'fa fa-ellipsis-h', 'icon_label': '虚线'},
{'class': 'table-item-btn', 'icon_class': 'fa fa-table', 'icon_label': '表格'}
]>

<@html entryjs="make" jsMethod="render" css=css title="题卡制作" scroll="true">
<#--头部信息-->
    <@headerBar title="题卡制作" elements=elements btns=btns/>
    <@dashboard.blankbar/>
    <@operationBar/>


</@html>
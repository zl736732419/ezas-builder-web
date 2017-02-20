<!--顶部工具栏-->
<#macro headerBar title="" elements=[] btns=[]>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerBar">
                <span class="sr-only">菜单</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="javascript:void(0);">
                <img alt="Brand" src="${request.contextPath}/static/css/images/header_logo.png" width="25px" height="25px">
                <span class="header-title">题卡制作</span>
            </a>
        </div>

        <div class="collapse navbar-collapse" id="headerBar">
            
            <ul class="nav navbar-nav element-layout">
                <#list elements as element >
                    <li class="btn-item ${element.class} element-item" title="${element.icon_label}" data-toggle="tooltip" data-placement="bottom">
                        <a href="javascript:void(0)">
                            <span class="${element.icon_class}"></span>
                        </a>
                        <span class="icon-label">${element.icon_label}</span>
                    </li>
                </#list>
            </ul>
            
            <ul class="nav navbar-nav navbar-right">
                <#list btns as btn >
                    <li class="btn-item ${btn.class}" title="${btn.icon_label}" data-toggle="tooltip" data-placement="bottom">
                        <a href="javascript:void(0)">
                            <span class="${btn.icon_class}"></span>
                        </a>
                        <span class="icon-label">${btn.icon_label}</span>
                    </li>
                </#list>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<!--顶部工具栏 end-->
</#macro>
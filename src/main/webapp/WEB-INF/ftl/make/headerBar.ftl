<!--顶部工具栏-->
<#macro headerBar title="" elements=[] btns=[]>
<!--
<div class="headerPanel">
	<div class="headerLogo pull-left">
		<a href="javascript:void(0)"> <img
			src="${request.contextPath}/static/css/images/header_logo.png"> <span class="logoLabel">${title}</span>
		</a>
	</div>
	<div class="headerListPanel">
        <ul class="headerList">
			<#list elements as element>
                <li class="headerItem ${element.cls}" dialog="${element.dialog}">
                    <a href="javascript:void(0)">
                        <img src="${request.contextPath}/static/css/images/${element.icon}" />
                        <span class="answerLabel">${element.label}</span>
                    </a>
                </li>
			</#list>
        </ul>
	</div>
	<div class="operatorPanel pull-right">
		<div class="opt-parent">
			<#list btns as btn>
                <a href="${btn.url}" target="_blank" class="btn btn-success btn-sm ${btn.cls}">${btn.label}</a>
			</#list>
			<a href="sheet/list" target="_blank" class="btn btn-success btn-sm opt-btn">题卡管理</a>
			<a href="logout" target="_self" class="btn btn-danger btn-sm opt-btn">退出</a>
		</div>
	</div>
</div>
-->

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
            <ul class="nav navbar-nav navbar-right">
                <li><a class="saveBtn" href="javascript:void(0)" title="保存"><span class="fa fa-floppy-o"></span></a></li>
                <li><a class="previewBtn" href="javascript:void(0)" title="预览"><span class="fa fa-eye"></span></a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<!--顶部工具栏 end-->
</#macro>
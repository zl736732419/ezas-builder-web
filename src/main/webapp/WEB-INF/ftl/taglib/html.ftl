<#macro html entryjs="" jsMethod="" title="" css=[] scroll="false">
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<title>${title}</title>
		<#include "meta.ftl">
		<#list css as c>
			<link rel="stylesheet" href="${request.contextPath}/static/css/app/${c}.css"/>
		</#list>
	</head>
	<#compress>
	<body class="<#if scroll="true">ez-nicescroll</#if>" entry="${entryjs}" jsMethod="${jsMethod}" rootPath="${request.contextPath}/">
	  <#nested >
	</body>
	</#compress>
	<#import "script.ftl" as script>
	<@script.script entryjs="${entryjs}" jsMethod="${jsMethod}"/>
</html>
</#macro>
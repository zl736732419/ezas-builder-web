<#include "../taglib/html.ftl"/>
<#assign css=["answerSheet", "header", "operationBar", "operationTip", "userGuide"]/>
<@html entryjs="index" jsMethod="render" css=css title="题卡制作" scroll="true">
	<#include "headerBar1.ftl">
	<#include "content.ftl">
	<#include "dialogs.ftl">
	<#include "operationBar.ftl">
	<#include "operationDialog.ftl">
	
	<input type="hidden" name="id" value="${id!""}">
	<input type="hidden" name="examId" value="${examId!""}">
	<input type="hidden" name="subjectId" value="${subjectId!""}">
</@html>
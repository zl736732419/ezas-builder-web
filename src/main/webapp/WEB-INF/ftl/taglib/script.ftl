<#macro script entryjs="" jsMethod="">
	<#if entryjs != "">
		<script>
			window.app = {
			    contextPath: '${request.contextPath}', 
				rootPath: '${request.contextPath}/', 
				entryjs: '${entryjs}', 
				jsMethod: '${jsMethod}'
			};
		</script>
	</#if>
	<script data-main="${request.contextPath}/static/scripts/main" src="${request.contextPath}/static/scripts/require.js"

	<script>
	   var debug = ${RequestParameters["debug"]!"''"};
	   if(debug===""){
	     var v = + + new Date; //每次时间都不一样，所以每次浏览器刷新获取到的js代码都是不一样的
	     requirejs.config({
		    urlArgs : "v="+v,
		 });
	   }
	</script>
</#macro>
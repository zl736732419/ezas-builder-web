<!-- 题卡纸张选择框 -->
<div class="modal fade" id="settingDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">基础设置</h4>
            </div>
            <div class="modal-body">
                <form id="settingForm" class="form-horizontal" action="">
                	<div class="form-group">
                		<div class="col-sm-offset-1">
	                        <label for="mainTitle" class="col-sm-2 control-label">考试标题</label>
	                        <div class="col-sm-7">
	                            <input id="mainTitle" name="title" type="text" class="form-control ezasData"
	                                   placeholder="请输入考试标题">
	                        </div>
	                        <span class="col-sm-4 errSpan">
	                        </span>
	                    </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-1">
                            <label for="subTitle" class="col-sm-2 control-label">科目标题</label>
                            <div class="col-sm-7">
                                <input id="subTitle" name="subTitle" type="text" class="form-control ezasData"
                                       placeholder="请输入科目标题">
                            </div>
                            <span class="col-sm-4 errSpan">
	                        </span>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
	                        <label for="sheetType" class="col-sm-2 control-label">题卡类型</label>
	                        <div class="col-sm-7">
	                            <select id="sheetType" name="sheetType" class="selectpicker form-control ezasData">
	                            	<option value="1">A3</option>
	                            	<option value="2" selected="selected" style="border-bottom: 1px solid #ccc;">A4</option>
	                            	<option value="3">8开(390mm x 270mm)</option>
	                            	<option value="4">16开(195mm x 270mm)</option>
	                            </select>
	                        </div>
	                        <div class="a3Columns">
	                        	<label>
	                        		<input type="radio" class="css-checkbox a3Column ezasData" id="threeColumns"
                                        name="a3Column" value="3" checked>
	                        		<label class="css-radio-label labelTip" for="threeColumns">三栏</label>
	                        	</label>
	                        	<label>
	                        		<input type="radio" class="css-checkbox a3Column ezasData uncheck" id="twoColumns"
                                        name="a3Column" value="2">
	                        		<label class="css-radio-label labelTip" for="twoColumns">两栏</label>
	                        	</label>
	                        </div>
	                    </div>
                    </div>
    				<div class="form-group">
                    	<div class="col-sm-offset-1">
                            <label class="col-sm-2 control-label noTopPadding">AB卷</label>
                            <div class="col-sm-7">
                                <label>
                                    <input type="radio" id="enableAB" name="enableABSheetType" class="a3Column ezasData css-checkbox uncheck" value="1">
                                    <label class="css-radio-label labelTip" for="enableAB">A/B卷</label>
                                </label>
                                <label>
                                    <input type="radio" id="disableAB" name="enableABSheetType" class="a3Column css-checkbox ezasData " value="0" checked>
                                    <label class="css-radio-label labelTip" for="disableAB">无</label>
                                </label>
                            </div>
	                    </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
                            <label class="col-sm-2 control-label noTopPadding">题卡颜色</label>
                            <div class="col-sm-7">
                                <label>
                                    <input type="radio" id="blackSheet" name="sheetColor" class="a3Column ezasData css-checkbox uncheck" value="1" checked>
                                    <label class="css-radio-label labelTip" for="blackSheet">黑白卡</label>
                                </label>
                                <label>
                                    <input type="radio" id="redSheet" name="sheetColor" class="a3Column css-checkbox ezasData " value="2">
                                    <label class="css-radio-label labelTip" for="redSheet">套红卡</label>
                                </label>
                            </div>
	                    </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
	                        <label for="pageNum" class="col-sm-2 control-label">题卡页数</label>
	                        <div class="col-sm-7">
	                            <input type="text" id="pageNum" name="pageNum" class="form-control ezasData" value="1"
                                    placeholder="请输入字号">
	                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
	                        <label for="curSubject" class="col-sm-2 control-label">科目</label>
	                        <div class="col-sm-7">
	                           <select id="curSubject" name="curSubject" class="selectpicker form-control ezasData">
	                            	<!-- <option value="1">语文</option> -->
	                            </select>
	                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
	                        <label class="col-sm-2 control-label noTopPadding">打印类型</label>
	                        <div class="col-sm-7">
	                        	<label>
                                    <input type="radio" id="printSingle" name="printType" class="a3Column ezasData css-checkbox uncheck" value="1">
                                    <label class="css-radio-label labelTip" for="printSingle">单面</label>
                                </label>
                                <label>
                                    <input type="radio" id="printDouble" name="printType" class="a3Column css-checkbox ezasData " value="2" checked>
                                    <label class="css-radio-label labelTip" for="printDouble">双面</label>
                                </label>	
	                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
	                        <label for="copyRight" class="col-sm-2 control-label noTopPadding">版权信息</label>
	                        <div class="col-sm-7">
	                            <label>
	                        		<input class="copyRight css-checkbox ezasData" id="copyRight" name="copyRight"  value="1" type="checkbox" checked>
	                        		<label class="css-checkbox-label labelTip" for="copyRight">启用</label>
	                        	</label>
	                        </div>
	                    </div>
                    </div>
                    <div class="form-group">
                    	<div class="col-sm-offset-1">
	                        <label class="col-sm-2 control-label noTopPadding">方格类型</label>
	                        <div class="col-sm-7">
	                            <label>
	                        		<input type="radio" id="rectGrid" name="gridType" class="gridType css-checkbox ezasData" value="1" checked>
	                        		<label class="css-radio-label labelTip" for="rectGrid">矩形(<img alt="" src="${request.contextPath}/static/css/images/grid_rect.png">)</label>
	                        	</label>
	                        	<label>
	                        		<input type="radio" id="bracketGrid" name="gridType" class="gridType css-checkbox ezasData" value="2">
	                        		<label class="css-radio-label labelTip" for="bracketGrid">中括号(<img alt="" src="${request.contextPath}/static/css/images/grid_bracket.png">)</label>
	                        	</label>
	                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-1">
                            <label class="col-sm-2 control-label noTopPadding">OMR</label>
                            <div class="col-sm-7">
                                <label>
                                    <input type="radio" id="omrBigger" name="omrSize" class="omrSize css-checkbox ezasData" value="1" checked>
                                    <label class="css-radio-label labelTip" for="omrBigger">大号</label>
                                </label>
                                <label>
                                    <input type="radio" id="omrSmaller" name="omrSize" class="omrSize css-checkbox ezasData" value="2">
                                    <label class="css-radio-label labelTip" for="omrSmaller">小号</label>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-1">
                            <label for="studentTemplateEnable" class="col-sm-2 control-label noTopPadding">学生模板</label>
                            <div class="col-sm-7">
                                <label>
                                    <input class="studentTemplateEnable css-checkbox ezasData" id="studentTemplateEnable" name="studentTemplateEnable"  value="1" type="checkbox">
                                    <label class="css-checkbox-label labelTip" for="studentTemplateEnable">启用</label>
                                    <span class="text text-info">(导出含学生信息的题卡时使用)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--标题配置框-->
<div class="modal fade" id="titleDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">标题配置</h4>
            </div>
            <div class="modal-body">
                <form id="titleForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <label for="title2" class="col-sm-2 control-label">考试标题</label>
                        <div class="col-sm-8">
                            <input id="title2" name="title" type="text" class="form-control"
                                   placeholder="请输入考试标题">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subTitle2" class="col-sm-2 control-label">科目标题</label>
                        <div class="col-sm-8">
                            <input id="subTitle2" name="subTitle" type="text" class="form-control"
                                   placeholder="请输入科目标题">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--基本信息弹出框-->
<div class="modal fade" id="baseInfoDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">考生信息配置</h4>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                	<form id="baseInfoForm" class="form-horizontal" action="">
	                    <div class="row">
	                        <div class="col-sm-4 noRightPadding">
	                        	<div class="panel panel-default studentInfoArea">
								  <div class="panel-heading">基本信息</div>
								  <div class="panel-body">
								  	<div class="checkbox">
								  		<div class="form-group">
									  		<label class="blockLabel" style="display:inline-block;">
			                                    <input type="radio" class="css-checkbox ezasData" id="userName" name="userName" value="userName" checked>
			                                    <label class="css-radio-label labelTip" for="userName">姓名</label>
			                                </label>
                                            <label class="blockLabel"  style="display:inline-block; padding-left: 10px;">
                                                <input type="checkbox" class="css-checkbox ezasData" id="clazzName" name="clazzName" value="clazzName" checked>
                                                <label class="css-checkbox-label labelTip" for="clazzName">班级</label>
                                            </label>
			                                <label class="blockLabel"  style="display:inline-block;">
			                                    <input type="radio" class="css-checkbox ezasData" id="school" name="stuInfo" value="school" checked>
			                                    <label class="css-radio-label labelTip" for="school">学校</label>
			                                </label>
                                            <label class="blockLabel"  style="display:inline-block; padding-left: 10px;">
                                                <input type="radio" class="css-checkbox ezasData" id="grade" name="stuInfo" value="grade">
                                                <label class="css-radio-label labelTip" for="grade">年级</label>
                                            </label>
                                            <label class="blockLabel"  style="display:inline-block;">
                                                <input type="radio" class="css-checkbox uncheck ezasData" id="subjectName" name="stuInfo" value="subjectName">
                                                <label class="css-radio-label labelTip" for="subjectName">科目</label>
                                            </label>
			                            </div>
								  	</div>
								  </div>
								</div>
	                        </div>
	                        <div class="col-sm-3 noRightPadding sheetTypePanel">
	                        	<div class="panel panel-default">
								  <div class="panel-heading">答题卡类型</div>
								  <div class="panel-body">
								  	<div class="checkbox">
								  		<div class="form-group">
			                                <label class="blockLabel">
			                                    <input class="a3Column ezasData css-checkbox uncheck" id="sheetAType" name="sheetABType" type="radio" value="1" checked>
			                                    <label class="css-radio-label labelTip" for="sheetAType">A</label>
			                                </label>
			                                <label class="blockLabel">
			                                    <input class="a3Column css-checkbox ezasData" id="sheetBType" name="sheetABType"  type="radio" value="2">
			                                    <label class="css-radio-label labelTip" for="sheetBType">B</label>
			                                </label>
			                            </div>
								  	</div>
								  </div>
								</div>
	                        </div>
	                        <div class="col-sm-5">
	                        	<div class="panel panel-default studentCodeArea">
								  <div class="panel-heading">考生标识</div>
								  <div class="panel-body">
								  	<div class="checkbox">
		                                <div class="zkzhPanel form-group">
                                            <label class="blockLabel">
                                                <input type="radio" class='css-checkbox uncheck ezasData' id="qr" name="studentCode" value="qr">
                                                <label class="css-radio-label labelTip" for="qr">二维码区</label>
                                            </label>
                                            <label class="blockLabel">
                                                <input type="radio" class='css-checkbox uncheck ezasData' id="barCode" name="studentCode" value="barCode">
                                                <label class="css-radio-label labelTip" for="barCode">条形码区</label>
                                            </label>
                                            <label>
                                                <input type="radio" class="css-checkbox ezasData" id="zkzh" name="studentCode" value="zkzh" checked>
                                                <label class="css-radio-label labelTip" for="zkzh">准考证号</label>
                                            </label>
                                            <label>
                                                <div class="zkzhCountPanel" style="display:inline-block;">
                                                    <input type="text" class="form-control zkzhCount ezasData" style="width:40px;height:25px;display:inline-block;" name="zkzhCount" value="6">
                                                    <span>位</span>
                                                </div>
                                            </label>
		                                </div>
								  	</div>
								  </div>
								</div>
	                        </div>
                        </div>
                        <div class="row">
	                        <div class="col-sm-4">
	                        	<div class="panel panel-default fillingArea">
								  <div class="panel-heading">正误填涂</div>
								  <div class="panel-body">
								  	<div class="checkbox">
								  		<div class="form-group">
			                                <label>
			                                    <input type="checkbox" class="css-checkbox ezasData" id="wrongFilling" name="wrongFilling" value="wrongFilling" readonly="readonly" checked>
			                                    <label class="css-checkbox-label labelTip" for="wrongFilling">正误填涂</label>
			                                </label>
			                            </div>
								  	</div>
								  </div>
								</div>
	                        </div>
	                        <div class="col-sm-4">
	                        	<div class="panel panel-default absentBreachArea">
								  <div class="panel-heading">缺考违纪/标记区</div>
								  <div class="panel-body">
								  	<div class="checkbox">
								  		<div class="form-group">
			                                <label class="blockLabel">
			                                    <input type="radio" class="css-checkbox ezasData" id="absentAndBreach" name="absentAndTag" value="absentAndBreach" readonly="readonly" checked>
			                                    <label class="css-radio-label labelTip" for="absentAndBreach">缺考违纪</label>
			                                </label>
                                            <label class="blockLabel">
                                                <input type="radio" class="css-checkbox ezasData" id="tagArea" name="absentAndTag" value="tagArea" readonly="readonly">
                                                <label class="css-radio-label labelTip" for="tagArea">标记区</label>
                                            </label>
			                            </div>
								  	</div>
								  </div>
								</div>
	                        </div>
	                        <div class="col-sm-4">
	                        	<div class="panel panel-default attentionArea">
								  <div class="panel-heading">注意事项</div>
								  <div class="panel-body">
								  	<div class="checkbox">
								  		<div class="form-group">
			                                <label>
			                                    <input type="checkbox" class="css-checkbox ezasData" id="attentionNote" name="attentionNote" value="attentionNote" checked>
			                                    <label class="css-checkbox-label labelTip" for="attentionNote">注意事项</label>
			                                    <a class="attentionNoteBtn mytooltip" href="javascript:void(0)"
			                                            data-toggle="tooltip" data-container="body"
			                                            data-placement="top" title="修改">修改</a>
			                                </label>
			                            </div>
								  	</div>
								  </div>
								</div>
	                        </div>
	                    </div>
	            	</form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--修改注意事项-->
<div class="modal fade" id="updateAttentionNoteDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">修改注意事项</h4>&emsp;<h6 style="display:inline-block;">(使用"|"表示换行符)</h6>
            </div>
            <div class="modal-body">
                <form id="attentionNoteForm" class="form-horizontal">
                    <div class="form-group" style="margin-bottom:0;">
                        <div class="col-sm-12">
                            <label for="updateAttentionNote" class="control-label"></label>
                            <textarea id="updateAttentionNote" name="attentionNote" class="attentionNote form-control" style="width:100%"
                                      rows="8"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--禁答区-->
<div class="modal fade" id="forbiddenDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">修改禁答提示</h4>
            </div>
            <div class="modal-body">
                <form id="forbiddenForm" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-3 control-label noTopPadding">禁答类型</label>
                        <div class="col-sm-8">
                            <label>
                                <input type="radio" class="css-checkbox forbiddenType ezasData" 
                                    id="forbiddenWord" name="forbiddenType" value="1" checked>
                                <label class="css-radio-label labelTip" for="forbiddenWord">文字</label>
                            </label>
                            <label>
                                <input type="radio" class="css-checkbox forbiddenType ezasData uncheck" 
                                    id="forbiddenGraph" name="forbiddenType" value="2">
                                <label class="css-radio-label labelTip" for="forbiddenGraph">图形</label>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="forbiddenInfo" class="col-sm-3 control-label">禁答提示</label>
                        <div class="col-sm-8">
                            <input class="forbiddenInfo ezasData form-control" id="forbiddenInfo" name="forbiddenInfo" type="text">
                            <h6 style="display:inline-block;">(使用"|"表示换行符)</h6>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--主观题-->
<div class="modal fade" id="zgItemDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">主观题</h4>
            </div>
            <div class="modal-body">
                <form id="itemNumForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <label for="itemTitle" class="col-sm-2 control-label">标题</label>
                        <div class="col-sm-9">
                            <input id="itemTitle" name="itemTitle" type="text" class="form-control"  title="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="itemNums" class="col-sm-2 control-label">题号</label>
                        <div class="col-sm-9">
                            <input class="form-control" id="itemNums" name="itemNums" type="input" placeholder="连续题号用-分隔，不连续题号用,分隔">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <span class="text text-info">实例：1-5,6,9,10</span>
                            <span class="text text-danger">(请将输入法切换为英文输入)</span>
                        </div>
                    </div>
                    <div class="form-group noMargin">
                        <label class="col-sm-2 control-label noTopPadding">小题格式</label>
                        <div class="col-sm-8 noRightPadding">
                            <label>
                                <input class="css-checkbox bracketsType ezasData uncheck" id="zgItemParentheses" name="brackets" value="1"  type="radio" checked>
                                <label class="css-radio-label labelTip" for="zgItemParentheses">(1)______</label>
                            </label>&nbsp;&nbsp;
                            <label>
                                <input class="css-checkbox bracketsType ezasData" id="zgItemParenthesesNo"  name="brackets" value="2" type="radio">
                                <label class="css-radio-label labelTip" for="zgItemParenthesesNo">1.______</label>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--填空题-->
<div class="modal fade" id="fillItemDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">填空题</h4>
            </div>
            <div class="modal-body">
            	<div id="fillItemContainer" class="as-nicescroll">
	                <form id="fillItemNumForm" class="form-horizontal" action="">
	                    <div class="form-group noMargin">
	                        <label for="fillItemTitle" class="col-sm-2 control-label">标题名称</label>
	                        <div class="col-sm-8">
	                            <input id="fillItemTitle" name="fillItemTitle" type="text" class="form-control" value="填空题">
	                        </div>
	                    </div>

                        <div class="form-group noMargin">
                            <label class="col-sm-2 control-label noTopPadding">小题格式</label>
                            <div class="col-sm-8 noRightPadding">
	                            <label>
	                                <input class="css-checkbox bracketsType ezasData uncheck" id="parentheses" name="brackets" value="1"  type="radio" checked>
	                                <label class="css-radio-label labelTip" for="parentheses">(1)______</label>
	                            </label>&nbsp;&nbsp;
	                            <label>
	                                <input class="css-checkbox bracketsType ezasData" id="parenthesesNo"  name="brackets" value="2" type="radio">
	                                <label class="css-radio-label labelTip" for="parenthesesNo">1.______</label>
	                            </label>
	                        </div>
                        </div>

	                    <div class="form-group noMargin">
	                        <label class="control-label col-sm-2 noTopPadding">线条类型</label>
	                        <div class="col-sm-3 noRightPadding">
	                            <label>
	                                <input class="css-checkbox lineType ezasData uncheck" id="line" name="lineType" value="1"  type="radio" checked>
	                                <label class="css-radio-label labelTip" for="line">实线</label>
	                            </label>&nbsp;&nbsp;
	                            <label>
	                                <input class="css-checkbox lineType ezasData" id="dottedLine" name="lineType" value="2" type="radio">
	                                <label class="css-radio-label labelTip" for="dottedLine">虚线</label>
	                            </label>
	                        </div>
	                        <label for="lineNum" class="col-sm-2 control-label ">每行题数</label>
	                        <div class="col-sm-3">
	                            <input id="lineNum" name="lineNum" type="text" class="form-control" value="2">
	                        </div>
	                    </div>
	                    <div class="form-group fillItemPanel noMargin opts">
	                        <label for="itemNum" class="col-sm-2 control-label">题号</label>
	                        <div class="col-sm-3">
	                            <input id="itemNum" name="itemNum" type="text" class="form-control" >
	                        </div>
	                        
	                        <label for="itemNum_count" class="col-sm-2 control-label">小题数</label>
	                        <div class="col-sm-3">
                                <input class="form-control" id="itemNum_count" name="itemNum_count" value="1" type="text" >
                            </div>
	                        <label class="col-sm-2 control-label add-panel" style="text-align:left">
                                <a class="button button-circle button-tiny btn-add" href="javascript:void(0);">
                                    <i class="glyphicon glyphicon-plus"></i>
                                </a>
                            </label>
                            <label class="col-sm-2 control-label remove-panel" style="text-align:left; display: none;">
                                <a class="button button-circle button-tiny btn-remove" href="javascript:void(0);">
                                    <i class="glyphicon glyphicon-remove"></i>
                                </a>
                            </label>
	                    </div>
	                </form>
	             </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>
<!-- 选择题配置弹出框 -->
<div class="modal fade" id="choiceQuestionDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">选择题设置</h4>
                <div class="optsFirstPanel pull-right">
                    <a class="button button-circle button-tiny btn-add-first" href="javascript:void(0);">
                        <i class="glyphicon glyphicon-plus"></i>
                    </a>
                </div>
            </div>
            <div class="modal-body">
                <div id="choiceQuestionContainer" class="form-horizontal as-nicescroll">
                    <div class="form-group noMargin">
	                    <label for="choiceQuestionTitle" class="control-label col-sm-2">标题名称</label>
	                    <div class="col-sm-10">
		                    <input class="choiceQuestionTitle ezasData form-control"
                                id="choiceQuestionTitle" name="choiceQuestionTitle" value="选择题" type="text">
	                    </div>
                    </div>
                    <div class="form-group noMargin">
                        <label for="orientation" class="control-label col-sm-2">选项排列方式</label>
                        <div class="col-sm-10">
	                        <select class="selectpicker form-control ezasData orientation" id="orientation" name="orientation">
	                        	<option value="1" selected="selected">横选</option>
	                        	<option value="2">竖选</option>
	                        </select>
	                    </div>
                    </div>
                    <div class="questionItemsPanel">
                    	<div class="questionItemPanel">
                    		<div class="optsPanel opts">
                    			<a class="button button-circle button-tiny btn-remove" href="javascript:void(0);">
                    				<i class="glyphicon glyphicon-remove"></i>
                    			</a>
                    			<a class="button button-circle button-tiny btn-add" href="javascript:void(0);">
                    				<i class="glyphicon glyphicon-plus"></i>
                    			</a>
                    		</div>
		                    <form class="questionItemForm">
			                    <div class="form-group noMargin">
			                        <div class="col-sm-6 noPadding">
			                            <label class="control-label col-sm-4">起始题号</label>
			                            <div class="col-sm-8">
				                            <input class="startNum ezasData form-control" name="startNum" type="text" >
			                            </div>
			                        </div>
			                        <div class="col-sm-6 noPadding">
			                            <label class="control-label col-sm-4">结束题号</label>
			                            <div class="col-sm-8">
				                            <input class="endNum ezasData form-control" name="endNum" type="text">
			                            </div>
			                        </div>
			                    </div>
			                    <div class="form-group noMargin">
			                        <div class="col-sm-6 noPadding">
			                            <label class="control-label col-sm-4">每组题数</label>
			                            <div class="col-sm-8">
			                            	<select class="selectpicker form-control ezasData groupQuestionNum" name="groupQuestionNum">
				                            	<option value="3">3</option>
				                            	<option value="4">4</option>
				                            	<option value="5" selected="selected">5</option>
				                            	<option value="6">6</option>
				                            	<option value="7">7</option>
				                            	<option value="8">8</option>
				                            </select>
			                            </div>
			                        </div>
			                        <div class="col-sm-6 noPadding">
			                            <label class="control-label col-sm-4">题目选项</label>
			                            <div class="col-sm-8">
				                            <select class="selectpicker form-control ezasData choiceOption" name="choiceOption">
				                            	<option value="0">其他</option>
				                            	<option value="2">2</option>
				                            	<option value="3">3</option>
				                            	<option value="4" selected="selected">4</option>
				                            	<option value="5">5</option>
				                            	<option value="6">6</option>
				                            	<option value="7">7</option>
				                            </select>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="form-group noMargin">
                                    <div class="col-sm-6 noPadding">
			                            <label class="control-label col-sm-4 noTopPadding">题目类型</label>
			                            <div class="col-sm-8">
                                            <label>
                                                <input class="choiceType css-checkbox ezasData" id="typeSingle" name="choiceType" value="1" type="radio" checked>
                                                <label class="css-radio-label labelTip" for="typeSingle">单选</label>
                                            </label>
                                            <label>
                                                <input class="choiceType css-checkbox ezasData uncheck" id="typeMulti" name="choiceType" value="2"  type="radio" >
                                                <label class="css-radio-label labelTip" for="typeMulti">多选</label>
                                            </label>
			                            </div>
			                        </div>
				                    <div class="col-sm-6 optionPanel noPadding">
				                        <span class="text text-info" role="text">将生成 A,B,C,D 4个选项</span>
				                    </div>
				                </div>
			                </form>
			            </div>
		           	</div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--作文对话框-->
<div class="modal fade" id="compositionDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">作文题设置</h4>
            </div>
            <div class="modal-body" style="padding-top: 0;">
                <ul id="compositionTab" class="nav nav-tabs nav-pills">
                    <li data-tag="1" class="composition-tab-item active">
                        <a href="#zhComposition" data-toggle="tab">中文</a>
                    </li>
                    <li data-tag="2" class="composition-tab-item">
                        <a href="#enComposition" data-toggle="tab">英文</a>
                    </li>
                </ul>
                <div id="compositionTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="zhComposition">
                        <form id="compositionForm" class="form-horizontal">
                            <div class="form-group">
                                <label for="compositionTitle" class="control-label col-sm-2">标题名称</label>
                                <div class="col-sm-8">
                                    <input class="compositionTitle ezasData form-control" id="compositionTitle"
                                        name="compositionTitle" value="作文" type="text">
                                </div>
                            </div>
                            <div class="form-group common-group">
                            	<div class="col-sm-offset-2 col-sm-7">
	                                <label class="col-sm-4 noPadding">
	                                    <input type="checkbox" class="css-checkbox ezasData enableSmallComposition"
	                                        id="enableSmallComposition" name="enableSmallComposition" value="1">
	                                    <label class="css-checkbox-label labelTip" for="enableSmallComposition">小作文</label>
	                                </label>
									<label for="totalWordCount" class="control-label col-sm-3">总字数</label>
	                                <div class="col-sm-5 noPadding">
	                                    <select class="selectpicker form-control ezasData totalWordCount"
	                                        id="totalWordCount" name="totalWordCount">
	                                        <%--<option value="400">400</option>--%>
	                                    </select>
	                                </div>
	                             </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-7">
                                    <label class="col-sm-4 noPadding">
                                        <input type="checkbox" class="css-checkbox ezasData enableTipWordCount"
                                            id="enableWordCount" name="enableTipWordCount" value="1" checked>
                                        <label class="css-checkbox-label labelTip" for="enableWordCount">字数统计</label>
                                    </label>
                                    <div class="col-sm-8 noPadding">
                                        <span class="noPadding control-label col-sm-3 center">每隔</span>
                                        <div class="noPadding col-sm-4">
                                            <select class="selectpicker form-control ezasData tipWordCount"
                                                name="tipWordCount">
                                                <option value="100" selected="selected">100</option>
                                                <option value="150">150</option>
                                                <option value="200">200</option>
                                                <option value="400">400</option>
                                                <option value="600">600</option>
                                            </select>
                                        </div>
                                        <span class="noPadding control-label col-sm-3 center">提示</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="enComposition">
                        <form id="enCompositionForm" class="form-horizontal">
                            <div class="form-group">
                                <label class="control-label col-sm-4 noTopPadding">线条类型</label>
                                <div class="col-sm-8">
                                    <label>
                                        <input type="radio" class="css-checkbox lineType ezasData uncheck" id="compLine" name="lineType" value="1"  checked>
                                        <label class="css-radio-label labelTip" for="compLine">实线</label>
                                    </label>
                                    <label>
                                        <input type="radio" class="css-checkbox lineType ezasData" id="compDottedLine" name="lineType" value="2">
                                        <label class="css-radio-label labelTip" for="compDottedLine">虚线</label>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-4">绘制方式</label>
                                <div class="col-sm-8">
                                    <label>
                                        <input type="radio" class="css-checkbox drawType ezasData" id="drawEnd" name="drawType" value="1" checked>
                                        <label class="css-radio-label labelTip" for="drawEnd">到题卡末尾</label>
                                    </label>
                                    <label>
                                        <input type="radio" class="css-checkbox drawType ezasData uncheck" id="drawCustom" name="drawType" value="2" >
                                        <label class="css-radio-label labelTip" for="drawCustom">自定义</label>
                                    </label>
                                    <label class="cLinePanel" style="display:none;">
                                        绘制<input class="ezasData compositionLine form-control" name="compositionLine"
                                                type="text" value="50">行
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>
<!--主观题移到下一页配置框-->
<div class="modal fade" id="zgItemNextPageDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">主观题翻页配置</h4>
            </div>
            <div class="modal-body">
                <form id="zgItemNextPageForm" class="form-horizontal">
                    <div class="form-group">
	                    <div class="col-sm-12 hor-center">
		                    当前主观题元素共<span class="totalItem label label-info"></span>道小题,
	                    </div>
                    </div>
                    <div class="form-group">
	                    <div class="col-sm-12 hor-center">
                            移动
                            <input class="ezasData form-control nextItem" name="nextItem" value="1" type="text">
                            道小题
	                    </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="chooseToDoDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">选做题配置</h4>
            </div>
            <div class="modal-body">
                <form id="chooseToDoForm" class="form-horizontal">
                    <div class="form-group">
                        <label for="chooseToDoTitle" class="control-label col-sm-offset-1 col-sm-2">题目标题</label>
                        <div class="col-sm-8">
                            <input class="ezasData form-control chooseToDoTitle" id="chooseToDoTitle"
                                name="chooseToDoTitle" value="选做题" type="text">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="chooseToDoItems" class="control-label col-sm-offset-1 col-sm-2">选做题目</label>
                        <div class="col-sm-8">
                            <input class="ezasData form-control chooseToDoItems" id="chooseToDoItems"
                                name="chooseToDoItems" placeholder="1,2,3" type="text">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="chooseToDoNum" class="control-label col-sm-offset-1 col-sm-2">选做题数</label>
                        <div class="col-sm-8">
                            <input class="ezasData form-control chooseToDoNum" id="chooseToDoNum"
                                   name="chooseToDoNum" value="1" type="text">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <a class="pull-right" href="javascript:void(0);" id="chooseToDoBtn">修改提示>></a>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>
<!--改错题配置框-->
<div class="modal fade" id="mistakeCorrectionDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">改错题配置</h4>
            </div>
            <div class="modal-body">
                <form id="mistakeCorrectionForm" class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-4 noTopPadding">填空类型</label>
                        <div class="col-sm-4">
                            <label>
                                <input class="css-checkbox lineType ezasData uncheck" 
                                	id="mistakeLine" name="lineType" value="1"  type="radio" checked>
                                <label class="css-radio-label labelTip" for="mistakeLine">实线</label>
                            </label>
                            <label>
                                <input class="css-checkbox lineType ezasData" 
                                	id="mistakeDottedLine" name="lineType" value="2" type="radio">
                                <label class="css-radio-label labelTip" for="mistakeDottedLine">虚线</label>
                            </label>
                        </div>
                        <span class="text text-info col-sm-4">可通过右键菜单添加填空</span>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>
<!--插图配置框-->
<div class="modal fade bs-example-modal-lg" id="insetDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" style="display:inline-block;">插图设置</h4>
                <h6 style="display:inline-block;">(单击使用)</h6>
            </div>
            <div class="modal-body" style="padding:0;">
                <div class="row noMargin">
                    <div class="col-sm-2 noPadding">
                        <ul class="inset-menu">
							<li class="menu-item active">
								<a href="#" >插图库</a>
							</li>
                        </ul>
                        <div class="upload-panel">
                        	<div class="upload-tip mytooltip" title="大小不要超过3M，支持PNG, JPG, GIF等格式文件"
                                data-toggle="tooltip" data-placement="top">
	                        	<span class="fa fa-2x fa-cloud-upload"></span>
	                        	<em>上传</em>
                        	</div>
                        	<input type="file" class="file-uploader" name="file_upload" id="file_upload">
                        </div>
                    </div>
                    <div class="col-sm-10">
                    	<div class="opt-panel">
                    		<span class="opt-icon">icon</span>
                    		<span style="float:right;">
                    			<a class="manage-all opt-show">管理</a>
                    			<a class="multi-del opt-hide">删除</a>
                    			<a class="cancel-all opt-hide">取消选择</a>
                    		</span>
                    	</div>
                    	<div class="image-list">
                    		<div class="image-list-container">
                    			<ul class="image-box">
                    				<!-- <li class="image-item">
                    					<div class="image-view">
	                    					<img src="app/images/header_logo.png" width="100%"/>
	                    					<div class="image-mask">
	                    						<span class="select-icon fa fa-2x fa-check-circle-o"></span>
	                    					</div>
                    					</div>
                    					<p class="title-panel mytooltip" title="hello" data-toggle="tooltip" data-placement="top">
                    						<a class="fancybox" href="app/images/header_logo.png" title="Sample title">
                                                <span class="image-title">hello</span>
                    						</a>
                    					</p>
                    				</li> -->
                    			</ul>
                    		</div>
                    		<!-- 分页组件 -->
                    		<div class="mypager"></div>
                    	</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--二维码选框-->
<div class="modal fade" id="drawQrDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">二维码配置</h4>
            </div>
            <div class="modal-body">
                <form id="drawQrForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <label for="qrTitle" class="col-sm-2 control-label">标题</label>
                        <div class="col-sm-8">
                            <input type="input" id="qrTitle" name="qrTitle" class="form-control required"
                                  placeholder="请输入二维码标题">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="qrInfo" class="col-sm-2 control-label">数据信息</label>
                        <div class="col-sm-8">
                            <input id="qrInfo" name="qrInfo" type="text" class="form-control"
                                   placeholder="请输入二维码内容">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--绘制表格选框-->
<div class="modal fade" id="drawTableDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">表格配置</h4>
            </div>
            <div class="modal-body">
                <form id="drawTableForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <div class="col-sm-3">
                                <input type="text" id="row" name="row" class="form-control ezasData required"
                                       placeholder="行数">
                            </div>
                            <label for="row" class="col-sm-1 control-label noPadding">行</label>
                            <div class="col-sm-3">
                                <input type="text" id="col" name="col" class="form-control ezasData required"
                                       placeholder="列数">
                            </div>
                            <label for="col" class="col-sm-1 control-label noPadding">列</label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--表格选框-->
<div class="modal fade" id="autoBuildDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">表格配置</h4>
            </div>
            <div class="modal-body">
                <form id="autoBuildForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <div class="col-sm-offset-1">
                            <label class="col-sm-2 control-label noTopPadding">题卡类型</label>
                            <div class="col-sm-7">
                                <label>
                                    <input type="radio" id="autoBuildA3" name="sheetType" class="a3Column ezasData css-checkbox" value="1" checked>
                                    <label class="css-radio-label labelTip" for="autoBuildA3">A3</label>
                                </label>
                                <label>
                                    <input type="radio" id="autoBuildA4" name="sheetType" class="a3Column css-checkbox ezasData " value="2" >
                                    <label class="css-radio-label labelTip" for="autoBuildA4">A4</label>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>

<!--序号选框-->
<div class="modal fade" id="serialDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">添加编号</h4>
            </div>
            <div class="modal-body">
                <form id="serialForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <label class="col-sm-4 control-label" for="serialNum">编号</label>
                        <div class="col-sm-6">
                            <input class="serialNum ezasData css-checkbox form-control" type="text" id="serialNum" name="serialNum" placeholder="生成多个编号以,分隔" value="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label" for="serialNumType">编号类型</label>
                        <div class="col-sm-6">
                            <select id="serialNumType" name="serialNumType" class="selectpicker form-control ezasData">
                                <option value="1">①,②,③...</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary okBtn">确定</button>
            </div>
        </div>
    </div>
</div>
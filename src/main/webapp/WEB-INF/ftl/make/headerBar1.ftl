<!--顶部工具栏-->
<div class="headerPanel">
	<div class="headerLogo pull-left">
		<a href="javascript:void(0)"> <img
			src="${request.contextPath}/static/css/images/header_logo.png"> <span class="logoLabel">答题卡制作</span>
		</a>
	</div>
	<div class="headerListPanel">
		<ul class="headerList">
			<li class="headerItem basicSettingBtn" dialog="settingDialog">
				<a href="javascript:void(0)">
					<img src="${request.contextPath}/static/css/images/header_settings.png" />
					<span class="answerLabel">基础设置</span>
				</a>
			</li>
	       <!--  <li class="headerItem" dialog="titleDialog"><a
				href="javascript:void(0)"> <img src="${request.contextPath}/static/css/images/header_title.png" />
					<span class="answerLabel">题卡标题</span>
			</a></li> -->
			<li class="headerItem baseInfoBtn" dialog="baseInfoDialog"><a
				href="javascript:void(0)"> <img
					src="${request.contextPath}/static/css/images/header_baseinfo.png" /> <span class="answerLabel">基本信息</span>
			</a></li>
			<li class="headerItem choiceQuestionBtn" dialog="choiceQuestionDialog"><a href="javascript:void(0)"> <img
					src="${request.contextPath}/static/css/images/header_choicequestion.png" /> <span
					class="answerLabel">选择题</span>
			</a></li>
			<li class="headerItem fillItemBtn" dialog="fillItemDialog"><a
				href="javascript:void(0)"> <img
					src="${request.contextPath}/static/css/images/header_sentencequestion.png" /> <span class="answerLabel">填空题</span>
			</a></li>
			
			<li class="headerItem zgItemBtn" dialog="zgItemDialog"><a
				href="javascript:void(0)"> <img
					src="${request.contextPath}/static/css/images/header_zgitem.png" /> <span class="answerLabel">主观题</span>
			</a></li>
            <li class="headerItem chooseTodoBtn" dialog="chooseToDoDialog"><a href="javascript:void(0)"> <img
                    src="${request.contextPath}/static/css/images/header_choosetodo.png" /> <span
                    class="answerLabel">选做题</span>
            </a></li>
			<li class="headerItem compositionBtn" dialog="compositionDialog"><a href="javascript:void(0)"> <img
					src="${request.contextPath}/static/css/images/header_composition.png" /> <span
					class="answerLabel">作文</span>
			</a></li>
			<li class="headerItem forbiddenBtn" dialog="forbiddenDialog"><a href="javascript:void(0)"> <img
				src="${request.contextPath}/static/css/images/header_forbidden.png" /> <span
				class="answerLabel">禁答区</span>
			</a></li>
            <li class="headerItem mistakeBtn" dialog="mistakeCorrectionDialog"><a href="javascript:void(0)"> <img
                    src="${request.contextPath}/static/css/images/header_mistakecorrection.png" /> <span
                    class="answerLabel">改错题</span>
            </a></li>
            <li class="headerItem more-item moreBtn">
                <a class="more-icon" href="javascript:void(0)">
                    <img src="${request.contextPath}/static/css/images/header_more.png" />
                    <span class="answerLabel">工具</span>
                </a>
            </li>
		</ul>
	</div>
    <div class="tool-panel">
        <ul class="headerList col-sm-3">
            <li class="headerItem draw-text"><a href="javascript:void(0)"> <img
                    src="${request.contextPath}/static/css/images/header_text.png" /> <span
                    class="answerLabel">文本</span>
            </a></li>
            <li class="headerItem draw-serial" dialog="serialDialog"><a href="javascript:void(0)"> <img
                    src="${request.contextPath}/static/css/images/header_serial.png" /> <span
                    class="answerLabel">序号</span>
            </a></li>
            <li class="headerItem draw-image" dialog="insetDialog"><a href="javascript:void(0)">
                <img src="${request.contextPath}/static/css/images/header_image.png" />
                <span class="answerLabel">图片</span>
            </a></li>
            <li class="headerItem draw-qr" dialog="drawQrDialog"><a href="javascript:void(0)">
                <img src="${request.contextPath}/static/css/images/header_qr.png" />
                <span class="answerLabel">二维码</span>
            </a></li>
            <li class="headerItem draw-line"><a href="javascript:void(0)">
                <img src="${request.contextPath}/static/css/images/header_line.png" />
                <span class="answerLabel">实线</span>
            </a></li>
            <li class="headerItem draw-dashedLine"><a href="javascript:void(0)">
                <img src="${request.contextPath}/static/css/images/header_dashedLine.png" />
                <span class="answerLabel">虚线</span>
            </a></li>
            <li class="headerItem draw-table" dialog="drawTableDialog"><a href="javascript:void(0)">
                <img src="${request.contextPath}/static/css/images/header_table.png" />
                <span class="answerLabel">表格</span>
            </a></li>
        </ul>
    </div>
	<div class="operatorPanel pull-right">
		<div class="opt-parent">
			<!--<button class="btn btn-success btn-sm toImgBtn">生成图片</button>-->
            <!--<button class="btn btn-success btn-sm opt-btn positionBtn">位置信息</button>-->
            <!--<button class="btn btn-success btn-sm cutBtn">去裁剪</button>-->
			<a href="sheet/list" target="_blank" class="btn btn-success btn-sm opt-btn">题卡管理</a>
			<a href="logout" target="_self" class="btn btn-danger btn-sm opt-btn">退出</a>
		</div>
		<div class="opt-parent">
			<button class="btn btn-success btn-sm saveBtn">保存</button>
			<button class="btn btn-success btn-sm previewBtn">预览</button>
		</div>
	</div>
</div>
<!--顶部工具栏 end-->
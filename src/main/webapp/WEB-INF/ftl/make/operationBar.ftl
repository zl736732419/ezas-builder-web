<!--页面配置-->
<div class="operation-container">
    <div class="collapsible-panel">
        <span class="collapsible-icon  fa fa-angle-double-down fa-2x" title="折叠"></span>
    </div>
    <div class="operation-bar">
        <div class="base-config operation-item">
            <div class="tip-icon mytooltip" data-toggle="tooltip" title="参数配置" data-container="body"
                 data-placement="right">
                <img src="${request.contextPath}/static/css/images/operation_setting.png">
            </div>
        </div>
        <div class="operation-tip operation-item">
            <div class="tip-container">
                <div class="tip-bubble">
                    <svg data-src="${request.contextPath}/static/css/images/bubble.svg" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                    </svg>
                </div>
                <div class="tip-body">
                    <h3 class="tip-title"><i class="fa fa-envira" aria-hidden="true"></i>题卡创建小提示</h3>
                    <div class="tip-panel as-nicescroll">
                        <h5>顶部工具条中的一系列图标为用户创建题卡的入口按钮。</h5>
                        <p>创建题卡具体步骤如下：</p>
                        <ul class="tip-content">
                            <li><span>点击“基础设置”按钮进行设置题卡参数，在这里你可以选择创建A3/A4纸张类型的题卡，设置填涂方格为矩形还是中括号等。</span></li>
                            <li><span>点击“基本信息”按钮为生成的题卡创建基础区域，包括考生姓名、准考证号、错误填涂、缺考违纪、注意事项等。</span></li>
                            <li><span>完成上面两项操作之后就可以为题卡添加题目信息了，在本答题卡工具栏中总共包含了选择题、填空题、主观题、作文、禁答区、选做题、改错题7种题目类型。</span></li>
                            <li><span class="text text-info"><span class="text text-warning" style="font-weight: bolder">改错题</span>控件为编辑控件，需要您<span class="text text-danger" style="font-weight: bolder;">完全</span>在题卡页上进行题目内容填充和样式修改，请不要使用word等工具进行排版，您也可以选择在windows自带的文本编辑器中进行排版后复制到题卡制作页面上。</span></li>
                            <li><span class="text text-info">物理、化学等需要手动编辑的科目建议使用<span class="text text-warning" style="font-weight: bolder">主观题</span>控件结合右键菜单小工具进行题卡制作。</span></li>
                            <li>
                                <span class="text text-success">
                                    <p>快捷键提示：</p>
                                    <ul class="tip-content">
                                        <li><span>ctrl+A 全选题卡页面中控件元素</span></li>
                                        <li><span>ctrl+上下左右方向键 移动被选中的元素,要选中多个元素可以通过鼠标在题卡页上滑动产生选框的方式来选择，与选框相交的元素将会被选中。</span></li>
                                        <li><span>ctrl+S 保存题卡内容(需开启快捷键设置，具体方法为开启左下角菜单中的参数配置中的快捷键开关)。</span></li>
                                        <li><span>ctrl+P 预览题卡页面内容(需开启快捷键设置)。</span></li>
                                        <li><span>ctrl+L 跳转到题卡管理页面(需开启快捷键设置)。</span></li>
                                        <li><span>DELETE 删除选中控件元素<span class="text text-danger">删除不会给出用户确认操作，请谨慎使用。</span></span></li>
                                    </ul>

                                </span>
                            </li>
                            <li><span class="text text-danger">在整个制作题卡过程中，基础设置/基本信息只允许设置一次，一旦完成设置就被置灰；如果想要添加题卡页，需要通过增加元素让系统自动分页。</span></li>
                        </ul>
                        <h4 class="tip-over">现在赶紧去创建符合您心意的题卡吧!</h4>
                    </div>
                </div>
            </div>
            <div class="tip-icons">
                <div class="tip-icon tip-question mytooltip" data-toggle="tooltip" title="操作提示" data-container="body"
                     data-placement="right">
                    <img src="${request.contextPath}/static/css/images/operation_tip_question.png">
                </div>
                <div class="tip-answer">
                    <img src="${request.contextPath}/static/css/images/operation_tip_answer.png">
                </div>
            </div>
        </div>
    </div>
</div>
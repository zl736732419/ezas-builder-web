<#import "dialogs.ftl" as dialogs/>
<#macro operationBar>
<!--页面配置-->
<div class="operation-container">
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
                    <div class="tip-panel ezas-nicescroll">
                        <h5>顶部工具条中的图标为创建题卡各元素的入口按钮，您也可以通过右键菜单的方式选择各种组件进行绘制。</h5>
                        <p>创建题卡具体步骤如下：</p>
                        <ul class="tip-content">
                            <li><span>在本答题卡工具栏中总共包含了选择题、填空题、主观题、作文、禁答区、选做题、改错题7种题目类型。</span></li>
                            <li><span class="text text-info"><span class="text text-warning" style="font-weight: bolder">改错题</span>控件为编辑控件，需要您<span class="text text-danger" style="font-weight: bolder;">完全</span>
                                在题卡页上进行题目内容填充和样式修改，请不要使用word等工具进行排版，您也可以选择在windows自带的文本编辑器中进行排版后复制到题卡制作页面上。</span></li>
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
                                        <li><span>DELETE 删除选中控件元素。<span class="text text-danger">删除不会给出用户确认操作，请谨慎使用。</span></span></li>
                                    </ul>

                                </span>
                            </li>
                            <li><span class="text text-danger">在整个制作题卡过程中，如果想要添加题卡页，请直接添加元素。系统会自动判断题卡边界并进行分页。</span></li>
                            <li><span class="text text-danger">请合理使用鼠标右键的工具菜单，这会让您制作题卡更方便、更简单。</span></li>
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
    <div class="collapsible-panel">
        <span class="collapsible-icon  fa fa-angle-double-up fa-2x" title="折叠"></span>
    </div>
</div>
<@dialogs.operationDialog/>
</#macro>
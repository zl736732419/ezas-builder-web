<!--标题配置框-->
<div class="modal fade" id="operationDialog" tabindex="-1" role="dialog" data-backdrop="static"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">参数配置</h4>
            </div>
            <div class="modal-body">
                <form id="operationForm" class="form-horizontal" action="">
                    <div class="form-group">
                        <label for="keyboardEnable" class="col-sm-4 control-label">快捷键</label>
                        <div class="col-sm-8">
                            <input class="lc_switch lcs_check lcs_tt1" id="keyboardEnable" name="keyboardEnable" value="1"
                                   checked="checked" autocomplete="off" type="checkbox"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="userGuideEnable" class="col-sm-4 control-label">用户指南</label>
                        <div class="col-sm-8">
                            <input class="lc_switch lcs_check lcs_tt1" id="userGuideEnable" name="userGuideEnable" value="1"
                                   checked="checked" type="checkbox"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>
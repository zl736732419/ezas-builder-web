<#--分隔符-->
<#macro blankbar>
<div class="blank-bar"></div>
</#macro>

<#--内容栏-->
<#macro container class="">
    <div id="container" class="container ${class}">
        <#nested >
    </div>
</#macro>

<#--向导步骤提示栏-->
<#macro stepBar orderNum="" tip="">
<div class="step-bar row">
    <span class="step-order-num">${orderNum}</span>
    <span class="step-tip">${tip}</span>
</div>
</#macro>

<#--操作提示栏-->
<#macro tip>
<div class="row tip-content">
    <div class="col-sm-12">
        <div class="alert alert-info alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <#nested >
        </div>
    </div>
</div>
</#macro>
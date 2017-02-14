<#macro edit  id="data-form" layout="form-horizontal" class="" showBtnGroups=true saveBtn="submit" attrs="">
<div class="row">
    <div class="col-sm-12">
        <form class="${layout} ${class} <#if showBtnGroups=true >form-edit</#if>" id="${id}"  ${attrs!}>
            <#nested>
            <#if showBtnGroups=true >
                <@formGroup>
                    <div class="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-1 col-lg-8 col-lg-offset-2 form-edit-control" style="text-align:center;">
                        <button type="${saveBtn}" class="btn btn-success savebtn" >保存</button>
                        <button type="button" class="btn btn-info finishbtn">完成</button>
                    </div>
                </@formGroup>
            </#if>
        </form>
    </div>
</div>
</#macro>

<#macro query  id="query-form" layout="form-horizontal" class="" attrs="">
<div class="col-sm-12">
    <form class="${layout} ${class}  form-query" id="${id}" ${attrs!}>
        <div class="row noMargin">
            <div class="col-xs-10">
                <#nested>
            </div>
            <div class="col-xs-2">
                <@formGroup>
                    <div class="col-xs-12 form-query-control">
                        <button type="button" class="btn btn-success" id="querybtn"><i class="icon-search"></i></button>
                        <button type="button" class="button button-circle button-tiny"><i class="icon-angle-down"></i></button>
                    </div>
                </@formGroup>
            </div>
        </div>
    </form>
</div>
</#macro>

<#macro formGroup>
<div class="form-group">
    <#nested>
</div>
</#macro>

<#macro col6 labelFor="" labelText="">
    <@col labelFor=labelFor labelText=labelText colClass="col-sm-2">
        <#nested>
    </@col>
</#macro>

<#macro col4 labelFor="" labelText="">
    <@col labelFor=labelFor labelText=labelText  colClass="col-sm-3">
        <#nested>
    </@col>
</#macro>

<#macro col2 labelFor="" labelText="">
    <@col labelFor=labelFor labelText=labelText  colClass="col-sm-6">
        <#nested>
    </@col>
</#macro>

<#macro col2_4 labelFor="" labelText="">
    <@coln_m  labelFor=labelFor labelText=labelText labelColClass="col-sm-4" divColClass="col-sm-8" >
        <#nested>
    </@coln_m>
</#macro>

<#macro col  labelFor="" labelText="" colClass="col-sm-2">
    <@coln_m  labelFor=labelFor labelText=labelText labelColClass=colClass divColClass=colClass >
        <#nested>
    </@coln_m>
</#macro>

<#macro coln_m  labelFor="" labelText="" labelColClass="col-sm-2" divColClass="col-sm-2">
    <#if labelFor?length lt 1>
    <div class="${labelColClass}"></div>
    <#else>
        <@label labelFor=labelFor labelText=labelText colClass=labelColClass/>
    </#if>
<div class="${divColClass}">
    <#nested>
</div>
</#macro>

<#macro label labelFor="" labelText="" colClass="col-sm-2">
<label for="${labelFor}" class="control-label ${colClass}">${labelText}</label>
</#macro>

<#macro span class="" extra...>
<span class="${class}" <#list extra?keys as attr>${attr}="${extra[attr]?html}"</#list>>
    <#nested>
</span>
</#macro>

<#macro select id="" name="" attrs="" class="ezasData"  extra...>
<select class="form-control selectpicker ${class}" <#if id?length gt 0>id="${id}"</#if> name="${name}"
    <#list extra?keys as attr>${attr}="${extra[attr]?html}"</#list> ${attrs} >
    <#nested>
</select>
</#macro>

<#macro option text="" value="" class="" attrs=""  extra...>
<option value="${value}"  class="${class}" <#list extra?keys as attr>${attr}="${extra[attr]?html}"</#list> ${attrs} >${text}</option>
</#macro>

<#macro input id="" type="text" name="" value="" class=""  attrs="" showForm=true extra...>
<input type="${type}" class="<#if showForm=true>form-control ezasData</#if> ${class}" <#if id?length gt 0>id="${id}" </#if> name="${name}" value="${value}" <#list extra?keys as attr>${attr}="${extra[attr]?html}"</#list> ${attrs} >
</#macro>

<#macro dataInput  id="" name="" value="" class=""  attrs=""  extra...>
<div class="input-group">
    <input type="text" readonly class="form-control ezasData date-picker ${class}" <#if id?length gt 0>id="${id}"</#if>  name="${name}" value="${value}"  <#list extra?keys as attr>${attr}="${extra[attr]?html}"</#list> ${attrs} >
    <span class="input-group-addon"><i class="icon-calendar"></i></span>
</div>
</#macro>

<#--checkbox-->
<#macro checkbox  id="" name="" value="" text="" class=""  attrs="" checked="false", tip="">
<label>
    <input type="checkbox" class="ezasData form-control css-checkbox ${class}" 
        <#if id?length gt 0>id="${id}"</#if>  name="${name}" value="${value}" ${attrs}
        <#if checked??><#if checked="true">checked</#if></#if>
    >
    <label class="css-checkbox-label labelTip" for="${id}">${text}</label>
    <span class="text text-info">${tip}</span>
</label>
</#macro>

<#--radio-->
<#macro radio  id="" name="" value="" text=""  class=""  attrs=""  checked="false">
<label>
    <input type="radio" class="${class} form-control ezasData css-checkbox" 
           <#if id?length gt 0>id="${id}"</#if> name="${name}" value="${value}"  ${attrs} 
           <#if checked??><#if checked="true">checked</#if></#if>
    >
    <label class="css-radio-label labelTip" for="${id}">${text}</label>
</label>
</#macro>

<#--radioGroup-->
<#--{'id':'', 'name':'', 'text':'', 'value':'', 'class':'', 'checked':'false'}-->
<#macro radioGroup  radios=[]  class=""  attrs=""  extra...>
    <#list radios as radio>
    <label>
        <input type="radio" class="${class} form-control ezasData css-checkbox ${(radio.class)!}" 
               id="${(radio.id)!}" name="${(radio.name)!}" value="${(radio.value)!}"  ${attrs}  
               <#if radio.checked??><#if radio.checked="true">checked</#if></#if>>
        <label class="css-radio-label labelTip" for="${(radio.id)!}">${(radio.text)!}</label>
    </label>
    &nbsp;&nbsp;
    </#list>
</#macro>

<#--inputGroup-->
<#macro inputGroup name=""  text="" isData=true attrs=""  extra...>
<div class="input-group">
    <input type="text" class="form-control <#if isData=true>ezasData</#if>" name="${name}" <#list extra?keys as attr>${attr}="${extra[attr]?html}"</#list> ${attrs} >
    <span class="input-group-addon" >${text}</span>
</div>
</#macro>

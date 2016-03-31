/*
 * Copyright (c) Ascensio System SIA 2016. All rights reserved
 *
 * http://www.onlyoffice.com
 *
 * Version: 4.6.0 (build:865)
 */
if(void 0===Common)var Common={};if(Common.Gateway=new function(){var a=this,b=$(a),c={init:function(a){b.trigger("init",a)},openDocument:function(a){b.trigger("opendocument",a)},showMessage:function(a){b.trigger("showmessage",a)},applyEditRights:function(a){b.trigger("applyeditrights",a)},processSaveResult:function(a){b.trigger("processsaveresult",a)},processRightsChange:function(a){b.trigger("processrightschange",a)},refreshHistory:function(a){b.trigger("refreshhistory",a)},setHistoryData:function(a){b.trigger("sethistorydata",a)},setEmailAddresses:function(a){b.trigger("setemailaddresses",a)},processMailMerge:function(a){b.trigger("processmailmerge",a)},downloadAs:function(){b.trigger("downloadas")},processMouse:function(a){b.trigger("processmouse",a)},internalCommand:function(a){b.trigger("internalcommand",a)},resetFocus:function(a){b.trigger("resetfocus",a)}},d=function(a){window.parent&&window.JSON&&window.parent.postMessage(window.JSON.stringify(a),"*")},e=function(a){var b=a.data;if("[object String]"===Object.prototype.toString.apply(b)&&window.JSON){var d,e;try{d=window.JSON.parse(b)}catch(f){d=""}d&&(e=c[d.command],e&&e.call(this,d.data))}},f=function(a){e(a)};return window.attachEvent?window.attachEvent("onmessage",f):window.addEventListener("message",f,!1),{ready:function(){d({event:"onReady"})},save:function(a){d({event:"onSave",data:a})},requestEditRights:function(){d({event:"onRequestEditRights"})},requestHistory:function(){d({event:"onRequestHistory"})},requestHistoryData:function(a){d({event:"onRequestHistoryData",data:a})},requestEmailAddresses:function(){d({event:"onRequestEmailAddresses"})},requestStartMailMerge:function(){d({event:"onRequestStartMailMerge"})},requestHistoryClose:function(){d({event:"onRequestHistoryClose"})},reportError:function(a,b){d({event:"onError",data:{errorCode:a,errorDescription:b}})},sendInfo:function(a){d({event:"onInfo",data:a})},setDocumentModified:function(a){d({event:"onDocumentStateChange",data:a})},internalMessage:function(a,b){d({event:"onInternalMessage",data:{type:a,data:b}})},updateVersion:function(){d({event:"onOutdatedVersion"})},downloadAs:function(a){d({event:"onDownloadAs",data:a})},collaborativeChanges:function(){d({event:"onCollaborativeChanges"})},on:function(c,d){var e=function(b,c){d.call(a,c)};b.on(c,e)}}},void 0===Common)var Common={};if(Common.component=Common.component||{},Common.Analytics=Common.component.Analytics=new function(){var a;return{initialize:function(b,c){if("undefined"==typeof b)throw"Analytics: invalid id.";if("undefined"==typeof c||"[object String]"!==Object.prototype.toString.apply(c))throw"Analytics: invalid category type.";a=c,$("head").append('<script type="text/javascript">var _gaq = _gaq || [];_gaq.push(["_setAccount", "'+b+'"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();</script>')},trackEvent:function(b,c,d){if("undefined"!=typeof b&&"[object String]"!==Object.prototype.toString.apply(b))throw"Analytics: invalid action type.";if("undefined"!=typeof c&&"[object String]"!==Object.prototype.toString.apply(c))throw"Analytics: invalid label type.";if("undefined"!=typeof d&&("[object Number]"!==Object.prototype.toString.apply(d)||!isFinite(d)))throw"Analytics: invalid value type.";if("undefined"!=typeof _gaq){if("undefined"===a)throw"Analytics is not initialized.";_gaq.push(["_trackEvent",a,b,c,d])}}}},Ext.Loader.setConfig({enabled:!0,disableCaching:!1,paths:{Common:"../../common/mobile/lib"}}),Ext.define("SSE.model.Worksheet",{extend:"Ext.data.Model",config:{fields:[{name:"index",type:"int"},{name:"text",type:"string"}]}}),Ext.define("SSE.store.Worksheets",{extend:"Ext.data.Store",config:{model:"SSE.model.Worksheet"}}),Ext.define("SSE.view.OpenCsvPanel",{extend:"Ext.form.Panel",alias:"widget.seopencsvpanel",requires:["Ext.form.Panel","Ext.form.FieldSet","Ext.field.Select"],config:{style:"padding: 0;"},initialize:function(){var a=this;this.add({xtype:"fieldset",title:this.txtTitle,instructions:this.txtHint,defaults:{labelWidth:"36%"},items:[{xtype:"selectfield",name:"encoding",label:this.txtEncoding,options:[{value:37,text:"IBM EBCDIC (US-Canada)"},{value:437,text:"OEM United States"},{value:500,text:"IBM EBCDIC (International)"},{value:708,text:"Arabic (ASMO 708)"},{value:720,text:"Arabic (DOS)"},{value:737,text:"Greek (DOS)"},{value:775,text:"Baltic (DOS)"},{value:850,text:"Western European (DOS)"},{value:852,text:"Central European (DOS)"},{value:855,text:"OEM Cyrillic"},{value:857,text:"Turkish (DOS)"},{value:858,text:"OEM Multilingual Latin I"},{value:860,text:"Portuguese (DOS)"},{value:861,text:"Icelandic (DOS)"},{value:862,text:"Hebrew (DOS)"},{value:863,text:"French Canadian (DOS)"},{value:864,text:"Arabic (864) "},{value:865,text:"Nordic (DOS)"},{value:866,text:"Cyrillic (DOS)"},{value:869,text:"Greek, Modern (DOS)"},{value:870,text:"IBM EBCDIC (Multilingual Latin-2)"},{value:874,text:"Thai (Windows)"},{value:875,text:"IBM EBCDIC (Greek Modern)"},{value:932,text:"Japanese (Shift-JIS)"},{value:936,text:"Chinese Simplified (GB2312)"},{value:949,text:"Korean"},{value:950,text:"Chinese Traditional (Big5)"},{value:1026,text:"IBM EBCDIC (Turkish Latin-5)"},{value:1047,text:"IBM Latin-1"},{value:1140,text:"IBM EBCDIC (US-Canada-Euro)"},{value:1141,text:"IBM EBCDIC (Germany-Euro)"},{value:1142,text:"IBM EBCDIC (Denmark-Norway-Euro)"},{value:1143,text:"IBM EBCDIC (Finland-Sweden-Euro)"},{value:1144,text:"IBM EBCDIC (Italy-Euro)"},{value:1145,text:"IBM EBCDIC (Spain-Euro)"},{value:1146,text:"IBM EBCDIC (UK-Euro)"},{value:1147,text:"IBM EBCDIC (France-Euro)"},{value:1148,text:"IBM EBCDIC (International-Euro)"},{value:1149,text:"IBM EBCDIC (Icelandic-Euro)"},{value:1200,text:"Unicode"},{value:1201,text:"Unicode (Big-Endian)"},{value:1250,text:"Central European (Windows)"},{value:1251,text:"Cyrillic (Windows)"},{value:1252,text:"Western European (Windows)"},{value:1253,text:"Greek (Windows)"},{value:1254,text:"Turkish (Windows)"},{value:1255,text:"Hebrew (Windows) "},{value:1256,text:"Arabic (Windows) "},{value:1257,text:"Baltic (Windows)"},{value:1258,text:"Vietnamese (Windows)"},{value:1361,text:"Korean (Johab)"},{value:1e4,text:"Western European (Mac)"},{value:10001,text:"Japanese (Mac)"},{value:10002,text:"Chinese Traditional (Mac)"},{value:10003,text:"Korean (Mac)"},{value:10004,text:"Arabic (Mac) "},{value:10005,text:"Hebrew (Mac)"},{value:10006,text:"Greek (Mac) "},{value:10007,text:"Cyrillic (Mac)"},{value:10008,text:"Chinese Simplified (Mac)"},{value:10010,text:"Romanian (Mac)"},{value:10017,text:"Ukrainian (Mac)"},{value:10021,text:"Thai (Mac)"},{value:10029,text:"Central European (Mac) "},{value:10079,text:"Icelandic (Mac)"},{value:10081,text:"Turkish (Mac)"},{value:10082,text:"Croatian (Mac)"},{value:12e3,text:"Unicode (UTF-32)"},{value:12001,text:"Unicode (UTF-32 Big-Endian)"},{value:2e4,text:"Chinese Traditional (CNS)"},{value:20001,text:"TCA Taiwan"},{value:20002,text:"Chinese Traditional (Eten)"},{value:20003,text:"IBM5550 Taiwan"},{value:20004,text:"TeleText Taiwan"},{value:20005,text:"Wang Taiwan"},{value:20105,text:"Western European (IA5)"},{value:20106,text:"German (IA5)"},{value:20107,text:"Swedish (IA5) "},{value:20108,text:"Norwegian (IA5) "},{value:20127,text:"US-ASCII"},{value:20261,text:"T.61 "},{value:20269,text:"ISO-6937"},{value:20273,text:"IBM EBCDIC (Germany)"},{value:20277,text:"IBM EBCDIC (Denmark-Norway) "},{value:20278,text:"IBM EBCDIC (Finland-Sweden)"},{value:20280,text:"IBM EBCDIC (Italy)"},{value:20284,text:"IBM EBCDIC (Spain)"},{value:20285,text:"IBM EBCDIC (UK)"},{value:20290,text:"IBM EBCDIC (Japanese katakana)"},{value:20297,text:"IBM EBCDIC (France)"},{value:20420,text:"IBM EBCDIC (Arabic)"},{value:20423,text:"IBM EBCDIC (Greek)"},{value:20424,text:"IBM EBCDIC (Hebrew)"},{value:20833,text:"IBM EBCDIC (Korean Extended)"},{value:20838,text:"IBM EBCDIC (Thai)"},{value:20866,text:"Cyrillic (KOI8-R)"},{value:20871,text:"IBM EBCDIC (Icelandic) "},{value:20880,text:"IBM EBCDIC (Cyrillic Russian)"},{value:20905,text:"IBM EBCDIC (Turkish)"},{value:20924,text:"IBM Latin-1 "},{value:20932,text:"Japanese (JIS 0208-1990 and 0212-1990)"},{value:20936,text:"Chinese Simplified (GB2312-80) "},{value:20949,text:"Korean Wansung "},{value:21025,text:"IBM EBCDIC (Cyrillic Serbian-Bulgarian)"},{value:21866,text:"Cyrillic (KOI8-U)"},{value:28591,text:"Western European (ISO) "},{value:28592,text:"Central European (ISO)"},{value:28593,text:"Latin 3 (ISO)"},{value:28594,text:"Baltic (ISO)"},{value:28595,text:"Cyrillic (ISO) "},{value:28596,text:"Arabic (ISO)"},{value:28597,text:"Greek (ISO) "},{value:28598,text:"Hebrew (ISO-Visual)"},{value:28599,text:"Turkish (ISO)"},{value:28603,text:"Estonian (ISO)"},{value:28605,text:"Latin 9 (ISO)"},{value:29001,text:"Europa"},{value:38598,text:"Hebrew (ISO-Logical)"},{value:50220,text:"Japanese (JIS)"},{value:50221,text:"Japanese (JIS-Allow 1 byte Kana) "},{value:50222,text:"Japanese (JIS-Allow 1 byte Kana - SO/SI)"},{value:50225,text:"Korean (ISO)"},{value:50227,text:"Chinese Simplified (ISO-2022)"},{value:51932,text:"Japanese (EUC)"},{value:51936,text:"Chinese Simplified (EUC) "},{value:51949,text:"Korean (EUC)"},{value:52936,text:"Chinese Simplified (HZ)"},{value:54936,text:"Chinese Simplified (GB18030)"},{value:57002,text:"ISCII Devanagari "},{value:57003,text:"ISCII Bengali "},{value:57004,text:"ISCII Tamil"},{value:57005,text:"ISCII Telugu "},{value:57006,text:"ISCII Assamese "},{value:57007,text:"ISCII Oriya"},{value:57008,text:"ISCII Kannada"},{value:57009,text:"ISCII Malayalam "},{value:57010,text:"ISCII Gujarati"},{value:57011,text:"ISCII Punjabi"},{value:65e3,text:"Unicode (UTF-7)"},{value:65001,text:"Unicode (UTF-8)"}]},{xtype:"selectfield",name:"delimiter",label:this.txtDelimiter,options:[{value:4,text:","},{value:2,text:";"},{value:3,text:":"},{value:1,text:this.txtTab},{value:5,text:this.txtSpace}]}]}),this.add({xtype:"button",text:"OK",handler:function(){a.fireEvent("close",this,{encoding:a.getValues().encoding,delimiter:a.getValues().delimiter})}})},txtEncoding:"Encoding ",txtDelimiter:"Delimiter",txtTab:"Tab",txtSpace:"Space",txtTitle:"Choose CSV opening options",txtHint:"Please enter the information above."}),Ext.define("SSE.view.WorksheetList",{extend:"Ext.Container",requires:["Ext.dataview.List","Ext.XTemplate"],alias:["widget.seworksheetlist"],config:{layout:{type:"fit"}},initialize:function(){var a=Ext.create("Ext.XTemplate",'<tpl for="."><div class="worksheet-item">{text:htmlEncode}</div></tpl>');this.add({xtype:"list",store:"Worksheets",itemTpl:a,singleSelect:!0,itemSelector:"div.worksheet-item",emptyText:"",cls:"x-worksheet-item x-select-overlay"}),this.callParent(arguments)}}),Ext.define("SSE.view.Main",{extend:"Ext.Container",alias:"widget.semainview",initialize:function(){this.callParent(arguments)}}),Ext.define("SSE.view.phone.toolbar.Search",{extend:"Ext.Toolbar",xtype:"searchtoolbar",requires:["Ext.Label","Ext.field.Search"],config:{docked:"top",minHeight:52,ui:"search"},initialize:function(){this.add([{xtype:"searchfield",id:"id-field-search",placeHolder:this.searchText,flex:1},{xtype:"segmentedbutton",allowToggle:!1,ui:"base",items:[{id:"id-btn-search-prev",ui:"base",iconCls:"search-prev",disabled:!0},{id:"id-btn-search-next",ui:"base",iconCls:"search-next",disabled:!0}]}]),this.callParent(arguments)},searchText:"Search"}),Ext.define("SSE.view.phone.toolbar.View",{extend:"Ext.Toolbar",xtype:"viewtoolbar",config:{docked:"top",minHeight:44,ui:"edit"},initialize:function(){this.add([{id:"id-tb-btn-view-done",ui:"base-blue",cls:"text-offset-12",hidden:!0,text:this.doneText},{xtype:"spacer"},{id:"id-tb-btn-search",ui:"base",iconCls:"search"},{id:"id-tb-btn-pages",ui:"base",iconCls:"pages"},{id:"id-tb-btn-fullscreen",ui:"base",iconCls:"fullscreen"},{xtype:"spacer"},{id:"id-tb-btn-view-share",ui:"base",iconCls:"share"}]),this.callParent(arguments)},doneText:"Done",editText:"Edit"}),Ext.define("SSE.view.phone.Main",{extend:"SSE.view.Main",alias:"widget.sephonemain",requires:["Ext.field.Search"],config:{cls:"de-phone-main",fullscreen:!0,layout:{type:"vbox",pack:"center"}},initialize:function(){this.add(Ext.create("SSE.view.phone.toolbar.View",{hidden:!0})),this.add(Ext.create("SSE.view.phone.toolbar.Search",{hidden:!0})),this.add({xtype:"container",id:"id-pnl-top-fixed",docked:"top",style:"opacity: 0;"}),this.add({xtype:"container",layout:"vbox",id:"id-container-document",flex:1,items:[{xtype:"container",flex:1,id:"id-sdkeditor"}]}),this.add({xtype:"panel",layout:"fit",width:200,height:200,id:"id-worksheets-panel",top:0,left:0,modal:!0,hidden:!0,hideOnMaskTap:!0,items:[{xtype:"seworksheetlist"}]}),this.callParent(arguments)}}),Ext.define("SSE.view.tablet.toolbar.Search",{extend:"Ext.Toolbar",xtype:"searchtoolbar",requires:["Ext.Label","Ext.field.Search"],config:{docked:"top",minHeight:52,ui:"search"},initialize:function(){this.add([{xtype:"searchfield",id:"id-field-search",placeHolder:this.searchText,flex:1},{xtype:"segmentedbutton",allowToggle:!1,ui:"base",items:[{id:"id-btn-search-prev",ui:"base",iconCls:"search-prev",disabled:!0},{id:"id-btn-search-next",ui:"base",iconCls:"search-next",disabled:!0}]}]),this.callParent(arguments)},searchText:"Search"}),Ext.define("SSE.view.tablet.toolbar.View",{extend:"Ext.Toolbar",xtype:"viewtoolbar",config:{docked:"top",minHeight:44,ui:"edit"},initialize:function(){this.add([{id:"id-tb-btn-view-done",ui:"base-blue",cls:"text-offset-12",hidden:!0,text:this.doneText},{xtype:"spacer"},{id:"id-tb-btn-search",ui:"base",iconCls:"search"},{id:"id-tb-btn-pages",ui:"base",iconCls:"pages"},{id:"id-tb-btn-fullscreen",ui:"base",iconCls:"fullscreen"},{xtype:"spacer"},{id:"id-tb-btn-view-share",ui:"base",iconCls:"share"}]),this.callParent(arguments)},doneText:"Done",editText:"Edit"}),Ext.define("SSE.view.tablet.Main",{extend:"SSE.view.Main",alias:"widget.setabletmain",requires:["SSE.view.tablet.toolbar.Search","SSE.view.tablet.toolbar.View","SSE.view.WorksheetList"],config:{fullscreen:!0,layout:{type:"vbox",pack:"center"}},initialize:function(){this.add(Ext.create("SSE.view.tablet.toolbar.View",{hidden:!0})),this.add(Ext.create("SSE.view.tablet.toolbar.Search",{hidden:!0})),this.add({xtype:"container",layout:"vbox",id:"id-container-document",flex:1,items:[{xtype:"container",flex:1,id:"id-sdkeditor"}]}),this.add({xtype:"panel",layout:"fit",width:200,height:200,id:"id-worksheets-panel",top:0,left:0,modal:!0,hidden:!0,hideOnMaskTap:!0,items:[{xtype:"seworksheetlist"}]}),this.callParent(arguments)}}),Ext.define("SSE.controller.ApiEvents",{mixins:{observable:"Ext.mixin.Observable"},view:void 0,widget:void 0,element:void 0,handlers:void 0,settings:void 0,enableKeyEvents:!1,isSelectMode:!1,hasCursor:!1,constructor:function(a){return this.initConfig(a),this.callParent(arguments),this},init:function(a,b,c,d,e){return this.view=a,this.widget=b,this.element=c,this.handlers=new window.Asc.asc_CHandlersList(d),this.settings=$.extend(!0,{},this.defaults,e),this},destroy:function(){return $(window).off("."+this.namespace),this},enableKeyEventsHandler:function(a){this.enableKeyEvents=!!a}}),Ext.define("SSE.controller.Document",{extend:"Ext.app.Controller",config:{refs:{},control:{"#id-btn-zoom-in":{tap:"onZoomIn"},"#id-btn-zoom-out":{tap:"onZoomOut"}}},_currZoom:1,_baseZoom:1,_maxZoom:2,_incrementZoom:.05,init:function(){},launch:function(){},setApi:function(a){this.api=a,this.api&&(this.api.asc_registerCallback("asc_onDoubleTapEvent",Ext.bind(this._onDoubleTapDocument,this)),this.api.asc_registerCallback("asc_onStartAction",Ext.bind(this._onLongActionBegin,this)),this.api.asc_registerCallback("asc_onEndAction",Ext.bind(this._onLongActionEnd,this)))},_onLongActionBegin:function(){},_onLongActionEnd:function(a,b){if(a===c_oAscAsyncActionType.BlockInteraction)switch(b){case c_oAscAsyncAction.Open:var c=this.api.asc_getActiveWorksheetIndex();this.api.asc_showWorksheet(c)}},_onDoubleTapDocument:function(){this.api&&(this._currZoom=this._currZoom!=this._baseZoom?this._baseZoom:this._maxZoom,this.api.asc_setZoom(this._currZoom))},onZoomIn:function(){this._currZoom+=this._incrementZoom,this._currZoom>this._maxZoom&&(this._currZoom=this._maxZoom),this.api.asc_setZoom(this._currZoom)},onZoomOut:function(){this._currZoom-=this._incrementZoom,this._currZoom<this._baseZoom&&(this._currZoom=this._baseZoom),this.api.asc_setZoom(this._currZoom)}}),Ext.define("SSE.controller.Search",{extend:"Ext.app.Controller",config:{refs:{nextResult:"#id-btn-search-prev",previousResult:"#id-btn-search-next",searchField:"#id-field-search"},control:{"#id-btn-search-prev":{tap:"onPreviousResult"},"#id-btn-search-next":{tap:"onNextResult"},"#id-field-search":{keyup:"onSearchKeyUp",change:"onSearchChange",clearicontap:"onSearchClear"}}},_step:-1,init:function(){},setApi:function(a){this.api=a},onNextResult:function(){var a=this.getSearchField();this.api&&a&&this.api.asc_findText(a.getValue(),!0,!0)},onPreviousResult:function(){var a=this.getSearchField();this.api&&a&&this.api.asc_findText(a.getValue(),!0,!1)},onSearchKeyUp:function(a,b){var c=b.event.keyCode,d=this.getSearchField();13==c&&this.api&&this.api.asc_findText(d.getValue(),!0,!0),this.updateNavigation()},onSearchChange:function(){this.updateNavigation()},onSearchClear:function(){this.updateNavigation(),window.focus(),document.activeElement.blur()},updateNavigation:function(){var a=this.getSearchField(),b=this.getNextResult(),c=this.getPreviousResult();a&&b&&c&&(b.setDisabled(""==a.getValue()),c.setDisabled(""==a.getValue()))}}),Ext.define("SSE.controller.WorksheetList",{extend:"Ext.app.Controller",config:{refs:{worksheetList:{selector:"seworksheetlist list"}}},init:function(){this.control({"seworksheetlist list":{itemtap:this._worksheetSelect}})},setApi:function(a){this.api=a,this.api&&this.api.asc_registerCallback("asc_onEndAction",Ext.bind(this.onLongActionEnd,this))},_worksheetSelect:function(a,b,c,d){if(this.api){var e=d.data.index;e>-1&&this.api.asc_getActiveWorksheetIndex()!=e&&this.api.asc_showWorksheet(e)}},_loadWorksheets:function(){if(this.api){var a=Ext.getStore("Worksheets"),b=this.getWorksheetList();if(a&&b){a.removeAll(!1);var c=this.api.asc_getWorksheetsCount();if(c){for(var d=0;c>d;d++){var e={text:this.api.asc_getWorksheetName(d),index:d};a.add(e)}var f=a.findRecord("index",this.api.asc_getActiveWorksheetIndex());b.select(f?f:a.getAt(0))}}}},onLongActionEnd:function(a,b){if(a===c_oAscAsyncActionType.BlockInteraction)switch(b){case c_oAscAsyncAction.Open:this._loadWorksheets()}}}),Ext.define("SSE.controller.Main",{extend:"Ext.app.Controller",editMode:!1,requires:["Ext.Anim","Ext.MessageBox","SSE.controller.ApiEvents","SSE.view.OpenCsvPanel"],config:{refs:{mainView:"semainview"}},launch:function(){if(!this._isSupport())return void Common.Gateway.reportError(void 0,this.unsupportedBrowserErrorText);this.initControl();var a=this.getApplication();this.api=new Asc.spreadsheet_api("id-sdkeditor","",SSE.controller.ApiEvents,{},{}),this.api.asc_SetFontsPath("../../../../sdkjs/fonts/"),this.api.asc_setMobileVersion(!0),this.api.asc_registerCallback("asc_onAdvancedOptions",Ext.bind(this.onAdvancedOptions,this)),this.api.asc_registerCallback("asc_onOpenDocumentProgress",Ext.bind(this.onOpenDocumentProgress,this)),this.api.asc_registerCallback("asc_onEndAction",Ext.bind(this.onLongActionEnd,this)),this.api.asc_registerCallback("asc_onError",Ext.bind(this.onError,this)),this.api.asc_registerCallback("asc_onSaveUrl",Ext.bind(this.onSaveUrl,this)),this.api.asc_registerCallback("asc_onGetEditorPermissions",Ext.bind(this.onEditorPermissions,this)),this.api.asc_registerCallback("asc_onDownloadUrl",Ext.bind(this.onDownloadUrl,this)),Ext.each(a.getControllers(),function(b){var c=a.getController(b);c&&Ext.isFunction(c.setApi)&&c.setApi(this.api)},this),this.initApi(),this.editorConfig={},Common.Gateway.on("init",Ext.bind(this.loadConfig,this)),Common.Gateway.on("opendocument",Ext.bind(this.loadDocument,this)),Common.Gateway.on("showmessage",Ext.bind(this.onExternalMessage,this)),Common.Gateway.on("processsaveresult",Ext.bind(this.onProcessSaveResult,this)),Common.Gateway.on("downloadas",Ext.bind(this.onDownloadAs,this)),Common.Gateway.ready()},initControl:function(){},initApi:function(){},loadConfig:function(){this.editorConfig.user=this._fillUserInfo(this.editorConfig.user,this.editorConfig.lang,this.textAnonymous)},loadDocument:function(a){if(a.doc){this.permissions=a.doc.permissions;var b=new CUserInfo;b.put_Id(this.editorConfig.user.id),b.put_FirstName(this.editorConfig.user.firstname),b.put_LastName(this.editorConfig.user.lastname),b.put_FullName(this.editorConfig.user.fullname),docInfo=new CDocInfo,docInfo.put_Id(a.doc.key),docInfo.put_Url(a.doc.url),docInfo.put_Title(a.doc.title),docInfo.put_Format(a.doc.fileType),docInfo.put_VKey(a.doc.vkey),docInfo.put_Options(a.doc.options),docInfo.put_UserInfo(b),this.api.asc_setDocInfo(docInfo),this.api.asc_getEditorPermissions(this.editorConfig.licenseUrl,this.editorConfig.customerId),Common.component.Analytics.trackEvent("Load","Start")}},onEditorPermissions:function(){var a=!1;this.api.asc_setViewMode(!a),this.api.asc_LoadDocument();var b=this.getApplication().getCurrentProfile().getName();this.getApplication().getController(b+".Main").setMode(a)},onError:function(a,b){this._hideLoadSplash();var c={closable:!1};switch(a){case c_oAscError.ID.Unknown:c.message=this.unknownErrorText;break;case c_oAscError.ID.ConvertationTimeout:c.message=this.convertationTimeoutText;break;case c_oAscError.ID.ConvertationError:c.message=this.convertationErrorText;break;case c_oAscError.ID.DownloadError:c.message=this.downloadErrorText;break;case c_oAscError.ID.UplImageSize:c.message=this.uploadImageSizeMessage;break;case c_oAscError.ID.UplImageExt:c.message=this.uploadImageExtMessage;break;case c_oAscError.ID.UplImageFileCount:c.message=this.uploadImageFileCountMessage;break;case c_oAscError.ID.VKeyEncrypt:c.msg=this.errorKeyEncrypt;break;case c_oAscError.ID.KeyExpire:c.msg=this.errorKeyExpire;break;case c_oAscError.ID.UserCountExceed:c.msg=this.errorUsersExceed;break;default:c.message=this.errorDefaultMessage.replace("%1",a)}b==c_oAscError.Level.Critical?(Common.Gateway.reportError(a,c.message),c.title=this.criticalErrorTitle,c.message+="<br/>"+this.criticalErrorExtText,c.buttons=Ext.Msg.OK,c.fn=function(a){"ok"==a&&window.location.reload()}):(c.title=this.notcriticalErrorTitle,c.buttons=Ext.Msg.OK,c.fn=Ext.emptyFn),Ext.Msg.show(c)},onSaveUrl:function(a){Common.Gateway.save(a)},onDownloadUrl:function(a){Common.Gateway.downloadAs(a)},onExternalMessage:function(a){a&&(this._hideLoadSplash(),Ext.Msg.show({title:a.title,msg:"<br/>"+a.msg,icon:Ext.Msg[a.severity.toUpperCase()],buttons:Ext.Msg.OK}),Common.component.Analytics.trackEvent("External Error",a.title))},onAdvancedOptions:function(a){if(a.asc_getOptionId()==c_oAscAdvancedOptionsID.CSV){var b=Ext.get("loading-mask"),c=this;Ext.Anim.run(b,"slide",{out:!0,direction:"up",duration:250,after:function(){b.hide()}});var d=Ext.Viewport.add({xtype:"seopencsvpanel",left:0,top:0,width:"100%",height:"100%"});Ext.Anim.run(d,"slide",{out:!1,direction:"up",duration:1e3}),d.on("close",Ext.bind(function(a,e){b.show(),Ext.Anim.run(b,"slide",{out:!1,direction:"down",duration:1e3}),Ext.Anim.run(d,"slide",{out:!0,direction:"down",duration:1e3,after:function(){Ext.Viewport.remove(d),c.api&&c.api.asc_setAdvancedOptions(c_oAscAdvancedOptionsID.CSV,new Asc.asc_CCSVAdvancedOptions(e.encoding,e.delimiter))}})},this))}},onOpenDocumentProgress:function(a){var b=document.getElementById("loadmask-text");if(b){var c=(a.asc_getCurrentFont()+a.asc_getCurrentImage())/(a.asc_getFontsCount()+a.asc_getImagesCount());b.innerHTML=this.textLoadingDocument+": "+Math.round(100*c)+"%"}},onOpenDocument:function(){this._hideLoadSplash(),this.api.asc_Resize(),this.api&&this.api.asc_cleanSelection()},onLongActionEnd:function(a,b){if(a===c_oAscAsyncActionType.BlockInteraction)switch(b){case c_oAscAsyncAction.Open:this.onOpenDocument()}},onDownloadAs:function(){this.api.asc_DownloadAs(c_oAscFileType.XLSX,!0)},_hideLoadSplash:function(){var a=Ext.get("loading-mask");a&&Ext.Anim.run(a,"fade",{out:!0,duration:1e3,after:function(){a.destroy()}})},_isSupport:function(){return Ext.browser.is.WebKit&&(Ext.os.is.iOS||Ext.os.is.Android||Ext.os.is.Desktop)},_fillUserInfo:function(a,b,c){var d=a||{};return!d.id&&(d.id="uid-"+Date.now()),_.isEmpty(d.firstname)&&_.isEmpty(d.lastname)&&(d.firstname=c),d.fullname=/^ru/.test(b)?d.lastname+" "+d.firstname:d.firstname+" "+d.lastname,d},printText:"Printing...",criticalErrorTitle:"Error",notcriticalErrorTitle:"Warning",errorDefaultMessage:"Error code: %1",criticalErrorExtText:'Press "Ok" to reload view page.',uploadImageSizeMessage:"Maximium image size limit exceeded.",uploadImageExtMessage:"Unknown image format.",uploadImageFileCountMessage:"No images uploaded.",unknownErrorText:"Unknown error.",convertationTimeoutText:"Convertation timeout exceeded.",convertationErrorText:"Convertation failed.",downloadErrorText:"Download failed.",unsupportedBrowserErrorText:"Your browser is not supported.",errorKeyEncrypt:"Unknown key descriptor",errorKeyExpire:"Key descriptor expired",errorUsersExceed:"Count of users was exceed",textAnonymous:"Anonymous",textLoadingDocument:"Loading document"}),Ext.define("SSE.controller.phone.Main",{extend:"SSE.controller.Main",requires:["Ext.Anim"],config:{refs:{viewToolbar:"viewtoolbar",searchToolbar:"searchtoolbar"},control:{}},launch:function(){this.callParent(arguments)},initControl:function(){this.callParent(arguments)},initApi:function(){this.callParent(arguments)},setApi:function(a){this.api=a,this.api.asc_enableKeyEvents(!0)},setDocumentName:function(a){var b=this.getDocumentNameLabel();b&&b.setHtml(Ext.String.htmlEncode(a))},onTapBack:function(){},setMode:function(a){var b=this.getViewToolbar(),c=this.getSearchToolbar();"edit"==a?(b&&b.hide(),c&&c.hide(),this.api&&this.api.asc_enableKeyEvents(!0)):(b&&b.show(),this.api&&this.api.asc_enableKeyEvents(!1))}}),Ext.define("SSE.controller.tablet.Main",{extend:"SSE.controller.Main",requires:["Ext.Anim"],config:{refs:{viewToolbar:"viewtoolbar",searchToolbar:"searchtoolbar"},control:{}},launch:function(){this.callParent(arguments)},initControl:function(){this.callParent(arguments)},initApi:function(){this.callParent(arguments)},setApi:function(a){this.api=a,this.api.asc_enableKeyEvents(!0)},setDocumentName:function(a){var b=this.getDocumentNameLabel();b&&b.setHtml(Ext.String.htmlEncode(a))},setMode:function(a){var b=this.getViewToolbar(),c=this.getSearchToolbar();"edit"==a?(b&&b.hide(),c&&c.hide(),this.api&&this.api.asc_enableKeyEvents(!0)):(b&&b.show(),this.api&&this.api.asc_enableKeyEvents(!1))}}),Ext.define("SSE.controller.toolbar.View",{extend:"Ext.app.Controller",config:{refs:{viewToolbar:"viewtoolbar",searchToolbar:"searchtoolbar",worksheetPanel:"#id-worksheets-panel",doneButton:"#id-tb-btn-view-done",searchButton:"#id-tb-btn-search",fullscreenButton:"#id-tb-btn-fullscreen",shareButton:"#id-tb-btn-view-share",worksheetsButton:"#id-tb-btn-pages"},control:{doneButton:{tap:"onTapDoneButton"},searchButton:{tap:"onTapSearchButton"},fullscreenButton:{tap:"onTapFullscreenButton"},shareButton:{tap:"onTapShareButton"},worksheetsButton:{tap:"onTapWorksheets"},"#id-worksheets-panel seworksheetlist list":{itemtap:"onSelectWorksheet"}},searchMode:!1,fullscreenMode:!1},launch:function(){this.callParent(arguments),Common.Gateway.on("init",Ext.bind(this.loadConfig,this))},initControl:function(){this.callParent(arguments)},initApi:function(){},setApi:function(a){this.api=a,this.api&&this.api.asc_registerCallback("asc_onTapEvent",Ext.bind(this.onSingleTapDocument,this))},loadConfig:function(a){var b=this.getDoneButton();b&&a&&a.config&&a.config.canBackToFolder!==!1&&a.config.customization&&a.config.customization.goback&&a.config.customization.goback.url&&(this.gobackUrl=a.config.customization.goback.url,b.show())},applySearchMode:function(a){if(Ext.isBoolean(a)){var b=this,c=b.getSearchToolbar(),d=b.getSearchButton();return c&&(a?(d&&d.addCls("x-button-pressing"),b.getFullscreenMode()?c.show({easing:"ease-out",preserveEndState:!0,autoClear:!1,from:{top:"22px",opacity:.3},to:{top:"44px",opacity:.9}}):c.show()):b.getFullscreenMode()?c.hide({easing:"ease-in",to:{top:"22px",opacity:.3}}):c.hide()),a}Ext.Logger.error("Invalid parameters.")},applyFullscreenMode:function(a){if(Ext.isBoolean(a)){var b=this.getViewToolbar(),c=this.getSearchToolbar(),d=this.getFullscreenButton(),e=Ext.ComponentQuery.query("popclip");return e.length>0&&e[0].hide(),b&&c&&(a?(d&&d.addCls("x-button-pressing"),b.setStyle({position:"absolute",left:0,top:0,right:0,opacity:.9,"z-index":17}),c.setStyle({position:"absolute",left:0,top:"44px",right:0,opacity:.9,"z-index":16}),this.setHiddenToolbars(!0)):(b.setStyle({position:"initial",opacity:1}),c.setStyle({position:"initial",opacity:1}),b.setDocked("top"),c.setDocked("top"))),a}Ext.Logger.error("Invalid parameters.")},setHiddenToolbars:function(a){var b=this.getViewToolbar(),c=this.getSearchToolbar();b&&c&&(a?(b.hide({easing:"ease-out",from:{opacity:.9},to:{opacity:0}}),c.hide({easing:"ease-out",from:{opacity:.9},to:{opacity:0}})):(b.show({preserveEndState:!0,easing:"ease-in",from:{opacity:0},to:{opacity:.9}}),this.getSearchMode()&&c.show({preserveEndState:!0,easing:"ease-in",from:{opacity:0},to:{opacity:.9}})))},onTapDoneButton:function(){this.gobackUrl&&(window.parent.location.href=this.gobackUrl)},onTapSearchButton:function(){this.setSearchMode(!this.getSearchMode())},onTapFullscreenButton:function(){this.setFullscreenMode(!this.getFullscreenMode()),this.api&&this.api.asc_Resize()},onTapShareButton:function(){this.api&&this.api.asc_Print(),Common.component.Analytics.trackEvent("ToolBar View","Share")},onSingleTapDocument:function(){var a=this.getViewToolbar();a&&this.getFullscreenMode()&&this.setHiddenToolbars(!a.isHidden())},onTapWorksheets:function(){var a=this.getWorksheetPanel(),b=this.getWorksheetsButton();a&&a.showBy(b)},onSelectWorksheet:function(){var a=this.getWorksheetPanel();a&&a.hide()}}),Ext.define("SSE.profile.Phone",{extend:"Ext.app.Profile",config:{name:"phone",namespace:"phone",controllers:["Main","SSE.controller.Document","SSE.controller.Search","SSE.controller.WorksheetList","SSE.controller.toolbar.View"],views:["Main"],models:["SSE.model.Worksheet"],stores:["SSE.store.Worksheets"]},isActive:function(){return Ext.os.is.Phone&&(Ext.os.is.iOS||Ext.os.is.Android)},launch:function(){Ext.widget("sephonemain")}}),Ext.define("SSE.profile.Tablet",{extend:"Ext.app.Profile",config:{name:"tablet",namespace:"tablet",controllers:["Main","SSE.controller.Document","SSE.controller.Search","SSE.controller.WorksheetList","SSE.controller.toolbar.View"],views:["Main"],models:["SSE.model.Worksheet"],stores:["SSE.store.Worksheets"]},isActive:function(){return Ext.browser.is.WebKit&&(Ext.os.is.Tablet&&(Ext.os.is.iOS||Ext.os.is.Android)||Ext.os.is.Desktop)},launch:function(){Ext.widget("setabletmain")}}),void 0===Common)var Common={};Common.Locale=new function(){var l10n={},_createXMLHTTPObject=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){a=!1}}return a||"undefined"==typeof XMLHttpRequest||(a=new XMLHttpRequest),a},_applyLocalization=function(){try{for(var a in l10n){var b=a.split(".");if(b&&b.length>2){for(var c=window,d=0;d<b.length-1;++d)void 0===c[b[d]]&&(c[b[d]]=new Object),c=c[b[d]];c&&(c[b[b.length-1]]=l10n[a])}}}catch(e){}},_get=function(prop,scope){var res="";return scope&&scope.name&&(res=l10n[scope.name+"."+prop]),res||(scope?eval(scope.name).prototype[prop]:"")},_getUrlParameterByName=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);

return null==c?"":decodeURIComponent(c[1].replace(/\+/g," "))};try{var langParam=_getUrlParameterByName("lang"),xhrObj=_createXMLHTTPObject();if(xhrObj&&langParam){var lang=langParam.split("-")[0];xhrObj.open("GET","locale/"+lang+".json",!1),xhrObj.send(""),l10n=eval("("+xhrObj.responseText+")")}}catch(e){}return{apply:_applyLocalization,get:_get}},Ext.application({name:"SSE",icon:"resources/img/icon.png",tabletStartupScreen:"resources/img/tablet_startup.png",phoneStartupScreen:"resources/img/phone_startup.png",viewport:{autoMaximize:!1},profiles:["Tablet","Phone"]});
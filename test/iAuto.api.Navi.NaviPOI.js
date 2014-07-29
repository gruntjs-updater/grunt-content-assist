Ext.data.JsonP.iAuto_api_Navi_NaviPOI({"tagname":"class","name":"iAuto.api.Navi.NaviPOI","autodetected":{},"files":[{"filename":"NaviPOI.js","href":null}],"extends":"iAuto.api.BaseApi","author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"client","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-client","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"iAuto.core.event.Evented","id":"property-listeners","meta":{"private":true}},{"name":"requestId","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-requestId","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-constructor","meta":{}},{"name":"ReqBuildingList","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqBuildingList","meta":{}},{"name":"ReqCityList","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqCityList","meta":{}},{"name":"ReqFreewordSearch","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqFreewordSearch","meta":{}},{"name":"ReqGenreList","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqGenreList","meta":{}},{"name":"ReqGenreSearch","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqGenreSearch","meta":{}},{"name":"ReqHouseNoList","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqHouseNoList","meta":{}},{"name":"ReqInputHistory","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqInputHistory","meta":{}},{"name":"ReqLogmarkSetting","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqLogmarkSetting","meta":{}},{"name":"ReqNearbySearch","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqNearbySearch","meta":{}},{"name":"ReqPOIDetailInfo","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqPOIDetailInfo","meta":{}},{"name":"ReqSmartSpellName","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqSmartSpellName","meta":{}},{"name":"ReqTelephoneSearch","tagname":"method","owner":"iAuto.api.Navi.NaviPOI","id":"method-ReqTelephoneSearch","meta":{}},{"name":"connect","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-connect","meta":{}},{"name":"disconnect","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-disconnect","meta":{}},{"name":"generateReqId","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-generateReqId","meta":{}},{"name":"off","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-on","meta":{}},{"name":"onProtoMessage","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onProtoMessage","meta":{"private":true}},{"name":"onWsOpen","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onWsOpen","meta":{"private":true}},{"name":"one","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-one","meta":{}},{"name":"send","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-send","meta":{}},{"name":"trigger","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-trigger","meta":{}},{"name":"DetailInfoResult","tagname":"event","owner":"iAuto.api.Navi.NaviPOI","id":"event-DetailInfoResult","meta":{}},{"name":"SearchResult","tagname":"event","owner":"iAuto.api.Navi.NaviPOI","id":"event-SearchResult","meta":{}},{"name":"SmartSpellResult","tagname":"event","owner":"iAuto.api.Navi.NaviPOI","id":"event-SmartSpellResult","meta":{}},{"name":"apiReady","tagname":"event","owner":"iAuto.api.BaseApi","id":"event-apiReady","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.api.Navi.NaviPOI","component":false,"superclasses":["iAuto.core.event.Evented","iAuto.api.BaseApi"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='docClass'>iAuto.core.event.Evented</a><div class='subclass '><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='docClass'>iAuto.api.BaseApi</a><div class='subclass '><strong>iAuto.api.Navi.NaviPOI</strong></div></div></div></pre><div class='doc-contents'><p>UIPOIService published interface</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-client' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-client' class='name expandable'>client</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>WebSocketClient</p>\n</div><div class='long'><p>WebSocketClient</p>\n</div></div></div><div id='property-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Event listeners.</p>\n</div><div class='long'><p>Event listeners.</p>\n</div></div></div><div id='property-requestId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-requestId' class='name expandable'>requestId</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Request Id for websocket request.</p>\n</div><div class='long'><p>Request Id for websocket request.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/iAuto.api.BaseApi-method-constructor' class='name expandable'>iAuto.api.Navi.NaviPOI</a>( <span class='pre'>serviceName</span> ) : <a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new api instance. ...</div><div class='long'><p>Create a new api instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceName</span> : String<div class='sub-desc'><p>The service name the api used.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-ReqBuildingList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqBuildingList' class='name expandable'>ReqBuildingList</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request building search. ...</div><div class='long'><p>Request building search.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqCityList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqCityList' class='name expandable'>ReqCityList</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request city  list. ...</div><div class='long'><p>Request city  list.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqFreewordSearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqFreewordSearch' class='name expandable'>ReqFreewordSearch</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request freeword search. ...</div><div class='long'><p>Request freeword search.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqGenreList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqGenreList' class='name expandable'>ReqGenreList</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request genre search list. ...</div><div class='long'><p>Request genre search list.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqGenreSearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqGenreSearch' class='name expandable'>ReqGenreSearch</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request genre search. ...</div><div class='long'><p>Request genre search.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqHouseNoList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqHouseNoList' class='name expandable'>ReqHouseNoList</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request house number search. ...</div><div class='long'><p>Request house number search.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqInputHistory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqInputHistory' class='name expandable'>ReqInputHistory</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request keyword history. ...</div><div class='long'><p>Request keyword history.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqLogmarkSetting' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqLogmarkSetting' class='name expandable'>ReqLogmarkSetting</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request logmark setting. ...</div><div class='long'><p>Request logmark setting.</p>\n</div></div></div><div id='method-ReqNearbySearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqNearbySearch' class='name expandable'>ReqNearbySearch</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request nearby search. ...</div><div class='long'><p>Request nearby search.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-ReqPOIDetailInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqPOIDetailInfo' class='name expandable'>ReqPOIDetailInfo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request detail info search. ...</div><div class='long'><p>Request detail info search.</p>\n\n<p>Wait event DetailInfoResult</p>\n</div></div></div><div id='method-ReqSmartSpellName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqSmartSpellName' class='name expandable'>ReqSmartSpellName</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request smartSpell search. ...</div><div class='long'><p>Request smartSpell search.</p>\n\n<p>Wait event SmartSpellResult</p>\n</div></div></div><div id='method-ReqTelephoneSearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-method-ReqTelephoneSearch' class='name expandable'>ReqTelephoneSearch</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request tel search. ...</div><div class='long'><p>Request tel search.</p>\n\n<p>Wait event SearchResult</p>\n</div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Connect to the websocket server. ...</div><div class='long'><p>Connect to the websocket server.</p>\n</div></div></div><div id='method-disconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disconnect to the websocket server. ...</div><div class='long'><p>Disconnect to the websocket server.</p>\n</div></div></div><div id='method-generateReqId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-generateReqId' class='name expandable'>generateReqId</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a unique request id. ...</div><div class='long'><p>Generate a unique request id.</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-onProtoMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onProtoMessage' class='name expandable'>onProtoMessage</a>( <span class='pre'>eventName, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when proto message received. ...</div><div class='long'><p>Executed when proto message received.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Event data.</p>\n</div></li></ul></div></div></div><div id='method-onWsOpen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onWsOpen' class='name expandable'>onWsOpen</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when socket opend. ...</div><div class='long'><p>Executed when socket opend.</p>\n</div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-one' class='name expandable'>one</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-send' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-send' class='name expandable'>send</a>( <span class='pre'>protoId, protoData</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send proto message data and send via socket connection. ...</div><div class='long'><p>Send proto message data and send via socket connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protoId</span> : String<div class='sub-desc'><p>Proto message Id.</p>\n</div></li><li><span class='pre'>protoData</span> : Object<div class='sub-desc'><p>Proto message data.</p>\n</div></li></ul></div></div></div><div id='method-trigger' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>eventName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers a named event for the object. ...</div><div class='long'><p>Triggers a named event for the object. Any additional arguments will be passed as parameters to the\nfunctions that are subscribed to the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-DetailInfoResult' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-event-DetailInfoResult' class='name expandable'>DetailInfoResult</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>trigger for detail info search result ...</div><div class='long'><p>trigger for detail info search result</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>:Search result.</p>\n</div></li></ul></div></div></div><div id='event-SearchResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-event-SearchResult' class='name expandable'>SearchResult</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>trigger for search result ...</div><div class='long'><p>trigger for search result</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>:Search result.</p>\n</div></li></ul></div></div></div><div id='event-SmartSpellResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Navi.NaviPOI'>iAuto.api.Navi.NaviPOI</span><br/></div><a href='#!/api/iAuto.api.Navi.NaviPOI-event-SmartSpellResult' class='name expandable'>SmartSpellResult</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>trigger for smartspell search result ...</div><div class='long'><p>trigger for smartspell search result</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>:Search result.</p>\n</div></li></ul></div></div></div><div id='event-apiReady' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-event-apiReady' class='name expandable'>apiReady</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket connection is opened, the api is ready to use. ...</div><div class='long'><p>Trigger when websocket connection is opened, the api is ready to use.</p>\n</div></div></div></div></div></div></div>","meta":{}});
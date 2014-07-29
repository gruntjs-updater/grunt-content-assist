Ext.data.JsonP.iAuto_api_Av_NQDvdRomBrowser({"tagname":"class","name":"iAuto.api.Av.NQDvdRomBrowser","autodetected":{},"files":[{"filename":"NQDvdRomBrowser.js","href":null}],"extends":"iAuto.api.BaseApi","author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"client","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-client","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"iAuto.core.event.Evented","id":"property-listeners","meta":{"private":true}},{"name":"requestId","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-requestId","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-constructor","meta":{}},{"name":"connect","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-connect","meta":{}},{"name":"disconnect","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-disconnect","meta":{}},{"name":"generateReqId","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-generateReqId","meta":{}},{"name":"getBrowseHierarchy","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-getBrowseHierarchy","meta":{}},{"name":"getItemData","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-getItemData","meta":{}},{"name":"getListCount","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-getListCount","meta":{}},{"name":"off","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-on","meta":{}},{"name":"onProtoMessage","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onProtoMessage","meta":{"private":true}},{"name":"onWsOpen","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onWsOpen","meta":{"private":true}},{"name":"one","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-one","meta":{}},{"name":"playingItemIndex","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-playingItemIndex","meta":{}},{"name":"selectBrowseHierarchy","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-selectBrowseHierarchy","meta":{}},{"name":"selectItem","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-selectItem","meta":{}},{"name":"selectPlayHierarchy","tagname":"method","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"method-selectPlayHierarchy","meta":{}},{"name":"send","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-send","meta":{}},{"name":"trigger","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-trigger","meta":{}},{"name":"apiReady","tagname":"event","owner":"iAuto.api.BaseApi","id":"event-apiReady","meta":{}},{"name":"dataChanged","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-dataChanged","meta":{}},{"name":"dataGetted","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-dataGetted","meta":{}},{"name":"dataSetted","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-dataSetted","meta":{}},{"name":"hierarchyChanged","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-hierarchyChanged","meta":{}},{"name":"itemDataReady","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-itemDataReady","meta":{}},{"name":"playConfirmed","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-playConfirmed","meta":{}},{"name":"playingItemIndexChanged","tagname":"event","owner":"iAuto.api.Av.NQDvdRomBrowser","id":"event-playingItemIndexChanged","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.api.Av.NQDvdRomBrowser","component":false,"superclasses":["iAuto.core.event.Evented","iAuto.api.BaseApi"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='docClass'>iAuto.core.event.Evented</a><div class='subclass '><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='docClass'>iAuto.api.BaseApi</a><div class='subclass '><strong>iAuto.api.Av.NQDvdRomBrowser</strong></div></div></div></pre><div class='doc-contents'><p>NQDvdRomBrowser Service Public Interface</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-client' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-client' class='name expandable'>client</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>WebSocketClient</p>\n</div><div class='long'><p>WebSocketClient</p>\n</div></div></div><div id='property-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Event listeners.</p>\n</div><div class='long'><p>Event listeners.</p>\n</div></div></div><div id='property-requestId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-requestId' class='name expandable'>requestId</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Request Id for websocket request.</p>\n</div><div class='long'><p>Request Id for websocket request.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/iAuto.api.BaseApi-method-constructor' class='name expandable'>iAuto.api.Av.NQDvdRomBrowser</a>( <span class='pre'>serviceName</span> ) : <a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new api instance. ...</div><div class='long'><p>Create a new api instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceName</span> : String<div class='sub-desc'><p>The service name the api used.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Connect to the websocket server. ...</div><div class='long'><p>Connect to the websocket server.</p>\n</div></div></div><div id='method-disconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disconnect to the websocket server. ...</div><div class='long'><p>Disconnect to the websocket server.</p>\n</div></div></div><div id='method-generateReqId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-generateReqId' class='name expandable'>generateReqId</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a unique request id. ...</div><div class='long'><p>Generate a unique request id.</p>\n</div></div></div><div id='method-getBrowseHierarchy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-getBrowseHierarchy' class='name expandable'>getBrowseHierarchy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get browse hierarch. ...</div><div class='long'><p>get browse hierarch.</p>\n</div></div></div><div id='method-getItemData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-getItemData' class='name expandable'>getItemData</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get list item. ...</div><div class='long'><p>get list item.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>.</p>\n</div></li></ul></div></div></div><div id='method-getListCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-getListCount' class='name expandable'>getListCount</a>( <span class='pre'>activeCount, totalCount</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get list count . ...</div><div class='long'><p>get list count .</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>activeCount</span> : Number<div class='sub-desc'><p>number of cache items.</p>\n</div></li><li><span class='pre'>totalCount</span> : Number<div class='sub-desc'><p>number of total items.</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-onProtoMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onProtoMessage' class='name expandable'>onProtoMessage</a>( <span class='pre'>eventName, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when proto message received. ...</div><div class='long'><p>Executed when proto message received.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Event data.</p>\n</div></li></ul></div></div></div><div id='method-onWsOpen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onWsOpen' class='name expandable'>onWsOpen</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when socket opend. ...</div><div class='long'><p>Executed when socket opend.</p>\n</div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-one' class='name expandable'>one</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-playingItemIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-playingItemIndex' class='name expandable'>playingItemIndex</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get playing item index. ...</div><div class='long'><p>get playing item index.</p>\n</div></div></div><div id='method-selectBrowseHierarchy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-selectBrowseHierarchy' class='name expandable'>selectBrowseHierarchy</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>select one item in the browse path. ...</div><div class='long'><p>select one item in the browse path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>.</p>\n</div></li></ul></div></div></div><div id='method-selectItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-selectItem' class='name expandable'>selectItem</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>select one item in the list. ...</div><div class='long'><p>select one item in the list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>.</p>\n</div></li></ul></div></div></div><div id='method-selectPlayHierarchy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-method-selectPlayHierarchy' class='name expandable'>selectPlayHierarchy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>select playing hierarchy as browse hierarchy. ...</div><div class='long'><p>select playing hierarchy as browse hierarchy.</p>\n</div></div></div><div id='method-send' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-send' class='name expandable'>send</a>( <span class='pre'>protoId, protoData</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send proto message data and send via socket connection. ...</div><div class='long'><p>Send proto message data and send via socket connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protoId</span> : String<div class='sub-desc'><p>Proto message Id.</p>\n</div></li><li><span class='pre'>protoData</span> : Object<div class='sub-desc'><p>Proto message data.</p>\n</div></li></ul></div></div></div><div id='method-trigger' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>eventName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers a named event for the object. ...</div><div class='long'><p>Triggers a named event for the object. Any additional arguments will be passed as parameters to the\nfunctions that are subscribed to the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-apiReady' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-event-apiReady' class='name expandable'>apiReady</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket connection is opened, the api is ready to use. ...</div><div class='long'><p>Trigger when websocket connection is opened, the api is ready to use.</p>\n</div></div></div><div id='event-dataChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-dataChanged' class='name expandable'>dataChanged</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when data changed. ...</div><div class='long'><p>Trigger when data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-dataGetted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-dataGetted' class='name expandable'>dataGetted</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The result of set data. ...</div><div class='long'><p>The result of set data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-dataSetted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-dataSetted' class='name expandable'>dataSetted</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The result of get data. ...</div><div class='long'><p>The result of get data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-hierarchyChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-hierarchyChanged' class='name expandable'>hierarchyChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger path changed. ...</div><div class='long'><p>Trigger path changed.</p>\n</div></div></div><div id='event-itemDataReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-itemDataReady' class='name expandable'>itemDataReady</a>( <span class='pre'>activeCount, totalCount</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger cache data changed. ...</div><div class='long'><p>Trigger cache data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>activeCount</span> : Number<div class='sub-desc'><p>:number of cache items.</p>\n</div></li><li><span class='pre'>totalCount</span> : Number<div class='sub-desc'><p>number of total items.</p>\n</div></li></ul></div></div></div><div id='event-playConfirmed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-playConfirmed' class='name expandable'>playConfirmed</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger play a file. ...</div><div class='long'><p>Trigger play a file.</p>\n</div></div></div><div id='event-playingItemIndexChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQDvdRomBrowser'>iAuto.api.Av.NQDvdRomBrowser</span><br/></div><a href='#!/api/iAuto.api.Av.NQDvdRomBrowser-event-playingItemIndexChanged' class='name expandable'>playingItemIndexChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger play file folde number changed. ...</div><div class='long'><p>Trigger play file folde number changed.</p>\n</div></div></div></div></div></div></div>","meta":{}});
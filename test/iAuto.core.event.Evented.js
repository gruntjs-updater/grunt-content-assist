Ext.data.JsonP.iAuto_core_event_Evented({"tagname":"class","name":"iAuto.core.event.Evented","autodetected":{},"files":[{"filename":"Evented.js","href":null}],"author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"listeners","tagname":"property","owner":"iAuto.core.event.Evented","id":"property-listeners","meta":{"private":true}},{"name":"off","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-on","meta":{}},{"name":"one","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-one","meta":{}},{"name":"trigger","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-trigger","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.core.event.Evented","component":false,"superclasses":[],"subclasses":["iAuto.api.BaseApi","iAuto.network.WebSocketClient"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='docClass'>iAuto.api.BaseApi</a></div><div class='dependency'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='docClass'>iAuto.network.WebSocketClient</a></div></pre><div class='doc-contents'><p>This class allows for objects to subscribe to and emit events.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-listeners' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.core.event.Evented'>iAuto.core.event.Evented</span><br/></div><a href='#!/api/iAuto.core.event.Evented-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Event listeners.</p>\n</div><div class='long'><p>Event listeners.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-off' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.core.event.Evented'>iAuto.core.event.Evented</span><br/></div><a href='#!/api/iAuto.core.event.Evented-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.core.event.Evented'>iAuto.core.event.Evented</span><br/></div><a href='#!/api/iAuto.core.event.Evented-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-one' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.core.event.Evented'>iAuto.core.event.Evented</span><br/></div><a href='#!/api/iAuto.core.event.Evented-method-one' class='name expandable'>one</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-trigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.core.event.Evented'>iAuto.core.event.Evented</span><br/></div><a href='#!/api/iAuto.core.event.Evented-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>eventName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers a named event for the object. ...</div><div class='long'><p>Triggers a named event for the object. Any additional arguments will be passed as parameters to the\nfunctions that are subscribed to the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
Ext.data.JsonP.iAuto_api_Av_NQMiracast({"tagname":"class","name":"iAuto.api.Av.NQMiracast","autodetected":{},"files":[{"filename":"NQMiracast.js","href":null}],"extends":"iAuto.api.BaseApi","author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"client","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-client","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"iAuto.core.event.Evented","id":"property-listeners","meta":{"private":true}},{"name":"requestId","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-requestId","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-constructor","meta":{}},{"name":"activateChannels","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-activateChannels","meta":{}},{"name":"cancelSearchRemoteDevices","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-cancelSearchRemoteDevices","meta":{}},{"name":"connect","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-connect","meta":{}},{"name":"connectedDevice","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-connectedDevice","meta":{}},{"name":"deactivateChannels","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-deactivateChannels","meta":{}},{"name":"disconnect","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-disconnect","meta":{}},{"name":"generateReqId","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-generateReqId","meta":{}},{"name":"initialize","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-initialize","meta":{}},{"name":"off","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-on","meta":{}},{"name":"onProtoMessage","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onProtoMessage","meta":{"private":true}},{"name":"onWsOpen","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onWsOpen","meta":{"private":true}},{"name":"one","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-one","meta":{}},{"name":"pause","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-pause","meta":{}},{"name":"play","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-play","meta":{}},{"name":"replyDeviceConnection","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-replyDeviceConnection","meta":{}},{"name":"searchRemoteDevices","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-searchRemoteDevices","meta":{}},{"name":"send","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-send","meta":{}},{"name":"sendTouchData","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-sendTouchData","meta":{}},{"name":"setAvChannelController","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-setAvChannelController","meta":{}},{"name":"status","tagname":"method","owner":"iAuto.api.Av.NQMiracast","id":"method-status","meta":{}},{"name":"trigger","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-trigger","meta":{}},{"name":"apiReady","tagname":"event","owner":"iAuto.api.BaseApi","id":"event-apiReady","meta":{}},{"name":"channelStatusChanged","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-channelStatusChanged","meta":{}},{"name":"connectPromptFromDevice","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-connectPromptFromDevice","meta":{}},{"name":"connectedDeviceChanged","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-connectedDeviceChanged","meta":{}},{"name":"dataChanged","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-dataChanged","meta":{}},{"name":"dataGetted","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-dataGetted","meta":{}},{"name":"dataSetted","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-dataSetted","meta":{}},{"name":"deviceListUpdated","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-deviceListUpdated","meta":{}},{"name":"deviceUpdated","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-deviceUpdated","meta":{}},{"name":"initialized","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-initialized","meta":{}},{"name":"statusChanged","tagname":"event","owner":"iAuto.api.Av.NQMiracast","id":"event-statusChanged","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.api.Av.NQMiracast","component":false,"superclasses":["iAuto.core.event.Evented","iAuto.api.BaseApi"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='docClass'>iAuto.core.event.Evented</a><div class='subclass '><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='docClass'>iAuto.api.BaseApi</a><div class='subclass '><strong>iAuto.api.Av.NQMiracast</strong></div></div></div></pre><div class='doc-contents'><p>NQMiracast Service Public Interface</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-client' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-client' class='name expandable'>client</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>WebSocketClient</p>\n</div><div class='long'><p>WebSocketClient</p>\n</div></div></div><div id='property-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Event listeners.</p>\n</div><div class='long'><p>Event listeners.</p>\n</div></div></div><div id='property-requestId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-requestId' class='name expandable'>requestId</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Request Id for websocket request.</p>\n</div><div class='long'><p>Request Id for websocket request.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/iAuto.api.BaseApi-method-constructor' class='name expandable'>iAuto.api.Av.NQMiracast</a>( <span class='pre'>serviceName</span> ) : <a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new api instance. ...</div><div class='long'><p>Create a new api instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceName</span> : String<div class='sub-desc'><p>The service name the api used.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-activateChannels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-activateChannels' class='name expandable'>activateChannels</a>( <span class='pre'>types, outputs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Activate Av Channel. ...</div><div class='long'><p>Activate Av Channel.\nNeed wait event:channelStatusChanged</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>types</span> : Number<div class='sub-desc'><p>Media type audio/video.</p>\n</div></li><li><span class='pre'>outputs</span> : Number<div class='sub-desc'><p>Mask of channel output.</p>\n</div></li></ul></div></div></div><div id='method-cancelSearchRemoteDevices' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-cancelSearchRemoteDevices' class='name expandable'>cancelSearchRemoteDevices</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request cancel search when remote searching. ...</div><div class='long'><p>Request cancel search when remote searching.\nNeed wait event:deviceListUpdated\ndeviceUpdated</p>\n</div></div></div><div id='method-connect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-connect' class='name expandable'>connect</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request connect remote device. ...</div><div class='long'><p>Request connect remote device.\nNeed wait event:statusChanged</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>remote device index.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/iAuto.api.BaseApi-method-connect\" rel=\"iAuto.api.BaseApi-method-connect\" class=\"docClass\">iAuto.api.BaseApi.connect</a></p></div></div></div><div id='method-connectedDevice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-connectedDevice' class='name expandable'>connectedDevice</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request current connected device index. ...</div><div class='long'><p>Request current connected device index.</p>\n</div></div></div><div id='method-deactivateChannels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-deactivateChannels' class='name expandable'>deactivateChannels</a>( <span class='pre'>types, outputs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Deactivate Av Channel. ...</div><div class='long'><p>Deactivate Av Channel.\nNeed wait event:channelStatusChanged</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>types</span> : Number<div class='sub-desc'><p>Media type audio/video.</p>\n</div></li><li><span class='pre'>outputs</span> : Number<div class='sub-desc'><p>Mask of channel output.</p>\n</div></li></ul></div></div></div><div id='method-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request disconnect remote device. ...</div><div class='long'><p>Request disconnect remote device.\nNeed wait event:statusChanged</p>\n<p>Overrides: <a href=\"#!/api/iAuto.api.BaseApi-method-disconnect\" rel=\"iAuto.api.BaseApi-method-disconnect\" class=\"docClass\">iAuto.api.BaseApi.disconnect</a></p></div></div></div><div id='method-generateReqId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-generateReqId' class='name expandable'>generateReqId</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a unique request id. ...</div><div class='long'><p>Generate a unique request id.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initialize and Sync data to fetch all notifications. ...</div><div class='long'><p>Initialize and Sync data to fetch all notifications.\nNeed wait event:initialized</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-onProtoMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onProtoMessage' class='name expandable'>onProtoMessage</a>( <span class='pre'>eventName, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when proto message received. ...</div><div class='long'><p>Executed when proto message received.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Event data.</p>\n</div></li></ul></div></div></div><div id='method-onWsOpen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onWsOpen' class='name expandable'>onWsOpen</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when socket opend. ...</div><div class='long'><p>Executed when socket opend.</p>\n</div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-one' class='name expandable'>one</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request stop monitor screen remote device. ...</div><div class='long'><p>Request stop monitor screen remote device.\nNeed wait event:statusChanged</p>\n</div></div></div><div id='method-play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-play' class='name expandable'>play</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request start monitor screen remote device. ...</div><div class='long'><p>Request start monitor screen remote device.\nNeed wait event:statusChanged</p>\n</div></div></div><div id='method-replyDeviceConnection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-replyDeviceConnection' class='name expandable'>replyDeviceConnection</a>( <span class='pre'>reply</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>reply request from remote device. ...</div><div class='long'><p>reply request from remote device.\nNeed wait event:statusChanged</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reply</span> : Number<div class='sub-desc'><p>ReplyType Value used in deviceListUpdated.</p>\n</div></li></ul></div></div></div><div id='method-searchRemoteDevices' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-searchRemoteDevices' class='name expandable'>searchRemoteDevices</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request search remote devices. ...</div><div class='long'><p>Request search remote devices.\nNeed wait event:deviceListUpdated\ndeviceUpdated</p>\n</div></div></div><div id='method-send' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-send' class='name expandable'>send</a>( <span class='pre'>protoId, protoData</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send proto message data and send via socket connection. ...</div><div class='long'><p>Send proto message data and send via socket connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protoId</span> : String<div class='sub-desc'><p>Proto message Id.</p>\n</div></li><li><span class='pre'>protoData</span> : Object<div class='sub-desc'><p>Proto message data.</p>\n</div></li></ul></div></div></div><div id='method-sendTouchData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-sendTouchData' class='name expandable'>sendTouchData</a>( <span class='pre'>type, points</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request send touch point to remote device for controlling. ...</div><div class='long'><p>Request send touch point to remote device for controlling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Number<div class='sub-desc'><p>touch type includes multi-points touch and move.</p>\n</div></li><li><span class='pre'>points</span> : Object<div class='sub-desc'><p>points list includes points collection at same time.</p>\n</div></li></ul></div></div></div><div id='method-setAvChannelController' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-setAvChannelController' class='name expandable'>setAvChannelController</a>( <span class='pre'>avChannel</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set AvChannel Controller. ...</div><div class='long'><p>Set AvChannel Controller.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>avChannel</span> : Object<div class='sub-desc'><p>NQIAvChannel.</p>\n</div></li></ul></div></div></div><div id='method-status' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-method-status' class='name expandable'>status</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Request current miracast status. ...</div><div class='long'><p>Request current miracast status.</p>\n</div></div></div><div id='method-trigger' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>eventName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers a named event for the object. ...</div><div class='long'><p>Triggers a named event for the object. Any additional arguments will be passed as parameters to the\nfunctions that are subscribed to the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-apiReady' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-event-apiReady' class='name expandable'>apiReady</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket connection is opened, the api is ready to use. ...</div><div class='long'><p>Trigger when websocket connection is opened, the api is ready to use.</p>\n</div></div></div><div id='event-channelStatusChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-channelStatusChanged' class='name expandable'>channelStatusChanged</a>( <span class='pre'>status, type, output</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger Return av channel changed status. ...</div><div class='long'><p>Trigger Return av channel changed status.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>status</span> : Number<div class='sub-desc'><p>AV channel status.</p>\n</div></li><li><span class='pre'>type</span> : Number<div class='sub-desc'><p>Media type.</p>\n</div></li><li><span class='pre'>output</span> : Number<div class='sub-desc'><p>Mask of channel output.</p>\n</div></li></ul></div></div></div><div id='event-connectPromptFromDevice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-connectPromptFromDevice' class='name expandable'>connectPromptFromDevice</a>( <span class='pre'>deviceName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger remote device connect request. ...</div><div class='long'><p>Trigger remote device connect request.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deviceName</span> : String<div class='sub-desc'><p>remote device name.</p>\n</div></li></ul></div></div></div><div id='event-connectedDeviceChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-connectedDeviceChanged' class='name expandable'>connectedDeviceChanged</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger Return current actived device index. ...</div><div class='long'><p>Trigger Return current actived device index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>device index, if no device is actived, index will return -1.</p>\n</div></li></ul></div></div></div><div id='event-dataChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-dataChanged' class='name expandable'>dataChanged</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when data changed. ...</div><div class='long'><p>Trigger when data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-dataGetted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-dataGetted' class='name expandable'>dataGetted</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The result of set data. ...</div><div class='long'><p>The result of set data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-dataSetted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-dataSetted' class='name expandable'>dataSetted</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The result of get data. ...</div><div class='long'><p>The result of get data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-deviceListUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-deviceListUpdated' class='name expandable'>deviceListUpdated</a>( <span class='pre'>deviceList, status</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger Return an available devices list. ...</div><div class='long'><p>Trigger Return an available devices list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deviceList</span> : Object<div class='sub-desc'><p>:a list containing all available remote devices.</p>\n</div></li><li><span class='pre'>status</span> : Number<div class='sub-desc'><p>:status of device list fetching.</p>\n</div></li></ul></div></div></div><div id='event-deviceUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-deviceUpdated' class='name expandable'>deviceUpdated</a>( <span class='pre'>device</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger Return a device item. ...</div><div class='long'><p>Trigger Return a device item.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>device</span> : Object<div class='sub-desc'><p>an available remote device.</p>\n</div></li></ul></div></div></div><div id='event-initialized' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-initialized' class='name expandable'>initialized</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger notify initialize is end. ...</div><div class='long'><p>Trigger notify initialize is end.</p>\n</div></div></div><div id='event-statusChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.Av.NQMiracast'>iAuto.api.Av.NQMiracast</span><br/></div><a href='#!/api/iAuto.api.Av.NQMiracast-event-statusChanged' class='name expandable'>statusChanged</a>( <span class='pre'>status, error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger Return current miracast Status. ...</div><div class='long'><p>Trigger Return current miracast Status.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>status</span> : Number<div class='sub-desc'><p>:current miracast status.</p>\n</div></li><li><span class='pre'>error</span> : Number<div class='sub-desc'><p>: ErrorType Value used in deviceListUpdated.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
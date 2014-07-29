Ext.data.JsonP.iAuto_api_HMIManager_HMISystem({"tagname":"class","name":"iAuto.api.HMIManager.HMISystem","autodetected":{},"files":[{"filename":"HMISystem.js","href":null}],"extends":"iAuto.api.BaseApi","author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"client","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-client","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"iAuto.core.event.Evented","id":"property-listeners","meta":{"private":true}},{"name":"requestId","tagname":"property","owner":"iAuto.api.BaseApi","id":"property-requestId","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-constructor","meta":{}},{"name":"connect","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-connect","meta":{}},{"name":"disconnect","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-disconnect","meta":{}},{"name":"generateReqId","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-generateReqId","meta":{}},{"name":"getAplVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getAplVersion","meta":{}},{"name":"getBootLoaderVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getBootLoaderVersion","meta":{}},{"name":"getFlapWarningType","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getFlapWarningType","meta":{}},{"name":"getGPSVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getGPSVersion","meta":{}},{"name":"getJacintoVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getJacintoVersion","meta":{}},{"name":"getMainStorageType","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getMainStorageType","meta":{}},{"name":"getMaker","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getMaker","meta":{}},{"name":"getMechaVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getMechaVersion","meta":{}},{"name":"getMemorySize","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getMemorySize","meta":{}},{"name":"getMonitorSize","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getMonitorSize","meta":{}},{"name":"getNANDVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getNANDVersion","meta":{}},{"name":"getPlatformVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getPlatformVersion","meta":{}},{"name":"getPowerUComVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getPowerUComVersion","meta":{}},{"name":"getProgramType","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getProgramType","meta":{}},{"name":"getRegion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getRegion","meta":{}},{"name":"getRemovableStorageType","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getRemovableStorageType","meta":{}},{"name":"getSerialNumber","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getSerialNumber","meta":{}},{"name":"getSystemUComVersion","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getSystemUComVersion","meta":{}},{"name":"getUserStorageType","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-getUserStorageType","meta":{}},{"name":"hasMultiTouchForMap","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-hasMultiTouchForMap","meta":{}},{"name":"isSusResModel","tagname":"method","owner":"iAuto.api.HMIManager.HMISystem","id":"method-isSusResModel","meta":{}},{"name":"off","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-on","meta":{}},{"name":"onProtoMessage","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onProtoMessage","meta":{"private":true}},{"name":"onWsOpen","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-onWsOpen","meta":{"private":true}},{"name":"one","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-one","meta":{}},{"name":"send","tagname":"method","owner":"iAuto.api.BaseApi","id":"method-send","meta":{}},{"name":"trigger","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-trigger","meta":{}},{"name":"apiReady","tagname":"event","owner":"iAuto.api.BaseApi","id":"event-apiReady","meta":{}},{"name":"dataChanged","tagname":"event","owner":"iAuto.api.HMIManager.HMISystem","id":"event-dataChanged","meta":{}},{"name":"dataGetted","tagname":"event","owner":"iAuto.api.HMIManager.HMISystem","id":"event-dataGetted","meta":{}},{"name":"dataSetted","tagname":"event","owner":"iAuto.api.HMIManager.HMISystem","id":"event-dataSetted","meta":{}},{"name":"finishedCheckSD","tagname":"event","owner":"iAuto.api.HMIManager.HMISystem","id":"event-finishedCheckSD","meta":{}},{"name":"hddLowTempError","tagname":"event","owner":"iAuto.api.HMIManager.HMISystem","id":"event-hddLowTempError","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.api.HMIManager.HMISystem","component":false,"superclasses":["iAuto.core.event.Evented","iAuto.api.BaseApi"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='docClass'>iAuto.core.event.Evented</a><div class='subclass '><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='docClass'>iAuto.api.BaseApi</a><div class='subclass '><strong>iAuto.api.HMIManager.HMISystem</strong></div></div></div></pre><div class='doc-contents'><p>HMISystemService published interface</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-client' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-client' class='name expandable'>client</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>WebSocketClient</p>\n</div><div class='long'><p>WebSocketClient</p>\n</div></div></div><div id='property-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Event listeners.</p>\n</div><div class='long'><p>Event listeners.</p>\n</div></div></div><div id='property-requestId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-property-requestId' class='name expandable'>requestId</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Request Id for websocket request.</p>\n</div><div class='long'><p>Request Id for websocket request.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/iAuto.api.BaseApi-method-constructor' class='name expandable'>iAuto.api.HMIManager.HMISystem</a>( <span class='pre'>serviceName</span> ) : <a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new api instance. ...</div><div class='long'><p>Create a new api instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceName</span> : String<div class='sub-desc'><p>The service name the api used.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.api.BaseApi\" rel=\"iAuto.api.BaseApi\" class=\"docClass\">iAuto.api.BaseApi</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Connect to the websocket server. ...</div><div class='long'><p>Connect to the websocket server.</p>\n</div></div></div><div id='method-disconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disconnect to the websocket server. ...</div><div class='long'><p>Disconnect to the websocket server.</p>\n</div></div></div><div id='method-generateReqId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-generateReqId' class='name expandable'>generateReqId</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a unique request id. ...</div><div class='long'><p>Generate a unique request id.</p>\n</div></div></div><div id='method-getAplVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getAplVersion' class='name expandable'>getAplVersion</a>( <span class='pre'>sAplVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get AplVersion. ...</div><div class='long'><p>Get AplVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sAplVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBootLoaderVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getBootLoaderVersion' class='name expandable'>getBootLoaderVersion</a>( <span class='pre'>sBootLoaderVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get BootLoaderVersion. ...</div><div class='long'><p>Get BootLoaderVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sBootLoaderVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFlapWarningType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getFlapWarningType' class='name expandable'>getFlapWarningType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get FlapWarning Type. ...</div><div class='long'><p>Get FlapWarning Type.</p>\n</div></div></div><div id='method-getGPSVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getGPSVersion' class='name expandable'>getGPSVersion</a>( <span class='pre'>sGPSVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get GPSVersion. ...</div><div class='long'><p>Get GPSVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sGPSVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getJacintoVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getJacintoVersion' class='name expandable'>getJacintoVersion</a>( <span class='pre'>sJacintoVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get JacintoVersion. ...</div><div class='long'><p>Get JacintoVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sJacintoVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMainStorageType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getMainStorageType' class='name expandable'>getMainStorageType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Storage Type(Main). ...</div><div class='long'><p>Get Storage Type(Main).</p>\n</div></div></div><div id='method-getMaker' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getMaker' class='name expandable'>getMaker</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Maker. ...</div><div class='long'><p>Get Maker.</p>\n</div></div></div><div id='method-getMechaVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getMechaVersion' class='name expandable'>getMechaVersion</a>( <span class='pre'>sMechVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get MechaVersion ...</div><div class='long'><p>Get MechaVersion</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sMechVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMemorySize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getMemorySize' class='name expandable'>getMemorySize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Memory Size. ...</div><div class='long'><p>Get Memory Size.</p>\n</div></div></div><div id='method-getMonitorSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getMonitorSize' class='name expandable'>getMonitorSize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get MonitorSize Type. ...</div><div class='long'><p>Get MonitorSize Type.</p>\n</div></div></div><div id='method-getNANDVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getNANDVersion' class='name expandable'>getNANDVersion</a>( <span class='pre'>sNANDVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get NANDVersion. ...</div><div class='long'><p>Get NANDVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sNANDVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPlatformVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getPlatformVersion' class='name expandable'>getPlatformVersion</a>( <span class='pre'>sPlatformVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get PlatformVersion. ...</div><div class='long'><p>Get PlatformVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sPlatformVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPowerUComVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getPowerUComVersion' class='name expandable'>getPowerUComVersion</a>( <span class='pre'>sPowerUComVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get PowerUComVersion ...</div><div class='long'><p>Get PowerUComVersion</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sPowerUComVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProgramType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getProgramType' class='name expandable'>getProgramType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Program Type. ...</div><div class='long'><p>Get Program Type.</p>\n</div></div></div><div id='method-getRegion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getRegion' class='name expandable'>getRegion</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Region. ...</div><div class='long'><p>Get Region.</p>\n</div></div></div><div id='method-getRemovableStorageType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getRemovableStorageType' class='name expandable'>getRemovableStorageType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Storage Type(Removable). ...</div><div class='long'><p>Get Storage Type(Removable).</p>\n</div></div></div><div id='method-getSerialNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getSerialNumber' class='name expandable'>getSerialNumber</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get SerialNumber. ...</div><div class='long'><p>Get SerialNumber.</p>\n</div></div></div><div id='method-getSystemUComVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getSystemUComVersion' class='name expandable'>getSystemUComVersion</a>( <span class='pre'>sSystemUComVersion</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get SystemUComVersion. ...</div><div class='long'><p>Get SystemUComVersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sSystemUComVersion</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUserStorageType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-getUserStorageType' class='name expandable'>getUserStorageType</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Storage Type(User). ...</div><div class='long'><p>Get Storage Type(User).</p>\n</div></div></div><div id='method-hasMultiTouchForMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-hasMultiTouchForMap' class='name expandable'>hasMultiTouchForMap</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get Map MultiTouch . ...</div><div class='long'><p>Get Map MultiTouch .</p>\n</div></div></div><div id='method-isSusResModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-method-isSusResModel' class='name expandable'>isSusResModel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check If is Suspend/Resume. ...</div><div class='long'><p>Check If is Suspend/Resume.</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-onProtoMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onProtoMessage' class='name expandable'>onProtoMessage</a>( <span class='pre'>eventName, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when proto message received. ...</div><div class='long'><p>Executed when proto message received.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Event data.</p>\n</div></li></ul></div></div></div><div id='method-onWsOpen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-onWsOpen' class='name expandable'>onWsOpen</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Executed when socket opend. ...</div><div class='long'><p>Executed when socket opend.</p>\n</div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-one' class='name expandable'>one</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-send' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-method-send' class='name expandable'>send</a>( <span class='pre'>protoId, protoData</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send proto message data and send via socket connection. ...</div><div class='long'><p>Send proto message data and send via socket connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protoId</span> : String<div class='sub-desc'><p>Proto message Id.</p>\n</div></li><li><span class='pre'>protoData</span> : Object<div class='sub-desc'><p>Proto message data.</p>\n</div></li></ul></div></div></div><div id='method-trigger' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>eventName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers a named event for the object. ...</div><div class='long'><p>Triggers a named event for the object. Any additional arguments will be passed as parameters to the\nfunctions that are subscribed to the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-apiReady' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.api.BaseApi' rel='iAuto.api.BaseApi' class='defined-in docClass'>iAuto.api.BaseApi</a><br/></div><a href='#!/api/iAuto.api.BaseApi-event-apiReady' class='name expandable'>apiReady</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket connection is opened, the api is ready to use. ...</div><div class='long'><p>Trigger when websocket connection is opened, the api is ready to use.</p>\n</div></div></div><div id='event-dataChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-event-dataChanged' class='name expandable'>dataChanged</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when data changed. ...</div><div class='long'><p>Trigger when data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-dataGetted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-event-dataGetted' class='name expandable'>dataGetted</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The result of set data. ...</div><div class='long'><p>The result of set data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-dataSetted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-event-dataSetted' class='name expandable'>dataSetted</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The result of get data. ...</div><div class='long'><p>The result of get data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Response data from the websocket.</p>\n</div></li></ul></div></div></div><div id='event-finishedCheckSD' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-event-finishedCheckSD' class='name expandable'>finishedCheckSD</a>( <span class='pre'>nStatus</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger SDCard Rest Content Check Finished Event. ...</div><div class='long'><p>Trigger SDCard Rest Content Check Finished Event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nStatus</span> : Number<div class='sub-desc'><p>SD_STATUS_NOTHING:No SD,<br/>\nSD_STATUS_FINISHED:Check Finished</p>\n</div></li></ul></div></div></div><div id='event-hddLowTempError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.api.HMIManager.HMISystem'>iAuto.api.HMIManager.HMISystem</span><br/></div><a href='#!/api/iAuto.api.HMIManager.HMISystem-event-hddLowTempError' class='name expandable'>hddLowTempError</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger HDD Low Temp Error Notification Event. ...</div><div class='long'><p>Trigger HDD Low Temp Error Notification Event.</p>\n</div></div></div></div></div></div></div>","meta":{}});
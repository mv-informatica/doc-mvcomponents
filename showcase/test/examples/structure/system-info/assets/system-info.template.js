define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "col-xs-12"]
var hoisted2 = ["class", "col-xs-12"]
var __target

exports.systemInfo = (function () {
  return function systemInfo ($this) {
  setTimeout(function(){             $this.refreshRender();         },$this.refreshTime);
  elementOpen("label", "f97402e6-4861-477b-8e7e-e2314e580fc1", hoisted1)
    text("" + (($this.companyName?$this.companyName+" | ":".")) + "" + (($this.userName?$this.userName:"")) + "")
  elementClose("label")
  elementOpen("label", "a74bbda0-9d34-48c6-99d6-4d9d0fc05919", hoisted2)
    text("" + ($this.getTimeDisplay()) + " | " + ($this.version) + "" + (($this.language?" | "+$this.language:"")) + "")
  elementClose("label")
}
})()
})

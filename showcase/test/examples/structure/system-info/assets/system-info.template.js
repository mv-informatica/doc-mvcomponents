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
  elementOpen("label", "ab172fa2-17c3-47db-9eec-690e866933b3", hoisted1)
    text("" + (($this.companyName?$this.companyName+" | ":".")) + "" + (($this.userName?$this.userName:"")) + "")
  elementClose("label")
  elementOpen("label", "c3121e7c-ecc2-4253-8c52-7b5b999c2dfc", hoisted2)
    text("" + ($this.getTimeDisplay()) + " | " + ($this.version) + "" + (($this.language?" | "+$this.language:"")) + "")
  elementClose("label")
}
})()
})

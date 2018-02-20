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
  elementOpen("label", "e8000acb-ddb1-4f5c-a020-24ff525287a6", hoisted1)
    text("" + (($this.companyName?$this.companyName+" | ":".")) + "" + (($this.userName?$this.userName:"")) + "")
  elementClose("label")
  elementOpen("label", "4d1ae876-ae21-4e64-a9e3-507db5dc4cb1", hoisted2)
    text("" + ($this.getTimeDisplay()) + " | " + ($this.version) + "" + (($this.language?" | "+$this.language:"")) + "")
  elementClose("label")
}
})()
})

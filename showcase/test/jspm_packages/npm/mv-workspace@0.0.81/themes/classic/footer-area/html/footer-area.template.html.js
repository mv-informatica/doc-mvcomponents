/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "col-xs-1 pull-right"]
var hoisted2 = ["class", "pull-right", "style", "text-align:right"]
var hoisted3 = ["style", "margin-top:2px", "class", "pull-right glyphicon glyphicon-option-vertical", "aria-hidden", "true"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "1906aa2d-912a-4402-afc2-82a77395e82c", hoisted1)
    elementOpen("span", "a680c1bb-343c-4519-b921-091df8e611ba", hoisted2)
      text("" + ($this.timeDisplay) + "")
    elementClose("span")
    elementOpen("span", "57b409d2-5dd9-47d3-8219-a8d0b83d76e3", hoisted3)
    elementClose("span")
  elementClose("div")
}
})()
})

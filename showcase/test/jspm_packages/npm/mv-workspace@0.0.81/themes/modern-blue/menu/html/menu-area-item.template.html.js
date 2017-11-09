/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "module-menu"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("li", "443db0ab-f5bd-476a-932e-c79815e62713", hoisted1)
    text("         item menu!     ")
  elementClose("li")
}
})()
})

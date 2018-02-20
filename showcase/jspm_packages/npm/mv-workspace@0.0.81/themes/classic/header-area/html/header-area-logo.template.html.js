/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "navbar-header pull-left col-xs-2"]
var hoisted2 = ["class", "navbar-brand logo-img", "href", "#"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "04cfb515-a535-4212-915d-9b084903aae6", hoisted1)
    elementOpen("a", "5d37b4c8-83f5-4ce8-a3b0-ac14771fadbb", hoisted2)
    elementClose("a")
  elementClose("div")
}
})()
})

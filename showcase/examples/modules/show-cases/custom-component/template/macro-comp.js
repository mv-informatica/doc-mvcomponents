define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var __target

exports.macroComp = (function () {
  return function macroComp ($data) {
  elementOpen("label")
    text("" + ($data.text) + "")
  elementClose("label")
}
})()
})

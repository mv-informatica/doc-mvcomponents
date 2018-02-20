define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["aria-hidden", "true"]
var __target

exports.statusRender = (function () {
  return function statusRender ($item_status) {
  elementOpen("span", "1f233787-6ff5-48bd-b4da-bf9264e72ae3", hoisted1, "style", {color:($item_status.status===1?'blue':'red')}, "class", 'glyphicon glyphicon-thumbs-'+($item_status.status===1?'up':'down'))
  elementClose("span")
}
})()
})

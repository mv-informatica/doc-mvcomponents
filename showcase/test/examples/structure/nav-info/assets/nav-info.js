define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var __target

exports.navInfo = (function () {
  return function navInfo ($this) {
  elementOpen("div", null, null, "class", 'banner-nav-info col-xs-12 '+($this.loaded?'':'is-loading'))
  elementClose("div")
}
})()
})

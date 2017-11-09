define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["width", "800", "height", "600", "frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", ""]
var __target

exports.embedVideo = (function () {
  return function embedVideo ($this) {
  elementOpen("p")
    if ($this._videourl) {
      elementOpen("iframe", "9f145c4d-982a-43f6-b60e-dfa7ca0a6031", hoisted1, "src", $this._videourl)
      elementClose("iframe")
    }
  elementClose("p")
}
})()
})

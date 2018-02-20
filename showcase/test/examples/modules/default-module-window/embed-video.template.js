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
      elementOpen("iframe", "55088ed5-c853-4b6b-aadc-c83eee32bfea", hoisted1, "src", $this._videourl)
      elementClose("iframe")
    }
  elementClose("p")
}
})()
})

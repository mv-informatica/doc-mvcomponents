/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "mv-notifications"]
var hoisted2 = ["href", "#"]
var hoisted3 = ["aria-hidden", "true"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "909788cc-cb79-419b-bdf2-b7d1a4b1989d", hoisted1)
    elementOpen("a", "b3a1661d-3cf0-4399-858f-218b0f76cc04", hoisted2, "onclick", function ($event) {
      var $element = this;
    $event.preventDefault();$this.emitNotificationClick()})
      elementOpen("i", "3a247602-83e8-4805-9f2f-267c581cdf53", hoisted3, "class", $this.icon)
      elementClose("i")
      if ($this.hasNotifications) {
        elementOpen("span")
        elementClose("span")
      }
    elementClose("a")
  elementClose("div")
}
})()
})

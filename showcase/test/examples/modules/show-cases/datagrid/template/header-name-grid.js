define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "iconeinput glyphicon glyphicon-user"]
var __target

exports.testHeaderTemplate = (function () {
  return function testHeaderTemplate ($this) {
  elementOpen("span", null, null, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.toogleCheck()}, "class", "glyphicon glyphicon-" + (($this.checked?'check':'unchecked')) + "")
  elementClose("span")
  text("     " + ($this.title) + "     ")
  elementOpen("span", "32895106-b14c-458b-bc79-d7659eb4f00a", hoisted1, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

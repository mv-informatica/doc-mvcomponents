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
  elementOpen("span", "e324b6ec-0703-49e9-8803-81a18ffae74d", hoisted1, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

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
  return function testHeaderTemplate ($column) {
  var $this__ = this;
  elementOpen("span", null, null, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this__.toogleCheck();$column.checked = !$column.checked}, "class", "glyphicon glyphicon-" + (($column.checked?'check':'unchecked')) + "")
  elementClose("span")
  text("     " + ($column.title) + "     ")
  elementOpen("span", "aa7c08a9-5812-4e31-b36c-4516f70b008c", hoisted1, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this__.testeGid()})
  elementClose("span")
}
})()
})

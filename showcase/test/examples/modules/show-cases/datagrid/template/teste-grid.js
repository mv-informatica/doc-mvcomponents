define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["type", "text"]
var hoisted2 = ["class", "iconeinput glyphicon glyphicon-user"]
var __target

exports.testeTemplate = (function () {
  return function testeTemplate ($row) {
  var $this = this;
  elementOpen("input", "dfb6cf5c-8402-4e78-ba98-595aa9504460", hoisted1, "value", $row.idade)
  elementClose("input")
  elementOpen("span", "de3601c8-f67b-44ef-b520-ef810e204153", hoisted2, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

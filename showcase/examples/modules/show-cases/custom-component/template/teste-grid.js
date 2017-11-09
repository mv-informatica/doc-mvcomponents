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
  elementOpen("input", "b5494dd0-bbec-4912-a40a-9eb52f16309a", hoisted1, "value", $row.idade)
  elementClose("input")
  elementOpen("span", "44444a0e-7623-4b7c-b3eb-f9644cab7d9f", hoisted2, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

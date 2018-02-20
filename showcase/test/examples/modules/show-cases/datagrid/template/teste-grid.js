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
  elementOpen("input", "e43369a0-f252-4386-9bcc-ac05b0e9d6cd", hoisted1, "value", $row.idade)
  elementClose("input")
  elementOpen("span", "ef65ac67-daaf-495c-b68f-b2c573a9d850", hoisted2, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

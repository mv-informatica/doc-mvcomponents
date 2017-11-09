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
  elementOpen("input", "44b14b81-2a03-40f8-b183-02b00bede14e", hoisted1, "value", $row.idade)
  elementClose("input")
  elementOpen("span", "3c7066af-87ba-4d66-8ad2-8cf24a7164bc", hoisted2, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

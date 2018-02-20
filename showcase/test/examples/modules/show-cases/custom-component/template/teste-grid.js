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
  elementOpen("input", "d69b3adf-d140-460f-b560-5608f754dcfd", hoisted1, "value", $row.idade)
  elementClose("input")
  elementOpen("span", "518e3cec-fee1-4c86-8e77-a120f4e0c894", hoisted2, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.testeGid()})
  elementClose("span")
}
})()
})

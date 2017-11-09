define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "list-group"]
var hoisted2 = ["href", "#", "class", "list-group-item tilecell"]
var hoisted3 = ["style", "font-size:25px;float:left;margin:5px 15px 0px 0px", "aria-hidden", "true"]
var hoisted4 = ["class", "list-group-item-heading"]
var hoisted5 = ["class", "list-group-item-text"]
var __target

exports.tileListShowCase = (function () {
  return function tileListShowCase ($data, $extra) {
  elementOpen("div", "933d4b5d-b5fc-4512-ba21-cceb42d761da", hoisted1)
    var $params = this.getParams();
    elementOpen("h4")
      text("" + ($params.param1?$params.param1:'') + "")
    elementClose("h4")
    __target = $data
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var $row = $value
        var $key = "3966f51e-2c19-484a-90df-119435db5c56_" + $item
        elementOpen("a", $key, hoisted2, "data-indx", $item)
          elementOpen("span", "6ca147e7-6589-4a9e-b743-f2a26583ce8b_" + $key, hoisted3, "class", $row.icon)
          elementClose("span")
          elementOpen("span")
            elementOpen("h4", "4c80975b-e1e4-4eca-ad7d-b9b77edd1da4_" + $key, hoisted4)
              text("" + ($row.id) + "-" + ($row.name) + "")
            elementClose("h4")
            elementOpen("p", "fdfb727d-cc6f-4887-95bd-b44a4563d4fd_" + $key, hoisted5)
              text("description:" + ($row.desc) + "")
            elementClose("p")
          elementClose("span")
        elementClose("a")
      }, this)
    }
  elementClose("div")
}
})()
})

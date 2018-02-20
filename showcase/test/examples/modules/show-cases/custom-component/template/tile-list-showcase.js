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
  return function tileListShowCase ($data) {
  elementOpen("div", "0190571f-dee3-4c01-b69a-405c63ef91c7", hoisted1)
    __target = $data
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var $row = $value
        var $key = "766ddd41-aab0-447b-9500-bac4fc20b046_" + $item
        elementOpen("a", $key, hoisted2, "data-indx", $item)
          elementOpen("span", "49b65bbd-5435-4be4-895d-7c2c19d1e9e0_" + $key, hoisted3, "class", $row.icon)
          elementClose("span")
          elementOpen("span")
            elementOpen("h4", "1671884d-0c46-4a8b-b73e-112915ed842c_" + $key, hoisted4)
              text("" + ($row.id) + "-" + ($row.name) + "")
            elementClose("h4")
            elementOpen("p", "b12c7280-61b6-4753-8c39-1eda76bc7ccb_" + $key, hoisted5)
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

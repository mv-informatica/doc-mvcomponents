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
  elementOpen("div", "38cac8ad-0fe2-4cd8-9502-f34a08bf1630", hoisted1)
    var $params = this.getParams();
    elementOpen("h4")
      text("" + ($params.param1?$params.param1:'') + "")
    elementClose("h4")
    __target = $data
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var $row = $value
        var $key = "99803b66-0aa0-4036-b75e-1a04473b8f1b_" + $item
        elementOpen("a", $key, hoisted2, "data-indx", $item)
          elementOpen("span", "f42ef76e-58bf-4797-8ebb-65b802494e3e_" + $key, hoisted3, "class", $row.icon)
          elementClose("span")
          elementOpen("span")
            elementOpen("h4", "9fd83c1a-c797-43ba-a1da-8f4c719501b2_" + $key, hoisted4)
              text("" + ($row.id) + "-" + ($row.name) + "")
            elementClose("h4")
            elementOpen("p", "ff78fedd-33e8-40df-b637-4ff8081874f0_" + $key, hoisted5)
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

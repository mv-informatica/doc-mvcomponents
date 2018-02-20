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
  elementOpen("div", "7f432e41-2040-4a28-b800-367a8f455db5", hoisted1)
    __target = $data
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var $row = $value
        var $key = "ea2ae386-d3dc-41fa-bf63-c9c67449a05f_" + $item
        elementOpen("a", $key, hoisted2, "data-indx", $item)
          elementOpen("span", "f66ecec6-324d-4a38-9fde-607a294071dd_" + $key, hoisted3, "class", $row.icon)
          elementClose("span")
          elementOpen("span")
            elementOpen("h4", "51295d55-ab55-4fa1-9319-e65ffd39c53d_" + $key, hoisted4)
              text("" + ($row.id) + "-" + ($row.name) + "")
            elementClose("h4")
            elementOpen("p", "f66e1154-41b8-478e-b9dd-5d4c49f6eebf_" + $key, hoisted5)
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

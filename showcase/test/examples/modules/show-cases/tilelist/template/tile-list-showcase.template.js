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
  elementOpen("div", "4a403bf8-1279-4217-8f72-e03fc4deef76", hoisted1)
    var $params = this.getParams();
    elementOpen("h4")
      text("" + ($params.param1?$params.param1:'') + "")
    elementClose("h4")
    __target = $data
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var $row = $value
        var $key = "280c2ded-5e4a-40c0-978e-9480999ca2e2_" + $item
        elementOpen("a", $key, hoisted2, "data-indx", $item)
          elementOpen("span", "54da949c-0c45-4777-8a51-97f11ea92004_" + $key, hoisted3, "class", $row.icon)
          elementClose("span")
          elementOpen("span")
            elementOpen("h4", "71843e67-9f0c-453f-81d6-446a54f6c117_" + $key, hoisted4)
              text("" + ($row.id) + "-" + ($row.name) + "")
            elementClose("h4")
            elementOpen("p", "bbae038a-0301-421d-972d-913df5ffd426_" + $key, hoisted5)
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

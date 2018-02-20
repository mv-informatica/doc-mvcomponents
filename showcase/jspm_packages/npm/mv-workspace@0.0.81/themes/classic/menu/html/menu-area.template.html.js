/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["style", "padding-top:8px;padding-bottom:8px;", "class", "module-menu module-menu-detail col-xs-12"]
var hoisted2 = ["class", "icon-module"]
var hoisted3 = ["class", "icon-menu glyphicon glyphicon-align-justify", "aria-hidden", "true"]
var hoisted4 = ["href", "#", "class", "label-menu-module"]
var hoisted5 = ["class", "col-xs-12 menu-scroll-btn"]
var hoisted6 = ["class", "col-xs-12 menu-area-modules"]
var hoisted7 = ["class", "module-menu col-xs-12"]
var hoisted8 = ["class", "icon-module"]
var hoisted9 = ["aria-hidden", "true"]
var hoisted10 = ["href", "#", "class", "label-menu-module"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "dc7ba456-d4f3-4de5-92ff-816d0aac4e33", hoisted1, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.onClickTitle.emit(null)})
    elementOpen("div", "9f052e66-4c76-40ef-b9ca-46073a43f388", hoisted2)
      elementOpen("span", "cb823d62-c74e-49e4-ac30-81fc41d66a24", hoisted3)
      elementClose("span")
    elementClose("div")
    elementOpen("a", "1896ed8e-1c8d-48f4-a908-b152e992ade6", hoisted4)
      text("" + ($this.title) + "")
    elementClose("a")
  elementClose("div")
  elementOpen("div", "617edf18-04d8-4ecf-a5a6-09cd6ec19432", hoisted5)
  elementClose("div")
  elementOpen("div", "0a7b3b77-c12d-482e-be07-e8aa985282b2", hoisted6)
    __target = $this.itemmenu
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var itemmenu = $value
        var $key = "5a7d467b-fa66-454b-8912-86cfe8d9e369_" + $item
        elementOpen("div", $key, hoisted7, "data-path", itemmenu.path, "data-id", itemmenu.id?itemmenu.id:'', "data-label", itemmenu.label)
          elementOpen("div", "69c998b3-c513-4b2b-884b-38f2cfb73142_" + $key, hoisted8)
            elementOpen("span", "985b4a33-5b77-483b-bd16-74d29108c7ed_" + $key, hoisted9, "class", 'icon-menu '+itemmenu.icon)
            elementClose("span")
          elementClose("div")
          elementOpen("a", "f47e9876-9b9b-4f33-bff0-b5e7906234cf_" + $key, hoisted10)
            text("" + (itemmenu.label) + "")
          elementClose("a")
        elementClose("div")
      }, this)
    }
  elementClose("div")
}
})()
})

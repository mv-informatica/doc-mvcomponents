/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["style", "padding:0px", "class", "col-xs-12 application-area-info"]
var hoisted2 = ["class", "col-xs-2", "style", "width:45px"]
var hoisted3 = ["class", "glyphicon glyphicon-user", "style", "font-size:32px;float:left;margin-right:10px;margin-top:10px", "aria-hidden", "true"]
var hoisted4 = ["class", "col-xs-10"]
var hoisted5 = ["style", "margin-top:2px", "class", "glyphicon-class"]
var hoisted6 = ["class", "glyphicon-class"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "3c835659-0dc7-4b42-bff6-1ec15e4ddd4a", hoisted1)
    elementOpen("div", "d713a4d9-d20d-4967-8270-133d0f0092e2", hoisted2)
      elementOpen("span", "79571e0f-77d2-4a36-ad6e-d0054771e0dd", hoisted3)
      elementClose("span")
    elementClose("div")
    elementOpen("div", "9b5b3659-c93a-4727-976b-8b1f4f22b55b", hoisted4)
      elementOpen("h4", "b0aa2513-dfc8-4d4a-9dd3-70c7b382a2c5", hoisted5)
        text("Info Test")
      elementClose("h4")
      elementOpen("p", "f415d0f0-b2b1-472f-b808-6c60efe6d0b4", hoisted6)
        text("Teste Teste Teste Teste Teste")
      elementClose("p")
    elementClose("div")
  elementClose("div")
}
})()
})

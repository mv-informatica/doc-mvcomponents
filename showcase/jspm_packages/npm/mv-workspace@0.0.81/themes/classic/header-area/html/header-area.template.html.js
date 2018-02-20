/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "col-xs-12 header-area"]
var hoisted2 = ["class", "logo col-xs-2"]
var hoisted3 = ["class", "col-xs-4 col-md-3"]
var hoisted4 = ["style", "width:100%"]
var hoisted5 = ["class", "col-xs-4 col-md-2 pull-right actions-bar"]
var hoisted6 = ["class", "glyphicon glyphicon-off btns_actions pull-right", "aria-hidden", "true"]
var hoisted7 = ["class", "hidden-xs glyphicon glyphicon-question-sign btns_actions pull-right", "aria-hidden", "true"]
var hoisted8 = ["class", "glyphicon glyphicon-cog btns_actions pull-right", "aria-hidden", "true"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "f80cb98f-d323-465c-acce-bfdb3640666e", hoisted1)
    elementOpen("div", "6efa8989-4579-47b8-9a42-07411269e416", hoisted2)
    elementClose("div")
    elementOpen("div", "8ac78413-14ea-4471-bf28-c9b68fd681c3", hoisted3)
      elementOpen("select", "07fa01fc-00e3-4c2d-af12-45945732e830", hoisted4)
        elementOpen("option")
          text("Novo Prontuario Eletronico Do Paciente Web")
        elementClose("option")
        elementOpen("option")
          text("PAGU")
        elementClose("option")
        elementOpen("option")
          text("ATENDIMENTO")
        elementClose("option")
      elementClose("select")
    elementClose("div")
    elementOpen("div", "b5bbc923-381d-423b-80b4-76ef8b852c5d", hoisted5)
      elementOpen("span", "09b9be45-d100-4946-a2b6-3eb1acdf4004", hoisted6)
      elementClose("span")
      elementOpen("span", "32d9e9ef-7e38-4b82-84c5-f500c84b7070", hoisted7)
      elementClose("span")
      elementOpen("span", "6e97942d-6faf-401d-96c7-fd47dd63ff20", hoisted8)
      elementClose("span")
    elementClose("div")
  elementClose("div")
}
})()
})

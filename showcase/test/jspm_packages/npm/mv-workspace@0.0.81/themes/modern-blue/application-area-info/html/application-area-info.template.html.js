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
  elementOpen("div", "3cd90764-a7cb-4a3f-875f-18e112a2355a", hoisted1)
    elementOpen("div", "9e96513b-d76b-49e9-b73f-82630689e907", hoisted2)
      elementOpen("span", "fcd79841-aef2-40aa-9c92-3eed4f67ae28", hoisted3)
      elementClose("span")
    elementClose("div")
    elementOpen("div", "db6bb41a-5feb-47f6-baca-3938d18e0756", hoisted4)
      elementOpen("h4", "ec2f47a3-544e-4e03-afdb-5b2b698c8956", hoisted5)
        text("Info Test")
      elementClose("h4")
      elementOpen("p", "d238f4be-c021-4882-811e-1212297fb4c5", hoisted6)
        text("Teste Teste Teste Teste Teste")
      elementClose("p")
    elementClose("div")
  elementClose("div")
}
})()
})

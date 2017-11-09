define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["lang", "en"]
var hoisted2 = ["http-equiv", "Content-Type", "content", "text/html; charset=utf-8"]
var hoisted3 = ["charset", "UTF-8"]
var hoisted4 = ["http-equiv", "X-UA-Compatible", "content", "IE=edge"]
var hoisted5 = ["name", "viewport", "content", "width=device-width, initial-scale=1.0"]
var hoisted6 = ["rel", "shortcut icon", "href", "favicon.ico", "type", "image/x-icon"]
var hoisted7 = ["rel", "stylesheet", "type", "text/css", "href", "assets/sunlight-1.22.0/themes/sunlight.default.css"]
var hoisted8 = ["type", "text/javascript", "src", "assets/sunlight-1.22.0/sunlight-min.js"]
var hoisted9 = ["type", "text/javascript", "src", "assets/sunlight-1.22.0/lang/sunlight.actionscript-min.js"]
var hoisted10 = ["class", "container col-xs-12"]
var hoisted11 = ["id", "conteudo"]
var __target

exports.description = (function () {
  return function description (data) {
elementOpen("html", "594004a9-1405-4ace-81ee-0c04689dda68", hoisted1)
  elementOpen("head")
    elementOpen("title")
      text("Projeto Exemplo")
    elementClose("title")
    elementOpen("meta", "0ed7ea2d-4f73-46ef-aa61-efd25be951b3", hoisted2)
    elementClose("meta")
    elementOpen("meta", "40db2a57-9208-4126-82ae-af4c7f810051", hoisted3)
    elementClose("meta")
    elementOpen("meta", "c69b7a63-8b1a-4070-bcdc-c8d123124c56", hoisted4)
    elementClose("meta")
    elementOpen("meta", "bf09c068-46ac-4f1a-8514-852adb5e8aec", hoisted5)
    elementClose("meta")
    elementOpen("link", "5d9595af-e991-42eb-8b3d-2174bfd3b025", hoisted6)
    elementClose("link")
    elementOpen("link", "45492702-fb73-4a8a-9244-737a2c5cb3ff", hoisted7)
    elementClose("link")
    elementOpen("script", "d24607b0-3b38-4128-ab85-f2cba0b0731a", hoisted8)
    elementClose("script")
    elementOpen("script", "d41a7ef2-aa7e-465d-a88e-65920621d952", hoisted9)
    elementClose("script")
  elementClose("head")
  elementOpen("body")
    elementOpen("div", "1becac7d-b10a-47f4-bf1f-64bcc343484f", hoisted10)
      elementOpen("div", "fa7bb386-4e9d-4a22-a055-cf8c5f1d66e4", hoisted11)
      elementClose("div")
    elementClose("div")
    System.config({    map: {     "mvcomponents":"../dist"    }   });   System.import('test/examples/structure/init-app');
  elementClose("body")
elementClose("html")
}
})()
})

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
elementOpen("html", "833e794a-6247-4d7c-a378-1203ffb43138", hoisted1)
  elementOpen("head")
    elementOpen("title")
      text("Projeto Exemplo")
    elementClose("title")
    elementOpen("meta", "0c3214c6-fad4-4261-b94a-7975faca7157", hoisted2)
    elementClose("meta")
    elementOpen("meta", "c548c23e-cfe7-4f5f-8931-197f309d2855", hoisted3)
    elementClose("meta")
    elementOpen("meta", "ee8b4dff-bd7d-4f61-b099-2d3b5549c202", hoisted4)
    elementClose("meta")
    elementOpen("meta", "850aa741-4493-4f81-9a4d-ff0f53b1a1ad", hoisted5)
    elementClose("meta")
    elementOpen("link", "d92818a1-da42-44b1-90f7-cc6273189c6a", hoisted6)
    elementClose("link")
    elementOpen("link", "3b2bd27e-1a02-4bae-9e7d-af028b203673", hoisted7)
    elementClose("link")
    elementOpen("script", "0f115255-3104-49b1-80fb-5d5dbb0f888c", hoisted8)
    elementClose("script")
    elementOpen("script", "89052555-88a3-4fce-a4f3-100a4b346e1a", hoisted9)
    elementClose("script")
  elementClose("head")
  elementOpen("body")
    elementOpen("div", "2e5f570a-97e1-47ad-8199-a235f13b80c1", hoisted10)
      elementOpen("div", "fdc67839-33e6-4a36-8a78-7c7a6a4542af", hoisted11)
      elementClose("div")
    elementClose("div")
    System.config({    map: {     "mvcomponents":"../dist"    }   });   System.import('test/examples/structure/init-app');
  elementClose("body")
elementClose("html")
}
})()
})

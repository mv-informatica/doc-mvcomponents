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
elementOpen("html", "e4531634-7275-4f21-9570-ad3420df6f62", hoisted1)
  elementOpen("head")
    elementOpen("title")
      text("Projeto Exemplo")
    elementClose("title")
    elementOpen("meta", "90064ea7-3881-4d4a-afaa-226dd53937b3", hoisted2)
    elementClose("meta")
    elementOpen("meta", "e5a987d0-3d06-49e4-ad2f-68a0ec492a00", hoisted3)
    elementClose("meta")
    elementOpen("meta", "0ad6d1fb-31de-456c-ab22-5ef8dd6941cd", hoisted4)
    elementClose("meta")
    elementOpen("meta", "1c10f40a-26c6-4c57-8e34-dadd3f349210", hoisted5)
    elementClose("meta")
    elementOpen("link", "d5b84e2f-05ab-4432-a1cb-759ce68b1908", hoisted6)
    elementClose("link")
    elementOpen("link", "c256d02e-de3f-4136-87f4-3e33d5bfb069", hoisted7)
    elementClose("link")
    elementOpen("script", "0f018e85-7502-4dc3-92bc-57fda35e5c56", hoisted8)
    elementClose("script")
    elementOpen("script", "02e81edb-0658-4371-bce7-519059521b19", hoisted9)
    elementClose("script")
  elementClose("head")
  elementOpen("body")
    elementOpen("div", "48e65ef5-ebcb-43bd-b433-62f249c2fad1", hoisted10)
      elementOpen("div", "2d9d5c8c-7008-4ab3-a363-0ba745bf002d", hoisted11)
      elementClose("div")
    elementClose("div")
    System.config({     map: {      "mvcomponents":"../dist"     }    });    System.import('examples/structure/init-app');
  elementClose("body")
elementClose("html")
}
})()
})

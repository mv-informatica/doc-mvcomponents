/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "navbar-header pull-left"]
var hoisted2 = ["class", "navbar-brand", "href", "#"]
var hoisted3 = ["style", "margin:0px", "class", "nav navbar-nav toggle-menu pull-left"]
var hoisted4 = ["href", "#", "style", "padding-top:13px;padding-bottom:0px"]
var hoisted5 = ["class", "mv-menu-toggler mv-basico-menu", "aria-hidden", "true"]
var hoisted6 = ["style", "margin:0px", "class", "nav navbar-nav toggle-menu pull-left"]
var hoisted7 = ["href", "#", "style", "padding-top:13px;padding-bottom:0px"]
var hoisted8 = ["class", "mv-menu-toggler mv-basico-menu", "aria-hidden", "true"]
var hoisted9 = ["class", "navbar-header pull-left"]
var hoisted10 = ["class", "navbar-brand", "href", "#"]
var __target

exports.description = (function () {
  return function description ($this) {
  if ($this.toggleMenuPosition=='right') {
    elementOpen("div", "a7f94241-cefe-4b42-8ef6-fbabe3c182a5", hoisted1)
      elementOpen("a", "f3f82d56-ed21-4044-a4c7-cad84e225309", hoisted2)
        elementOpen("img", null, null, "style", {height:$this.height,marginTop:$this.marginTop}, "src", $this.getLogoURL())
        elementClose("img")
      elementClose("a")
    elementClose("div")
    if ($this.showToggleMenu) {
      elementOpen("ul", "78f72e5e-f5d1-47db-aa6a-90db62cb8f0a", hoisted3)
        elementOpen("li")
          elementOpen("a", "cba90da5-a060-47b6-81f9-4fda7346f032", hoisted4, "onclick", function ($event) {
            var $element = this;
          $event.preventDefault();$this.onClickToggleMenu.emit(null)})
            elementOpen("i", "bbb5c5f8-35f7-4a38-ba03-d8965dced0fb", hoisted5, "style", {fontSize:'27px',color:$this.toggleMenuColor})
            elementClose("i")
          elementClose("a")
        elementClose("li")
      elementClose("ul")
    }
  } else {
    if ($this.showToggleMenu) {
      elementOpen("ul", "2b33f8d8-f401-4af8-b899-74de08ce16b2", hoisted6)
        elementOpen("li")
          elementOpen("a", "77644ac4-7d2d-4195-95c8-b07b3e8669c7", hoisted7, "onclick", function ($event) {
            var $element = this;
          $event.preventDefault();$this.onClickToggleMenu.emit(null)})
            elementOpen("i", "fb872d21-7ae6-4436-ad1e-aa87e2d6f117", hoisted8, "style", {fontSize:'27px',color:$this.toggleMenuColor})
            elementClose("i")
          elementClose("a")
        elementClose("li")
      elementClose("ul")
    }
    elementOpen("div", "ac3b25af-de0d-4d20-bc5f-dd7571894876", hoisted9)
      elementOpen("a", "c71ed194-0345-4917-8b55-af0c372331db", hoisted10)
        elementOpen("img", null, null, "style", {height:$this.height,marginTop:$this.marginTop}, "src", $this.getLogoURL())
        elementClose("img")
      elementClose("a")
    elementClose("div")
  }
}
})()
})

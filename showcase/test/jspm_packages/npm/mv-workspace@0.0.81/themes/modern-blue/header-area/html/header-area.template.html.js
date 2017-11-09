/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "navbar navbar-default navbar-fixed-top"]
var hoisted2 = ["class", "container-fluid"]
var hoisted3 = ["class", "navbar-header pull-left col-xs-2"]
var hoisted4 = ["class", "navbar-brand", "href", "#"]
var hoisted5 = ["class", "nav navbar-nav pull-right"]
var hoisted6 = ["class", "hidden-xs hidden-sm"]
var hoisted7 = ["href", "#"]
var hoisted8 = ["class", "mv-menu-toggler glyphicon glyphicon-menu-hamburger", "aria-hidden", "true"]
var hoisted9 = ["class", "navbar-header pull-right"]
var hoisted10 = ["class", "nav navbar-nav navbar-right mv-navbar-items"]
var hoisted11 = ["class", "mv-notifications"]
var hoisted12 = ["href", "#"]
var hoisted13 = ["class", "glyphicon glyphicon-bell", "aria-hidden", "true"]
var hoisted14 = ["class", "dropdown"]
var hoisted15 = ["href", "#", "class", "mv-user-dropdown dropdown-toggle", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"]
var hoisted16 = ["class", "mv-user-name hidden-xs hidden-sm"]
var hoisted17 = ["class", "caret"]
var hoisted18 = ["class", "dropdown-menu"]
var hoisted19 = ["href", "#"]
var hoisted20 = ["type", "button", "class", "navbar-toggle collapsed", "data-toggle", "collapse", "data-target", "#mv-navbar-header", "aria-expanded", "false"]
var hoisted21 = ["class", "sr-only"]
var hoisted22 = ["class", "mv-menu-toggler glyphicon glyphicon-menu-hamburger", "aria-hidden", "true"]
var hoisted23 = ["id", "mv-dropdown-layer", "class", "mv-dropdown-layer"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("nav", "3f90913d-466d-4b90-8641-fbf0fe4d54e6", hoisted1)
    elementOpen("div", "0012c8e7-bb55-46a4-adc8-7ebae6ab9dd5", hoisted2)
      elementOpen("div", "9a2342b5-ecce-47a5-86a2-0a9864257551", hoisted3)
        elementOpen("a", "82e06420-0dd3-4c48-a3fb-983195fcdf10", hoisted4)
          elementOpen("img", null, null, "src", $this.getLogoURL())
          elementClose("img")
        elementClose("a")
        elementOpen("ul", "4dc52dab-9bc7-4db3-9b93-801ef4ba7fc1", hoisted5)
          elementOpen("li", "005abc54-2322-4eb1-a74e-5710721e2c06", hoisted6)
            elementOpen("a", "028e27bf-0a90-40cd-b097-28f35cd52011", hoisted7, "onclick", function ($event) {
              var $element = this;
            $event.preventDefault();$this.onHamburgerMenuClick.emit(null)})
              elementOpen("i", "7e3d2a91-614f-4b26-8393-2de95f4fbad1", hoisted8)
              elementClose("i")
            elementClose("a")
          elementClose("li")
        elementClose("ul")
      elementClose("div")
      elementOpen("div", "8b79e6b8-eda2-4761-98f6-a3f16187c501", hoisted9)
        elementOpen("ul", "0348ac3c-ed10-4579-ac6b-a8f48b3ebcbb", hoisted10)
          elementOpen("li", "0e8bb347-1d73-4621-bce8-37ca9c4961a8", hoisted11)
            elementOpen("a", "102bf411-d529-443e-af59-a0700d825baf", hoisted12, "onclick", function ($event) {
              var $element = this;
            $event.preventDefault();$this.emitNotificationClick()})
              elementOpen("i", "13d61bba-e16b-4065-ae95-60d728b190b0", hoisted13)
              elementClose("i")
              if ($this.hasNotifications) {
                elementOpen("span")
                elementClose("span")
              }
            elementClose("a")
          elementClose("li")
          elementOpen("li", "94fb1f88-3e23-4ec7-9aba-62ddb2c2c9fa", hoisted14)
            elementOpen("a", "1a02903f-05f7-4e78-80af-36acbfec9201", hoisted15, "onclick", function ($event) {
              var $element = this;
            $event.preventDefault();$this.showmenu=!$this.showmenu;$this.refresh()})
              elementOpen("span", "3f5b60e7-3ee1-4246-ab8e-9e3263205e9f", hoisted16)
                text("" + ($this.userName) + "")
              elementClose("span")
              elementOpen("span", "efae17b1-508e-49c6-b34e-4c2f4eb90160", hoisted17)
              elementClose("span")
            elementClose("a")
            if ($this.showmenu) {
              elementOpen("ul", "999d25f4-57c0-483b-9ef8-d3c8c16b202d", hoisted18)
                __target = $this.userMenuOptions
                if (__target) {
                  ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                    var item = $value
                    var $key = "4bba2e22-2ce4-41af-bcd3-0790ac0c58ee_" + $item
                    elementOpen("li", $key)
                      elementOpen("a", "cc91409c-dae2-455d-ab9e-cedb47287501_" + $key, hoisted19, "onclick", function ($event) {
                        var $element = this;
                      $event.preventDefault();item.action();$this.showmenu=false;$this.refresh()})
                        text("" + (item.label) + "")
                      elementClose("a")
                    elementClose("li")
                  }, this)
                }
              elementClose("ul")
            }
          elementClose("li")
          elementOpen("li")
            elementOpen("button", "5c456fb9-6b05-47d5-9a7d-6cf1dba633e3", hoisted20)
              elementOpen("span", "9e7d093e-e902-4c38-8461-f57e2925e560", hoisted21)
                text("Toggle navigation")
              elementClose("span")
              elementOpen("i", "39f197b8-ce5a-4b94-8a43-5e128a8f42b5", hoisted22)
              elementClose("i")
            elementClose("button")
          elementClose("li")
        elementClose("ul")
      elementClose("div")
    elementClose("div")
  elementClose("nav")
  if ($this.showmenu) {
    elementOpen("div", "c2361384-feeb-425b-928e-d3b8cfaf1085", hoisted23, "onclick", function ($event) {
      var $element = this;
    $event.preventDefault();$this.showmenu=false;$this.refresh()})
    elementClose("div")
  }
}
})()
})

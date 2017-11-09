/* */ 
define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "menu-container"]
var hoisted2 = ["class", "module-menu menu-title"]
var hoisted3 = ["href", "#", "class", "module-menu-link"]
var hoisted4 = ["class", "glyphicon glyphicon-chevron-left", "aria-hidden", "true"]
var hoisted5 = ["class", "desc-item"]
var hoisted6 = ["class", "menu-items menu-area-modules"]
var hoisted7 = ["href", "#"]
var hoisted8 = ["class", "icon"]
var hoisted9 = ["class", "menu-item-image"]
var hoisted10 = ["aria-hidden", "true"]
var hoisted11 = ["style", "font-size:9px", "class", "glyphicon glyphicon-chevron-right pull-right item-menu-icon-expand", "aria-hidden", "true"]
var hoisted12 = ["class", "submenu"]
var hoisted13 = ["href", "#"]
var hoisted14 = ["class", "icon"]
var hoisted15 = ["class", "menu-item-image"]
var hoisted16 = ["aria-hidden", "true"]
var hoisted17 = ["class", "desc-item"]
var hoisted18 = ["style", "font-size:9px", "class", "glyphicon glyphicon-chevron-right pull-right item-menu-icon-expand", "aria-hidden", "true"]
var hoisted19 = ["class", "subsubmenu"]
var hoisted20 = ["class", "module-menu"]
var hoisted21 = ["href", "#", "class", "sub-sub-menu-item"]
var hoisted22 = ["class", "icon"]
var hoisted23 = ["class", "menu-item-image"]
var hoisted24 = ["aria-hidden", "true"]
var hoisted25 = ["class", "desc-item"]
var __target

exports.description = (function () {
  return function description ($this) {
  elementOpen("div", "7e5410e3-2bb0-47f6-9f3c-1ea154383227", hoisted1)
    if ($this._displayTitle) {
      elementOpen("li", "db544aa3-e029-422e-8fbb-40e49e83a323", hoisted2, "onclick", function ($event) {
        var $element = this;
      $event.preventDefault();$this.onClickTitle.emit(null)})
        elementOpen("a", "1817a823-43e0-4f2c-b8d0-ab8f030c43c7", hoisted3)
          elementOpen("i", "80c2b7bd-1ab2-43e8-8015-262ecb867731", hoisted4)
          elementClose("i")
          elementOpen("span", "10295105-1411-460e-bce3-0f20960c99b5", hoisted5)
            text("" + ($this.title) + "")
          elementClose("span")
        elementClose("a")
      elementClose("li")
    }
    elementOpen("ul", "c6e93a34-ba12-48f2-a0f4-af12d1c97cc9", hoisted6)
      __target = $this.itemmenu
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var itemmenu = $value
          var $key = "1abf632c-cf2c-4f58-8c18-cd286c44cc29_" + $item
          elementOpen("li", $key, null, "class", 'module-menu'+(itemmenu.itens?' has-subitens':''))
            elementOpen("a", "a2b2b9f3-929f-4a63-9849-f47eb0d151fd_" + $key, hoisted7, "class", 'menu-item'+(itemmenu.itens?' has-subitens':''), "title", (itemmenu.label.length > 22?itemmenu.label : ''), "data-module", itemmenu.module, "data-path", itemmenu.path, "data-id", itemmenu.id?itemmenu.id:'', "data-label", itemmenu.label)
              elementOpen("div", "887d72ea-86f8-40a3-a2cf-d7bf986f7193_" + $key, hoisted8)
                if (itemmenu.image) {
                  elementOpen("img", "379859b2-5bd1-4f36-b945-35a02fac06b2_" + $key, hoisted9, "src", itemmenu.image)
                  elementClose("img")
                } else if (itemmenu.icon) {
                  elementOpen("i", "9aed0cbc-3ad7-4008-84ac-a0fd94b3a24e_" + $key, hoisted10, "class", itemmenu.icon)
                  elementClose("i")
                } else {
                }
              elementClose("div")
              elementOpen("span", null, null, "class", 'desc-item'+(itemmenu.itens?' has-subitens':''))
                text("                         " + (itemmenu.label) + "                     ")
              elementClose("span")
              if (itemmenu.itens) {
                elementOpen("span", "cde93845-1029-4aab-a5f5-d77b7bb3099b_" + $key, hoisted11)
                elementClose("span")
              }
            elementClose("a")
            if (itemmenu.itens) {
              elementOpen("ul", "222e85a5-4268-4a64-94e1-1b8fb0886fae_" + $key, hoisted12)
                __target = itemmenu.itens
                if (__target) {
                  ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                    var subitem = $value
                    var $key = "d5a6b545-d731-448c-b9b6-8a5bab750a1c_" + $item
                    elementOpen("li", $key, null, "class", 'module-menu'+(subitem.itens?' has-subitens':''))
                      elementOpen("a", "25ea3677-a123-4977-ad8e-96dc19d000c9_" + $key, hoisted13, "class", 'sub-menu-item'+(subitem.itens?' has-subitens':''), "title", (subitem.label.length > 22?subitem.label : ''), "data-module", subitem.module, "data-path", subitem.path, "data-id", subitem.id?subitem.id:'', "data-label", subitem.label)
                        elementOpen("div", "c668d0dd-4b4e-4b0e-a354-0a53fc55917e_" + $key, hoisted14)
                          if (subitem.image) {
                            elementOpen("img", "5ca1e864-5c80-4af1-a572-989fea55e069_" + $key, hoisted15, "src", subitem.image)
                            elementClose("img")
                          } else if (subitem.icon) {
                            elementOpen("i", "6bdd031c-4b8f-40fe-a858-f1ebb56197a1_" + $key, hoisted16, "class", subitem.icon)
                            elementClose("i")
                          } else {
                          }
                        elementClose("div")
                        elementOpen("span", "e4b0ebae-9dc5-4351-a031-97abd862a292_" + $key, hoisted17)
                          text("                                     " + (subitem.label) + "                                 ")
                        elementClose("span")
                        if (subitem.itens) {
                          elementOpen("span", "c8a4530c-adff-41e6-870e-c68b8bbbc291_" + $key, hoisted18)
                          elementClose("span")
                        }
                      elementClose("a")
                      if (subitem.itens) {
                        elementOpen("ul", "742b2efa-a7ac-42ae-b735-6ff33ddafdda_" + $key, hoisted19)
                          __target = subitem.itens
                          if (__target) {
                            ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                              var subsubitem = $value
                              var $key = "0b546da4-4672-4619-bc49-df4a307212a3_" + $item
                              elementOpen("li", $key, hoisted20)
                                elementOpen("a", "de6942f0-b83e-439c-8ec1-cf658e15777e_" + $key, hoisted21, "data-module", subsubitem.module, "data-path", subsubitem.path, "data-id", subsubitem.id?subsubitem.id:'', "data-label", subsubitem.label)
                                  elementOpen("div", "8211c4a4-fb9f-4681-8f98-134c845357a8_" + $key, hoisted22)
                                    if (subsubitem.image) {
                                      elementOpen("img", "f11d0a98-4e74-4981-bad8-3027e626846c_" + $key, hoisted23, "src", subsubitem.image)
                                      elementClose("img")
                                    } else if (subsubitem.icon) {
                                      elementOpen("i", "70d32f8e-3f66-4af1-b7db-a4d4ee45b969_" + $key, hoisted24, "class", subsubitem.icon)
                                      elementClose("i")
                                    } else {
                                    }
                                  elementClose("div")
                                  elementOpen("span", "0663d89d-89ee-42a7-91ac-952a2cad83a7_" + $key, hoisted25)
                                    text("                                                 " + (subsubitem.label) + "                                             ")
                                  elementClose("span")
                                elementClose("a")
                              elementClose("li")
                            }, this)
                          }
                        elementClose("ul")
                      }
                    elementClose("li")
                  }, this)
                }
              elementClose("ul")
            }
          elementClose("li")
        }, this)
      }
    elementClose("ul")
  elementClose("div")
}
})()
})

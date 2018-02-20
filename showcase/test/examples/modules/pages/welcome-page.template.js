define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "text-primary"]
var hoisted2 = ["src", "https://player.vimeo.com/video/218680213?color=158e84&amp;title=0&amp;byline=0&amp;portrait=0", "width", "800", "height", "600", "frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", ""]
var hoisted3 = ["style", "font-weight:normal"]
var hoisted4 = ["class", "text-primary"]
var hoisted5 = ["href", "http://docs.mv.com.br/pages/viewpage.action?pageId=22464671", "target", "parent", "class", "text-primary"]
var hoisted6 = ["href", "https://mv-informatica.github.io/doc-mvcomponents/", "target", "parent", "class", "text-primary"]
var hoisted7 = ["href", "https://mv-informatica.github.io/doc-mvcomponents/", "target", "parent", "class", "text-primary"]
var hoisted8 = ["style", "display:none"]
var hoisted9 = ["href", "https://mv-informatica.github.io/doc-mvcomponents/", "target", "parent", "class", "text-primary"]
var hoisted10 = ["class", "text-primary"]
var hoisted11 = ["style", "font-weight: bolder"]
var __target

exports.welcomePage = (function () {
  return function welcomePage ($this) {
  elementOpen("div")
    elementOpen("h1", "ca932359-f614-4c83-b8f0-eaf58c1ff8ac", hoisted1)
      text("Novo no MVComponents?")
    elementClose("h1")
    elementOpen("p")
      elementOpen("iframe", "fd20525c-5b4a-437c-9569-f9fa575525e6", hoisted2)
      elementClose("iframe")
    elementClose("p")
    elementOpen("p", "cef1c49d-7198-4e34-9f38-1be835f52af9", hoisted3)
      text("     Antes de começar, talvez seja útil dar uma olhada em algumas coisas que preparamos para te ajudar:     ")
    elementClose("p")
    elementOpen("p")
      elementOpen("ul", "176f1f20-81ef-4d14-81b8-3f5095353fed", hoisted4)
        elementOpen("li")
          elementOpen("a", "9f702c1c-e516-4fe9-9b3b-c0d453b77b35", hoisted5)
            text("Assista aos nossos vídeos tutoriais dom MVComponents")
          elementClose("a")
        elementClose("li")
        elementOpen("li")
          elementOpen("a", "80fde763-7731-4bed-8621-55a9a14787dc", hoisted6)
            text("Leia nossas especificações para componentes, animações, estilos e layouts.")
          elementClose("a")
        elementClose("li")
        elementOpen("li")
          elementOpen("a", "95a47ab9-3fb9-4481-84a3-062e1d8f96ce", hoisted7)
            text("Use nosso projeto Starter.")
          elementClose("a")
        elementClose("li")
        elementOpen("li", "3316d54f-701e-4e18-aed0-372df3aff014", hoisted8)
          elementOpen("a", "b10e0524-f695-4c2e-a12d-2fb119fe3bce", hoisted9)
            text("Se houver mais links interessantes para quem acaba de descobrir o Components, ponha aqui.")
          elementClose("a")
        elementClose("li")
      elementClose("ul")
    elementClose("p")
    elementOpen("p", "3b09023c-25b1-461d-8f69-bff5bdd9dcb3", hoisted10)
      elementOpen("span", "31ef30e3-e3d1-4b36-8ea1-5634603ec7f7", hoisted11)
        text("      Instale o MVComponents para começar a diversão     ")
      elementClose("span")
    elementClose("p")
    elementOpen("p")
      text("     Este será um texto para explicar como instalar o components no seu projeto ....    ")
    elementClose("p")
  elementClose("div")
}
})()
})

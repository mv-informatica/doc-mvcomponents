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
    elementOpen("h1", "a5f8dcd8-3270-48e7-beaa-73270d49d25a", hoisted1)
      text("Novo no MVComponents?")
    elementClose("h1")
    elementOpen("p")
      elementOpen("iframe", "bbee6c8e-c44d-43ac-b32d-b5cb2dd9095d", hoisted2)
      elementClose("iframe")
    elementClose("p")
    elementOpen("p", "d90661c0-f1ed-4e0d-a3c9-6aa652a0ebe5", hoisted3)
      text("     Antes de começar, talvez seja útil dar uma olhada em algumas coisas que preparamos para te ajudar:     ")
    elementClose("p")
    elementOpen("p")
      elementOpen("ul", "5b76aded-dba2-4e48-a661-cae66ab4bfc5", hoisted4)
        elementOpen("li")
          elementOpen("a", "3a6e8339-8f34-488e-b53c-cd323ec11cae", hoisted5)
            text("Assista aos nossos vídeos tutoriais dom MVComponents")
          elementClose("a")
        elementClose("li")
        elementOpen("li")
          elementOpen("a", "28aabaf6-e11a-4027-8a89-cfcacd555269", hoisted6)
            text("Leia nossas especificações para componentes, animações, estilos e layouts.")
          elementClose("a")
        elementClose("li")
        elementOpen("li")
          elementOpen("a", "a9e6c0be-6821-4df3-a2db-14b595a63ec5", hoisted7)
            text("Use nosso projeto Starter.")
          elementClose("a")
        elementClose("li")
        elementOpen("li", "c57ab45e-f8ea-4161-95b8-c7b9554f7934", hoisted8)
          elementOpen("a", "aa60d49f-5acb-4806-847c-46410b0cf484", hoisted9)
            text("Se houver mais links interessantes para quem acaba de descobrir o Components, ponha aqui.")
          elementClose("a")
        elementClose("li")
      elementClose("ul")
    elementClose("p")
    elementOpen("p", "4b43b2fe-1378-472b-b4ec-69641e75116d", hoisted10)
      elementOpen("span", "2dce5b62-f410-4a75-8bf8-b467fb5f0e57", hoisted11)
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

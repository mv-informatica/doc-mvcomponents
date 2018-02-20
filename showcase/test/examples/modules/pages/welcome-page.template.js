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
    elementOpen("h1", "3fa5909e-d270-4e5b-bd4d-749a7f49c881", hoisted1)
      text("Novo no MVComponents?")
    elementClose("h1")
    elementOpen("p")
      elementOpen("iframe", "d560c62a-311d-469d-813e-3f72e389d296", hoisted2)
      elementClose("iframe")
    elementClose("p")
    elementOpen("p", "c60f3aeb-d9c7-4d3a-811e-6a55568a3c53", hoisted3)
      text("     Antes de começar, talvez seja útil dar uma olhada em algumas coisas que preparamos para te ajudar:     ")
    elementClose("p")
    elementOpen("p")
      elementOpen("ul", "0cf5264b-b892-4683-a9a4-f6c4888a06a9", hoisted4)
        elementOpen("li")
          elementOpen("a", "b908f3cf-a369-4044-8e2f-8e16491cf82e", hoisted5)
            text("Assista aos nossos vídeos tutoriais dom MVComponents")
          elementClose("a")
        elementClose("li")
        elementOpen("li")
          elementOpen("a", "8a45040b-0835-4ab2-839c-7bdc99f35dce", hoisted6)
            text("Leia nossas especificações para componentes, animações, estilos e layouts.")
          elementClose("a")
        elementClose("li")
        elementOpen("li")
          elementOpen("a", "cf8c3047-9c31-4023-ac8f-f973177df083", hoisted7)
            text("Use nosso projeto Starter.")
          elementClose("a")
        elementClose("li")
        elementOpen("li", "2a89a627-c5f0-4d49-a53f-f115e35cd0ce", hoisted8)
          elementOpen("a", "f73da59a-a22a-4a56-9a50-67f65e942896", hoisted9)
            text("Se houver mais links interessantes para quem acaba de descobrir o Components, ponha aqui.")
          elementClose("a")
        elementClose("li")
      elementClose("ul")
    elementClose("p")
    elementOpen("p", "c280e211-91d4-47b6-b021-2fc4f20b743b", hoisted10)
      elementOpen("span", "7c31f43b-f368-4a46-b05b-1bb5a82474bb", hoisted11)
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

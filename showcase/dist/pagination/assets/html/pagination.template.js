define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "row"]
var hoisted2 = ["class", "col-xs-6 col-sm-6 col-md-6 col-lg-6"]
var hoisted3 = ["class", "MVPaginationInfo pull-left control-label"]
var hoisted4 = ["class", "col-xs-6 col-sm-6 col-md-6 col-lg-6"]
var hoisted5 = ["class", "MVPagination pull-right"]
var hoisted6 = ["class", "pagination pagination-sm", "style", "margin:0px"]
var hoisted7 = ["href", "#", "aria-label", "Previous"]
var hoisted8 = ["aria-hidden", "true", "class", "glyphicon glyphicon-chevron-left"]
var hoisted9 = ["href", "#"]
var hoisted10 = ["href", "#", "aria-label", "Next"]
var hoisted11 = ["aria-hidden", "true", "class", "glyphicon glyphicon-chevron-right"]
var __target

exports.pagination = (function () {
  return function pagination (pagination) {
  elementOpen("div", "189daf45-3181-4f0b-a137-fac179b77882", hoisted1)
    elementOpen("div", "be3eab3a-401b-4dcb-ac17-a05f37d0a7c7", hoisted2)
      elementOpen("label", "9c424527-065e-421c-af3a-d16a2ff40540", hoisted3)
        text("                 " + (pagination.getPaginationInfo()) + "             ")
      elementClose("label")
    elementClose("div")
    elementOpen("div", "32f7902c-2e0f-47ac-929a-9b4f72f346a1", hoisted4)
      if (pagination.visiblePageNumbers.length > 0) {
        elementOpen("nav", "7a8413d4-61d0-47a0-91f4-2dd73ec68dd8", hoisted5)
          elementOpen("ul", "916d23ba-8a01-4b24-af0f-66297955b3b7", hoisted6)
            elementOpen("li", null, null, "class", pagination.getNavigationButtonClass('prev'))
              elementOpen("a", "2cc6656b-152b-44a6-a910-b295ca182de6", hoisted7, "onclick", function ($event) {
                var $element = this;
              $event.preventDefault();pagination.previousVisiblePageNumbers()})
                elementOpen("span", "2becc833-e3d0-415d-aafe-4e77ffc228ca", hoisted8)
                elementClose("span")
              elementClose("a")
            elementClose("li")
            __target = pagination.visiblePageNumbers
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var pageNumber = $value
                var $key = "c9fed349-6fe3-4023-8b33-b41cae684468_" + $item
                elementOpen("li", $key, null, "class", (pagination.paginationResult.number == (pageNumber-1) ? 'active': ''))
                  elementOpen("a", "c5ab2de3-0f0f-4b44-a676-fe9c5dec06b9_" + $key, hoisted9, "onclick", function ($event) {
                    var $element = this;
                  $event.preventDefault();pagination.requestPage(pageNumber - 1)})
                    text("                             " + (pageNumber) + "                         ")
                  elementClose("a")
                elementClose("li")
              }, this)
            }
            elementOpen("li", null, null, "class", pagination.getNavigationButtonClass('next'))
              elementOpen("a", "2511842e-5ce2-4c8c-bc6d-1713c71b83d7", hoisted10, "onclick", function ($event) {
                var $element = this;
              $event.preventDefault();pagination.nextVisiblePageNumbers()})
                elementOpen("span", "498b5138-5f61-4470-ab31-f3640e1aee4a", hoisted11)
                elementClose("span")
              elementClose("a")
            elementClose("li")
          elementClose("ul")
        elementClose("nav")
      }
    elementClose("div")
  elementClose("div")
}
})()
})

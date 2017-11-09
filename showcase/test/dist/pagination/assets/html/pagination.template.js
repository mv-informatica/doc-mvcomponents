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
  elementOpen("div", "79e608a0-cff8-4244-81d2-5404defc3687", hoisted1)
    elementOpen("div", "dda2e813-d38c-443a-8f1d-e89082ad9ae7", hoisted2)
      elementOpen("label", "3cfe9c4d-18bc-4ea9-a9c8-55aa76e4627f", hoisted3)
        text("                 " + (pagination.getPaginationInfo()) + "             ")
      elementClose("label")
    elementClose("div")
    elementOpen("div", "5dcb500f-e996-4845-bd84-ae3c8f306f32", hoisted4)
      if (pagination.visiblePageNumbers.length > 0) {
        elementOpen("nav", "f5c4ded6-1298-4d38-8839-b30c8f55604a", hoisted5)
          elementOpen("ul", "11435b3e-05ce-48b2-87fd-0959a1e05ed4", hoisted6)
            elementOpen("li", null, null, "class", pagination.getNavigationButtonClass('prev'))
              elementOpen("a", "71a1d3f0-1ca3-4e55-abcd-b67926ce4759", hoisted7, "onclick", function ($event) {
                var $element = this;
              $event.preventDefault();pagination.previousVisiblePageNumbers()})
                elementOpen("span", "4bb9aa35-7348-4a28-b5ec-9734a32692f9", hoisted8)
                elementClose("span")
              elementClose("a")
            elementClose("li")
            __target = pagination.visiblePageNumbers
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var pageNumber = $value
                var $key = "478f8589-bd33-4a9d-bdc5-5e4158a4b6b3_" + $item
                elementOpen("li", $key, null, "class", (pagination.paginationResult.number == (pageNumber-1) ? 'active': ''))
                  elementOpen("a", "cfdb2721-871e-44d3-8c5d-15008ca29eb3_" + $key, hoisted9, "onclick", function ($event) {
                    var $element = this;
                  $event.preventDefault();pagination.requestPage(pageNumber - 1)})
                    text("                             " + (pageNumber) + "                         ")
                  elementClose("a")
                elementClose("li")
              }, this)
            }
            elementOpen("li", null, null, "class", pagination.getNavigationButtonClass('next'))
              elementOpen("a", "6f090e00-b72f-453f-aa13-6ab3718f5092", hoisted10, "onclick", function ($event) {
                var $element = this;
              $event.preventDefault();pagination.nextVisiblePageNumbers()})
                elementOpen("span", "3656ca32-60c2-46e2-88fb-1c06916c9770", hoisted11)
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

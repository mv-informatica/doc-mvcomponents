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
  elementOpen("div", "052fb10d-7e4e-4b0d-9099-7efc766a7ca7", hoisted1)
    elementOpen("div", "68deeddf-afac-4e0e-ac40-0142ea5b4487", hoisted2)
      elementOpen("label", "c5865cdd-9fee-4afe-99d1-2bc8c2a8c1fe", hoisted3)
        text("                 " + (pagination.getPaginationInfo()) + "             ")
      elementClose("label")
    elementClose("div")
    elementOpen("div", "77687528-2fb6-4d99-97f0-33b14c543e24", hoisted4)
      if (pagination.visiblePageNumbers.length > 0) {
        elementOpen("nav", "001e4516-30ab-4084-b9e0-a14ff06ff436", hoisted5)
          elementOpen("ul", "3c6bf17c-9264-4896-8c74-ba7bfd5a72b5", hoisted6)
            elementOpen("li", null, null, "class", pagination.getNavigationButtonClass('prev'))
              elementOpen("a", "f5322030-5f40-443c-a9a8-60121d74d4a1", hoisted7, "onclick", function ($event) {
                var $element = this;
              $event.preventDefault();pagination.previousVisiblePageNumbers()})
                elementOpen("span", "473ea47f-6db1-4a61-b438-05c00bfd0ce1", hoisted8)
                elementClose("span")
              elementClose("a")
            elementClose("li")
            __target = pagination.visiblePageNumbers
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var pageNumber = $value
                var $key = "62903370-8c3d-4215-8c9b-4ff5a9908117_" + $item
                elementOpen("li", $key, null, "class", (pagination.paginationResult.number == (pageNumber-1) ? 'active': ''))
                  elementOpen("a", "0189a3b7-f134-4489-bd18-984003b0ca85_" + $key, hoisted9, "onclick", function ($event) {
                    var $element = this;
                  $event.preventDefault();pagination.requestPage(pageNumber - 1)})
                    text("                             " + (pageNumber) + "                         ")
                  elementClose("a")
                elementClose("li")
              }, this)
            }
            elementOpen("li", null, null, "class", pagination.getNavigationButtonClass('next'))
              elementOpen("a", "7a219190-a159-4a3a-a7ac-d3ba0ca6741a", hoisted10, "onclick", function ($event) {
                var $element = this;
              $event.preventDefault();pagination.nextVisiblePageNumbers()})
                elementOpen("span", "605f118b-47e6-491c-ba41-a0dd6ba4feec", hoisted11)
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

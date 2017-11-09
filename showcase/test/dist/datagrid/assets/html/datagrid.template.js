define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "grid-content"]
var hoisted2 = ["class", "mv-datagrid-sort"]
var hoisted3 = ["class", "glyphicon glyphicon-triangle-top"]
var hoisted4 = ["class", "glyphicon glyphicon-triangle-bottom"]
var hoisted5 = ["style", "border:0px"]
var hoisted6 = ["class", "mv-datagrid-empty-text", "style", "border:0px"]
var hoisted7 = ["class", "DataGridBlockContainer"]
var __target

exports.dataGrid = (function () {
  return function dataGrid ($dataGrid) {
  elementOpen("div", "fcbd82fe-ef28-420a-b82c-3048bae65c26", hoisted1)
    elementOpen("table", null, null, "class", "table " + ($dataGrid.getStyle()) + " DataGrid " + ($dataGrid.getInfiniteScrollClass()) + "")
      elementOpen("thead")
        elementOpen("tr")
          __target = $dataGrid.columns
          if (__target) {
            ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
              var column = $value
              var $key = "395dabf6-3312-46b7-b79c-aa3eab2d4d99_" + $item
              elementOpen("th", $key, null, "style", {width: column.width + '%'}, "class", (column._size_?column._size_:'')+' '+($item==0?'is-first-cell':$item==$dataGrid.columns.length-1?'is-last-cell':''))
                if (column.headerRender) {
                  {column.headerRender(column)}
                } else {
                  text("                             " + (column.title) + "                         ")
                }
                if (column.sortable) {
                  elementOpen("span", "68ad8452-af29-4093-894a-4c9712a7cfaa_" + $key, hoisted2)
                    elementOpen("div", null, null, "class", 'mv-datagrid-sort-asc ' + (column.sortingDirection === 0?'active':''))
                      elementOpen("span", "d7498a07-1ac3-4520-9f7a-5b1d5710b745_" + $key, hoisted3, "onclick", function ($event) {
                        var $element = this;
                      $event.preventDefault();$dataGrid.addSort($item, true)})
                      elementClose("span")
                    elementClose("div")
                    elementOpen("div", null, null, "class", 'mv-datagrid-sort-desc ' + (column.sortingDirection === 1?'active':''))
                      elementOpen("span", "d775a53a-ac4b-45ef-b449-67bb498bfb79_" + $key, hoisted4, "onclick", function ($event) {
                        var $element = this;
                      $event.preventDefault();$dataGrid.addSort($item, false)})
                      elementClose("span")
                    elementClose("div")
                  elementClose("span")
                }
              elementClose("th")
            }, this)
          }
        elementClose("tr")
      elementClose("thead")
      elementOpen("tbody", null, null, "style", {height:($dataGrid.height?$dataGrid.height+'px':'')})
        __target = $dataGrid.data
        if (__target) {
          ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
            var data = $value
            var $key = "cf1971a0-86a1-4f65-b4f2-0bdb52b17c4e_" + $item
            elementOpen("tr", $key, null, "data-item-index", $item, "class",  'DataGridRow ' + ($dataGrid.selectedData.indexOf($item) > -1 ? 'active': ''), "id", 'uid_'+$dataGrid._uid+'_'+$item)
              var uid_tr = 'uid_'+$dataGrid._uid+'_'+$item;
              __target = $dataGrid.columns
              if (__target) {
                ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                  var column = $value
                  var $key = "952958a9-288d-4270-ac08-0efbca97594b_" + $item
                  elementOpen("td", $key, null, "class", (column._size_?column._size_:'')+' '+($item==0?'is-first-cell':$item==$dataGrid.columns.length-1?'is-last-cell':''), "id", uid_tr+'_td_'+$item)
                    if (column.template) {
                      {column.template(data,uid_tr+'_td_'+$item,uid_tr)}
                    } else if (column.render) {
                      text("                              " + (column.render(data,uid_tr+'_td_'+$item,uid_tr)) + "                         ")
                    } else {
                      text("                             " + (data[column.name]) + "                         ")
                    }
                  elementClose("td")
                }, this)
              }
            elementClose("tr")
          }, this)
        }
        elementOpen("tr")
        elementClose("tr")
      elementClose("tbody")
      elementOpen("tfoot")
        if ($dataGrid.data.length == 0) {
          elementOpen("tr", "7465e2e6-34d2-4da0-8cb4-e50e784c0677", hoisted5)
            elementOpen("td", "4029f459-2547-435a-b78c-13bf8f819d86", hoisted6, "colspan", $dataGrid.columns.length)
              text("" + ($dataGrid.emptyText) + "")
            elementClose("td")
          elementClose("tr")
        }
      elementClose("tfoot")
    elementClose("table")
  elementClose("div")
  if ($dataGrid.blocked) {
    elementOpen("div", "2df2c77e-734e-4a7a-b25a-6712b5f3be7b", hoisted7)
    elementClose("div")
  }
}
})()
})

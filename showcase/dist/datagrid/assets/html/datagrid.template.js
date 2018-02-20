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
  elementOpen("div", "af7be35d-cfe7-484c-ac4f-31b49afc7d87", hoisted1)
    elementOpen("table", null, null, "class", "table " + ($dataGrid.getStyle()) + " DataGrid " + ($dataGrid.getInfiniteScrollClass()) + "")
      elementOpen("thead")
        elementOpen("tr")
          __target = $dataGrid.columns
          if (__target) {
            ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
              var column = $value
              var $key = "0296f52c-f81d-45e2-a53f-f33c6ed8ca31_" + $item
              elementOpen("th", $key, null, "style", {width: column.width + '%'}, "class", (column._size_?column._size_:'')+' '+($item==0?'is-first-cell':$item==$dataGrid.columns.length-1?'is-last-cell':''))
                if (column.headerRender) {
                  {column.headerRender(column)}
                } else {
                  text("                             " + (column.title) + "                         ")
                }
                if (column.sortable) {
                  elementOpen("span", "3ce26f33-f1df-459f-8f1d-36bc15d64065_" + $key, hoisted2)
                    elementOpen("div", null, null, "class", 'mv-datagrid-sort-asc ' + (column.sortingDirection === 0?'active':''))
                      elementOpen("span", "887d4e16-e3f3-43c1-bfe1-b23526a1c5c0_" + $key, hoisted3, "onclick", function ($event) {
                        var $element = this;
                      $event.preventDefault();$dataGrid.addSort($item, true)})
                      elementClose("span")
                    elementClose("div")
                    elementOpen("div", null, null, "class", 'mv-datagrid-sort-desc ' + (column.sortingDirection === 1?'active':''))
                      elementOpen("span", "32d9903b-ff67-45da-b5ea-567ca51269bf_" + $key, hoisted4, "onclick", function ($event) {
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
            var $key = "bc9dd621-a3d4-480a-84c2-afb31651ef09_" + $item
            elementOpen("tr", $key, null, "data-item-index", $item, "class",  'DataGridRow ' + ($dataGrid.selectedData.indexOf($item) > -1 ? 'active': ''), "id", 'uid_'+$dataGrid._uid+'_'+$item)
              var uid_tr = 'uid_'+$dataGrid._uid+'_'+$item;
              __target = $dataGrid.columns
              if (__target) {
                ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                  var column = $value
                  var $key = "0ad201bc-8706-40c1-9b00-a2bf2a1d2b85_" + $item
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
          elementOpen("tr", "d5027256-7397-4bcc-85a9-e2d477db1a34", hoisted5)
            elementOpen("td", "e16d36f5-f13a-41ca-938c-2b0b4d9dfb83", hoisted6, "colspan", $dataGrid.columns.length)
              text("" + ($dataGrid.emptyText) + "")
            elementClose("td")
          elementClose("tr")
        }
      elementClose("tfoot")
    elementClose("table")
  elementClose("div")
  if ($dataGrid.blocked) {
    elementOpen("div", "021c121c-77f7-4a7f-b482-14434eb5b1a6", hoisted7)
    elementClose("div")
  }
}
})()
})

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
  elementOpen("div", "5bcaeeef-6a32-45e5-9ec4-0f111ee532df", hoisted1)
    elementOpen("table", null, null, "class", "table " + ($dataGrid.getStyle()) + " DataGrid " + ($dataGrid.getInfiniteScrollClass()) + "")
      elementOpen("thead")
        elementOpen("tr")
          __target = $dataGrid.columns
          if (__target) {
            ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
              var column = $value
              var $key = "4fa73574-fbc9-4c39-8b6d-7b408930f3f0_" + $item
              elementOpen("th", $key, null, "style", {width: column.width + '%'}, "class", (column._size_?column._size_:'')+' '+($item==0?'is-first-cell':$item==$dataGrid.columns.length-1?'is-last-cell':''))
                if (column.headerRender) {
                  {column.headerRender(column)}
                } else {
                  text("                             " + (column.title) + "                         ")
                }
                if (column.sortable) {
                  elementOpen("span", "37bf1795-58a8-4dbd-9079-a48a07badb14_" + $key, hoisted2)
                    elementOpen("div", null, null, "class", 'mv-datagrid-sort-asc ' + (column.sortingDirection === 0?'active':''))
                      elementOpen("span", "05dc03a6-792c-4900-8dd4-89a7366912ca_" + $key, hoisted3, "onclick", function ($event) {
                        var $element = this;
                      $event.preventDefault();$dataGrid.addSort($item, true)})
                      elementClose("span")
                    elementClose("div")
                    elementOpen("div", null, null, "class", 'mv-datagrid-sort-desc ' + (column.sortingDirection === 1?'active':''))
                      elementOpen("span", "00f8e4be-746f-47be-bdd5-43f2a7c5a3a6_" + $key, hoisted4, "onclick", function ($event) {
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
            var $key = "e37694f5-420a-49ca-ab92-30633126a626_" + $item
            elementOpen("tr", $key, null, "data-item-index", $item, "class",  'DataGridRow ' + ($dataGrid.selectedData.indexOf($item) > -1 ? 'active': ''), "id", 'uid_'+$dataGrid._uid+'_'+$item)
              var uid_tr = 'uid_'+$dataGrid._uid+'_'+$item;
              __target = $dataGrid.columns
              if (__target) {
                ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                  var column = $value
                  var $key = "78a454ff-e36d-46e1-b73c-d81fe663786a_" + $item
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
          elementOpen("tr", "86adec05-fd3e-4ba8-afd9-2a0c3d86c199", hoisted5)
            elementOpen("td", "296ae860-40fd-4ae4-ab3a-7a0b9457a8fe", hoisted6, "colspan", $dataGrid.columns.length)
              text("" + ($dataGrid.emptyText) + "")
            elementClose("td")
          elementClose("tr")
        }
      elementClose("tfoot")
    elementClose("table")
  elementClose("div")
  if ($dataGrid.blocked) {
    elementOpen("div", "42132220-d215-4b65-bba5-4c424398c36f", hoisted7)
    elementClose("div")
  }
}
})()
})

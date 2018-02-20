define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "tree-grid table table-bordered"]
var hoisted2 = ["class", "tree-grid-indent"]
var hoisted3 = ["class", "tree-grid-indent skiped"]
var __target

exports.treeGrid = (function () {
  return function treeGrid ($treegrid) {
  elementOpen("table", "6d824262-3c79-4355-ac72-929496de23db", hoisted1)
    elementOpen("thead")
      elementOpen("tr")
        __target = $treegrid.columns
        if (__target) {
          ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
            var column = $value
            var $key = "da05a5ea-d59c-4722-a9c5-296171d2fc0d_" + $item
            elementOpen("th", $key)
              text("                     " + (column.title) + "                 ")
            elementClose("th")
          }, this)
        }
      elementClose("tr")
    elementClose("thead")
    elementOpen("tbody")
      __target = $treegrid.data
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var data = $value
          var $key = "b2ebcde4-b466-4691-8445-bd1d303de784_" + $item
          elementOpen("tr", $key, null, "data-tt-index", $item, "data-tt-indent", data._$increment_row_parent, "style", {display:(($treegrid.parentHidden === -1) || $treegrid.parentHidden > parseInt((data[$treegrid.parentColumn])?data[$treegrid.parentColumn]:'0')?'table-row':'none')}, "class", 'is-expanded '+($treegrid.indexSelected === $item?'active':''), "data-tt-id", data[$treegrid.primaryColumn], "data-tt-parent-id", data[$treegrid.parentColumn])
            __target = $treegrid.columns
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var column = $value
                var $key = "2af20f00-a1b4-4c13-8aba-e0ec6b7b5998_" + $item
                elementOpen("td", $key)
                  if ($item === 0) {
                    __target = data._$increment_row_parent_array
                    if (__target) {
                      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                        var key = $value
                        var $key = "bcefefb6-0380-4cc8-bba6-f75b207fe234_" + $item
                        elementOpen("span", $key, hoisted2)
                        elementClose("span")
                      }, this)
                    }
                    elementOpen("span", "de9f5e41-0f58-4c7b-80d2-153a9b37793f_" + $key, hoisted3)
                      if (data._$row_parent_has_children) {
                        skip()
                      } else {
                      }
                    elementClose("span")
                    if (data._$row_parent_has_children) {
                      elementOpen("span", null, null, "class", 'tree-grid-indent tree-grid-indent-icon '+$treegrid.expandedIcon, "data-tt-id", data[$treegrid.primaryColumn], "data-tt-parent-id", data[$treegrid.parentColumn])
                      elementClose("span")
                    }
                    if (column.template) {
                      {column.template(data)}
                    } else if (column.render) {
                      elementOpen("span")
                        text("" + (column.render(data)) + "")
                      elementClose("span")
                    } else {
                      elementOpen("span")
                        text("" + (data[column.name]) + "")
                      elementClose("span")
                    }
                  } else {
                    if (column.template) {
                      {column.template(data)}
                    } else if (column.render) {
                      elementOpen("span")
                        text("" + (column.render(data)) + "")
                      elementClose("span")
                    } else {
                      elementOpen("span")
                        text("" + (data[column.name]) + "")
                      elementClose("span")
                    }
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
  elementClose("table")
}
})()
})

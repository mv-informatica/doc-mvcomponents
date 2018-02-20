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
  elementOpen("table", "9cecf030-613f-4356-b2ea-81bbe2aeea85", hoisted1)
    elementOpen("thead")
      elementOpen("tr")
        __target = $treegrid.columns
        if (__target) {
          ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
            var column = $value
            var $key = "f2721574-c8b4-4dd2-afe0-5e025bc3160c_" + $item
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
          var $key = "78e68197-996f-4e1f-bfdb-f70d0a4e5259_" + $item
          elementOpen("tr", $key, null, "data-tt-index", $item, "data-tt-indent", data._$increment_row_parent, "style", {display:(($treegrid.parentHidden === -1) || $treegrid.parentHidden > parseInt((data[$treegrid.parentColumn])?data[$treegrid.parentColumn]:'0')?'table-row':'none')}, "class", 'is-expanded '+($treegrid.indexSelected === $item?'active':''), "data-tt-id", data[$treegrid.primaryColumn], "data-tt-parent-id", data[$treegrid.parentColumn])
            __target = $treegrid.columns
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var column = $value
                var $key = "02a17c2b-848a-4bd0-b628-d832a4ca9f94_" + $item
                elementOpen("td", $key)
                  if ($item === 0) {
                    __target = data._$increment_row_parent_array
                    if (__target) {
                      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                        var key = $value
                        var $key = "a83045b3-f1e3-409d-bda9-3aee4bbd213b_" + $item
                        elementOpen("span", $key, hoisted2)
                        elementClose("span")
                      }, this)
                    }
                    elementOpen("span", "651909a2-399d-48ca-aef0-747137bd95e8_" + $key, hoisted3)
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

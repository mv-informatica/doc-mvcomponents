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
  elementOpen("table", "d25e3977-144b-4881-8a0e-292818da1f3b", hoisted1)
    elementOpen("thead")
      elementOpen("tr")
        __target = $treegrid.columns
        if (__target) {
          ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
            var column = $value
            var $key = "668a57b6-737f-4f4d-839f-35dcf8cdd90d_" + $item
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
          var $key = "1a28bb28-a763-43cd-9292-51ab5c304553_" + $item
          elementOpen("tr", $key, null, "data-tt-index", $item, "data-tt-indent", data._$increment_row_parent, "style", {display:(($treegrid.parentHidden === -1) || $treegrid.parentHidden > parseInt((data[$treegrid.parentColumn])?data[$treegrid.parentColumn]:'0')?'table-row':'none')}, "class", 'is-expanded '+($treegrid.indexSelected === $item?'active':''), "data-tt-id", data[$treegrid.primaryColumn], "data-tt-parent-id", data[$treegrid.parentColumn])
            __target = $treegrid.columns
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var column = $value
                var $key = "a98aa29d-24d1-455f-bb51-9b1f6472885a_" + $item
                elementOpen("td", $key)
                  if ($item === 0) {
                    __target = data._$increment_row_parent_array
                    if (__target) {
                      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                        var key = $value
                        var $key = "ccfd2bbc-99aa-4a0d-b132-cb10ea2d0802_" + $item
                        elementOpen("span", $key, hoisted2)
                        elementClose("span")
                      }, this)
                    }
                    elementOpen("span", "0610c743-d461-426e-b88c-b6300eb920ae_" + $key, hoisted3)
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

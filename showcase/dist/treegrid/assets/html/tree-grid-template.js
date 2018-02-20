define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var __target

exports.treeGrid = (function () {
  return function treeGrid ($treegrid) {
  elementOpen("table", null, null, "class", 'tree-grid table table-bordered table-hover table-striped '+($treegrid.height?' DataGrid-InfiniteScroll':''))
    elementOpen("thead")
      elementOpen("tr")
        __target = $treegrid.columns
        if (__target) {
          ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
            var column = $value
            var $key = "c115531a-15b6-41f5-b0bb-23b52c05100d_" + $item
            elementOpen("th", $key, null, "class", (column._size_?column._size_:''))
              text("                     " + (column.title) + "                 ")
            elementClose("th")
          }, this)
        }
      elementClose("tr")
    elementClose("thead")
    elementOpen("tbody", null, null, "style", {height:($treegrid.height?$treegrid.height+'px':'')})
      __target = $treegrid.data
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var data = $value
          var $key = "5200ee46-5488-4e0e-ba0f-a13e87fe9d63_" + $item
          elementOpen("tr", $key, null, "data-index", $item, "class", 'treegrid-'+data[$treegrid.primaryColumn]+(data[$treegrid.parentColumn]?' treegrid-parent-'+data[$treegrid.parentColumn]:'')+($treegrid.indexSelected === $item?'active':''))
            __target = $treegrid.columns
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var column = $value
                var $key = "1a56dda4-4810-4c0a-a19d-f814f58f8e58_" + $item
                elementOpen("td", $key, null, "class", (column._size_?column._size_:''))
                  if ($item === 0) {
                    if (column.template) {
                      {column.template(data)}
                    } else if (column.render) {
                      text("                              " + (column.render(data)) + "                         ")
                    } else {
                      text("                           " + ((data[column.name]?data[column.name]:'')) + "                         ")
                    }
                  } else {
                    if (column.template) {
                      {column.template(data)}
                    } else if (column.render) {
                      text("                              " + (column.render(data)) + "                         ")
                    } else {
                      text("                           " + ((data[column.name]?data[column.name]:'')) + "                         ")
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

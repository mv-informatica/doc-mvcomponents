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
            var $key = "7561fabb-0f92-4de9-b5a7-b8ecc1fbe962_" + $item
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
          var $key = "772c05c0-dd82-44ca-80ae-4cacd4a5a659_" + $item
          elementOpen("tr", $key, null, "data-index", $item, "class", 'treegrid-'+data[$treegrid.primaryColumn]+(data[$treegrid.parentColumn]?' treegrid-parent-'+data[$treegrid.parentColumn]:'')+($treegrid.indexSelected === $item?'active':''))
            __target = $treegrid.columns
            if (__target) {
              ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
                var column = $value
                var $key = "c3f932cb-daef-461a-959d-e033854411e3_" + $item
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

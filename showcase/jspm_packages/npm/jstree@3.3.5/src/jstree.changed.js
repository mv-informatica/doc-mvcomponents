/* */ 
"format cjs";
(function(factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define('jstree.changed', ['jquery', 'jstree'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('../dist/jstree'));
  } else {
    factory(jQuery, jQuery.jstree);
  }
}(function($, jstree, undefined) {
  "use strict";
  if ($.jstree.plugins.changed) {
    return;
  }
  $.jstree.plugins.changed = function(options, parent) {
    var last = [];
    this.trigger = function(ev, data) {
      var i,
          j;
      if (!data) {
        data = {};
      }
      if (ev.replace('.jstree', '') === 'changed') {
        data.changed = {
          selected: [],
          deselected: []
        };
        var tmp = {};
        for (i = 0, j = last.length; i < j; i++) {
          tmp[last[i]] = 1;
        }
        for (i = 0, j = data.selected.length; i < j; i++) {
          if (!tmp[data.selected[i]]) {
            data.changed.selected.push(data.selected[i]);
          } else {
            tmp[data.selected[i]] = 2;
          }
        }
        for (i = 0, j = last.length; i < j; i++) {
          if (tmp[last[i]] === 1) {
            data.changed.deselected.push(last[i]);
          }
        }
        last = data.selected.slice();
      }
      parent.trigger.call(this, ev, data);
    };
    this.refresh = function(skip_loading, forget_state) {
      last = [];
      return parent.refresh.apply(this, arguments);
    };
  };
}));

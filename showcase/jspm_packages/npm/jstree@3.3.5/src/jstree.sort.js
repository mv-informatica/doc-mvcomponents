/* */ 
"format cjs";
(function(factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define('jstree.sort', ['jquery', 'jstree'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('../dist/jstree'));
  } else {
    factory(jQuery, jQuery.jstree);
  }
}(function($, jstree, undefined) {
  "use strict";
  if ($.jstree.plugins.sort) {
    return;
  }
  $.jstree.defaults.sort = function(a, b) {
    return this.get_text(a) > this.get_text(b) ? 1 : -1;
  };
  $.jstree.plugins.sort = function(options, parent) {
    this.bind = function() {
      parent.bind.call(this);
      this.element.on("model.jstree", $.proxy(function(e, data) {
        this.sort(data.parent, true);
      }, this)).on("rename_node.jstree create_node.jstree", $.proxy(function(e, data) {
        this.sort(data.parent || data.node.parent, false);
        this.redraw_node(data.parent || data.node.parent, true);
      }, this)).on("move_node.jstree copy_node.jstree", $.proxy(function(e, data) {
        this.sort(data.parent, false);
        this.redraw_node(data.parent, true);
      }, this));
    };
    this.sort = function(obj, deep) {
      var i,
          j;
      obj = this.get_node(obj);
      if (obj && obj.children && obj.children.length) {
        obj.children.sort($.proxy(this.settings.sort, this));
        if (deep) {
          for (i = 0, j = obj.children_d.length; i < j; i++) {
            this.sort(obj.children_d[i], false);
          }
        }
      }
    };
  };
}));

/* */ 
"format cjs";
(function(factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define('jstree.conditionalselect', ['jquery', 'jstree'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('../dist/jstree'));
  } else {
    factory(jQuery, jQuery.jstree);
  }
}(function($, jstree, undefined) {
  "use strict";
  if ($.jstree.plugins.conditionalselect) {
    return;
  }
  $.jstree.defaults.conditionalselect = function() {
    return true;
  };
  $.jstree.plugins.conditionalselect = function(options, parent) {
    this.activate_node = function(obj, e) {
      if (this.settings.conditionalselect.call(this, this.get_node(obj), e)) {
        parent.activate_node.call(this, obj, e);
      }
    };
  };
}));

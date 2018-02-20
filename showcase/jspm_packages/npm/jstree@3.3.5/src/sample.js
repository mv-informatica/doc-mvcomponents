/* */ 
(function(process) {
  (function($, undefined) {
    "use strict";
    var private_var = null;
    $.jstree.defaults.sample = {sample_option: 'sample_val'};
    $.jstree.plugins.sample = function(options, parent) {
      this.sample_function = function(arg) {
        if (parent.sample_function) {
          parent.sample_function.call(this, arg);
        }
      };
      this.init = function(el, options) {
        parent.init.call(this, el, options);
      };
      this.bind = function() {
        parent.bind.call(this);
      };
      this.unbind = function() {
        parent.unbind.call(this);
      };
      this.teardown = function() {
        parent.teardown.call(this);
      };
      this.get_state = function() {
        var state = parent.get_state.call(this);
        state.sample = {'var': 'val'};
        return state;
      };
      this.set_state = function(state, callback) {
        if (parent.set_state.call(this, state, callback)) {
          if (state.sample) {
            delete state.sample;
            this.set_state(state, callback);
            return false;
          }
          return true;
        }
        return false;
      };
      this.get_json = function(obj, options, flat) {
        var tmp = parent.get_json.call(this, obj, options, flat),
            i,
            j;
        if ($.isArray(tmp)) {
          for (i = 0, j = tmp.length; i < j; i++) {
            tmp[i].sample = 'value';
          }
        } else {
          tmp.sample = 'value';
        }
        return tmp;
      };
    };
    $(function() {});
    $.jstree.defaults.plugins.push("sample");
  })(jQuery);
})(require('process'));

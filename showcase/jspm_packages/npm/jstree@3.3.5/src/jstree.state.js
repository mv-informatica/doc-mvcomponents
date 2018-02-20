/* */ 
"format cjs";
(function(factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define('jstree.state', ['jquery', 'jstree'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('../dist/jstree'));
  } else {
    factory(jQuery, jQuery.jstree);
  }
}(function($, jstree, undefined) {
  "use strict";
  if ($.jstree.plugins.state) {
    return;
  }
  var to = false;
  $.jstree.defaults.state = {
    key: 'jstree',
    events: 'changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree',
    ttl: false,
    filter: false,
    preserve_loaded: false
  };
  $.jstree.plugins.state = function(options, parent) {
    this.bind = function() {
      parent.bind.call(this);
      var bind = $.proxy(function() {
        this.element.on(this.settings.state.events, $.proxy(function() {
          if (to) {
            clearTimeout(to);
          }
          to = setTimeout($.proxy(function() {
            this.save_state();
          }, this), 100);
        }, this));
        this.trigger('state_ready');
      }, this);
      this.element.on("ready.jstree", $.proxy(function(e, data) {
        this.element.one("restore_state.jstree", bind);
        if (!this.restore_state()) {
          bind();
        }
      }, this));
    };
    this.save_state = function() {
      var tm = this.get_state();
      if (!this.settings.state.preserve_loaded) {
        delete tm.core.loaded;
      }
      var st = {
        'state': tm,
        'ttl': this.settings.state.ttl,
        'sec': +(new Date())
      };
      $.vakata.storage.set(this.settings.state.key, JSON.stringify(st));
    };
    this.restore_state = function() {
      var k = $.vakata.storage.get(this.settings.state.key);
      if (!!k) {
        try {
          k = JSON.parse(k);
        } catch (ex) {
          return false;
        }
      }
      if (!!k && k.ttl && k.sec && +(new Date()) - k.sec > k.ttl) {
        return false;
      }
      if (!!k && k.state) {
        k = k.state;
      }
      if (!!k && $.isFunction(this.settings.state.filter)) {
        k = this.settings.state.filter.call(this, k);
      }
      if (!!k) {
        if (!this.settings.state.preserve_loaded) {
          delete k.core.loaded;
        }
        this.element.one("set_state.jstree", function(e, data) {
          data.instance.trigger('restore_state', {'state': $.extend(true, {}, k)});
        });
        this.set_state(k);
        return true;
      }
      return false;
    };
    this.clear_state = function() {
      return $.vakata.storage.del(this.settings.state.key);
    };
  };
  (function($, undefined) {
    $.vakata.storage = {
      set: function(key, val) {
        return window.localStorage.setItem(key, val);
      },
      get: function(key) {
        return window.localStorage.getItem(key);
      },
      del: function(key) {
        return window.localStorage.removeItem(key);
      }
    };
  }($));
}));

/* */ 
"format cjs";
(function(factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define('jstree.massload', ['jquery', 'jstree'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('../dist/jstree'));
  } else {
    factory(jQuery, jQuery.jstree);
  }
}(function($, jstree, undefined) {
  "use strict";
  if ($.jstree.plugins.massload) {
    return;
  }
  $.jstree.defaults.massload = null;
  $.jstree.plugins.massload = function(options, parent) {
    this.init = function(el, options) {
      this._data.massload = {};
      parent.init.call(this, el, options);
    };
    this._load_nodes = function(nodes, callback, is_callback, force_reload) {
      var s = this.settings.massload,
          nodesString = JSON.stringify(nodes),
          toLoad = [],
          m = this._model.data,
          i,
          j,
          dom;
      if (!is_callback) {
        for (i = 0, j = nodes.length; i < j; i++) {
          if (!m[nodes[i]] || ((!m[nodes[i]].state.loaded && !m[nodes[i]].state.failed) || force_reload)) {
            toLoad.push(nodes[i]);
            dom = this.get_node(nodes[i], true);
            if (dom && dom.length) {
              dom.addClass("jstree-loading").attr('aria-busy', true);
            }
          }
        }
        this._data.massload = {};
        if (toLoad.length) {
          if ($.isFunction(s)) {
            return s.call(this, toLoad, $.proxy(function(data) {
              var i,
                  j;
              if (data) {
                for (i in data) {
                  if (data.hasOwnProperty(i)) {
                    this._data.massload[i] = data[i];
                  }
                }
              }
              for (i = 0, j = nodes.length; i < j; i++) {
                dom = this.get_node(nodes[i], true);
                if (dom && dom.length) {
                  dom.removeClass("jstree-loading").attr('aria-busy', false);
                }
              }
              parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
            }, this));
          }
          if (typeof s === 'object' && s && s.url) {
            s = $.extend(true, {}, s);
            if ($.isFunction(s.url)) {
              s.url = s.url.call(this, toLoad);
            }
            if ($.isFunction(s.data)) {
              s.data = s.data.call(this, toLoad);
            }
            return $.ajax(s).done($.proxy(function(data, t, x) {
              var i,
                  j;
              if (data) {
                for (i in data) {
                  if (data.hasOwnProperty(i)) {
                    this._data.massload[i] = data[i];
                  }
                }
              }
              for (i = 0, j = nodes.length; i < j; i++) {
                dom = this.get_node(nodes[i], true);
                if (dom && dom.length) {
                  dom.removeClass("jstree-loading").attr('aria-busy', false);
                }
              }
              parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
            }, this)).fail($.proxy(function(f) {
              parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
            }, this));
          }
        }
      }
      return parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
    };
    this._load_node = function(obj, callback) {
      var data = this._data.massload[obj.id],
          rslt = null,
          dom;
      if (data) {
        rslt = this[typeof data === 'string' ? '_append_html_data' : '_append_json_data'](obj, typeof data === 'string' ? $($.parseHTML(data)).filter(function() {
          return this.nodeType !== 3;
        }) : data, function(status) {
          callback.call(this, status);
        });
        dom = this.get_node(obj.id, true);
        if (dom && dom.length) {
          dom.removeClass("jstree-loading").attr('aria-busy', false);
        }
        delete this._data.massload[obj.id];
        return rslt;
      }
      return parent._load_node.call(this, obj, callback);
    };
  };
}));

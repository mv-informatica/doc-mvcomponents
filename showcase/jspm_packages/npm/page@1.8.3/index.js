/* */ 
(function(process) {
  'use strict';
  var pathtoRegexp = require('path-to-regexp');
  module.exports = page;
  page.default = page;
  page.Context = Context;
  page.Route = Route;
  page.sameOrigin = sameOrigin;
  var hasDocument = ('undefined' !== typeof document);
  var hasWindow = ('undefined' !== typeof window);
  var hasHistory = ('undefined' !== typeof history);
  var hasProcess = typeof process !== 'undefined';
  var clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';
  var isLocation = hasWindow && !!(window.history.location || window.location);
  var dispatch = true;
  var decodeURLComponents = true;
  var base = '';
  var strict = false;
  var running;
  var hashbang = false;
  var prevContext;
  var pageWindow;
  function page(path, fn) {
    if ('function' === typeof path) {
      return page('*', path);
    }
    if ('function' === typeof fn) {
      var route = new Route((path));
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
    } else {
      page.start(path);
    }
  }
  page.callbacks = [];
  page.exits = [];
  page.current = '';
  page.len = 0;
  page.base = function(path) {
    if (0 === arguments.length)
      return base;
    base = path;
  };
  page.strict = function(enable) {
    if (0 === arguments.length)
      return strict;
    strict = enable;
  };
  page.start = function(options) {
    options = options || {};
    if (running)
      return;
    running = true;
    pageWindow = options.window || (hasWindow && window);
    if (false === options.dispatch)
      dispatch = false;
    if (false === options.decodeURLComponents)
      decodeURLComponents = false;
    if (false !== options.popstate && hasWindow)
      pageWindow.addEventListener('popstate', onpopstate, false);
    if (false !== options.click && hasDocument) {
      pageWindow.document.addEventListener(clickEvent, onclick, false);
    }
    hashbang = !!options.hashbang;
    if (hashbang && hasWindow && !hasHistory) {
      pageWindow.addEventListener('hashchange', onpopstate, false);
    }
    if (!dispatch)
      return;
    var url;
    if (isLocation) {
      var loc = pageWindow.location;
      if (hashbang && ~loc.hash.indexOf('#!')) {
        url = loc.hash.substr(2) + loc.search;
      } else if (hashbang) {
        url = loc.search + loc.hash;
      } else {
        url = loc.pathname + loc.search + loc.hash;
      }
    }
    page.replace(url, null, true, dispatch);
  };
  page.stop = function() {
    if (!running)
      return;
    page.current = '';
    page.len = 0;
    running = false;
    hasDocument && pageWindow.document.removeEventListener(clickEvent, onclick, false);
    hasWindow && pageWindow.removeEventListener('popstate', onpopstate, false);
    hasWindow && pageWindow.removeEventListener('hashchange', onpopstate, false);
  };
  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state),
        prev = prevContext;
    prevContext = ctx;
    page.current = ctx.path;
    if (false !== dispatch)
      page.dispatch(ctx, prev);
    if (false !== ctx.handled && false !== push)
      ctx.pushState();
    return ctx;
  };
  page.back = function(path, state) {
    if (page.len > 0) {
      hasHistory && pageWindow.history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    } else {
      setTimeout(function() {
        page.show(getBase(), state);
      });
    }
  };
  page.redirect = function(from, to) {
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace((to));
        }, 0);
      });
    }
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };
  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state),
        prev = prevContext;
    prevContext = ctx;
    page.current = ctx.path;
    ctx.init = init;
    ctx.save();
    if (false !== dispatch)
      page.dispatch(ctx, prev);
    return ctx;
  };
  page.dispatch = function(ctx, prev) {
    var i = 0,
        j = 0;
    function nextExit() {
      var fn = page.exits[j++];
      if (!fn)
        return nextEnter();
      fn(prev, nextExit);
    }
    function nextEnter() {
      var fn = page.callbacks[i++];
      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn)
        return unhandled(ctx);
      fn(ctx, nextEnter);
    }
    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };
  function unhandled(ctx) {
    if (ctx.handled)
      return;
    var current;
    if (hashbang) {
      current = isLocation && getBase() + pageWindow.location.hash.replace('#!', '');
    } else {
      current = isLocation && pageWindow.location.pathname + pageWindow.location.search;
    }
    if (current === ctx.canonicalPath)
      return;
    page.stop();
    ctx.handled = false;
    isLocation && (pageWindow.location.href = ctx.canonicalPath);
  }
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }
    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') {
      return val;
    }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }
  function Context(path, state) {
    var pageBase = getBase();
    if ('/' === path[0] && 0 !== path.indexOf(pageBase))
      path = pageBase + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');
    this.canonicalPath = path;
    this.path = path.replace(pageBase, '') || '/';
    if (hashbang)
      this.path = this.path.replace('#!', '') || '/';
    this.title = (hasDocument && pageWindow.document.title);
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#'))
        return;
      var parts = this.path.split('#');
      this.path = this.pathname = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }
  page.Context = Context;
  Context.prototype.pushState = function() {
    page.len++;
    if (hasHistory) {
      pageWindow.history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };
  Context.prototype.save = function() {
    if (hasHistory && pageWindow.location.protocol !== 'file:') {
      pageWindow.history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };
  function Route(path, options) {
    options = options || {};
    options.strict = options.strict || strict;
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path, this.keys = [], options);
  }
  page.Route = Route;
  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params))
        return fn(ctx, next);
      next();
    };
  };
  Route.prototype.match = function(path, params) {
    var keys = this.keys,
        qsIndex = path.indexOf('?'),
        pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
        m = this.regexp.exec(decodeURIComponent(pathname));
    if (!m)
      return false;
    for (var i = 1,
        len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }
    return true;
  };
  var onpopstate = (function() {
    var loaded = false;
    if (!hasWindow) {
      return;
    }
    if (hasDocument && document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded)
        return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else if (isLocation) {
        var loc = pageWindow.location;
        page.show(loc.pathname + loc.hash, undefined, undefined, false);
      }
    };
  })();
  function onclick(e) {
    if (1 !== which(e))
      return;
    if (e.metaKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    var el = e.path ? e.path[0] : e.target;
    while (el && 'A' !== el.nodeName.toUpperCase())
      el = el.parentNode;
    if (!el || 'A' !== el.nodeName.toUpperCase())
      return;
    var svg = (typeof el.href === 'object') && el.href.constructor.name === 'SVGAnimatedString';
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external')
      return;
    var link = el.getAttribute('href');
    if (!hashbang && samePath(el) && (el.hash || '#' === link))
      return;
    if (link && link.indexOf('mailto:') > -1)
      return;
    if (svg ? el.target.baseVal : el.target)
      return;
    if (!svg && !sameOrigin(el.href))
      return;
    var path = svg ? el.href.baseVal : (el.pathname + el.search + (el.hash || ''));
    path = path[0] !== '/' ? '/' + path : path;
    if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }
    var orig = path;
    var pageBase = getBase();
    if (path.indexOf(pageBase) === 0) {
      path = path.substr(base.length);
    }
    if (hashbang)
      path = path.replace('#!', '');
    if (pageBase && orig === path)
      return;
    e.preventDefault();
    page.show(orig);
  }
  function which(e) {
    e = e || (hasWindow && window.event);
    return null == e.which ? e.button : e.which;
  }
  function toURL(href) {
    if (typeof URL === 'function' && isLocation) {
      return new URL(href, location.toString());
    } else if (hasDocument) {
      var anc = document.createElement('a');
      anc.href = href;
      return anc;
    }
  }
  function sameOrigin(href) {
    if (!href || !isLocation)
      return false;
    var url = toURL(href);
    var loc = pageWindow.location;
    return loc.protocol === url.protocol && loc.hostname === url.hostname && loc.port === url.port;
  }
  function samePath(url) {
    if (!isLocation)
      return false;
    var loc = pageWindow.location;
    return url.pathname === loc.pathname && url.search === loc.search;
  }
  function getBase() {
    if (!!base)
      return base;
    var loc = hasWindow && pageWindow.location;
    return (hasWindow && hashbang && loc.protocol === 'file:') ? loc.pathname : base;
  }
  page.sameOrigin = sameOrigin;
})(require('process'));

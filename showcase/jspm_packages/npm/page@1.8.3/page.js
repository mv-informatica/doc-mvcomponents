/* */ 
"format cjs";
(function(process) {
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.page = factory());
  }(this, (function() {
    'use strict';
    var isarray = Array.isArray || function(arr) {
      return Object.prototype.toString.call(arr) == '[object Array]';
    };
    var pathToRegexp_1 = pathToRegexp;
    var parse_1 = parse;
    var compile_1 = compile;
    var tokensToFunction_1 = tokensToFunction;
    var tokensToRegExp_1 = tokensToRegExp;
    var PATH_REGEXP = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
    function parse(str) {
      var tokens = [];
      var key = 0;
      var index = 0;
      var path = '';
      var res;
      while ((res = PATH_REGEXP.exec(str)) != null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        if (escaped) {
          path += escaped[1];
          continue;
        }
        if (path) {
          tokens.push(path);
          path = '';
        }
        var prefix = res[2];
        var name = res[3];
        var capture = res[4];
        var group = res[5];
        var suffix = res[6];
        var asterisk = res[7];
        var repeat = suffix === '+' || suffix === '*';
        var optional = suffix === '?' || suffix === '*';
        var delimiter = prefix || '/';
        var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');
        tokens.push({
          name: name || key++,
          prefix: prefix || '',
          delimiter: delimiter,
          optional: optional,
          repeat: repeat,
          pattern: escapeGroup(pattern)
        });
      }
      if (index < str.length) {
        path += str.substr(index);
      }
      if (path) {
        tokens.push(path);
      }
      return tokens;
    }
    function compile(str) {
      return tokensToFunction(parse(str));
    }
    function tokensToFunction(tokens) {
      var matches = new Array(tokens.length);
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
          matches[i] = new RegExp('^' + tokens[i].pattern + '$');
        }
      }
      return function(obj) {
        var path = '';
        var data = obj || {};
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === 'string') {
            path += token;
            continue;
          }
          var value = data[token.name];
          var segment;
          if (value == null) {
            if (token.optional) {
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined');
            }
          }
          if (isarray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"');
            }
            if (value.length === 0) {
              if (token.optional) {
                continue;
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty');
              }
            }
            for (var j = 0; j < value.length; j++) {
              segment = encodeURIComponent(value[j]);
              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
              }
              path += (j === 0 ? token.prefix : token.delimiter) + segment;
            }
            continue;
          }
          segment = encodeURIComponent(value);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
          }
          path += token.prefix + segment;
        }
        return path;
      };
    }
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1');
    }
    function escapeGroup(group) {
      return group.replace(/([=!:$\/()])/g, '\\$1');
    }
    function attachKeys(re, keys) {
      re.keys = keys;
      return re;
    }
    function flags(options) {
      return options.sensitive ? '' : 'i';
    }
    function regexpToRegexp(path, keys) {
      var groups = path.source.match(/\((?!\?)/g);
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            pattern: null
          });
        }
      }
      return attachKeys(path, keys);
    }
    function arrayToRegexp(path, keys, options) {
      var parts = [];
      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
      }
      var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
      return attachKeys(regexp, keys);
    }
    function stringToRegexp(path, keys, options) {
      var tokens = parse(path);
      var re = tokensToRegExp(tokens, options);
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] !== 'string') {
          keys.push(tokens[i]);
        }
      }
      return attachKeys(re, keys);
    }
    function tokensToRegExp(tokens, options) {
      options = options || {};
      var strict = options.strict;
      var end = options.end !== false;
      var route = '';
      var lastToken = tokens[tokens.length - 1];
      var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
          route += escapeString(token);
        } else {
          var prefix = escapeString(token.prefix);
          var capture = token.pattern;
          if (token.repeat) {
            capture += '(?:' + prefix + capture + ')*';
          }
          if (token.optional) {
            if (prefix) {
              capture = '(?:' + prefix + '(' + capture + '))?';
            } else {
              capture = '(' + capture + ')?';
            }
          } else {
            capture = prefix + '(' + capture + ')';
          }
          route += capture;
        }
      }
      if (!strict) {
        route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
      }
      if (end) {
        route += '$';
      } else {
        route += strict && endsWithSlash ? '' : '(?=\\/|$)';
      }
      return new RegExp('^' + route, flags(options));
    }
    function pathToRegexp(path, keys, options) {
      keys = keys || [];
      if (!isarray(keys)) {
        options = keys;
        keys = [];
      } else if (!options) {
        options = {};
      }
      if (path instanceof RegExp) {
        return regexpToRegexp(path, keys, options);
      }
      if (isarray(path)) {
        return arrayToRegexp(path, keys, options);
      }
      return stringToRegexp(path, keys, options);
    }
    pathToRegexp_1.parse = parse_1;
    pathToRegexp_1.compile = compile_1;
    pathToRegexp_1.tokensToFunction = tokensToFunction_1;
    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
    var page_js = page;
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
      this.regexp = pathToRegexp_1(this.path, this.keys = [], options);
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
    return page_js;
  })));
})(require('process'));

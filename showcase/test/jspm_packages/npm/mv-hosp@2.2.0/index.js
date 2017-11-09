/* */ 
"format amd";
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ESC = 27;

var DetailComponent = function () {
  function DetailComponent() {
    _classCallCheck(this, DetailComponent);

    this.element = document.querySelector('.tc-detail');
    this.title = this.element.querySelector('.tc-detail__title');
    this.example = this.element.querySelector('.tc-detail__example');
    this.exampleOld = this.element.querySelector('.tc-detail__example-old');
    this.closeHandler = this.element.querySelector('.tc-detail__close-handler button');
    this.bind();
  }

  _createClass(DetailComponent, [{
    key: 'bind',
    value: function bind() {
      var _this = this;

      document.addEventListener('keyup', function (event) {
        if (event.keyCode === ESC) {
          _this.close();
        }
      });

      this.closeHandler.addEventListener('click', function () {
        return _this.close();
      });

      this.element.querySelector('.tc-cloak').addEventListener('click', function () {
        return _this.close();
      });
    }
  }, {
    key: 'open',
    value: function open(_ref) {
      var _this2 = this;

      var name = _ref.name,
          font = _ref.font;

      Promise.resolve().then(function () {
        _this2.title.innerHTML = '<i class="' + font + ' tc-icon">' + name + '</i> ' + name;
        _this2.example.innerText = '<i class="' + font + '">' + name + '</i>';
        _this2.exampleOld.innerText = '<i class="' + font + '-' + name + '"></i>';
        _this2.element.classList.add('is-open');
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      return Promise.resolve().then(function () {
        return _this3.element.classList.remove('is-open');
      });
    }
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new DetailComponent();
      }
      return this.instance;
    }
  }]);

  return DetailComponent;
}();

exports.default = DetailComponent;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTED_CLASS = 'is-selected';
var OPEN_CLASS = 'is-open';
var CLOAK_SELECTOR = '.tc-cloak';
var HEADER_SELECTOR = '.tc-header';
var HANDLER_SELECTOR = '.tc-header__menu-handler';
var ITEM_SELECTOR = '.tc-header__menu-item';
var LIST_SELECTOR = '.tc-header__menu-list';

var HeaderComponent = function () {
  function HeaderComponent() {
    _classCallCheck(this, HeaderComponent);

    this.element = document.querySelector(HEADER_SELECTOR);
    this.bind();
  }

  _createClass(HeaderComponent, [{
    key: 'bind',
    value: function bind() {
      var _this = this;

      this.element.querySelector(CLOAK_SELECTOR).addEventListener('click', function () {
        return _this.close();
      });

      this.element.querySelector(HANDLER_SELECTOR).addEventListener('click', function () {
        return _this.toggle();
      });

      this.element.addEventListener('click', function (event) {
        if (_this.getItem(event.target)) {
          _this.close();
        }
      });
    }
  }, {
    key: 'getItem',
    value: function getItem(child) {
      if (child.matches(ITEM_SELECTOR)) {
        return child;
      }
      if (child.matches(LIST_SELECTOR) || child === document.body) {
        return null;
      }
      return this.getItem(child.parentNode);
    }
  }, {
    key: 'close',
    value: function close() {
      this.element.classList.remove(OPEN_CLASS);
    }
  }, {
    key: 'open',
    value: function open() {
      this.element.classList.add(OPEN_CLASS);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.element.classList.contains(OPEN_CLASS);
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      return this.isOpen() ? this.close() : this.open();
    }
  }, {
    key: 'select',
    value: function select(group) {
      var old = this.element.querySelector('a.' + SELECTED_CLASS);

      if (old) {
        old.classList.remove(SELECTED_CLASS);
      }

      var handler = this.element.querySelector('a[href="#' + group + '"]') || this.element.querySelector('a:first-child');
      handler.classList.add(SELECTED_CLASS);
    }
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new HeaderComponent();
      }
      return this.instance;
    }
  }]);

  return HeaderComponent;
}();

exports.default = HeaderComponent;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detail = require('./detail');

var _detail2 = _interopRequireDefault(_detail);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ITEM_SELECTOR = '.tc-glyph';
var LIST_SELECTOR = '.tc-list';
var UPPERHANDLER_SELECTOR = '.tc-content__upper-handler';
var SELECTED_CLASS = 'is-selected';
var SCROLLED_CLASS = 'is-scrolled';
var NAME_ATTRIBUTE = 'data-name';
var CLASS_ATTRIBUTE = 'data-class';

function parseHash(hash) {
  return hash ? hash.match(/([^#]+)$/g)[0] : '';
}

function throttle(callback) {
  var _this = this;

  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!wait) {
      callback.call.apply(callback, [_this].concat(args));
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

function debounce(callback, wait, immediate) {
  var _this2 = this;

  var timeout = void 0;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var context = _this2;

    function later() {
      timeout = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    }

    var run = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (run) {
      callback.apply(context, args);
    }
  };
}

var PreviewComponent = function () {
  function PreviewComponent(detailComponent, menuComponent) {
    _classCallCheck(this, PreviewComponent);

    this.detailComponent = detailComponent;
    this.headerComponent = menuComponent;
    this.lists = document.querySelectorAll(LIST_SELECTOR);
    this.bind();

    this.headerComponent.select(parseHash(window.location.hash));
  }

  _createClass(PreviewComponent, [{
    key: 'bind',
    value: function bind() {
      var _this3 = this;

      document.addEventListener('click', function (event) {
        var item = _this3.getItem(event.target);
        if (item) {
          _this3.select(item);
        }
      });

      document.querySelector(UPPERHANDLER_SELECTOR).addEventListener('click', function () {
        document.scrollingElement.scrollTop = 0;
      });

      window.addEventListener('hashchange', function (_ref) {
        var newURL = _ref.newURL;
        return _this3.headerComponent.select(parseHash(newURL));
      });
      window.addEventListener('scroll', throttle(function (event) {
        return _this3.onScroll(event);
      }, 200));
      window.addEventListener('scroll', debounce(function (event) {
        return _this3.onScroll(event);
      }, 200));
    }
  }, {
    key: 'select',
    value: function select(item) {
      var _this4 = this;

      PreviewComponent.unselectAll().then(function () {
        item.classList.add(SELECTED_CLASS);
        var name = item.getAttribute(NAME_ATTRIBUTE);
        var font = item.getAttribute(CLASS_ATTRIBUTE);
        _this4.detailComponent.open({
          name: name,
          font: font
        });
      });
    }
  }, {
    key: 'getItem',
    value: function getItem(child) {
      if (child.matches(ITEM_SELECTOR)) {
        return child;
      }
      if (child.matches(LIST_SELECTOR) || child === document.body) {
        return null;
      }
      return this.getItem(child.parentNode);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(event) {
      var scrollTop = event.target.scrollingElement.scrollTop;

      if (scrollTop > 200) {
        document.body.classList.add(SCROLLED_CLASS);
      } else {
        document.body.classList.remove(SCROLLED_CLASS);
      }

      var current = Array.from(this.lists).filter(function (_ref2) {
        var offsetTop = _ref2.offsetTop;
        return offsetTop - scrollTop < 1;
      }).reverse()[0] || this.lists[0];
      var group = current.getAttribute('id');

      this.headerComponent.select(group);
      window.history.pushState({}, '', '#' + group);
    }
  }], [{
    key: 'unselectAll',
    value: function unselectAll() {
      return Promise.resolve().then(function () {
        Array.from(document.querySelectorAll(ITEM_SELECTOR + '.' + SELECTED_CLASS)).forEach(function (item) {
          return item.classList.remove(SELECTED_CLASS);
        });
      });
    }
  }, {
    key: 'getInstance',
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new PreviewComponent(_detail2.default.getInstance(), _header2.default.getInstance());
      }
      return this.instance;
    }
  }]);

  return PreviewComponent;
}();

exports.default = PreviewComponent;

},{"./detail":1,"./header":2}],4:[function(require,module,exports){
'use strict';

var _preview = require('./components/preview');

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_preview2.default.getInstance();

},{"./components/preview":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXNcXHRjLTE0XFxzcmNcXHRlbXBsYXRlc1xcY29tcG9uZW50c1xcZGV0YWlsLmpzIiwibm9kZV9tb2R1bGVzXFx0Yy0xNFxcc3JjXFx0ZW1wbGF0ZXNcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsIm5vZGVfbW9kdWxlc1xcdGMtMTRcXHNyY1xcdGVtcGxhdGVzXFxjb21wb25lbnRzXFxwcmV2aWV3LmpzIiwibm9kZV9tb2R1bGVzXFx0Yy0xNFxcc3JjXFx0ZW1wbGF0ZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztJQUVxQixlO0FBQ25CLDZCQUFjO0FBQUE7O0FBQ1osU0FBSyxPQUFMLEdBQWUsU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLG1CQUEzQixDQUFiO0FBQ0EsU0FBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixxQkFBM0IsQ0FBZjtBQUNBLFNBQUssVUFBTCxHQUFrQixLQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLHlCQUEzQixDQUFsQjtBQUNBLFNBQUssWUFBTCxHQUFvQixLQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLGtDQUEzQixDQUFwQjtBQUNBLFNBQUssSUFBTDtBQUNEOzs7OzJCQUNNO0FBQUE7O0FBQ0wsZUFBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDLEtBQUQsRUFBVztBQUM1QyxZQUFJLE1BQU0sT0FBTixLQUFrQixHQUF0QixFQUEyQjtBQUN6QixnQkFBSyxLQUFMO0FBQ0Q7QUFDRixPQUpEOztBQU1BLFdBQUssWUFBTCxDQUNHLGdCQURILENBQ29CLE9BRHBCLEVBQzZCO0FBQUEsZUFBTSxNQUFLLEtBQUwsRUFBTjtBQUFBLE9BRDdC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LEtBQUssUUFBWjtBQUNEOzs7Ozs7a0JBbEVrQixnQjs7Ozs7QUMvQ3JCOzs7Ozs7QUFFQSxrQkFBaUIsV0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgRVNDID0gMjc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRjLWRldGFpbCcpO1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGMtZGV0YWlsX190aXRsZScpO1xyXG4gICAgdGhpcy5leGFtcGxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yy1kZXRhaWxfX2V4YW1wbGUnKTtcclxuICAgIHRoaXMuZXhhbXBsZU9sZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGMtZGV0YWlsX19leGFtcGxlLW9sZCcpO1xyXG4gICAgdGhpcy5jbG9zZUhhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRjLWRldGFpbF9fY2xvc2UtaGFuZGxlciBidXR0b24nKTtcclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuICBiaW5kKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQykge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jbG9zZUhhbmRsZXJcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRjLWNsb2FrJylcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcblxyXG4gIG9wZW4oeyBuYW1lLCBmb250IH0pIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRpdGxlLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cIiR7Zm9udH0gdGMtaWNvblwiPiR7bmFtZX08L2k+ICR7bmFtZX1gO1xyXG4gICAgICAgIHRoaXMuZXhhbXBsZS5pbm5lclRleHQgPSBgPGkgY2xhc3M9XCIke2ZvbnR9XCI+JHtuYW1lfTwvaT5gO1xyXG4gICAgICAgIHRoaXMuZXhhbXBsZU9sZC5pbm5lclRleHQgPSBgPGkgY2xhc3M9XCIke2ZvbnR9LSR7bmFtZX1cIj48L2k+YDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRGV0YWlsQ29tcG9uZW50KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgU0VMRUNURURfQ0xBU1MgPSAnaXMtc2VsZWN0ZWQnO1xyXG5jb25zdCBPUEVOX0NMQVNTID0gJ2lzLW9wZW4nO1xyXG5jb25zdCBDTE9BS19TRUxFQ1RPUiA9ICcudGMtY2xvYWsnO1xyXG5jb25zdCBIRUFERVJfU0VMRUNUT1IgPSAnLnRjLWhlYWRlcic7XHJcbmNvbnN0IEhBTkRMRVJfU0VMRUNUT1IgPSAnLnRjLWhlYWRlcl9fbWVudS1oYW5kbGVyJztcclxuY29uc3QgSVRFTV9TRUxFQ1RPUiA9ICcudGMtaGVhZGVyX19tZW51LWl0ZW0nO1xyXG5jb25zdCBMSVNUX1NFTEVDVE9SID0gJy50Yy1oZWFkZXJfX21lbnUtbGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIRUFERVJfU0VMRUNUT1IpO1xyXG4gICAgdGhpcy5iaW5kKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoQ0xPQUtfU0VMRUNUT1IpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2UoKSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoSEFORExFUl9TRUxFQ1RPUilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGUoKSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldEl0ZW0oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGNoaWxkKSB7XHJcbiAgICBpZiAoY2hpbGQubWF0Y2hlcyhJVEVNX1NFTEVDVE9SKSkge1xyXG4gICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hpbGQubWF0Y2hlcyhMSVNUX1NFTEVDVE9SKSB8fCBjaGlsZCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmdldEl0ZW0oY2hpbGQucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE9QRU5fQ0xBU1MpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xyXG4gIH1cclxuXHJcbiAgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoT1BFTl9DTEFTUyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc09wZW4oKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGdyb3VwKSB7XHJcbiAgICBjb25zdCBvbGQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgYS4ke1NFTEVDVEVEX0NMQVNTfWApO1xyXG5cclxuICAgIGlmIChvbGQpIHtcclxuICAgICAgb2xkLmNsYXNzTGlzdC5yZW1vdmUoU0VMRUNURURfQ0xBU1MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgYVtocmVmPVwiIyR7Z3JvdXB9XCJdYCkgfHwgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2E6Zmlyc3QtY2hpbGQnKTtcclxuICAgIGhhbmRsZXIuY2xhc3NMaXN0LmFkZChTRUxFQ1RFRF9DTEFTUyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBIZWFkZXJDb21wb25lbnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGV0YWlsQ29tcG9uZW50IGZyb20gJy4vZGV0YWlsJztcclxuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2hlYWRlcic7XHJcblxyXG5jb25zdCBJVEVNX1NFTEVDVE9SID0gJy50Yy1nbHlwaCc7XHJcbmNvbnN0IExJU1RfU0VMRUNUT1IgPSAnLnRjLWxpc3QnO1xyXG5jb25zdCBVUFBFUkhBTkRMRVJfU0VMRUNUT1IgPSAnLnRjLWNvbnRlbnRfX3VwcGVyLWhhbmRsZXInO1xyXG5jb25zdCBTRUxFQ1RFRF9DTEFTUyA9ICdpcy1zZWxlY3RlZCc7XHJcbmNvbnN0IFNDUk9MTEVEX0NMQVNTID0gJ2lzLXNjcm9sbGVkJztcclxuY29uc3QgTkFNRV9BVFRSSUJVVEUgPSAnZGF0YS1uYW1lJztcclxuY29uc3QgQ0xBU1NfQVRUUklCVVRFID0gJ2RhdGEtY2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VIYXNoKGhhc2gpIHtcclxuICByZXR1cm4gaGFzaCA/IGhhc2gubWF0Y2goLyhbXiNdKykkL2cpWzBdIDogJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBsaW1pdCA9IDApIHtcclxuICBsZXQgd2FpdCA9IGZhbHNlO1xyXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgaWYgKCF3YWl0KSB7XHJcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgLi4uYXJncyk7XHJcbiAgICAgIHdhaXQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgd2FpdCA9IGZhbHNlOyB9LCBsaW1pdCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gIGxldCB0aW1lb3V0O1xyXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gbGF0ZXIoKSB7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xyXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcnVuID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgaWYgKHJ1bikge1xyXG4gICAgICBjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmV2aWV3Q29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGV0YWlsQ29tcG9uZW50LCBtZW51Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmRldGFpbENvbXBvbmVudCA9IGRldGFpbENvbXBvbmVudDtcclxuICAgIHRoaXMuaGVhZGVyQ29tcG9uZW50ID0gbWVudUNvbXBvbmVudDtcclxuICAgIHRoaXMubGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKExJU1RfU0VMRUNUT1IpO1xyXG4gICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgdGhpcy5oZWFkZXJDb21wb25lbnQuc2VsZWN0KHBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaCkpO1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oZXZlbnQudGFyZ2V0KTtcclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihVUFBFUkhBTkRMRVJfU0VMRUNUT1IpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICh7IG5ld1VSTCB9KSA9PiB0aGlzLmhlYWRlckNvbXBvbmVudC5zZWxlY3QocGFyc2VIYXNoKG5ld1VSTCkpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZShldmVudCA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KSwgMjAwKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2UoZXZlbnQgPT4gdGhpcy5vblNjcm9sbChldmVudCksIDIwMCkpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGl0ZW0pIHtcclxuICAgIFByZXZpZXdDb21wb25lbnQudW5zZWxlY3RBbGwoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFNFTEVDVEVEX0NMQVNTKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gaXRlbS5nZXRBdHRyaWJ1dGUoTkFNRV9BVFRSSUJVVEUpO1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBpdGVtLmdldEF0dHJpYnV0ZShDTEFTU19BVFRSSUJVVEUpO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsQ29tcG9uZW50Lm9wZW4oe1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGZvbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVuc2VsZWN0QWxsKCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7SVRFTV9TRUxFQ1RPUn0uJHtTRUxFQ1RFRF9DTEFTU31gKSlcclxuICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFNFTEVDVEVEX0NMQVNTKSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShjaGlsZCkge1xyXG4gICAgaWYgKGNoaWxkLm1hdGNoZXMoSVRFTV9TRUxFQ1RPUikpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoaWxkLm1hdGNoZXMoTElTVF9TRUxFQ1RPUikgfHwgY2hpbGQgPT09IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGNoaWxkLnBhcmVudE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJldmlld0NvbXBvbmVudChcclxuICAgICAgICBEZXRhaWxDb21wb25lbnQuZ2V0SW5zdGFuY2UoKSxcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQuZ2V0SW5zdGFuY2UoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgaWYgKHNjcm9sbFRvcCA+IDIwMCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoU0NST0xMRURfQ0xBU1MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFNDUk9MTEVEX0NMQVNTKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50ID0gQXJyYXkuZnJvbSh0aGlzLmxpc3RzKVxyXG4gICAgICAuZmlsdGVyKCh7IG9mZnNldFRvcCB9KSA9PiBvZmZzZXRUb3AgLSBzY3JvbGxUb3AgPCAxKVxyXG4gICAgICAucmV2ZXJzZSgpWzBdIHx8IHRoaXMubGlzdHNbMF07XHJcbiAgICBjb25zdCBncm91cCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyQ29tcG9uZW50LnNlbGVjdChncm91cCk7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBgIyR7Z3JvdXB9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFByZXZpZXdDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3ByZXZpZXcnO1xyXG5cclxuUHJldmlld0NvbXBvbmVudC5nZXRJbnN0YW5jZSgpO1xyXG4iXX0=

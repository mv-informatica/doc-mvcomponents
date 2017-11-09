define(["require", "exports", "tslib", "./abstract/a-container", "jquery", "../core/event-emitter", "./assets/css/view-stack.css!"], function (require, exports, tslib_1, a_container_1, jquery, event_emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewStack = (function (_super) {
        tslib_1.__extends(ViewStack, _super);
        function ViewStack() {
            var _this = _super.call(this, "div", "") || this;
            _this.onChangeState = new event_emitter_1.EventEmitter();
            _this.renderableList = [];
            _this._selectedIndex = -1;
            jquery(_this.element)
                .addClass("view-stack col-sm-offset-0 col-sm-12 col-xs-12");
            return _this;
        }
        ViewStack.prototype.prepareItemToInsert = function (item, state) {
            if (state === void 0) { state = ""; }
            item.setVisible(false);
            this.renderableList.push({ state: state, renderable: item });
        };
        ViewStack.prototype.append = function (item, state) {
            if (state === void 0) { state = ""; }
            this.prepareItemToInsert(item, state);
            this.insertItem(item, "append");
            return this;
        };
        ViewStack.prototype.prepend = function (item, state) {
            if (state === void 0) { state = ""; }
            this.prepareItemToInsert(item, state);
            this.insertItem(item, "prepend");
            return this;
        };
        ViewStack.prototype.getIndexByState = function (state) {
            var indx = null;
            this.renderableList.some(function (item, index) {
                if (item.state === state) {
                    indx = index;
                    return true;
                }
                return false;
            });
            return indx;
        };
        Object.defineProperty(ViewStack.prototype, "selectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (index) {
                var _this = this;
                this.onChangeState
                    .emit({ index: index, state: this.renderableList[index] ? this.renderableList[index].state : "" })
                    .done(function () {
                    if (_this._selectedIndex !== index && _this.renderableList.length > 0 && (index < _this.renderableList.length && index > -1)) {
                        var lastIndexItem = _this._selectedIndex;
                        _this._selectedIndex = index;
                        if (lastIndexItem > -1) {
                            jquery(_this.renderableList[lastIndexItem].renderable.element).fadeOut("normal", function () {
                                jquery(_this.renderableList[_this._selectedIndex].renderable.element).fadeIn("fast");
                            });
                        }
                        else {
                            jquery(_this.renderableList[_this._selectedIndex].renderable.element).fadeIn("fast");
                        }
                        _this.onChangeState.emit({ index: _this._selectedIndex, state: _this.renderableList[_this._selectedIndex].state });
                    }
                    else if (index > -1 && _this.renderableList.length && index < _this.renderableList.length) {
                        _this._selectedIndex = index;
                        jquery(_this.renderableList[_this._selectedIndex].renderable.element).fadeIn("fast");
                    }
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewStack.prototype, "selectedState", {
            get: function () {
                return this.renderableList[this._selectedIndex].state;
            },
            set: function (state) {
                var selectedIndex = this.getIndexByState(state);
                this.selectedIndex = selectedIndex;
            },
            enumerable: true,
            configurable: true
        });
        ViewStack.prototype.next = function () {
            this.selectedIndex = this.selectedIndex + 1;
            return this;
        };
        ViewStack.prototype.prev = function () {
            this.selectedIndex = this.selectedIndex - 1;
            return this;
        };
        return ViewStack;
    }(a_container_1.AContainer));
    exports.ViewStack = ViewStack;
});

//# sourceMappingURL=view-stack.js.map

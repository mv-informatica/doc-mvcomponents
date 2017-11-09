define(["require", "exports", "tslib", "../core/event-emitter", "./abstract/a-widget", "jquery", "incremental-dom"], function (require, exports, tslib_1, event_emitter_1, a_widget_1, jquery, _idom_) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TileList = (function (_super) {
        tslib_1.__extends(TileList, _super);
        function TileList(config) {
            var _this = _super.call(this, "div", "<div class=\"headgridview col-xs-12 col-sm-12 col-md-12\"></div><div class=\"tilecellgrid col-xs-12 col-sm-12 col-md-12\"><div class=\"row_cells col\"></div></div>") || this;
            _this.onSelectItem = new event_emitter_1.EventEmitter();
            _this.onScrolledToBottom = new event_emitter_1.EventEmitter();
            _this.params = {};
            _this._urlTemplate = config.urlTemplate;
            _this._data = [];
            _this._tmpData = [];
            _this._selected_index = -1;
            _this._islistview = true;
            jquery(_this.element)
                .addClass("boxTileLine TileList")
                .find(".tilecellgrid")
                .on("click", ".tilecell", _this.onChangeItemHandler.bind(_this));
            _this.activate = false;
            return _this;
        }
        TileList.prototype.refreshItemRender = function () {
            var _this = this;
            if (this.getRowCell().length > 0) {
                require([this._urlTemplate], function (tpl_render) {
                    var nameConstructor = Object.keys(tpl_render)[0];
                    _idom_.patch(_this.getRowCell()[0], tpl_render[nameConstructor].bind(_this), _this.getData());
                });
            }
        };
        TileList.prototype.setData = function (p_dta) {
            if (p_dta) {
                this._data = p_dta;
            }
            else {
                this._data = [];
            }
            this.refreshItemRender();
            return this;
        };
        TileList.prototype.getData = function () {
            return this._data;
        };
        TileList.prototype.refresh = function () {
            this.setData(this.getData());
            return this;
        };
        Object.defineProperty(TileList.prototype, "index", {
            get: function () {
                return this._selected_index;
            },
            set: function (p_index) {
                if (p_index > -1 && p_index < this._data.length) {
                    var old_index = this._selected_index;
                    this._selected_index = p_index;
                    this.clearSelecteds();
                    this.getRowCell().find(".tilecell:nth-child(" + (this._selected_index + 1) + ")").addClass("selectedLine active");
                    this.onSelectItem.emit(this.getSelectedItem());
                }
            },
            enumerable: true,
            configurable: true
        });
        TileList.prototype.getSelectedItem = function () {
            if (this._data.length > this._selected_index && this._selected_index > -1) {
                return this._data[this._selected_index];
            }
            return null;
        };
        TileList.prototype.onChangeItemHandler = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.clearSelecteds();
            var tgt = jquery(evt.target);
            if (tgt.hasClass("tilecell")) {
                this._changeSelectedItem(tgt.addClass("selectedLine active"), false);
            }
            else {
                this._changeSelectedItem(tgt.closest(".tilecell").addClass("selectedLine active"), false);
            }
        };
        TileList.prototype.getRowCell = function () {
            return jquery(this.element).find(".row_cells:first");
        };
        TileList.prototype.clearSelecteds = function () {
            this.getRowCell().find(".selectedLine").removeClass("selectedLine active");
            return this;
        };
        TileList.prototype._changeSelectedItem = function (tgt, p_change_item) {
            if (p_change_item === void 0) { p_change_item = true; }
            this.index = parseInt(tgt.attr("data-indx")), p_change_item;
        };
        TileList.prototype.setHeight = function (height, unit) {
            if (unit === void 0) { unit = "px"; }
            this.setCssProperties({
                height: height + unit,
                minHeight: height + unit,
                overflow: "auto"
            });
            if (!this.scrollAtctived) {
                this.scrollAtctived = true;
                var _this$_1 = this;
                jquery(this.element).on("scroll", function () {
                    if (jquery(this).scrollTop() + jquery(this).innerHeight() >= jquery(this)[0].scrollHeight) {
                        _this$_1.onScrolledToBottom.emit(true);
                    }
                });
            }
            return this;
        };
        TileList.prototype.setParams = function (params) {
            this.params = params;
            return this;
        };
        TileList.prototype.addParams = function (params) {
            this.params = Object.assign({}, this.params, params);
            return this;
        };
        TileList.prototype.getParams = function () {
            return this.params;
        };
        return TileList;
    }(a_widget_1.AWidget));
    exports.TileList = TileList;
});

//# sourceMappingURL=tile-list.js.map

/* */ 
define(["require", "exports", "tslib", "mvcomponents/container"], function (require, exports, tslib_1, container_1) {
    "use strict";
    var MenuAreaSeparator = (function (_super) {
        tslib_1.__extends(MenuAreaSeparator, _super);
        function MenuAreaSeparator(config) {
            var _this = _super.call(this, "label", "<span title=\"" + config.label + "\">" + config.label + "</span>") || this;
            _this.addStyleName("divisor");
            _this.id = config.id;
            _this.label = config.label;
            _this.module = config.module;
            _this.path = config.path;
            _this.icon = config.icon;
            _this.image = config.image;
            _this.order = config.order;
            _this.params = config.params;
            _this.state = config.state;
            return _this;
        }
        MenuAreaSeparator.prototype.expand = function () {
            return this;
        };
        MenuAreaSeparator.prototype.collapse = function () {
            return this;
        };
        MenuAreaSeparator.prototype.active = function () {
            return this;
        };
        return MenuAreaSeparator;
    }(container_1.AContainer));
    exports.MenuAreaSeparator = MenuAreaSeparator;
});

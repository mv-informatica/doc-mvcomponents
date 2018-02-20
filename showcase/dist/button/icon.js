define(["require", "exports", "tslib", "jquery", "../component/abstract/a-visual-component"], function (require, exports, tslib_1, jquery, a_visual_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Icon = (function (_super) {
        tslib_1.__extends(Icon, _super);
        function Icon() {
            var _this = _super.call(this, "a", "<span>") || this;
            _this._old_icon = "glyphicon glyphicon-info-sign";
            jquery(_this.element)
                .attr("href", "#")
                .addClass("icon-component " + _this._old_icon);
            return _this;
        }
        Icon.prototype.setIcon = function (iconStyle) {
            jquery(this.element)
                .removeClass(this._old_icon)
                .addClass(iconStyle);
            this._old_icon = iconStyle;
            return this;
        };
        Icon.prototype.setColor = function (color) {
            jquery(this.element).css({ color: color });
            return this;
        };
        Icon.prototype.setTooltip = function (tooltip) {
            if (tooltip) {
                jquery(this.element).attr("title", tooltip);
            }
            else {
                jquery(this.element).removeAttr("title");
            }
            return this;
        };
        return Icon;
    }(a_visual_component_1.AVisualComponent));
    exports.Icon = Icon;
});

//# sourceMappingURL=icon.js.map

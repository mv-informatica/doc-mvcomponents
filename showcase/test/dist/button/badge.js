define(["require", "exports", "tslib", "jquery", "./abstract/a-button", "../component/enum/e-basic-color-status", "./assets/css/badge.css!"], function (require, exports, tslib_1, jquery, a_button_1, e_basic_color_status_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Badge = (function (_super) {
        tslib_1.__extends(Badge, _super);
        function Badge(label) {
            var _this = _super.call(this, "span") || this;
            jquery(_this.element).addClass("badge ButtonComponent");
            _this.setLabel(label);
            return _this;
        }
        Badge.prototype.setLabel = function (label) {
            jquery(this.element).text(label);
            return this;
        };
        Badge.prototype.setTooltip = function (tooltip) {
            if (tooltip) {
                jquery(this.element).attr("title", tooltip);
            }
            else {
                jquery(this.element).removeAttr("title");
            }
            return this;
        };
        Badge.prototype.setColor = function (color) {
            jquery(this.element)
                .removeClass(this.getColors())
                .addClass("badge-" + e_basic_color_status_1.EBasicColorStatus[color].toLowerCase());
            return this;
        };
        return Badge;
    }(a_button_1.AButton));
    exports.Badge = Badge;
});

//# sourceMappingURL=badge.js.map

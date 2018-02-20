define(["require", "exports", "tslib", "jquery", "./abstract/a-widget", "./enum/e-popover", "../component/enum/e-basic-color-status", "./assets/css/popover.css!"], function (require, exports, tslib_1, jquery, a_widget_1, e_popover_1, e_basic_color_status_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Popover = (function (_super) {
        tslib_1.__extends(Popover, _super);
        function Popover(title, content) {
            var _this = _super.call(this, "div", "\n\t\t\t<div class=\"arrow\"></div>\n\t\t\t<div class=\"popover-content\">" + content + "</div>\n\t\t\t") || this;
            jquery(_this.element)
                .addClass("MVPopover popover")
                .addClass(_this.parsePlacement(e_popover_1.EPopoverPlacement.BOTTOM))
                .attr("role", "tooltip");
            _this.setTitle(title);
            return _this;
        }
        Popover.prototype.setTitle = function (title) {
            jquery(this.element)
                .find(".popover-title:first")
                .remove();
            if (title) {
                jquery(this.element)
                    .prepend("<h3 class=\"popover-title\">" + title + "</h3>");
            }
            return this;
        };
        Popover.prototype.parsePlacement = function (placement) {
            return e_popover_1.EPopoverPlacement[placement].toLowerCase();
        };
        Popover.prototype.parseBasicColor = function (basicColor) {
            switch (basicColor) {
                case e_basic_color_status_1.EBasicColorStatus.SUCCESS: return "#e4edfd";
                case e_basic_color_status_1.EBasicColorStatus.INFO: return "#d4eabb";
                case e_basic_color_status_1.EBasicColorStatus.PRIMARY: return "#d8d8d8";
                case e_basic_color_status_1.EBasicColorStatus.WARNING: return "#FFC107";
                case e_basic_color_status_1.EBasicColorStatus.DANGER: return "#ffbebe";
            }
        };
        Popover.prototype.setColor = function (basicColor) {
            jquery(this.element)
                .find(".popover-title:first")
                .css({ backgroundColor: this.parseBasicColor(basicColor) });
            return this;
        };
        Popover.prototype.show = function () {
            jquery(this.element)
                .css({ display: "block" })
                .show();
            return this;
        };
        Popover.prototype.hide = function () {
            jquery(this.element)
                .hide();
            return this;
        };
        Popover.prototype.toggle = function () {
            jquery(this.element)
                .toggle();
            return this;
        };
        return Popover;
    }(a_widget_1.AWidget));
    exports.Popover = Popover;
});

//# sourceMappingURL=popover.js.map

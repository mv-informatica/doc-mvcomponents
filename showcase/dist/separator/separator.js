define(["require", "exports", "tslib", "../component/abstract/a-visual-component", "../component/enum/e-vertical-align", "jquery"], function (require, exports, tslib_1, a_visual_component_1, e_vertical_align_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Separator = (function (_super) {
        tslib_1.__extends(Separator, _super);
        function Separator() {
            var _this = _super.call(this, "div", "<div class=\"separator-line\"></div>") || this;
            _this._defaultColor = "#dddddd";
            jquery(_this.element)
                .addClass("Separator col-xs-12 col-sm-12 col-md-12 col-lg-12 column")
                .find(".separator-line:first")
                .css({
                "border": "0px solid transparent",
                "border-style": "solid",
                "border-bottom-width": "2px",
                "margin-bottom": "10px",
                "border-bottom-color": _this._defaultColor
            });
            return _this;
        }
        Separator.prototype.setColor = function (color) {
            jquery(this.element)
                .find(".separator-line:first")
                .css({ "border-bottom-color": color });
            return this;
        };
        Separator.prototype.setHeight = function (height) {
            jquery(this.element)
                .find(".separator-line:first")
                .css({ "border-bottom-width": height + "px" });
            return this;
        };
        Separator.prototype.setVerticalAlign = function (align) {
            if (align === e_vertical_align_1.EVerticalAlign.TOP) {
                jquery(this.element).css({
                    "margin-top": "0px",
                    "margin-bottom": "20px"
                });
            }
            else if (align === e_vertical_align_1.EVerticalAlign.MIDDLE) {
                jquery(this.element).css({
                    "margin-top": "10px",
                    "margin-bottom": "0px"
                });
            }
            else if (align === e_vertical_align_1.EVerticalAlign.BOTTOM) {
                jquery(this.element).css({
                    "margin-top": "20px",
                    "margin-bottom": "0px"
                });
            }
            return this;
        };
        Separator.prototype.setTransparent = function (transparent) {
            return this.setColor(transparent ? "transparent" : "#dddddd");
        };
        return Separator;
    }(a_visual_component_1.AVisualComponent));
    exports.Separator = Separator;
});

//# sourceMappingURL=separator.js.map

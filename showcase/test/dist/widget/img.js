define(["require", "exports", "tslib", "./abstract/a-widget", "jquery"], function (require, exports, tslib_1, a_widget_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Img = (function (_super) {
        tslib_1.__extends(Img, _super);
        function Img() {
            var _this = _super.call(this, "div", "<a href=\"#\" class=\"thumbnail\">\n\t\t\t\t<img class=\"Img\">\n\t\t\t\t</a>") || this;
            jquery(_this.element)
                .addClass("col-xs-12 col-md-12")
                .css({ "padding-top": "5px" });
            return _this;
        }
        Img.prototype.setSource = function (p_source) {
            jquery(this.element).find(".Img").attr("src", p_source);
        };
        return Img;
    }(a_widget_1.AWidget));
    exports.Img = Img;
});

//# sourceMappingURL=img.js.map

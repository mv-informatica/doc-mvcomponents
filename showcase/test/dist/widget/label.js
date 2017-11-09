define(["require", "exports", "tslib", "./abstract/a-widget", "jquery"], function (require, exports, tslib_1, a_widget_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Label = (function (_super) {
        tslib_1.__extends(Label, _super);
        function Label(p_text) {
            if (p_text === void 0) { p_text = ""; }
            var _this = _super.call(this, "label", "") || this;
            jquery(_this.element)
                .text(p_text)
                .addClass("Label col-xs-12 col-sm-12");
            return _this;
        }
        Label.prototype.setText = function (p_text) {
            jquery(this.element).text(p_text);
            return this;
        };
        return Label;
    }(a_widget_1.AWidget));
    exports.Label = Label;
});

//# sourceMappingURL=label.js.map

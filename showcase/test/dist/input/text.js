define(["require", "exports", "tslib", "../component/abstract/a-visual-component", "jquery"], function (require, exports, tslib_1, a_visual_component_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Text = (function (_super) {
        tslib_1.__extends(Text, _super);
        function Text(p_text) {
            var _this = _super.call(this, "label", "") || this;
            jquery(_this.element).text(p_text).addClass("Text col-xs-12 col-sm-12 col-md-12");
            return _this;
        }
        Text.prototype.setText = function (p_text) {
            jquery(this.element).text(p_text);
        };
        return Text;
    }(a_visual_component_1.AVisualComponent));
    exports.Text = Text;
});

//# sourceMappingURL=text.js.map

define(["require", "exports", "tslib", "./abstract/a-text-input", "jquery"], function (require, exports, tslib_1, a_text_input_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextArea = (function (_super) {
        tslib_1.__extends(TextArea, _super);
        function TextArea() {
            return _super.call(this, null, "") || this;
        }
        TextArea.prototype.render = function () {
            jquery(this.element)
                .addClass("form-group col-xs-12 col-sm-12")
                .html("\n\t\t\t\t<label class=\"control-label\" for=\"inputIcon_" + this._uid + "\"></label>\n\t\t\t\t<div class=\"col-xs-12 input-group no-addon\">\n\t\t\t\t\t<textarea class=\"form-control cposi_1 cposis\" id=\"inputIcon_" + this._uid + "\"></textarea>\n\t\t\t\t</div>\n\t\t\t");
            return this;
        };
        TextArea.prototype.getInput = function () {
            return jquery(this.element).find("textarea");
        };
        TextArea.prototype.setRows = function (rows) {
            this.getInput().attr("rows", rows);
            return this;
        };
        TextArea.prototype.setHeight = function (height) {
            this.getInput().css("height", height);
            return this;
        };
        return TextArea;
    }(a_text_input_1.ATextInput));
    exports.TextArea = TextArea;
});

//# sourceMappingURL=text-area.js.map

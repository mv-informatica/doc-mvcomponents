define(["require", "exports", "tslib", "./abstract/a-text-input"], function (require, exports, tslib_1, a_text_input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextInput = (function (_super) {
        tslib_1.__extends(TextInput, _super);
        function TextInput(value) {
            if (value === void 0) { value = ""; }
            var _this = _super.call(this, "text", value) || this;
            _this.addStyleName("TextInput");
            return _this;
        }
        return TextInput;
    }(a_text_input_1.ATextInput));
    exports.TextInput = TextInput;
});

//# sourceMappingURL=text-input.js.map

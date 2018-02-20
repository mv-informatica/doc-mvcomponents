define(["require", "exports", "tslib", "./abstract/a-text-input"], function (require, exports, tslib_1, a_text_input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PasswordInput = (function (_super) {
        tslib_1.__extends(PasswordInput, _super);
        function PasswordInput(value) {
            if (value === void 0) { value = ""; }
            var _this = _super.call(this, "password", value) || this;
            _this.addStyleName("InputPassWord InputText");
            return _this;
        }
        return PasswordInput;
    }(a_text_input_1.ATextInput));
    exports.PasswordInput = PasswordInput;
});

//# sourceMappingURL=password-input.js.map

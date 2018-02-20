define(["require", "exports", "tslib", "./text-input", "./../core/validations", "./input-addon"], function (require, exports, tslib_1, text_input_1, validations_1, input_addon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmailInput = (function (_super) {
        tslib_1.__extends(EmailInput, _super);
        function EmailInput(p_text) {
            if (p_text === void 0) { p_text = ""; }
            var _this = _super.call(this, p_text) || this;
            _this.addStyleName("InputEmail")
                .setSize(2)
                .append(new input_addon_1.InputAddon()
                .setText("@"));
            _this.validator.add(validations_1.Validations.email());
            return _this;
        }
        return EmailInput;
    }(text_input_1.TextInput));
    exports.EmailInput = EmailInput;
});

//# sourceMappingURL=email-input.js.map

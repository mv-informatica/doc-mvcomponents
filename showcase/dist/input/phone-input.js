define(["require", "exports", "tslib", "./../core/validations", "./abstract/a-text-input", "./input-addon"], function (require, exports, tslib_1, validations_1, a_text_input_1, input_addon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhoneInput = (function (_super) {
        tslib_1.__extends(PhoneInput, _super);
        function PhoneInput(p_text) {
            if (p_text === void 0) { p_text = ""; }
            var _this = _super.call(this, "text", "") || this;
            _this.addStyleName("InputPhone")
                .setMask("(99) 9999-9999?9")
                .append(new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-earphone"));
            _this.setSize(3);
            _this.validator.add(validations_1.Validations.maxLength(12));
            return _this;
        }
        return PhoneInput;
    }(a_text_input_1.ATextInput));
    exports.PhoneInput = PhoneInput;
});

//# sourceMappingURL=phone-input.js.map

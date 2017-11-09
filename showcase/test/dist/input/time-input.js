define(["require", "exports", "tslib", "./../core/validations", "./abstract/a-text-input", "./input-addon"], function (require, exports, tslib_1, validations_1, a_text_input_1, input_addon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeInput = (function (_super) {
        tslib_1.__extends(TimeInput, _super);
        function TimeInput() {
            var _this = _super.call(this, "text", "") || this;
            _this.addStyleName("InputTime")
                .append(new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-time"));
            _this.setSize(2);
            _this.validator.add(validations_1.Validations.maxLength(5));
            return _this;
        }
        return TimeInput;
    }(a_text_input_1.ATextInput));
    exports.TimeInput = TimeInput;
});

//# sourceMappingURL=time-input.js.map

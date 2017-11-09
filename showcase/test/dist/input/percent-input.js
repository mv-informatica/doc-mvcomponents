define(["require", "exports", "tslib", "./text-input", "./input-addon"], function (require, exports, tslib_1, text_input_1, input_addon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PercentInput = (function (_super) {
        tslib_1.__extends(PercentInput, _super);
        function PercentInput(p_text) {
            if (p_text === void 0) { p_text = ""; }
            var _this = _super.call(this, p_text) || this;
            _this
                .setSize(3)
                .setStyleName("InputPercent")
                .append(new input_addon_1.InputAddon()
                .setText("%"));
            return _this;
        }
        return PercentInput;
    }(text_input_1.TextInput));
    exports.PercentInput = PercentInput;
});

//# sourceMappingURL=percent-input.js.map

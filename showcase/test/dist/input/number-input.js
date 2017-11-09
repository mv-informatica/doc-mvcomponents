define(["require", "exports", "tslib", "./abstract/a-input"], function (require, exports, tslib_1, a_input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberInput = (function (_super) {
        tslib_1.__extends(NumberInput, _super);
        function NumberInput(value) {
            if (value === void 0) { value = 0; }
            var _this = _super.call(this, "number", "" + value) || this;
            _this.addStyleName("NumberInput InputText");
            return _this;
        }
        NumberInput.prototype.setMin = function (value) {
            this.getInput().attr("min", value);
            return this;
        };
        NumberInput.prototype.setMax = function (value) {
            this.getInput().attr("max", value);
            return this;
        };
        NumberInput.prototype.setStep = function (value) {
            this.getInput().attr("step", value);
            return this;
        };
        NumberInput.prototype.encode = function (value) {
            return value && value.toString();
        };
        NumberInput.prototype.decode = function (value) {
            return value && parseFloat(value);
        };
        return NumberInput;
    }(a_input_1.AInput));
    exports.NumberInput = NumberInput;
});

//# sourceMappingURL=number-input.js.map

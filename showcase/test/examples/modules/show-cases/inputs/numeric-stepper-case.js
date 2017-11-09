define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumericStepperCase = (function (_super) {
        tslib_1.__extends(NumericStepperCase, _super);
        function NumericStepperCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.NumericStepper()
                .setLabel("values:")
                .setSize(2)
                .setMin(0)
                .setMax(100)
                .setStep(5);
            _this.append(txi);
            return _this;
        }
        return NumericStepperCase;
    }(container_1.Form));
    exports.NumericStepperCase = NumericStepperCase;
});

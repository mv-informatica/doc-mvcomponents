define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DatePickerCase = (function (_super) {
        tslib_1.__extends(DatePickerCase, _super);
        function DatePickerCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.DatePickerInput()
                .setLabel("data:");
            _this.append(txi);
            return _this;
        }
        return DatePickerCase;
    }(container_1.Form));
    exports.DatePickerCase = DatePickerCase;
});

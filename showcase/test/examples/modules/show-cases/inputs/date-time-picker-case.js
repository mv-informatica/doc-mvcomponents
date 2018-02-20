define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateTimePickerCase = (function (_super) {
        tslib_1.__extends(DateTimePickerCase, _super);
        function DateTimePickerCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.DateTimePickerInput()
                .setLabel("date time:");
            _this.append(txi);
            return _this;
        }
        return DateTimePickerCase;
    }(container_1.Form));
    exports.DateTimePickerCase = DateTimePickerCase;
});

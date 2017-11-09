define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button"], function (require, exports, tslib_1, container_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonCase = (function (_super) {
        tslib_1.__extends(ButtonCase, _super);
        function ButtonCase() {
            var _this = _super.call(this) || this;
            _this.append(new button_1.Button("normal"));
            return _this;
        }
        return ButtonCase;
    }(container_1.ButtonGroup));
    exports.ButtonCase = ButtonCase;
});

define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextInputCase = (function (_super) {
        tslib_1.__extends(TextInputCase, _super);
        function TextInputCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.TextInput();
            _this.append(txi);
            return _this;
        }
        return TextInputCase;
    }(container_1.Form));
    exports.TextInputCase = TextInputCase;
});

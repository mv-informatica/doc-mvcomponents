define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextareaCase = (function (_super) {
        tslib_1.__extends(TextareaCase, _super);
        function TextareaCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.TextArea()
                .setLabel("obs.:");
            _this.append(txi);
            return _this;
        }
        return TextareaCase;
    }(container_1.Form));
    exports.TextareaCase = TextareaCase;
});

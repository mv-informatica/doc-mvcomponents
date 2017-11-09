define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FileInputCase = (function (_super) {
        tslib_1.__extends(FileInputCase, _super);
        function FileInputCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.FileInput();
            _this.append(txi);
            return _this;
        }
        return FileInputCase;
    }(container_1.Form));
    exports.FileInputCase = FileInputCase;
});

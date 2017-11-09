define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressbarCase1 = (function (_super) {
        tslib_1.__extends(ProgressbarCase1, _super);
        function ProgressbarCase1() {
            var _this = _super.call(this) || this;
            var pb = new widget_1.ProgressBar(25);
            _this.append(pb);
            return _this;
        }
        return ProgressbarCase1;
    }(container_1.Box));
    exports.ProgressbarCase1 = ProgressbarCase1;
});

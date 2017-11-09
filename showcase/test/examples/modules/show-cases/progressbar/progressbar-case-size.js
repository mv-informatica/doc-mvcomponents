define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressbarCaseSize = (function (_super) {
        tslib_1.__extends(ProgressbarCaseSize, _super);
        function ProgressbarCaseSize() {
            var _this = _super.call(this) || this;
            var pbFull = new widget_1.ProgressBar(15);
            pbFull.setSize(12);
            _this.append(pbFull);
            var pbSix = new widget_1.ProgressBar(30);
            pbSix.setSize(6);
            _this.append(pbSix);
            var pbHeight = new widget_1.ProgressBar(45);
            pbHeight.setHeight("5px");
            _this.append(pbHeight);
            return _this;
        }
        return ProgressbarCaseSize;
    }(container_1.Box));
    exports.ProgressbarCaseSize = ProgressbarCaseSize;
});

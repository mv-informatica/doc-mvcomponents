define(["require", "exports", "tslib", "mvcomponents/container"], function (require, exports, tslib_1, container_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisableCase = (function (_super) {
        tslib_1.__extends(DisableCase, _super);
        function DisableCase() {
            var _this = _super.call(this) || this;
            var box1 = new container_1.Box();
            box1
                .setEnable(false)
                .setSize(2)
                .setCssProperties({ "background-color": "#4d7498", height: "100px" });
            _this.append(box1);
            return _this;
        }
        return DisableCase;
    }(container_1.Box));
    exports.DisableCase = DisableCase;
});

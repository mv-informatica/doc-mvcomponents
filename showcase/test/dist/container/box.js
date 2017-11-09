define(["require", "exports", "tslib", "./abstract/a-container", "jquery"], function (require, exports, tslib_1, a_container_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Box = (function (_super) {
        tslib_1.__extends(Box, _super);
        function Box() {
            var _this = _super.call(this, "div", "") || this;
            jquery(_this.element).addClass("Box");
            return _this;
        }
        return Box;
    }(a_container_1.AContainer));
    exports.Box = Box;
});

//# sourceMappingURL=box.js.map

define(["require", "exports", "tslib", "mvcomponents/core", "./assets/nav-info.css!"], function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavInfo = (function () {
        function NavInfo() {
        }
        NavInfo.prototype.refresh = function () {
            this.refreshRender();
        };
        NavInfo.prototype.attached = function () {
            var _this = this;
            setTimeout(function () {
                _this.loaded = true;
                _this.refresh();
            }, 1200);
        };
        return NavInfo;
    }());
    NavInfo = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "examples/structure/nav-info/assets/nav-info.template"
        })
    ], NavInfo);
    exports.NavInfo = NavInfo;
});

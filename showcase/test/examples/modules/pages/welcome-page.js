define(["require", "exports", "tslib", "mvcomponents/core"], function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WelcomePage = (function () {
        function WelcomePage() {
        }
        WelcomePage.prototype.attached = function () { };
        return WelcomePage;
    }());
    WelcomePage = tslib_1.__decorate([
        core_1.Render({ templateUrl: "examples/modules/pages/welcome-page.template" })
    ], WelcomePage);
    exports.WelcomePage = WelcomePage;
});

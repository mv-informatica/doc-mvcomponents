define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EToastPosition;
    (function (EToastPosition) {
        EToastPosition[EToastPosition["BOTTOM_LEFT"] = 0] = "BOTTOM_LEFT";
        EToastPosition[EToastPosition["BOTTOM_RIGHT"] = 1] = "BOTTOM_RIGHT";
        EToastPosition[EToastPosition["BOTTOM_CENTER"] = 2] = "BOTTOM_CENTER";
        EToastPosition[EToastPosition["TOP_LEFT"] = 3] = "TOP_LEFT";
        EToastPosition[EToastPosition["TOP_RIGHT"] = 4] = "TOP_RIGHT";
        EToastPosition[EToastPosition["TOP_CENTER"] = 5] = "TOP_CENTER";
    })(EToastPosition = exports.EToastPosition || (exports.EToastPosition = {}));
    var EToastType;
    (function (EToastType) {
        EToastType[EToastType["INFO"] = 0] = "INFO";
        EToastType[EToastType["WARN"] = 1] = "WARN";
        EToastType[EToastType["ERROR"] = 2] = "ERROR";
        EToastType[EToastType["SUCCESS"] = 3] = "SUCCESS";
    })(EToastType = exports.EToastType || (exports.EToastType = {}));
});

//# sourceMappingURL=e-toast.js.map

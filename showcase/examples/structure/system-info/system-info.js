define(["require", "exports", "tslib", "mvcomponents/core", "moment", "./assets/system-info.css!"], function (require, exports, tslib_1, core_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SystemInfo = (function () {
        function SystemInfo(config) {
            var config_merged = Object.assign({}, {
                companyName: "",
                userName: "",
                language: "",
                version: "",
                serverTime: new Date().getTime(),
                refreshTime: 30000
            }, config);
            this.companyName = config_merged.companyName;
            this.userName = config_merged.userName;
            this.language = config_merged.language;
            this.version = config_merged.version;
            this.serverTime = config_merged.serverTime;
            this.refreshTime = config_merged.refreshTime;
        }
        SystemInfo.prototype.getTimeDisplay = function () {
            this.serverTime += this.refreshTime;
            return moment(new Date(this.serverTime)).format("DD/MM/YYYY HH:mm");
        };
        SystemInfo.prototype.attached = function () {
            this.setStyleName("hidden-xs col-md-12 system-info");
        };
        return SystemInfo;
    }());
    SystemInfo = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "test/examples/structure/system-info/assets/system-info.template"
        })
    ], SystemInfo);
    exports.SystemInfo = SystemInfo;
});

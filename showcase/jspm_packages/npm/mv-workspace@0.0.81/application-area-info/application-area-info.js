/* */ 
define(["require","exports","tslib","mvcomponents/core","jquery","../container-area/a-container-area","../themes/modern-blue/application-area-info/css/application-area-info.css!css"], function (require, exports, tslib_1, core_1, jquery, a_container_area_1) {
    "use strict";
    var ApplicationAreaInfo = (function (_super) {
        tslib_1.__extends(ApplicationAreaInfo, _super);
        function ApplicationAreaInfo() {
            return _super.call(this) || this;
        }
        ApplicationAreaInfo.prototype.attached = function () {
            jquery(this.element).css({ padding: "0px" });
        };
        return ApplicationAreaInfo;
    }(a_container_area_1.ContainerArea));
    ApplicationAreaInfo = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "../themes/modern-blue/application-area-info/html/application-area-info.template.html"
        })
    ], ApplicationAreaInfo);
    exports.ApplicationAreaInfo = ApplicationAreaInfo;
});

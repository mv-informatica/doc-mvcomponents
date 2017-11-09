/* */ 
define(["require", "exports", "tslib", "mvcomponents/core"], function (require, exports, tslib_1, core_1) {
    "use strict";
    var HeaderAreaLogo = (function () {
        function HeaderAreaLogo() {
            this.onClickToggleMenu = new core_1.EventEmitter();
            this.height = "26px";
            this.marginTop = "3px";
            this.showToggleMenu = true;
            this.toggleMenuPosition = "left";
            this.toggleMenuColor = "#FFFFFF";
        }
        HeaderAreaLogo.prototype.attached = function () {
            this.addStyleName("header-area-logo");
            this.removeStyleName("col-xs-12");
            this.loaded = true;
        };
        HeaderAreaLogo.prototype.refresh = function () {
            if (this.loaded) {
                this.refreshRender();
            }
        };
        HeaderAreaLogo.prototype.setLogoURL = function (url) {
            this.logoURL = url;
            this.refresh();
            return this;
        };
        HeaderAreaLogo.prototype.getLogoURL = function () {
            return this.logoURL;
        };
        HeaderAreaLogo.prototype.setToggleMenuVisibility = function (on) {
            this.showToggleMenu = on;
            this.refresh();
        };
        HeaderAreaLogo.prototype.setToggleMenuColor = function (color) {
            this.toggleMenuColor = color;
            this.refresh();
        };
        return HeaderAreaLogo;
    }());
    HeaderAreaLogo = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "mv-workspace/themes/modern-blue/header-area/html/header-area-logo.template.html"
        })
    ], HeaderAreaLogo);
    exports.HeaderAreaLogo = HeaderAreaLogo;
});

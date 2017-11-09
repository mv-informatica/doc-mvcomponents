/* */ 
define(["require","exports","tslib","mvcomponents/container","../themes/modern-blue/application-area/css/application-area.css!css"], function (require, exports, tslib_1, container_1) {
    "use strict";
    var ApplicationArea = (function (_super) {
        tslib_1.__extends(ApplicationArea, _super);
        function ApplicationArea() {
            var _this = _super.call(this) || this;
            _this.addStyleName("application-area pull-right");
            _this.content = new container_1.Box();
            _this.content.setSize(12).addStyleName("application-area-content");
            _this.append(_this.content);
            _this.expand(false);
            return _this;
        }
        ApplicationArea.prototype.setFullView = function (on) {
            this.removeStyleName("is-full-width");
            if (on) {
                this
                    .addStyleName("is-full-width")
                    .removeStyleName("is-expanded")
                    .removeStyleName("is-collapsed");
            }
            else {
                this.expand(true);
            }
            return this;
        };
        ApplicationArea.prototype.scaleToTop = function (on) {
            this.removeStyleName("is-top");
            if (on) {
                this.addStyleName("is-top");
            }
        };
        ApplicationArea.prototype.scaleToBottom = function (on) {
            this.removeStyleName("is-bottom");
            if (on) {
                this.addStyleName("is-bottom");
            }
        };
        ApplicationArea.prototype.expand = function (on) {
            if (on) {
                this
                    .addStyleName("is-expanded")
                    .removeStyleName("is-collapsed");
            }
            else {
                this
                    .removeStyleName("is-expanded")
                    .addStyleName("is-collapsed");
            }
            return this;
        };
        return ApplicationArea;
    }(container_1.Box));
    exports.ApplicationArea = ApplicationArea;
});

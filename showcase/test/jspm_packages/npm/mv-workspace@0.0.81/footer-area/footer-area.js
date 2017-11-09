/* */ 
define(["require","exports","tslib","mvcomponents/core","mvcomponents/container","../themes/modern-blue/footer-area/css/footer-area.css!css"], function (require, exports, tslib_1, core_1, container_1) {
    "use strict";
    var FooterArea = (function (_super) {
        tslib_1.__extends(FooterArea, _super);
        function FooterArea() {
            var _this = _super.call(this) || this;
            _this.onChangeVisibility = new core_1.EventEmitter();
            _this.addStyleName("footer-area pull-right");
            _this.setSize(12);
            return _this;
        }
        FooterArea.prototype.setHidden = function (on) {
            if (on) {
                this.addStyleName("is-hidden");
            }
            else {
                this.removeStyleName("is-hidden");
            }
            this.onChangeVisibility.emit(on);
        };
        return FooterArea;
    }(container_1.Box));
    exports.FooterArea = FooterArea;
});

/* */ 
define(["require","exports","tslib","mvcomponents/core","mvcomponents/container","./header-area-right","./header-area-left","../themes/modern-blue/header-area/css/header-area.css!css"], function (require, exports, tslib_1, core_1, container_1, header_area_right_1, header_area_left_1) {
    "use strict";
    var HeaderArea = (function (_super) {
        tslib_1.__extends(HeaderArea, _super);
        function HeaderArea() {
            var _this = _super.call(this) || this;
            _this.onChangeVisibility = new core_1.EventEmitter();
            _this.setSize(12);
            _this.addStyleName("header-area");
            _this.buildAreas();
            return _this;
        }
        HeaderArea.prototype.setHidden = function (on) {
            this.setVisible(!on);
            this.onChangeVisibility.emit(on);
        };
        HeaderArea.prototype.buildAreas = function () {
            this.rightArea = new header_area_right_1.HeaderAreaRight();
            this.append(this.rightArea);
            this.leftArea = new header_area_left_1.HeaderAreaLeft();
            this.append(this.leftArea);
        };
        return HeaderArea;
    }(container_1.Box));
    exports.HeaderArea = HeaderArea;
});

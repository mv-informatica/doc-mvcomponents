/* */ 
define(["require", "exports", "tslib", "./header-area-content"], function (require, exports, tslib_1, header_area_content_1) {
    "use strict";
    var HeaderAreaRight = (function (_super) {
        tslib_1.__extends(HeaderAreaRight, _super);
        function HeaderAreaRight() {
            var _this = _super.call(this, "div", "<ul class=\"nav navbar-nav navbar-right mv-navbar-items\"></ul>") || this;
            _this.addStyleName("pull-right");
            _this.defaultOrientation = "right";
            return _this;
        }
        return HeaderAreaRight;
    }(header_area_content_1.HeaderAreaContent));
    exports.HeaderAreaRight = HeaderAreaRight;
});

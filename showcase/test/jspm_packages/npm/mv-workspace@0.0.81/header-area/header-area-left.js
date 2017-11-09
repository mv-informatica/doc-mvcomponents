/* */ 
define(["require", "exports", "tslib", "./header-area-content"], function (require, exports, tslib_1, header_area_content_1) {
    "use strict";
    var HeaderAreaLeft = (function (_super) {
        tslib_1.__extends(HeaderAreaLeft, _super);
        function HeaderAreaLeft() {
            var _this = _super.call(this, "div", "<ul class=\"nav navbar-nav navbar-left mv-navbar-items\"></ul>") || this;
            _this.addStyleName("");
            return _this;
        }
        return HeaderAreaLeft;
    }(header_area_content_1.HeaderAreaContent));
    exports.HeaderAreaLeft = HeaderAreaLeft;
});

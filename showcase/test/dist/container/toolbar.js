define(["require", "exports", "tslib", "./abstract/a-container", "jquery"], function (require, exports, tslib_1, a_container_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolBar = (function (_super) {
        tslib_1.__extends(ToolBar, _super);
        function ToolBar() {
            var _this = _super.call(this, "div", "") || this;
            jquery(_this.element)
                .addClass("ToolBar btn-group col-sm-offset-0 col-sm-12 col-xs-12")
                .css({ "margin-bottom": "10px" });
            return _this;
        }
        return ToolBar;
    }(a_container_1.AContainer));
    exports.ToolBar = ToolBar;
});

//# sourceMappingURL=toolbar.js.map

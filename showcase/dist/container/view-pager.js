define(["require", "exports", "tslib", "./abstract/a-container", "jquery"], function (require, exports, tslib_1, a_container_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewPager = (function (_super) {
        tslib_1.__extends(ViewPager, _super);
        function ViewPager() {
            var _this = _super.call(this, "div", "") || this;
            jquery(_this.element).addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12 col")
                .addClass("ViewPager");
            return _this;
        }
        ViewPager.prototype.appendTo = function (p_target) {
            jquery(p_target)
                .append(jquery(this.element));
            this.attached();
        };
        return ViewPager;
    }(a_container_1.AContainer));
    exports.ViewPager = ViewPager;
});

//# sourceMappingURL=view-pager.js.map

define(["require", "exports", "tslib", "./abstract/a-container", "../component/enum/e-vertical-align", "jquery"], function (require, exports, tslib_1, a_container_1, e_vertical_align_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonGroup = (function (_super) {
        tslib_1.__extends(ButtonGroup, _super);
        function ButtonGroup() {
            var _this = _super.call(this, "div", "") || this;
            _this.defaultVerticalAlign = e_vertical_align_1.EVerticalAlign.BOTTOM;
            jquery(_this.element)
                .addClass("ButtonGroup col-sm-offset-0 col-sm-12 col-xs-12")
                .css({ "margin-bottom": "10px" });
            return _this;
        }
        ButtonGroup.prototype.setDefaultInnerVerticalAlign = function (align) {
            this.defaultVerticalAlign = align;
            return this;
        };
        ButtonGroup.prototype.prepareItem = function (item) {
            if (item.getVerticalAlign && (!item.getVerticalAlign())) {
                item.setVerticalAlign(this.defaultVerticalAlign);
            }
        };
        ButtonGroup.prototype.append = function (item) {
            this.prepareItem(item);
            _super.prototype.append.call(this, item);
            return this;
        };
        ButtonGroup.prototype.prepend = function (item) {
            this.prepareItem(item);
            _super.prototype.prepend.call(this, item);
            return this;
        };
        return ButtonGroup;
    }(a_container_1.AContainer));
    exports.ButtonGroup = ButtonGroup;
});

//# sourceMappingURL=button-group.js.map

define(["require", "exports", "tslib", "jquery", "../../component/abstract/a-visual-component", "../../component/enum/e-basic-color-status", "../../component/enum/e-vertical-align", "../../component/enum/e-horizontal-align", "../assets/css/button.css!"], function (require, exports, tslib_1, jquery, a_visual_component_1, e_basic_color_status_1, e_vertical_align_1, e_horizontal_align_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AButton = (function (_super) {
        tslib_1.__extends(AButton, _super);
        function AButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AButton.prototype.setDisabled = function (disabled) {
            if (disabled) {
                jquery(this.element).attr("disabled", "true").addClass("Disabled").css("opacity", 0.6);
            }
            else {
                jquery(this.element).removeAttr("disabled").removeClass("Disabled").css("opacity", 1);
            }
            ;
            return this;
        };
        AButton.prototype.setEnable = function (enable) {
            this.setDisabled(!enable);
            return this;
        };
        AButton.prototype.isDisabled = function () {
            return jquery(this.element).hasClass("Disabled");
        };
        AButton.prototype.getColors = function () {
            return Object.keys(e_basic_color_status_1.EBasicColorStatus)
                .map(function (k) { return e_basic_color_status_1.EBasicColorStatus[k]; })
                .filter(function (v) { return typeof v === "string"; })
                .map(function (k) { return 'btn-' + k.toLowerCase(); })
                .join(' ') + ' btn-default';
        };
        AButton.prototype.setVerticalAlign = function (align) {
            if (align === e_vertical_align_1.EVerticalAlign.BOTTOM) {
                jquery(this.element).removeClass("btn_v_top").addClass("btn_v_bottom");
            }
            else {
                jquery(this.element).removeClass("btn_v_bottom").addClass("btn_v_top");
            }
            ;
            return this;
        };
        AButton.prototype.getVerticalAlign = function () {
            if (jquery(this.element).hasClass("btn_v_top")) {
                return e_vertical_align_1.EVerticalAlign.TOP;
            }
            else if (jquery(this.element).hasClass("btn_v_bottom")) {
                return e_vertical_align_1.EVerticalAlign.BOTTOM;
            }
            return null;
        };
        AButton.prototype.setHorizontalAlign = function (align) {
            if (align === e_horizontal_align_1.EHorizontalAlign.LEFT) {
                jquery(this.element).removeClass("pull-right").addClass("pull-left");
            }
            else {
                jquery(this.element).removeClass("pull-left").addClass("pull-right");
            }
            ;
            return this;
        };
        AButton.prototype.append = function (popover) {
            jquery(this.element).css('position', 'relative');
            var popoverTop = 36;
            jquery(popover.element).find('.arrow').css('left', '11%');
            jquery(popover.element).css('top', popoverTop);
            jquery(this.element).append(jquery(popover.element));
            return this;
        };
        return AButton;
    }(a_visual_component_1.AVisualComponent));
    exports.AButton = AButton;
});

//# sourceMappingURL=a-button.js.map

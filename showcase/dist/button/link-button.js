define(["require", "exports", "tslib", "jquery", "./abstract/a-button", "./enum/e-link-target", "../component/enum/e-basic-color-status"], function (require, exports, tslib_1, jquery, a_button_1, e_link_target_1, e_basic_color_status_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LinkButton = (function (_super) {
        tslib_1.__extends(LinkButton, _super);
        function LinkButton(label) {
            var _this = _super.call(this, "a", "<span class=\"linkbutton_label_\"></span>") || this;
            jquery(_this.element).attr("href", "#").addClass("LinkButton ButtonComponent");
            _this.setLabel(label);
            return _this;
        }
        LinkButton.prototype.getTarget = function () {
            var target = jquery(this.element).attr("target");
            if (target) {
                target = target.toUpperCase().replace("_", "");
                return e_link_target_1.ELinkTarget[target];
            }
            return null;
        };
        LinkButton.prototype.setTarget = function (target) {
            jquery(this.element)
                .attr("target", "_" + e_link_target_1.ELinkTarget[target].toLowerCase());
            return this;
        };
        LinkButton.prototype.getURL = function () {
            return jquery(this.element).attr("href");
        };
        LinkButton.prototype.setURL = function (url) {
            jquery(this.element).attr("href", url);
            return this;
        };
        LinkButton.prototype.setIcon = function (psrc) {
            if (jquery(this.element).find("span.iconeinput:first").length === 0) {
                jquery(this.element)
                    .append("<span class=\"iconeinput " + psrc + "\"></span>");
            }
            else {
                var classes = jquery(this.element)
                    .find("span.iconeinput")
                    .attr("class");
                jquery(this.element)
                    .find("span.iconeinput")
                    .removeClass()
                    .addClass(psrc);
            }
            return this;
        };
        LinkButton.prototype.setBadge = function (badge) {
            if (jquery(this.element)
                .find("span.badge:first").length > 0) {
                jquery(this.element)
                    .find("span.badge")
                    .remove();
            }
            jquery(this.element)
                .append(jquery(badge.element));
            return this;
        };
        LinkButton.prototype.setLabel = function (label) {
            jquery(this.element)
                .find("span.linkbutton_label_:first")
                .text(label);
            return this;
        };
        LinkButton.prototype.setColor = function (color) {
            jquery(this.element)
                .removeClass(this.getColors() + " btn")
                .addClass("btn btn-" + e_basic_color_status_1.EBasicColorStatus[color].toLowerCase());
            return this;
        };
        LinkButton.prototype.setTooltip = function (tooltip) {
            if (tooltip) {
                jquery(this.element).attr("title", tooltip);
            }
            else {
                jquery(this.element).removeAttr("title");
            }
            return this;
        };
        return LinkButton;
    }(a_button_1.AButton));
    exports.LinkButton = LinkButton;
});

//# sourceMappingURL=link-button.js.map

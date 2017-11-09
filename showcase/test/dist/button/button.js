define(["require", "exports", "tslib", "jquery", "./abstract/a-button", "../component/enum/e-basic-color-status"], function (require, exports, tslib_1, jquery, a_button_1, e_basic_color_status_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Button = (function (_super) {
        tslib_1.__extends(Button, _super);
        function Button(label) {
            if (label === void 0) { label = ""; }
            var _this = _super.call(this, "button") || this;
            _this.setLabel(label);
            jquery(_this.element)
                .addClass("btn btn-default btn-sm Button ButtonComponent");
            return _this;
        }
        Button.prototype.setIcon = function (psrc) {
            if (jquery(this.element).find("span.iconeinput").length === 0) {
                jquery(this.element)
                    .prepend("<span class=\"iconeinput " + psrc + "\"></span>");
            }
            else {
                var classes = jquery(this.element)
                    .find("span.iconeinput")
                    .attr("class");
                jquery(this.element)
                    .find("span.iconeinput")
                    .removeClass()
                    .addClass("iconeinput " + psrc);
            }
            return this;
        };
        Button.prototype.setColor = function (color) {
            jquery(this.element)
                .removeClass(this.getColors())
                .addClass("btn-" + e_basic_color_status_1.EBasicColorStatus[color].toLowerCase());
            return this;
        };
        Button.prototype.setLabel = function (label) {
            var element = jquery(this.element);
            if (!label) {
                this
                    .addStyleName("no-label")
                    .removeStyleName("has-label");
                element.find("span.btnLabel").remove();
            }
            else {
                if (element.find("span.btnLabel").length === 0) {
                    element
                        .append("<span class=\"btnLabel cposi_1 cposis\"></span>");
                }
                element.find("span.btnLabel").text(label);
                this
                    .addStyleName("has-label")
                    .removeStyleName("no-label");
            }
            return this;
        };
        Button.prototype.setLabelStyleName = function (labelClass) {
            var element = jquery(this.element);
            element.find("span.btnLabel:first")
                .removeClass()
                .addClass("btnLabel " + labelClass);
            return this;
        };
        Button.prototype.addLabelStyleName = function (labelClass) {
            var element = jquery(this.element);
            element.find("span.btnLabel:first")
                .addClass(labelClass);
            return this;
        };
        Button.prototype.setTooltip = function (tooltip) {
            if (tooltip) {
                jquery(this.element).attr("title", tooltip);
            }
            else {
                jquery(this.element).removeAttr("title");
            }
            return this;
        };
        return Button;
    }(a_button_1.AButton));
    exports.Button = Button;
});

//# sourceMappingURL=button.js.map

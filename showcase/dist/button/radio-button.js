define(["require", "exports", "tslib", "jquery", "./abstract/a-button"], function (require, exports, tslib_1, jquery, a_button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioButton = (function (_super) {
        tslib_1.__extends(RadioButton, _super);
        function RadioButton(label, value) {
            var _this = _super.call(this, "label", "<input value=\"" + value + "\" type=\"radio\" style=\"cursor:pointer\"><span>" + label + "</span>") || this;
            jquery(_this.element)
                .addClass("radio-inline RadioButton");
            jquery(_this.element)
                .find("span:first")
                .css({ cursor: "default" })
                .on("click", function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
            });
            return _this;
        }
        RadioButton.prototype.setLabel = function (label) {
            jquery(this.element)
                .find("span:first")
                .text(label);
            return this;
        };
        RadioButton.prototype.setName = function (name) {
            jquery(this.element)
                .find("input")
                .attr("name", name);
            return this;
        };
        RadioButton.prototype.setDisabled = function (disabled) {
            jquery(this.element)
                .find("input:first")
                .prop("disabled", disabled);
            return this;
        };
        RadioButton.prototype.isDisabled = function () {
            return jquery(this.element)
                .find("input:first")
                .prop("disabled");
        };
        RadioButton.prototype.isChecked = function () {
            return jquery(this.element)
                .find("input:first")
                .is(":checked");
        };
        RadioButton.prototype.setTooltip = function (tooltip) {
            if (tooltip) {
                jquery(this.element)
                    .attr("title", tooltip);
            }
            else {
                jquery(this.element)
                    .removeAttr("title");
            }
            return this;
        };
        return RadioButton;
    }(a_button_1.AButton));
    exports.RadioButton = RadioButton;
});

//# sourceMappingURL=radio-button.js.map

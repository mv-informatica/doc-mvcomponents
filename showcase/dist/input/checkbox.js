define(["require", "exports", "tslib", "./abstract/a-base-input", "jquery", "./assets/css/checkbox.css!"], function (require, exports, tslib_1, a_base_input_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckBox = (function (_super) {
        tslib_1.__extends(CheckBox, _super);
        function CheckBox(label, innerlabel) {
            var _this = _super.call(this, "div", "") || this;
            _this.checkedValue = true;
            _this.uncheckedValue = false;
            jquery(_this.element)
                .addClass("CheckBox form-group col-xs-12")
                .html("\n\t\t\t\t<label class=\"control-label\">" + label + "</label>\n\t\t\t\t<div class=\"col-xs-12 input-group input-group-sm checkbox\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\"/>\n\t\t\t\t\t\t" + innerlabel + "   \n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t");
            return _this;
        }
        CheckBox.prototype.getInput = function () {
            return jquery(this.element).find(":input");
        };
        CheckBox.prototype.displayLabel = function (on) {
            if (on) {
                jquery(this.element)
                    .find(".control-label:first")
                    .show();
            }
            else {
                jquery(this.element)
                    .find(".control-label:first")
                    .hide();
            }
            return this;
        };
        CheckBox.prototype.setValue = function (value) {
            this.getInput().prop("checked", value === this.checkedValue);
            return this;
        };
        CheckBox.prototype.isChecked = function () {
            return this.getInput().is(":checked");
        };
        CheckBox.prototype.getValue = function () {
            return this.isChecked() ? this.checkedValue : this.uncheckedValue;
        };
        CheckBox.prototype.setRequired = function (required) {
            console.warn("mv-components: metodo 'CheckBox.setRequired' não deve ser usado para o 'CheckBox'!");
            return this;
        };
        CheckBox.prototype.getRequired = function () {
            return this.hasStyleName("is-required");
        };
        CheckBox.prototype.setCheckedValue = function (value) {
            this.checkedValue = value;
            return this;
        };
        CheckBox.prototype.setUncheckedValue = function (value) {
            this.uncheckedValue = value;
            return this;
        };
        return CheckBox;
    }(a_base_input_1.ABaseInput));
    exports.CheckBox = CheckBox;
});

//# sourceMappingURL=checkbox.js.map

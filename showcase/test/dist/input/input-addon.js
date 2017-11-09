define(["require", "exports", "tslib", "./../component/abstract/a-visual-component", "jquery"], function (require, exports, tslib_1, a_visual_component_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputAddon = (function (_super) {
        tslib_1.__extends(InputAddon, _super);
        function InputAddon() {
            var _this = _super.call(this, "span") || this;
            jquery(_this.element)
                .addClass("input-group-addon");
            return _this;
        }
        InputAddon.prototype.setIcon = function (icon) {
            this.element.innerHTML = "<span class=\"icon1 iconeinput " + icon + "\"></span>";
            return this;
        };
        InputAddon.prototype.setText = function (text) {
            this.element.innerHTML = text;
            return this;
        };
        InputAddon.prototype.setDisabled = function (disabled) {
            jquery(this.element).prop("disabled", disabled)[disabled ? "addClass" : "removeClass"]("is-disabled disabled");
            return this;
        };
        InputAddon.prototype.isDisabled = function () {
            return jquery(this.element).prop("disabled");
        };
        return InputAddon;
    }(a_visual_component_1.AVisualComponent));
    exports.InputAddon = InputAddon;
});

//# sourceMappingURL=input-addon.js.map

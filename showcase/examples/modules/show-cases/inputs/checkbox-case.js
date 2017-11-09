define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckBoxCase = (function (_super) {
        tslib_1.__extends(CheckBoxCase, _super);
        function CheckBoxCase() {
            var _this = _super.call(this) || this;
            var cb = new input_1.CheckBox("Opção", "sim")
                .setLabel("Exemplo:")
                .setName("option")
                .setCheckedValue("y")
                .setUncheckedValue("n");
            _this.append(cb);
            return _this;
        }
        return CheckBoxCase;
    }(container_1.Form));
    exports.CheckBoxCase = CheckBoxCase;
});

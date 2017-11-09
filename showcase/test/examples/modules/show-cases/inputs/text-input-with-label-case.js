define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextInputWithLabelCase = (function (_super) {
        tslib_1.__extends(TextInputWithLabelCase, _super);
        function TextInputWithLabelCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.TextInput()
                .setLabel("Exemplo:")
                .setPlaceholder("digite alguma informação...")
                .prepend(new input_1.InputAddon().setIcon("mv-basico-alerta"));
            txi.getInput().css({ textAlign: "right" });
            _this.append(txi);
            return _this;
        }
        return TextInputWithLabelCase;
    }(container_1.Form));
    exports.TextInputWithLabelCase = TextInputWithLabelCase;
});

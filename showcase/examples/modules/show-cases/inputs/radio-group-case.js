define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button"], function (require, exports, tslib_1, container_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioGroupCase = (function (_super) {
        tslib_1.__extends(RadioGroupCase, _super);
        function RadioGroupCase() {
            var _this = _super.call(this) || this;
            var grupoDeOpcoes = new container_1.RadioGroup("Ativo:");
            grupoDeOpcoes.setName("opcao");
            _this.append(grupoDeOpcoes);
            var rbSim = new button_1.RadioButton("Sim", "s");
            var rbNao = new button_1.RadioButton("Não", "n");
            grupoDeOpcoes
                .append(rbSim)
                .append(rbNao);
            return _this;
        }
        return RadioGroupCase;
    }(container_1.Form));
    exports.RadioGroupCase = RadioGroupCase;
});

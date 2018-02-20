define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonCase = (function (_super) {
        tslib_1.__extends(ButtonCase, _super);
        function ButtonCase() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Simples", "Botão de ação simples")
                .loadExample("test/examples/modules/show-cases/buttons/case-1", "ButtonCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Com ícones", "Adicionando ícone ao botão")
                .loadExample("test/examples/modules/show-cases/buttons/button-with-icon", "ButtonWithIcon"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Cores", "Aplicando cor ao botão")
                .loadExample("test/examples/modules/show-cases/buttons/button-with-color", "ButtonWithColor"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Eventos", "Adicionando evento ao botão")
                .loadExample("test/examples/modules/show-cases/buttons/button-with-event", "ButtonWithEvent"));
            _this.append(new default_module_window_1.DefaultModuleWindow("IconButton", "Butão icone")
                .loadExample("test/examples/modules/show-cases/buttons/icon-button-case", "IconButtonCase"));
            return _this;
        }
        return ButtonCase;
    }(container_1.Box));
    exports.ButtonCase = ButtonCase;
});

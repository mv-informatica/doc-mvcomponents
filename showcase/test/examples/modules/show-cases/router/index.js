define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Router", "Componente usado para carregamento de componentes por URLs pré-configuradas.")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "Exemplo de uso simples.")
                .loadExample("test/examples/modules/show-cases/router/basic-case", "BasicCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Box", "Conteiner usado para agrupar o layout da aplicação.")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "organizando o layout em duas partes")
                .loadExample("examples/modules/show-cases/box/box-showcase", "BoxShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Bloqueando box", "bloqueando um container")
                .loadExample("examples/modules/show-cases/box/disable-case", "DisableCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

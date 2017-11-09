define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Painel de abas", "abas.")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "Criando abas para destribuir o conteudo.")
                .loadExample("test/examples/modules/show-cases/tab-panel/tab-panel-showcase", "TabPanelShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Adicionando icone", "Criando abas para destribuir o conteudo.")
                .loadExample("test/examples/modules/show-cases/tab-panel/icon-showcase", "IconShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Fechavel", "Criando abas que podem ser fechadas o conteudo.")
                .loadExample("test/examples/modules/show-cases/tab-panel/notclosable-showcase", "NotClosableShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Desabilitando uma aba", "Criando abas para destribuir o conteudo.")
                .loadExample("test/examples/modules/show-cases/tab-panel/disable-showcase", "DisableShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Eventos", "Criando abas para destribuir o conteudo.")
                .loadExample("test/examples/modules/show-cases/tab-panel/events-showcase", "EventsShowcase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

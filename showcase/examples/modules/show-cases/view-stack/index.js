define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("ViewStack", "")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "Criando viewstack e mudando o índice.")
                .loadExample("test/examples/modules/show-cases/view-stack/view-stack-showcase", "ViewStackShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Usando 'state'", "Criando viewstack e mudando o 'state'.")
                .loadExample("test/examples/modules/show-cases/view-stack/state-showcase", "StateShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Eventos", "Eventos do ViewStack.")
                .loadExample("test/examples/modules/show-cases/view-stack/events-showcase", "EventsShowcase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

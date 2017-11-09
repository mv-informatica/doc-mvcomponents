define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Accordion", "Conteiner usado para agrupar o layout de campos de um formulário.")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "Organizando para agrupar outros containers.")
                .loadExample("examples/modules/show-cases/accordion/accordion-showcase", "AccordionShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Alterando icone", "Bloqueando um fieldset com o método 'setEnable(false)'.")
                .loadExample("examples/modules/show-cases/accordion/icon-showcase", "IconShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Alterando a posição do icone", "Alterando a posição do icone do item do accordion'.")
                .loadExample("examples/modules/show-cases/accordion/icon-position-showcase", "IconPositionShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Desabilitando item", "Bloqueando um item do accordion.")
                .loadExample("examples/modules/show-cases/accordion/disabled-showcase", "DisabledShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Eventos", "Eventos do accordion.")
                .loadExample("examples/modules/show-cases/accordion/events-showcase", "EventsShowcase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

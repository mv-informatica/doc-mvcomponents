define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Progressbar", "Barra de progresso simples")
                .loadExample("examples/modules/show-cases/progressbar/progressbar-case1", "ProgressbarCase1"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Cores e estilo", "Aplicando cores e estilo")
                .loadExample("examples/modules/show-cases/progressbar/progressbar-case-colors", "ProgressbarCaseColors"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Tamanho", "Alterando a largura e altura da barra de progresso")
                .loadExample("examples/modules/show-cases/progressbar/progressbar-case-size", "ProgressbarCaseSize"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Eventos", "Eventos da barra de progresso")
                .loadExample("examples/modules/show-cases/progressbar/progressbar-case-events", "ProgressbarCaseEvents"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

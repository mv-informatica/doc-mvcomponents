define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("FieldSet", "Conteiner usado para agrupar o layout de campos de um formulário.")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "organizando o layout do formulário.")
                .loadExample("test/examples/modules/show-cases/fieldset/fieldset-showcase", "FieldsetShowcase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Bloqueando o fieldset", "bloqueando um fieldset com o método 'setEnable(false)'.")
                .loadExample("test/examples/modules/show-cases/fieldset/disabled-showcase", "DisabledShowcase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

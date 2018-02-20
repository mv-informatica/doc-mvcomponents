define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("NumberPagination", "Componente de paginação numérica.")
                .setMarginTopExample(50));
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "Exemplo de uso simples.")
                .loadExample("examples/modules/show-cases/number-pagination/basic-case", "BasicCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

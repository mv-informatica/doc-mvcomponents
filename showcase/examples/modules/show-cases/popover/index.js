define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Popover", "exemplo simples")
                .setMarginTopExample(100)
                .loadExample("test/examples/modules/show-cases/popover/popover-simple-case", "PopoverSimpleCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Com título", "com título")
                .setMarginTopExample(100)
                .loadExample("test/examples/modules/show-cases/popover/popover-with-title-case", "PopoverWithTitleCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Com botões", "Vinculado a um botão e mostrado no evento click")
                .setMarginTopExample(100)
                .loadExample("test/examples/modules/show-cases/popover/popover-button-case", "PopoverButtonCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Aplicando cores", "Modificando a cor do título")
                .setMarginTopExample(100)
                .loadExample("test/examples/modules/show-cases/popover/popover-colors-case", "PopoverColorsCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

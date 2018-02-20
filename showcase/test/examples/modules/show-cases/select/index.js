define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window", "../../default-module-window/embed-video", "mvcomponents/button"], function (require, exports, tslib_1, container_1, default_module_window_1, embed_video_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Autocomplete", "exemplos com autocomplete"));
            _this.append(new button_1.LinkButton("documentação completa aqui")
                .addStyleName("text-primary")
                .setCssProperties({ marginBottom: "20px" })
                .setSize(12)
                .setURL("https://mv-informatica.github.io/doc-mvcomponents/mvcomponents/1.1.21/module-mvcomponents_input.Select.html")
                .setTarget(button_1.ELinkTarget.BLANK));
            var tutorialVideo = new embed_video_1.EmbedVideo();
            tutorialVideo.videoUrl = "https://player.vimeo.com/video/218790816?color=158e84&title=0&byline=0&portrait=0";
            _this.append(tutorialVideo);
            _this.append(new default_module_window_1.DefaultModuleWindow("Autocomplete", "exemplo simples")
                .loadExample("examples/modules/show-cases/select/select-simple-case", "SelectSimpleCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Chave única", "Com uma lista de objetos com apenas uma chave")
                .loadExample("examples/modules/show-cases/select/select-one-key-case", "SelectOneKeyCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Desabilitado", "Autocomplete desabilitado")
                .loadExample("examples/modules/show-cases/select/select-disabled-case", "SelectDisabledCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Valor customizado", "Valor customizado")
                .loadExample("examples/modules/show-cases/select/select-custom-value-case", "SelectCustomValueCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Lista customizada", "Lista customizada")
                .loadExample("examples/modules/show-cases/select/select-custom-list-case", "SelectCustomListCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Lista multipla", "Lista multipla")
                .loadExample("examples/modules/show-cases/select/select-multiple-case", "SelectMultipleCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Eventos", "Eventos da lista")
                .loadExample("examples/modules/show-cases/select/select-events-case", "SelectEventsCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

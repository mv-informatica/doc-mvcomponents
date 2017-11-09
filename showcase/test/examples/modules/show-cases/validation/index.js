define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window", "../../default-module-window/embed-video", "mvcomponents/button"], function (require, exports, tslib_1, container_1, default_module_window_1, embed_video_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Validações", "exemplos de validação de campo e formulário."));
            _this.append(new button_1.LinkButton("documentação completa aqui")
                .addStyleName("text-primary")
                .setCssProperties({ marginBottom: "20px" })
                .setSize(12)
                .setURL("https://mv-informatica.github.io/doc-mvcomponents/mvcomponents/1.1.21/module-mvcomponents_core.Validations.html")
                .setTarget(button_1.ELinkTarget.BLANK));
            var tutorialVideo = new embed_video_1.EmbedVideo();
            tutorialVideo.videoUrl = "https://player.vimeo.com/video/218850558?color=158e84&title=0&byline=0&portrait=0";
            _this.append(tutorialVideo);
            _this.append(new default_module_window_1.DefaultModuleWindow("Validação de campo", "exemplo de validação individual de campo")
                .loadExample("examples/modules/show-cases/validation/validation-simple-case", "ValidationSimpleCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Validação de formulário com inscrição", "Se inscrevendo na validação de um formulário. Para que essa validação funcione corretamente é necessário que os campos possuam um nome estabelecido com o método 'setName'.")
                .loadExample("examples/modules/show-cases/validation/validation-form-event-emitter-case", "ValidationFormEventEmitterCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Validação de formulário com promise", "Validando um formulário e recebendo o retorno em uma promise. Para que essa validação funcione corretamente é necessário que os campos possuam um nome estabelecido com o método 'setName'.")
                .loadExample("examples/modules/show-cases/validation/validation-form-promise-case", "ValidationFormPromiseCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Campo requerido", "Obigando o preenchimento de um campo de formulário")
                .loadExample("examples/modules/show-cases/validation/validation-field-required-case", "ValidationFieldRequiredCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Validações pré-definidas", "Utilizando uma validação pré-definida")
                .loadExample("examples/modules/show-cases/validation/validation-field-predefined-case", "ValidationFieldPredefinedCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Validação customizada", "Criando uma validação de campo custumizada")
                .loadExample("examples/modules/show-cases/validation/validation-custom-case", "ValidationCustomCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Removendo validação customizada", "Removendo uma validação de campo custumizada")
                .loadExample("examples/modules/show-cases/validation/validation-remove-custom-case", "ValidationRemoveCustomCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

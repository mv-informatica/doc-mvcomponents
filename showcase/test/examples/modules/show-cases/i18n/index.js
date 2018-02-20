define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window", "../../default-module-window/embed-video"], function (require, exports, tslib_1, container_1, default_module_window_1, embed_video_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Internacionalização", "Internacionalização com i18n.")
                .setMarginTopExample(50));
            var tutorialVideo = new embed_video_1.EmbedVideo();
            tutorialVideo.videoUrl = "https://player.vimeo.com/video/218838412?color=158e84&title=0&byline=0&portrait=0";
            _this.append(tutorialVideo);
            _this.append(new default_module_window_1.DefaultModuleWindow("Exemplo simples", "Configurando e carregando arquivo de idioma.")
                .loadExample("test/examples/modules/show-cases/i18n/i18n-showcase", "I18nShowcase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});

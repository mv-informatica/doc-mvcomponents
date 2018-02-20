define(["require", "exports", "tslib", "mvcomponents/core"], function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmbedVideo = (function () {
        function EmbedVideo() {
            this._videourl = "";
        }
        EmbedVideo.prototype.attached = function () {
            this.loaded;
            if (this._videourl) {
                this.refreshRender();
            }
        };
        Object.defineProperty(EmbedVideo.prototype, "videoUrl", {
            set: function (videourl) {
                this._videourl = videourl;
                if (this.loaded) {
                    this.refreshRender();
                }
            },
            enumerable: true,
            configurable: true
        });
        return EmbedVideo;
    }());
    EmbedVideo = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "test/examples/modules/default-module-window/embed-video.template"
        })
    ], EmbedVideo);
    exports.EmbedVideo = EmbedVideo;
});

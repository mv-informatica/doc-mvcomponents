define(["require", "exports", "tslib", "./abstract/a-widget", "../component/enum/e-basic-color-status", "./../core/event-emitter", "jquery", "./enum/e-progressbar", "./assets/css/progress-bar.css!"], function (require, exports, tslib_1, a_widget_1, e_basic_color_status_1, event_emitter_1, jquery, e_progressbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressBar = (function (_super) {
        tslib_1.__extends(ProgressBar, _super);
        function ProgressBar(progress, duration) {
            if (progress === void 0) { progress = 0; }
            if (duration === void 0) { duration = 600; }
            var _this = _super.call(this, "div", "<div class=\"progress\" style=\"margin-bottom:4px\">\n\t\t\t\t\t\t\t<div class=\"barra progress-bar no-transition\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + progress + "%\">\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">0% Completo</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>") || this;
            _this.onProgress = new event_emitter_1.EventEmitter();
            _this.current = progress;
            _this.duration = duration;
            jquery(_this.element).addClass("ProgressBar col-xs-12 col-sm-12 form-group");
            return _this;
        }
        ProgressBar.prototype.setProgress = function (progress) {
            var _this = this;
            this.current = progress;
            jquery(this.element).find("div.barra:first")
                .attr("aria-valuenow", progress);
            if (this.animationDisabled) {
                jquery(this.element).find("div.barra:first")
                    .css("width", progress + "%");
                this.onProgress.emit(this.getProgress());
            }
            else {
                jquery(this.element).find("div.barra:first")
                    .animate({ "width": progress + "%" }, this.duration, function () {
                    _this.onProgress.emit(_this.getProgress());
                });
            }
            return this;
        };
        ProgressBar.prototype.setDuration = function (duration) {
            this.duration = duration;
            return this;
        };
        ProgressBar.prototype.getProgress = function () {
            return this.current;
        };
        ProgressBar.prototype.getInnerProgressBar = function () {
            return jquery(this.element).find(".progress:first");
        };
        ProgressBar.prototype.disableAnimation = function (off) {
            this.animationDisabled = off;
            return this;
        };
        ProgressBar.prototype.setStyle = function (style) {
            if (style === e_progressbar_1.EProgressStyle.STRIPED) {
                this.getInnerProgressBar().addClass("progress-striped active");
            }
            else if (style === e_progressbar_1.EProgressStyle.SOLID) {
                this.getInnerProgressBar().removeClass("progress-striped active");
            }
            return this;
        };
        ProgressBar.prototype.setHeight = function (height) {
            this.getInnerProgressBar().css({ height: height });
            return this;
        };
        ProgressBar.prototype.setColor = function (bgc) {
            jquery(this.element)
                .find("div.barra")
                .removeAttr("class")
                .addClass("barra progress-bar progress-bar-" + e_basic_color_status_1.EBasicColorStatus[bgc].toLowerCase());
            return this;
        };
        ProgressBar.prototype.setToolTip = function (tooltip) {
            jquery(this.element).attr("alt", tooltip);
            return this;
        };
        ProgressBar.prototype.setLabel = function (nlabel) {
            this.setToolTip(nlabel);
            return this;
        };
        return ProgressBar;
    }(a_widget_1.AWidget));
    exports.ProgressBar = ProgressBar;
});

//# sourceMappingURL=progress-bar.js.map

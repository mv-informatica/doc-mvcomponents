define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressbarCaseEvents = (function (_super) {
        tslib_1.__extends(ProgressbarCaseEvents, _super);
        function ProgressbarCaseEvents() {
            var _this = _super.call(this) || this;
            var pb = new widget_1.ProgressBar(15);
            pb.onProgress.subscribe(function (vl) {
                if (vl === 100) {
                    alert('progresso completo');
                    window.setTimeout(function () { return pb.setProgress(0); });
                }
            });
            _this.append(pb);
            var btn = new button_1.Button("Aperte-me");
            btn.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                pb.setProgress(100);
            });
            _this.append(btn);
            return _this;
        }
        return ProgressbarCaseEvents;
    }(container_1.Box));
    exports.ProgressbarCaseEvents = ProgressbarCaseEvents;
});

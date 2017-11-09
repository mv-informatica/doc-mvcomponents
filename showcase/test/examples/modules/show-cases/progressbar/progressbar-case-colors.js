define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressbarCaseColors = (function (_super) {
        tslib_1.__extends(ProgressbarCaseColors, _super);
        function ProgressbarCaseColors() {
            var _this = _super.call(this) || this;
            var pbInfo = new widget_1.ProgressBar(15);
            pbInfo.setColor(component_1.EBasicColorStatus.INFO);
            _this.append(pbInfo);
            var pbDanger = new widget_1.ProgressBar(30);
            pbDanger
                .setColor(component_1.EBasicColorStatus.DANGER)
                .setStyle(widget_1.EProgressStyle.STRIPED);
            _this.append(pbDanger);
            var pbPrimary = new widget_1.ProgressBar(45);
            pbPrimary.setColor(component_1.EBasicColorStatus.PRIMARY);
            _this.append(pbPrimary);
            var pbSuccess = new widget_1.ProgressBar(60);
            pbSuccess.setColor(component_1.EBasicColorStatus.SUCCESS);
            _this.append(pbSuccess);
            var pbWarning = new widget_1.ProgressBar(75);
            pbWarning.setColor(component_1.EBasicColorStatus.WARNING);
            _this.append(pbWarning);
            return _this;
        }
        return ProgressbarCaseColors;
    }(container_1.Box));
    exports.ProgressbarCaseColors = ProgressbarCaseColors;
});

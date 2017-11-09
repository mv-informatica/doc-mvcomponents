define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotificationSimpleCase = (function (_super) {
        tslib_1.__extends(NotificationSimpleCase, _super);
        function NotificationSimpleCase() {
            var _this = _super.call(this) || this;
            var bt = new button_1.Button("mostrar notificação");
            bt.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .info({ message: "Nova mensagem!!!" })
                    .show();
            });
            _this.append(bt);
            return _this;
        }
        return NotificationSimpleCase;
    }(container_1.ButtonGroup));
    exports.NotificationSimpleCase = NotificationSimpleCase;
});

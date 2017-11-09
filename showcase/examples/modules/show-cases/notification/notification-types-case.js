define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotificationTypesCase = (function (_super) {
        tslib_1.__extends(NotificationTypesCase, _super);
        function NotificationTypesCase() {
            var _this = _super.call(this) || this;
            var btInfo = new button_1.Button("mostrar informação").setIcon("mv-basico-alerta");
            btInfo.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .info({ message: "Nova mensagem!!!" })
                    .show();
            });
            _this.append(btInfo);
            var btSuccess = new button_1.Button("mensagem de sucesso").setIcon("mv-basico-confirmar");
            btSuccess.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .success({ message: "Nova mensagem!!!" })
                    .show();
            });
            _this.append(btSuccess);
            var btErro = new button_1.Button("mensagem de erro").setIcon("mv-basico-erro");
            btErro.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .error({ message: "Nova mensagem!!!" })
                    .show();
            });
            _this.append(btErro);
            var btWarning = new button_1.Button("mensagem de aviso").setIcon("mv-basico-aviso");
            btWarning.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .warn({ message: "Nova mensagem!!!" })
                    .show();
            });
            _this.append(btWarning);
            return _this;
        }
        return NotificationTypesCase;
    }(container_1.ButtonGroup));
    exports.NotificationTypesCase = NotificationTypesCase;
});

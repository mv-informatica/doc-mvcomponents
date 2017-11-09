define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotificationPositionCase = (function (_super) {
        tslib_1.__extends(NotificationPositionCase, _super);
        function NotificationPositionCase() {
            var _this = _super.call(this) || this;
            var btInfo = new button_1.Button("canto superior centro").setIcon("mv-basico-seta_cima");
            btInfo.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .info({ message: "Nova mensagem!!!", position: widget_1.EToastPosition.TOP_CENTER })
                    .show();
            });
            _this.append(btInfo);
            var btSuccess = new button_1.Button("canto superior direita").setIcon("mv-basico-subir");
            btSuccess.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .success({ message: "Nova mensagem!!!", position: widget_1.EToastPosition.TOP_RIGHT })
                    .show();
            });
            _this.append(btSuccess);
            var btErro = new button_1.Button("canto inferior esquerdo").setIcon("mv-basico-descer");
            btErro.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .error({ message: "Nova mensagem!!!", position: widget_1.EToastPosition.BOTTOM_LEFT })
                    .show();
            });
            _this.append(btErro);
            var btWarning = new button_1.Button("canto inferior centro").setIcon("mv-basico-seta_baixo");
            btWarning.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .warn({ message: "Nova mensagem!!!", position: widget_1.EToastPosition.BOTTOM_CENTER })
                    .show();
            });
            _this.append(btWarning);
            var btBottomRight = new button_1.Button("canto inferior direito").setIcon("mv-basico-seta_direita");
            btBottomRight.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .info({ message: "Nova mensagem!!!", position: widget_1.EToastPosition.BOTTOM_RIGHT })
                    .show();
            });
            _this.append(btBottomRight);
            var btTopRight = new button_1.Button("canto inferior esquerdo").setIcon("mv-basico-seta_esquerda");
            btTopRight.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                widget_1.ToastService
                    .info({ message: "Nova mensagem!!!", position: widget_1.EToastPosition.BOTTOM_LEFT })
                    .show();
            });
            _this.append(btTopRight);
            return _this;
        }
        return NotificationPositionCase;
    }(container_1.ButtonGroup));
    exports.NotificationPositionCase = NotificationPositionCase;
});

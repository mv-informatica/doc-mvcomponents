define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonWithColor = (function (_super) {
        tslib_1.__extends(ButtonWithColor, _super);
        function ButtonWithColor() {
            var _this = _super.call(this) || this;
            var btn1 = new button_1.Button("danger")
                .setIcon("mv-basico-dados_demograficos")
                .setColor(component_1.EBasicColorStatus.DANGER);
            _this.append(btn1);
            var btn2 = new button_1.Button("success")
                .setIcon("mv-basico-notificacao_email")
                .setColor(component_1.EBasicColorStatus.SUCCESS);
            _this.append(btn2);
            var btn3 = new button_1.Button("info")
                .setIcon("mv-basico-calendario")
                .setColor(component_1.EBasicColorStatus.INFO);
            _this.append(btn3);
            var btn4 = new button_1.Button("primary")
                .setIcon("mv-basico-atributo")
                .setColor(component_1.EBasicColorStatus.PRIMARY);
            _this.append(btn4);
            var btn5 = new button_1.Button("warning")
                .setIcon("mv-basico-aviso_visualizar")
                .setColor(component_1.EBasicColorStatus.WARNING);
            _this.append(btn5);
            return _this;
        }
        return ButtonWithColor;
    }(container_1.ButtonGroup));
    exports.ButtonWithColor = ButtonWithColor;
});

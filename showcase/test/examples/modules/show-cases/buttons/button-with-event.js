define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button", "mvcomponents/component", "mvcomponents/component"], function (require, exports, tslib_1, container_1, button_1, component_1, component_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonWithEvent = (function (_super) {
        tslib_1.__extends(ButtonWithEvent, _super);
        function ButtonWithEvent() {
            var _this = _super.call(this) || this;
            var btn1 = new button_1.Button("clique aqui!")
                .setIcon("mv-basico-desempenho_bom");
            btn1.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                alert('evento de click!');
            });
            _this.append(btn1);
            var btn2 = new button_1.Button("passe o mouse!")
                .setColor(component_2.EBasicColorStatus.INFO)
                .setIcon("mv-basico-retornar_situacao");
            btn2.addEvent(component_1.EMouseEvent.MOUSEOVER, function (evt) {
                btn2.setColor(component_2.EBasicColorStatus.SUCCESS);
            });
            btn2.addEvent(component_1.EMouseEvent.MOUSEOUT, function (evt) {
                btn2.setColor(component_2.EBasicColorStatus.INFO);
            });
            _this.append(btn2);
            return _this;
        }
        return ButtonWithEvent;
    }(container_1.ButtonGroup));
    exports.ButtonWithEvent = ButtonWithEvent;
});

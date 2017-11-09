define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button"], function (require, exports, tslib_1, container_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonWithIcon = (function (_super) {
        tslib_1.__extends(ButtonWithIcon, _super);
        function ButtonWithIcon() {
            var _this = _super.call(this) || this;
            var btn1 = new button_1.Button("com icone")
                .setIcon("glyphicon glyphicon-lock");
            _this.append(btn1);
            var btn2 = new button_1.Button("com mv-icons")
                .setIcon("mv-basico-alerta_usuario");
            _this.append(btn2);
            return _this;
        }
        return ButtonWithIcon;
    }(container_1.ButtonGroup));
    exports.ButtonWithIcon = ButtonWithIcon;
});

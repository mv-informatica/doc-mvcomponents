define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconButtonCase = (function (_super) {
        tslib_1.__extends(IconButtonCase, _super);
        function IconButtonCase() {
            var _this = _super.call(this) || this;
            var ib = new button_1.IconButton()
                .setIcon("mv-basico-atributo")
                .setColor(component_1.EBasicColorStatus.PRIMARY);
            _this.append(ib);
            return _this;
        }
        return IconButtonCase;
    }(container_1.ButtonGroup));
    exports.IconButtonCase = IconButtonCase;
});

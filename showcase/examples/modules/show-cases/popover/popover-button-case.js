define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button", "mvcomponents/widget", "mvcomponents/component"], function (require, exports, tslib_1, container_1, button_1, widget_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PopoverButtonCase = (function (_super) {
        tslib_1.__extends(PopoverButtonCase, _super);
        function PopoverButtonCase() {
            var _this = _super.call(this) || this;
            var btn = new button_1.Button("click aqui.");
            btn.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                pop.show();
            });
            _this.append(btn);
            var pop = new widget_1.Popover("Aviso", "mostrando popover!");
            btn.append(pop);
            return _this;
        }
        return PopoverButtonCase;
    }(container_1.ButtonGroup));
    exports.PopoverButtonCase = PopoverButtonCase;
});

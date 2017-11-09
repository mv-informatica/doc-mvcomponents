define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PopoverColorsCase = (function (_super) {
        tslib_1.__extends(PopoverColorsCase, _super);
        function PopoverColorsCase() {
            var _this = _super.call(this) || this;
            var btInfo = new container_1.Box().setSize(3);
            _this.append(btInfo);
            var popInfo = new widget_1.Popover("Aviso", "mostrando popover!");
            popInfo.setColor(component_1.EBasicColorStatus.INFO);
            popInfo.show();
            btInfo.append(popInfo);
            var btDanger = new container_1.Box().setSize(3);
            _this.append(btDanger);
            var popDanger = new widget_1.Popover("Aviso", "mostrando popover!");
            popDanger.setColor(component_1.EBasicColorStatus.DANGER);
            popDanger.show();
            btDanger.append(popDanger);
            var btSuccess = new container_1.Box().setSize(3);
            _this.append(btSuccess);
            var popSuccess = new widget_1.Popover("Aviso", "mostrando popover!");
            popSuccess.setColor(component_1.EBasicColorStatus.SUCCESS);
            popSuccess.show();
            btSuccess.append(popSuccess);
            var btWarning = new container_1.Box().setSize(3);
            _this.append(btWarning);
            var popWarning = new widget_1.Popover("Aviso", "mostrando popover!");
            popWarning.setColor(component_1.EBasicColorStatus.WARNING);
            popWarning.show();
            btWarning.append(popWarning);
            return _this;
        }
        return PopoverColorsCase;
    }(container_1.Box));
    exports.PopoverColorsCase = PopoverColorsCase;
});

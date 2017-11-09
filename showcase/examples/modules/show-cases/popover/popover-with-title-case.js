define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PopoverWithTitleCase = (function (_super) {
        tslib_1.__extends(PopoverWithTitleCase, _super);
        function PopoverWithTitleCase() {
            var _this = _super.call(this) || this;
            var box = new container_1.Box().setSize(12);
            _this.append(box);
            var pop = new widget_1.Popover("Aviso", "mostrando popover!");
            box.append(pop);
            pop.show();
            return _this;
        }
        return PopoverWithTitleCase;
    }(container_1.Box));
    exports.PopoverWithTitleCase = PopoverWithTitleCase;
});

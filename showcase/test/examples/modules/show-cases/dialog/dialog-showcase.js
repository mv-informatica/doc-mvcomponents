define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogShowcase = (function (_super) {
        tslib_1.__extends(DialogShowcase, _super);
        function DialogShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            var dialodAuto = new container_1.Dialog("Wellcome", true);
            dialodAuto.append(new container_1.Box().append(new widget_1.Label("Exemplo modal.")));
            dialodAuto.show();
            return _this;
        }
        return DialogShowcase;
    }(container_1.Box));
    exports.DialogShowcase = DialogShowcase;
});

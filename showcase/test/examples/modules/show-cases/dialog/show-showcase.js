define(["require", "exports", "tslib", "mvcomponents/button", "mvcomponents/container", "mvcomponents/component"], function (require, exports, tslib_1, button_1, container_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShowShowcase = (function (_super) {
        tslib_1.__extends(ShowShowcase, _super);
        function ShowShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.buildDialog1();
            return _this;
        }
        ShowShowcase.prototype.buildDialog1 = function () {
            var dialog1 = new container_1.Dialog("Wellcome");
            var btn1 = new button_1.Button("exibir");
            btn1.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                btn1.setEnable(false);
                btn1.setLabel("exibindo!!!");
                dialog1.show();
            });
            this.append(btn1);
            dialog1.onClose.subscribe(function () {
                btn1.setEnable(true);
                btn1.setLabel("exibir");
            });
        };
        return ShowShowcase;
    }(container_1.Box));
    exports.ShowShowcase = ShowShowcase;
});

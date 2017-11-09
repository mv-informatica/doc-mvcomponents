define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/component"], function (require, exports, tslib_1, container_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxShowcase = (function (_super) {
        tslib_1.__extends(BoxShowcase, _super);
        function BoxShowcase() {
            var _this = _super.call(this) || this;
            _this.buildBox1();
            _this.buildBox2();
            return _this;
        }
        BoxShowcase.prototype.buildBox1 = function () {
            var box1 = new container_1.Box();
            box1
                .setSize(3)
                .setCssProperties({ "background-color": "#4d7498", height: "100px" });
            this.append(box1);
        };
        BoxShowcase.prototype.buildBox2 = function () {
            var box2 = new container_1.Box();
            box2
                .setSize(9)
                .setSize(3, component_1.EViewSize.MEDIUM)
                .setCssProperties({ "background-color": "#c3953c", height: "100px" });
            this.append(box2);
        };
        return BoxShowcase;
    }(container_1.Box));
    exports.BoxShowcase = BoxShowcase;
});

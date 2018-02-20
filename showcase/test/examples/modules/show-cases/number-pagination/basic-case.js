define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasicCase = (function (_super) {
        tslib_1.__extends(BasicCase, _super);
        function BasicCase() {
            var _this = _super.call(this) || this;
            _this.buildTreeview();
            return _this;
        }
        BasicCase.prototype.buildTreeview = function () {
            var box1 = new container_1.Box();
            box1
                .setSize(12);
            this.append(box1);
            var numberPag = new widget_1.NumberPagination({
                count: 50
            });
            var numberPag2 = new widget_1.NumberPagination({
                count: 50,
                visiblePages: 10
            });
            box1
                .append(numberPag)
                .append(numberPag2);
        };
        return BasicCase;
    }(container_1.Box));
    exports.BasicCase = BasicCase;
});

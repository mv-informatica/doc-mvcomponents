define(["require", "exports", "tslib", "mvcomponents/container", "./form-exa"], function (require, exports, tslib_1, container_1, form_exa_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalSplitterShowcase = (function (_super) {
        tslib_1.__extends(VerticalSplitterShowcase, _super);
        function VerticalSplitterShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.build();
            return _this;
        }
        VerticalSplitterShowcase.prototype.build = function () {
            var vsplitter = new container_1.VerticalSplitter();
            var tmpbox = new container_1.Box();
            tmpbox.setCssProperties({ "background-color": "#c5d5e4", "height": "400px" });
            var tmpbox3 = new container_1.Box();
            tmpbox3.setCssProperties({ "background-color": "#47b38b", "height": "400px" });
            vsplitter.setSize(12);
            vsplitter.append(tmpbox, {
                size: 2,
                minSize: 0,
                stepSize: 2,
                maxSize: 2
            }).append(new form_exa_1.FormExa(), {
                size: 5,
                minSize: 3,
                stepSize: 1
            }).append(tmpbox3);
            this.append(vsplitter);
        };
        return VerticalSplitterShowcase;
    }(container_1.Box));
    exports.VerticalSplitterShowcase = VerticalSplitterShowcase;
});

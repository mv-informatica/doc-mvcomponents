define(["require", "exports", "tslib", "mvcomponents/container"], function (require, exports, tslib_1, container_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventsShowcase = (function (_super) {
        tslib_1.__extends(EventsShowcase, _super);
        function EventsShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.build();
            return _this;
        }
        EventsShowcase.prototype.build = function () {
            var vsplitter = new container_1.VerticalSplitter();
            var tmpbox = new container_1.Box();
            tmpbox.setCssProperties({ "background-color": "#c5d5e4", "height": "200px" });
            var tmpbox2 = new container_1.Box();
            tmpbox2.setCssProperties({ "background-color": "#47b38b", "height": "200px" });
            vsplitter.setSize(12);
            vsplitter
                .append(tmpbox, {
                size: 4,
                minSize: 2,
                stepSize: 2,
                maxSize: 4
            })
                .append(tmpbox2, {
                size: 8,
                minSize: 4,
                stepSize: 1
            });
            this.append(vsplitter);
        };
        return EventsShowcase;
    }(container_1.Box));
    exports.EventsShowcase = EventsShowcase;
});

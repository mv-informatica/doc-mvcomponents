define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasicRouteTest = (function (_super) {
        tslib_1.__extends(BasicRouteTest, _super);
        function BasicRouteTest() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.setCssProperties({ backgroundColor: "#" + ((Math.floor((Math.random() * 1000000)) + 1000000) + "").substring(1, 7), height: "100%" });
            return _this;
        }
        BasicRouteTest.prototype.onCreate = function () {
            this
                .append(new widget_1.Label("id:" + this.id + " - desc:" + this.desc).setCssProperties({ color: "#fff" }));
        };
        return BasicRouteTest;
    }(container_1.Box));
    exports.BasicRouteTest = BasicRouteTest;
});

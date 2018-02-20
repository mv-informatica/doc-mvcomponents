define(["require", "exports", "tslib", "../container/box", "./router"], function (require, exports, tslib_1, box_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ERouterViewMode;
    (function (ERouterViewMode) {
        ERouterViewMode[ERouterViewMode["HASHBANG"] = 0] = "HASHBANG";
        ERouterViewMode[ERouterViewMode["NORMAL"] = 1] = "NORMAL";
    })(ERouterViewMode = exports.ERouterViewMode || (exports.ERouterViewMode = {}));
    var RouterView = (function (_super) {
        tslib_1.__extends(RouterView, _super);
        function RouterView(config) {
            var _this = _super.call(this) || this;
            _this.name = config.name;
            _this.mode = config.mode || ERouterViewMode.HASHBANG;
            var index = router_1.router["routes"]
                .findIndex(function (route) { return route.routerView === _this.name; });
            if (index > -1) {
                router_1.router["routes"][index].routerViewInstance = _this;
            }
            return _this;
        }
        return RouterView;
    }(box_1.Box));
    exports.RouterView = RouterView;
});

//# sourceMappingURL=router-view.js.map

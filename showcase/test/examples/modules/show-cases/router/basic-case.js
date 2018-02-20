define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/button", "mvcomponents/router", "./basic-route-test"], function (require, exports, tslib_1, container_1, button_1, router_1, basic_route_test_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasicCase = (function (_super) {
        tslib_1.__extends(BasicCase, _super);
        function BasicCase() {
            var _this = _super.call(this) || this;
            _this
                .addRouter()
                .buildLink()
                .buildRouterPreview();
            return _this;
        }
        BasicCase.prototype.buildLink = function () {
            this.append(new button_1.LinkButton("teste de rota")
                .setURL("/router-test/123/test"));
            return this;
        };
        BasicCase.prototype.addRouter = function () {
            router_1.router.push({
                path: "/router-test/:id/:desc",
                module: basic_route_test_1.BasicRouteTest,
                routerView: "router-test"
            });
            return this;
        };
        BasicCase.prototype.buildRouterPreview = function () {
            var routerView = new router_1.RouterView({ name: "router-test" });
            routerView.setCssProperties({ border: "1px solid #ccc", height: "120px" });
            this.append(routerView);
            return this;
        };
        return BasicCase;
    }(container_1.Box));
    exports.BasicCase = BasicCase;
});

define(["require", "exports", "page"], function (require, exports, pagejs) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Router = (function () {
        function Router() {
            this.routes = [];
        }
        Router.prototype.push = function (route) {
            this.routes.push(route);
            pagejs(route.path, function (ctx) {
                if (route.routerViewInstance) {
                    if (route.routerViewInstance["lastModule"]) {
                        if (route.routerViewInstance["lastModule"].onDestroy) {
                            route.routerViewInstance["lastModule"].onDestroy();
                        }
                        if (route.routerViewInstance["lastModule"].destroy) {
                            route.routerViewInstance["lastModule"].setVisible(false);
                            route.routerViewInstance["lastModule"].destroy();
                        }
                    }
                    route.routerViewInstance["lastModule"] = null;
                    route.routerViewInstance["lastModule"] = new route.module();
                    Object.assign(route.routerViewInstance["lastModule"], ctx.params);
                    route.routerViewInstance.append(route.routerViewInstance["lastModule"]);
                    if (route.routerViewInstance["lastModule"].onCreate) {
                        route.routerViewInstance["lastModule"].onCreate();
                    }
                }
            });
            pagejs.start({
                hashbang: true
            });
        };
        return Router;
    }());
    exports.Router = Router;
    exports.router = new Router();
});

//# sourceMappingURL=router.js.map

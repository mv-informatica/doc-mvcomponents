define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/http"], function (require, exports, tslib_1, container_1, widget_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpShowcase = (function (_super) {
        tslib_1.__extends(HttpShowcase, _super);
        function HttpShowcase() {
            var _this = _super.call(this) || this;
            http_1.$http
                .get("examples/modules/mocks/events.json")
                .params({
                parametro1: "teste",
                parametro2: "teste2"
            })
                .header({
                "x-parametro-qualquer": "parametro via header"
            })
                .then(function (dta, config, headers) { return _this
                .append(new widget_1.Label(JSON.stringify(dta))); });
            return _this;
        }
        return HttpShowcase;
    }(container_1.Box));
    exports.HttpShowcase = HttpShowcase;
});

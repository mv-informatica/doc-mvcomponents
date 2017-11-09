define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/core"], function (require, exports, tslib_1, container_1, widget_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventEmitterShowcase = (function (_super) {
        tslib_1.__extends(EventEmitterShowcase, _super);
        function EventEmitterShowcase() {
            var _this = _super.call(this) || this;
            _this.onTest = new core_1.EventEmitter();
            _this.inscs = [];
            return _this;
        }
        EventEmitterShowcase.prototype.onCreate = function () {
            var _this = this;
            this.inscs
                .push(this.onTest.subscribe(function (msg) { return _this.append(new widget_1.Label("recebendo mensagem - " + msg)); }));
            this.onTest.emit('mensagem 1!');
        };
        EventEmitterShowcase.prototype.onDestroy = function () {
            this.inscs.forEach(function (insc) { return insc.cancel(); });
            this.onTest.unsubscribeAll();
        };
        return EventEmitterShowcase;
    }(container_1.Box));
    exports.EventEmitterShowcase = EventEmitterShowcase;
});

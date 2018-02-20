define(["require", "exports", "toastr", "jquery", "./../core/event-emitter", "./enum/e-toast", "./assets/css/toast.css!"], function (require, exports, toastr, jquery, event_emitter_1, e_toast_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Toast = (function () {
        function Toast(config) {
            this.config = config;
            this.onBeforeShow = new event_emitter_1.EventEmitter();
            this.onShow = new event_emitter_1.EventEmitter();
            this.onHide = new event_emitter_1.EventEmitter();
        }
        Toast.prototype.show = function () {
            var _this = this;
            var options = this.encode(this.config);
            var message = options.message, title = options.title, type = options.type;
            this.onBeforeShow.emit(null).done(function () {
                _this.getMethod(type)(message, title, options);
            });
            return this;
        };
        Toast.prototype.getMethod = function (type) {
            switch (type) {
                case e_toast_1.EToastType.ERROR: return toastr.error;
                case e_toast_1.EToastType.INFO: return toastr.info;
                case e_toast_1.EToastType.SUCCESS: return toastr.success;
                case e_toast_1.EToastType.WARN: return toastr.warning;
            }
        };
        Toast.prototype.position = function (position) {
            switch (position) {
                case e_toast_1.EToastPosition.BOTTOM_CENTER: return "toast-bottom-center";
                case e_toast_1.EToastPosition.BOTTOM_LEFT: return "toast-bottom-left";
                case e_toast_1.EToastPosition.BOTTOM_RIGHT: return "toast-bottom-right";
                case e_toast_1.EToastPosition.TOP_CENTER: return "toast-top-center";
                case e_toast_1.EToastPosition.TOP_LEFT: return "toast-top-left";
                case e_toast_1.EToastPosition.TOP_RIGHT: return "toast-top-right";
            }
        };
        Toast.prototype.encode = function (options) {
            var _this = this;
            var config = jquery.extend({}, options, {
                onShown: function () { _this.onShow.emit(null); },
                onHidden: function () { _this.onHide.emit(null); },
                position: this.position(options.position)
            });
            var map = Toast.map;
            for (var prop in map) {
                var value = config[prop];
                if (value) {
                    config[map[prop]] = value;
                    delete config[prop];
                }
            }
            return config;
        };
        return Toast;
    }());
    Toast.map = {
        "allowClose": "closeButton",
        "position": "positionClass"
    };
    var ToastServiceStatic = (function () {
        function ToastServiceStatic() {
            this.defaults = {
                message: "",
                type: e_toast_1.EToastType.INFO,
                position: e_toast_1.EToastPosition.BOTTOM_LEFT,
                timeOut: 5000
            };
        }
        ToastServiceStatic.prototype.info = function (options) {
            return this.create(options, e_toast_1.EToastType.INFO);
        };
        ToastServiceStatic.prototype.warn = function (options) {
            return this.create(options, e_toast_1.EToastType.WARN);
        };
        ToastServiceStatic.prototype.error = function (options) {
            return this.create(options, e_toast_1.EToastType.ERROR);
        };
        ToastServiceStatic.prototype.success = function (options) {
            return this.create(options, e_toast_1.EToastType.SUCCESS);
        };
        ToastServiceStatic.prototype.create = function (options, type) {
            var config = typeof options === "string" ? { message: options } : options;
            config.type = type;
            return new Toast(Object.assign({}, this.defaults, config));
        };
        return ToastServiceStatic;
    }());
    exports.ToastService = new ToastServiceStatic();
});

//# sourceMappingURL=toast.js.map

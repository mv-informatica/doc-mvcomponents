define(["require", "exports", "./request", "es6-shim"], function (require, exports, request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpStatic = (function () {
        function HttpStatic() {
            this.defaults = {
                format: "json",
                contentType: "application/json; charset=utf-8"
            };
            this.beforeRequest = function (config) { return config; };
        }
        Object.defineProperty(HttpStatic.prototype, "format", {
            set: function (format) {
                this.defaults.format = format;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpStatic.prototype, "contentType", {
            set: function (contentType) {
                this.defaults.contentType = contentType;
            },
            enumerable: true,
            configurable: true
        });
        HttpStatic.prototype.getDefaultConfig = function (config) {
            var r = Object.assign({}, this.defaults, config);
            r.url = "" + (config.rootUrl ? config.rootUrl : "") + config.url;
            r["type"] = r.format;
            return r;
        };
        HttpStatic.prototype.getDefaultTaskRequest = function (method, url, config) {
            if (config === void 0) { config = {}; }
            Object.assign(config, { url: url, method: method });
            return new request_1.Request(this.beforeRequest(this.getDefaultConfig(config)));
        };
        HttpStatic.prototype.configure = function (method) {
            method(this.defaults);
        };
        HttpStatic.prototype.get = function (url, config) {
            return this.getDefaultTaskRequest("GET", url, config);
        };
        HttpStatic.prototype.delete = function (url, config) {
            return this.getDefaultTaskRequest("DELETE", url, config);
        };
        HttpStatic.prototype.post = function (url, config) {
            return this.getDefaultTaskRequest("POST", url, config);
        };
        HttpStatic.prototype.put = function (url, config) {
            return this.getDefaultTaskRequest("PUT", url, config);
        };
        HttpStatic.prototype.upload = function (url, config) {
            if (config === void 0) { config = {}; }
            Object.assign(config, {
                url: url,
                method: "POST",
                processData: false,
                contentType: false,
                format: null
            });
            return new request_1.FileUploadRequest(this.getDefaultConfig(config));
        };
        return HttpStatic;
    }());
    exports.HttpStatic = HttpStatic;
    exports.$http = new HttpStatic();
});

//# sourceMappingURL=http.js.map

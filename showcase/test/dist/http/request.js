define(["require", "exports", "tslib", "jquery", "es6-shim"], function (require, exports, tslib_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimplestRequest = (function () {
        function SimplestRequest(config) {
            this.config = config;
        }
        SimplestRequest.prototype.params = function (params, traditional) {
            if (traditional === void 0) { traditional = false; }
            this.param = params;
            this.config.traditional = traditional;
            return this;
        };
        SimplestRequest.prototype.header = function (prop) {
            this.config.headers = this.config.headers || {};
            this.config.headers = Object.assign(this.config.headers, prop);
            return this;
        };
        SimplestRequest.prototype.then = function (success, failure) {
            var _this = this;
            this.config.url = this.param ? this.config.url + "?" + jquery.param(this.param, this.config.traditional) : this.config.url;
            return new Promise(function (resolve, reject) {
                jquery.ajax(_this.config).then(function (data, respStatus, respHeaders) {
                    resolve(success(data, _this.config, respHeaders));
                }, function (err) {
                    reject(failure ? failure(err, _this.config) : err);
                });
            });
        };
        return SimplestRequest;
    }());
    exports.SimplestRequest = SimplestRequest;
    var Request = (function (_super) {
        tslib_1.__extends(Request, _super);
        function Request() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Request.prototype.body = function (data) {
            this.config.data = data;
            return this;
        };
        Request.prototype.then = function (success, failure) {
            if (this.config.type === "json") {
                this.config.data = JSON.stringify(this.config.data);
            }
            return _super.prototype.then.call(this, success, failure);
        };
        return Request;
    }(SimplestRequest));
    exports.Request = Request;
    var FileUploadRequest = (function (_super) {
        tslib_1.__extends(FileUploadRequest, _super);
        function FileUploadRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FileUploadRequest.prototype.body = function (data) {
            var temp = new FormData();
            function isObject(data) {
                return (typeof data === "object" && !(data instanceof File));
            }
            function encode(data) {
                if (!isObject(data)) {
                    return data;
                }
                var temp = {};
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        var value = data[key];
                        if (isObject(value)) {
                            value = encode(value);
                            for (var k in value) {
                                if (value.hasOwnProperty(k)) {
                                    var v = value[k];
                                    temp[key + "." + k] = v;
                                }
                            }
                        }
                        else {
                            temp[key] = value;
                        }
                    }
                }
                return temp;
            }
            data = encode(data);
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    temp.append(key, data[key]);
                }
            }
            this.config.data = temp;
            return this;
        };
        return FileUploadRequest;
    }(Request));
    exports.FileUploadRequest = FileUploadRequest;
});

//# sourceMappingURL=request.js.map

define(["require", "exports", "./event-emitter"], function (require, exports, event_emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validator = (function () {
        function Validator() {
            this.onValidate = new event_emitter_1.EventEmitter();
            this.sync = [];
            this.async = [];
        }
        Validator.prototype.configure = function (method) {
            method(this);
            return this;
        };
        Validator.prototype.add = function () {
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            if (!this.sync) {
                this.sync = [];
            }
            this.sync.push.apply(this.sync, validations);
            return this;
        };
        Validator.prototype.addAsync = function () {
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            if (!this.async) {
                this.async = [];
            }
            this.async.push.apply(this.async, validations);
            return this;
        };
        Validator.prototype.checkToCancel = function () {
            var syncToCancel = this.sync.filter(function (valid) { return valid.isCanceled; });
            if (syncToCancel.length) {
                this.remove.apply(this, syncToCancel);
            }
            var asyncToCancel = this.async.filter(function (valid) { return valid.isCanceled; });
            if (asyncToCancel.length) {
                this.remove.apply(this, asyncToCancel);
            }
        };
        Validator.prototype.validate = function (value) {
            var _this = this;
            this.checkToCancel();
            return new Promise(function (resolve, reject) {
                var errors = _this.sync
                    .filter(function (validation) { return !validation.validate(value); })
                    .map(function (validation) { return validation.getMessage(value); });
                Promise.all(_this.async.map(function (validation) { return validation.validate(value); }))
                    .then(function (data) {
                    errors.push.apply(errors, data
                        .map(function (isValid, index) { return isValid ? null : _this.async[index].getMessage(value); })
                        .filter(function (error) { return !!error; }));
                    _this.onValidate.emit(errors);
                    if (errors && errors.length) {
                        reject(errors);
                    }
                    else {
                        resolve(errors);
                    }
                })
                    .catch(reject);
            });
        };
        Validator.prototype.remove = function () {
            var _this = this;
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            var isSync = true;
            var removeValidation = function (validation, index) {
                if (validations
                    .filter(function (valids) { return valids["tokenId"] === validation["tokenId"]; })
                    .length) {
                    if (isSync) {
                        _this.sync.splice(index, 1);
                    }
                    else {
                        _this.async.splice(index, 1);
                    }
                    return true;
                }
                return false;
            };
            this.sync.some(removeValidation);
            isSync = false;
            this.async.some(removeValidation);
            return this;
        };
        return Validator;
    }());
    exports.Validator = Validator;
});

//# sourceMappingURL=validator.js.map

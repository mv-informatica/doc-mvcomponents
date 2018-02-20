define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nothing = function () { };
    var token = new Date().getTime();
    var AbstractValidation = (function () {
        function AbstractValidation() {
            this.callback = nothing;
            this.template = "";
            this.tokenId = token++;
        }
        AbstractValidation.prototype.setMethod = function (method) {
            this.method = method;
            return this;
        };
        AbstractValidation.prototype.getMethod = function () {
            return this.method;
        };
        AbstractValidation.prototype.setMessage = function (template) {
            this.template = template;
            return this;
        };
        AbstractValidation.prototype.onValidate = function (method) {
            this.callback = method;
            return this;
        };
        AbstractValidation.prototype.getMessage = function ($value) {
            return this.template.replace(/\{\$value\}/g, $value ? $value.toString() : null);
        };
        AbstractValidation.prototype.cancel = function () {
            this.isCanceled = true;
        };
        return AbstractValidation;
    }());
    exports.AbstractValidation = AbstractValidation;
    var Validation = (function (_super) {
        tslib_1.__extends(Validation, _super);
        function Validation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Validation.prototype.validate = function (value) {
            var isValid = this.getMethod().apply(this, [value]);
            var message = isValid ? null : this.getMessage(value);
            this.callback(message, this);
            return isValid;
        };
        return Validation;
    }(AbstractValidation));
    exports.Validation = Validation;
    var AsyncValidation = (function (_super) {
        tslib_1.__extends(AsyncValidation, _super);
        function AsyncValidation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsyncValidation.prototype.validate = function (value) {
            var _this = this;
            return this.method.apply(this, [value])
                .then(function (isValid) {
                var message = isValid ? null : _this.getMessage(value);
                _this.callback(message, _this);
                return isValid;
            });
        };
        return AsyncValidation;
    }(AbstractValidation));
    exports.AsyncValidation = AsyncValidation;
});

//# sourceMappingURL=validation.js.map

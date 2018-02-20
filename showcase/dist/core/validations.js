define(["require", "exports", "./validation"], function (require, exports, validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isNull = function (value) {
        return !value && value !== 0;
    };
    var Validations = (function () {
        function Validations() {
        }
        Validations.notEmpty = function () {
            return new validation_1.Validation()
                .setMethod(function (value) { return !isNull(value); })
                .setMessage("O campo é obrigatório");
        };
        Validations.lessThan = function (v) {
            return new validation_1.Validation()
                .setMethod(function (value) { return isNull(value) || value < v; })
                .setMessage("O valor deve ser menor que " + v);
        };
        Validations.greaterThan = function (v) {
            return new validation_1.Validation()
                .setMethod(function (value) { return isNull(value) || value > v; })
                .setMessage("O valor deve ser maior que " + v);
        };
        Validations.regexp = function (regexp) {
            return new validation_1.Validation()
                .setMethod(function (value) { return isNull(value) || !!regexp.exec(value); })
                .setMessage("O campo não está correto");
        };
        Validations.maxLength = function (v) {
            return new validation_1.Validation()
                .setMethod(function (value) { return isNull(value) || ("" + value).length <= v; })
                .setMessage("A quantidade m\u00E1xima de caracteres para este campo \u00E9 " + v);
        };
        Validations.minLength = function (v) {
            return new validation_1.Validation()
                .setMethod(function (value) { return isNull(value) || ("" + value).length >= v; })
                .setMessage("A quantidade m\u00EDnima de caracteres para este campo \u00E9 " + v);
        };
        Validations.email = function () {
            var EMAIL_REGEXP = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i;
            return Validations
                .regexp(EMAIL_REGEXP)
                .setMessage("Email inválido");
        };
        Validations.color = function () {
            var COLOR_REGEXP = /^#[0-9a-fA-F]{6}$/;
            return Validations
                .regexp(COLOR_REGEXP)
                .setMessage("Cor inválida");
        };
        return Validations;
    }());
    exports.Validations = Validations;
});

//# sourceMappingURL=validations.js.map

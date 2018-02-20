define(["require", "exports", "./validator", "./validation"], function (require, exports, validator_1, validation_1) {
    "use strict";
    describe('Validator', function () {
        it('espera-se que o `onValidate` seja executado', function () {
            var i = 0;
            new validator_1.Validator()
                .configure(function (validator) { return i++ && validator.onValidate.once(function (errors) { return expect(errors.length).toEqual(0); }); })
                .validate(null)
                .then(function (errors) { return expect(errors.length).toEqual(0); });
            expect(i).toEqual(1);
        });
        it('espera-se que o validator sem validação não contenha erros', function () {
            new validator_1.Validator()
                .configure(function (validator) { return validator.onValidate.once(function (errors) { return expect(errors.length).toEqual(0); }); })
                .validate(null)
                .then(function (errors) { return expect(errors.length).toEqual(0); });
        });
        it('espera-se que sucesso não sejam inseridas as listas de erros', function () {
            var err = 'Error';
            new validator_1.Validator()
                .configure(function (validator) { return validator.onValidate.once(function (errors) { return expect(errors.length).toEqual(0); }); })
                .add(new validation_1.Validation()
                .setMethod(function (value) { return true; })
                .setMessage(err))
                .validate(null)
                .then(function (errors) { return expect(errors.length).toEqual(0); });
        });
        it('espera-se que falhas sejam inseridas na lista de erros', function () {
            var err = 'Error';
            new validator_1.Validator()
                .configure(function (validator) { return validator.onValidate.once(function (_a) {
                var error = _a[0];
                return expect(error).toEqual(err);
            }); })
                .add(new validation_1.Validation()
                .setMethod(function (value) { return false; })
                .setMessage(err))
                .validate(null)
                .then(function (_a) {
                var error = _a[0];
                return expect(error).toEqual(err);
            });
        });
        it('espera-se que funcione corretamente em validacoes sync', function () {
            var err = 'Error';
            var ok = 'Success';
            new validator_1.Validator()
                .add(new validation_1.Validation()
                .setMethod(function (value) { return false; })
                .setMessage(err))
                .add(new validation_1.Validation()
                .setMethod(function (value) { return true; })
                .setMessage(ok))
                .add(new validation_1.Validation()
                .setMethod(function (value) { return false; })
                .setMessage(err))
                .validate(null)
                .then(function (erros) {
                expect(erros.length).toEqual(2);
                erros.forEach(function (error) { return expect(error).toEqual(err); });
            });
        });
        it('espera-se que funcione corretamente em validacoes async', function () {
            var err = 'Error';
            var ok = 'Success';
            new validator_1.Validator()
                .addAsync(new validation_1.AsyncValidation()
                .setMethod(function (value) { return Promise.resolve(false); })
                .setMessage(err))
                .addAsync(new validation_1.AsyncValidation()
                .setMethod(function (value) { return Promise.resolve(true); })
                .setMessage(ok))
                .addAsync(new validation_1.AsyncValidation()
                .setMethod(function (value) { return Promise.resolve(false); })
                .setMessage(err))
                .validate(null)
                .then(function (erros) {
                expect(erros.length).toEqual(2);
                erros.forEach(function (error) { return expect(error).toEqual(err); });
            });
        });
        it('espera-se que funcione corretamente com ambas as validações', function () {
            var err = 'Error';
            var ok = 'Success';
            new validator_1.Validator()
                .addAsync(new validation_1.AsyncValidation()
                .setMethod(function (value) { return Promise.resolve(false); })
                .setMessage(err))
                .addAsync(new validation_1.AsyncValidation()
                .setMethod(function (value) { return Promise.resolve(true); })
                .setMessage(ok))
                .add(new validation_1.Validation()
                .setMethod(function (value) { return false; })
                .setMessage(err))
                .add(new validation_1.Validation()
                .setMethod(function (value) { return true; })
                .setMessage(ok))
                .validate(null)
                .then(function (erros) {
                expect(erros.length).toEqual(2);
                erros.forEach(function (error) { return expect(error).toEqual(err); });
            });
        });
    });
});

//# sourceMappingURL=validator.spec.js.map

define(["require", "exports", "./validation"], function (require, exports, validation_1) {
    "use strict";
    describe('Validation', function () {
        describe('all', function () {
            it('espera-se que o valor seja passado corretamente ao `sync:setMethod`', function () {
                var value = 1;
                new validation_1.Validation()
                    .setMethod(function (v) { return expect(v).toEqual(value); })
                    .validate(value);
            });
            it('espera-se que o método `sync:getMessage` faça o replace correatemente', function () {
                var value = '1';
                expect(new validation_1.Validation()
                    .setMessage('{$value}')
                    .getMessage(value)).toEqual(value);
            });
        });
        describe('sync', function () {
            it('espera-se que o método `sync:onValidate` seja executado', function () {
                var err = 'Error';
                var validation = new validation_1.Validation()
                    .setMethod(function (v) { return false; })
                    .setMessage(err);
                validation
                    .onValidate(function (error, that) {
                    expect(error).toEqual(err);
                    expect(validation).toEqual(that);
                })
                    .validate(null);
            });
            it('espera-se que o método `sync:onValidate` não informe a mensagem case seja valido', function () {
                var err = 'Error';
                var validation = new validation_1.Validation()
                    .setMethod(function (v) { return true; })
                    .setMessage(err);
                validation
                    .onValidate(function (error, that) {
                    expect(error).toBeNull();
                    expect(validation).toEqual(that);
                })
                    .validate(null);
            });
        });
        describe('async', function () {
            it('espera-se que o método `async:onValidate` seja executado', function () {
                var err = 'Error';
                var validation = new validation_1.AsyncValidation()
                    .setMethod(function (v) { return Promise.resolve(false); })
                    .setMessage(err);
                validation
                    .onValidate(function (error, that) {
                    expect(error).toEqual(err);
                    expect(validation).toEqual(that);
                })
                    .validate(null);
            });
        });
    });
});

//# sourceMappingURL=validation.spec.js.map

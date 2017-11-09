define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input", "mvcomponents/button", "mvcomponents/component", "mvcomponents/core"], function (require, exports, tslib_1, container_1, input_1, button_1, component_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationCustomCase = (function (_super) {
        tslib_1.__extends(ValidationCustomCase, _super);
        function ValidationCustomCase() {
            var _this = _super.call(this) || this;
            var itNome = new input_1.TextInput()
                .setLabel("nome")
                .setName("nome");
            _this.append(itNome);
            var itEmail = new input_1.TextInput()
                .setLabel("email")
                .setName("email");
            _this.append(itEmail);
            var nomeOrEmailValidation = new core_1.Validation();
            nomeOrEmailValidation.setMethod(function () {
                return itNome.getValue() || itEmail.getValue() ? true : false;
            });
            nomeOrEmailValidation.setMessage("\u00E9 preciso preencher o email ou o nome!");
            itNome.addValidation(nomeOrEmailValidation);
            itEmail.addValidation(nomeOrEmailValidation);
            var btValidar = new button_1.Button("Validar").setVerticalAlign(component_1.EVerticalAlign.BOTTOM);
            btValidar.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                _this
                    .validate()
                    .then(function (value) { return alert("campos ok!"); })
                    .catch(function (errs) { return alert(JSON.stringify(errs.map(function (input) { return input.errors[0]; }))); });
            });
            _this.append(btValidar);
            return _this;
        }
        return ValidationCustomCase;
    }(container_1.Form));
    exports.ValidationCustomCase = ValidationCustomCase;
});

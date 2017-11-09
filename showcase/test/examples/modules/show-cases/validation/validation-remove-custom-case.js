define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input", "mvcomponents/button", "mvcomponents/component", "mvcomponents/core"], function (require, exports, tslib_1, container_1, input_1, button_1, component_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationRemoveCustomCase = (function (_super) {
        tslib_1.__extends(ValidationRemoveCustomCase, _super);
        function ValidationRemoveCustomCase() {
            var _this = _super.call(this) || this;
            var itNome = new input_1.TextInput()
                .setLabel("nome")
                .setName("nome");
            _this.append(itNome);
            var customValidation = new core_1.Validation();
            customValidation.setMethod(function () { return false; });
            customValidation.setMessage("esse validation sempre reprova!");
            itNome.addValidation(customValidation);
            var btValidar = new button_1.Button("Validar").setVerticalAlign(component_1.EVerticalAlign.BOTTOM);
            btValidar.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                _this
                    .validate()
                    .then(function (value) { return alert("campos ok!!!"); })
                    .catch(function (errs) { return alert(JSON.stringify(errs.map(function (input) { return input.errors[0]; }))); });
            });
            _this.append(btValidar);
            var btRemoverValidacao = new button_1.Button("Remover validação").setVerticalAlign(component_1.EVerticalAlign.BOTTOM);
            btRemoverValidacao.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                itNome.removeValidation(customValidation);
                customValidation.cancel();
                itNome.validate();
            });
            _this.append(btRemoverValidacao);
            return _this;
        }
        return ValidationRemoveCustomCase;
    }(container_1.Form));
    exports.ValidationRemoveCustomCase = ValidationRemoveCustomCase;
});

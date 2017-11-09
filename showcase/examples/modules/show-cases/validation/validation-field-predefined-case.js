define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input", "mvcomponents/button", "mvcomponents/component", "mvcomponents/core"], function (require, exports, tslib_1, container_1, input_1, button_1, component_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationFieldPredefinedCase = (function (_super) {
        tslib_1.__extends(ValidationFieldPredefinedCase, _super);
        function ValidationFieldPredefinedCase() {
            var _this = _super.call(this) || this;
            var itId = new input_1.NumericStepper()
                .setLabel("id")
                .setName("id");
            itId.addValidation(core_1.Validations.notEmpty(), core_1.Validations.greaterThan(10));
            _this.append(itId);
            var itEmail = new input_1.TextInput()
                .setLabel("email")
                .setName("email");
            itEmail.addValidation(core_1.Validations.notEmpty(), core_1.Validations.email());
            _this.append(itEmail);
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
        return ValidationFieldPredefinedCase;
    }(container_1.Form));
    exports.ValidationFieldPredefinedCase = ValidationFieldPredefinedCase;
});

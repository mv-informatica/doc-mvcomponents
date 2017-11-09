define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input", "mvcomponents/button", "mvcomponents/component", "mvcomponents/core"], function (require, exports, tslib_1, container_1, input_1, button_1, component_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationSimpleCase = (function (_super) {
        tslib_1.__extends(ValidationSimpleCase, _super);
        function ValidationSimpleCase() {
            var _this = _super.call(this) || this;
            var itDesc = new input_1.TextInput();
            itDesc.addValidation(core_1.Validations.notEmpty());
            _this.append(itDesc);
            var btValidar = new button_1.Button("Validar");
            btValidar.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                itDesc
                    .validate()
                    .then(function (value) {
                    alert("campo ok!");
                })
                    .catch(function (err) { return alert(err); })
                    .catch(function (err) { return console.log(err); });
            });
            _this.append(btValidar);
            return _this;
        }
        return ValidationSimpleCase;
    }(container_1.Form));
    exports.ValidationSimpleCase = ValidationSimpleCase;
});

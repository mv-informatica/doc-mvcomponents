define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input", "mvcomponents/button", "mvcomponents/component", "mvcomponents/core"], function (require, exports, tslib_1, container_1, input_1, button_1, component_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationFormEventEmitterCase = (function (_super) {
        tslib_1.__extends(ValidationFormEventEmitterCase, _super);
        function ValidationFormEventEmitterCase() {
            var _this = _super.call(this) || this;
            var itId = new input_1.TextInput().setName("id");
            itId.addValidation(core_1.Validations.notEmpty());
            _this.append(itId);
            var itDesc = new input_1.TextInput().setName("desc");
            itDesc.addValidation(core_1.Validations.notEmpty());
            _this.append(itDesc);
            _this.onValidate.subscribe(function (errs) {
                if (!errs.length) {
                    alert("campos ok!");
                }
            });
            var btValidar = new button_1.Button("Validar");
            btValidar.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                _this
                    .validate();
            });
            _this.append(btValidar);
            return _this;
        }
        return ValidationFormEventEmitterCase;
    }(container_1.Form));
    exports.ValidationFormEventEmitterCase = ValidationFormEventEmitterCase;
});

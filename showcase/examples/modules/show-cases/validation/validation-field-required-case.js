define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, input_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationFieldRequiredCase = (function (_super) {
        tslib_1.__extends(ValidationFieldRequiredCase, _super);
        function ValidationFieldRequiredCase() {
            var _this = _super.call(this) || this;
            var itDesc = new input_1.TextInput().setLabel("desc").setName("desc");
            itDesc.setRequired(true);
            _this.append(itDesc);
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
        return ValidationFieldRequiredCase;
    }(container_1.Form));
    exports.ValidationFieldRequiredCase = ValidationFieldRequiredCase;
});

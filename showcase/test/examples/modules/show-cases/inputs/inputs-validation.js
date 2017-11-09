define(["require", "exports", "tslib", "mvcomponents/component", "mvcomponents/container", "mvcomponents/button", "mvcomponents/core", "mvcomponents/input"], function (require, exports, tslib_1, component_1, container_1, button_1, core_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputsValidation = (function (_super) {
        tslib_1.__extends(InputsValidation, _super);
        function InputsValidation() {
            var _this = _super.call(this, "Validations") || this;
            _this.buildCase1();
            _this.buildCase2();
            return _this;
        }
        InputsValidation.prototype.buildCase1 = function () {
            var form1 = new container_1.Form();
            this.append(form1);
            var field1 = new input_1.TextInput()
                .setSize(2)
                .setLabel("name")
                .setName("field1")
                .markRequired(true);
            var field2 = new input_1.TextInput()
                .setLabel("full name")
                .setSize(7)
                .setName("field2")
                .markRequired(true);
            var validAll = function () {
                Promise
                    .all([
                    field1.validate(),
                    field2.validate()
                ])
                    .then(function (rests) {
                    console.log('all right', rests);
                })
                    .catch(function (errs) {
                    console.log('erros in:', errs);
                });
            };
            var fieldUser = new input_1.Select()
                .setLabel("status")
                .setSize(3)
                .setName("fieldUser")
                .setValueField("id")
                .setDescriptionField("user")
                .setRequired(true);
            fieldUser.setData([
                { id: 1, user: "teste 1" },
                { id: 2, user: "teste 2" },
                { id: 3, user: "teste 3" },
                { id: 4, user: "teste 4" }
            ]);
            var fieldset1 = new container_1.Fieldset("double validation");
            fieldset1
                .append(field1)
                .append(field2)
                .append(fieldUser);
            form1.append(fieldset1);
            field1.addEvent(component_1.EKeyboardEvent.KEYUP, function (evt) { return validAll(); });
            field2.addEvent(component_1.EKeyboardEvent.KEYUP, function (evt) { return validAll(); });
            var validName = new core_1.Validation()
                .setMethod(function (vl) { return field1.getValue() || field2.getValue() ? true : false; });
            field1.validator.onValidate.subscribe(function (errs) { return field1.markRequired(errs.length > 0); });
            field2.validator.onValidate.subscribe(function (errs) { return field2.markRequired(errs.length > 0); });
            field1.addValidation(validName);
            field2.addValidation(validName);
            var btnValidAll = new button_1.Button("validation!");
            btnValidAll.addEvent(component_1.EMouseEvent.CLICK, function (evt) { return form1
                .validate()
                .then(function (ok) { return console.log(ok); })
                .catch(function (errs) { return console.log('errs', errs); }); });
            var btnClear = new button_1.Button("clear!");
            btnClear.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                form1.clear();
            });
            fieldset1.append(new container_1.ButtonGroup()
                .setDefaultInnerVerticalAlign(component_1.EVerticalAlign.TOP)
                .append(btnValidAll)
                .append(btnClear));
        };
        InputsValidation.prototype.buildCase2 = function () {
            var form1 = new container_1.Form();
            this.append(form1);
            var field1 = new input_1.TextInput()
                .setSize(2)
                .setLabel("name")
                .setName("field1");
            var field2 = new input_1.TextInput()
                .setLabel("nick name")
                .setSize(10)
                .setName("field2")
                .setRequired(true);
            var fieldset1 = new container_1.Fieldset("enable/disable validation");
            fieldset1
                .append(field1)
                .append(field2);
            form1.append(fieldset1);
            var validName = new core_1.Validation()
                .setMethod(function (vl) { return field1.getValue() || field2.getValue() ? true : false; });
            field1.addValidation(validName);
            field2.addValidation(validName);
            var btnDisableValidation = new button_1.Button("disable validation name!");
            btnDisableValidation.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                field1.removeValidation(validName);
            });
            var btnEnableValidation = new button_1.Button("enable validation name!");
            btnEnableValidation.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                field1.addValidation(validName);
            });
            var btnDisableAllValidation = new button_1.Button("disable all validation!");
            btnDisableAllValidation.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
                validName.cancel();
                field2.setRequired(false);
            });
            fieldset1.append(new container_1.ButtonGroup().setDefaultInnerVerticalAlign(component_1.EVerticalAlign.TOP).append(btnDisableValidation).append(btnEnableValidation).append(btnDisableAllValidation));
        };
        return InputsValidation;
    }(container_1.Panel));
    exports.InputsValidation = InputsValidation;
});

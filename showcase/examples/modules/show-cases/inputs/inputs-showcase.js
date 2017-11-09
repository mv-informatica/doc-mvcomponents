define(["require", "exports", "tslib", "mvcomponents/component", "mvcomponents/container", "mvcomponents/button", "mvcomponents/input"], function (require, exports, tslib_1, component_1, container_1, button_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputsShowcase = (function (_super) {
        tslib_1.__extends(InputsShowcase, _super);
        function InputsShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(8).setSize(12, component_1.EViewSize.EXTRA_SMALL, component_1.EViewSize.SMALL);
            var formB = new container_1.Form();
            _this.append(formB.setSize(12));
            _this.buildInputs(formB);
            return _this;
        }
        InputsShowcase.prototype.buildInputs = function (pform) {
            this.itText = new input_1.TextInput()
                .setMask("*99")
                .setSize(1)
                .setLabel("Cód.");
            this.itText.setRequired(true);
            pform.append(this.itText);
            var itPass = new input_1.PasswordInput()
                .setLabel('Pass')
                .setSize(3)
                .setSize(4, component_1.EViewSize.EXTRA_SMALL);
            pform.append(itPass);
            var simpleDateInput = new input_1.DatePickerInput({ language: "es" })
                .setSize(3)
                .setSize(6, component_1.EViewSize.EXTRA_SMALL)
                .setOffSet(5)
                .setLabel("Data");
            pform.append(simpleDateInput);
            var itSelect = new input_1.Select()
                .setSize(5)
                .setLabel("Users")
                .setValueField("id")
                .setRequired(true)
                .setDescriptionField("desc");
            itSelect.setData([
                { id: 1, desc: 'ops' },
                { id: 2, desc: 'test' },
                { id: 3, desc: 'test 3' },
                { id: 4, desc: 'ops 4' }
            ]);
            pform.append(itSelect);
            itSelect.onSelect.subscribe(function (dta) {
                console.log(dta);
            });
            var ckboxEnableForm = new input_1.CheckBox("", "o formulário deve ser desabilitado.").displayLabel(false);
            ckboxEnableForm.setCheckedValue("n").setRequired(true);
            pform.append(ckboxEnableForm);
            ckboxEnableForm.addEvent(component_1.EMouseEvent.CLICK, function () {
                pform.setEnable(ckboxEnableForm.getValue() !== "y");
            });
            var simpleTextArea = new input_1.TextArea()
                .setHeight("70px")
                .setLabel("OBS")
                .setRows(4);
            pform.append(simpleTextArea);
            var btnOk = new button_1.Button("approved").setIcon("glyphicon glyphicon-bullhorn");
            pform.append(new container_1.ButtonGroup().setDefaultInnerVerticalAlign(component_1.EVerticalAlign.TOP).append(btnOk));
            btnOk.addEvent(component_1.EMouseEvent.CLICK, function (evt) {
            });
        };
        InputsShowcase.prototype.onCreate = function () {
        };
        return InputsShowcase;
    }(container_1.Form));
    exports.InputsShowcase = InputsShowcase;
});

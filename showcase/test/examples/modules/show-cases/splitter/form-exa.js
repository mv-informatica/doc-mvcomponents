define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/component", "mvcomponents/input", "mvcomponents/widget", "mvcomponents/button", "mvcomponents/separator"], function (require, exports, tslib_1, container_1, component_1, input_1, widget_1, button_1, separator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormExa = (function (_super) {
        tslib_1.__extends(FormExa, _super);
        function FormExa() {
            var _this = _super.call(this) || this;
            _this
                .append(new widget_1.Label("FORM PADRAO TESTE"))
                .append(new separator_1.Separator().setColor("#3b7e92").setSize(12))
                .append(new input_1.TextInput().setLabel("nome:").setSize(8).setSize(12, component_1.EViewSize.SMALL, component_1.EViewSize.EXTRA_SMALL))
                .append(new input_1.DatePickerInput().setLabel("data").setSize(4))
                .append(new input_1.TextInput().setLabel("txt").setSize(6))
                .append(new input_1.TextArea().setLabel("obs").setSize(12))
                .append(new button_1.IconButton().setIcon("glyphicon glyphicon-ok").setColor(component_1.EBasicColorStatus.INFO));
            _this.setCssProperties({ "height": "300px" });
            return _this;
        }
        return FormExa;
    }(container_1.Form));
    exports.FormExa = FormExa;
});

define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window", "./inputs-showcase"], function (require, exports, tslib_1, container_1, default_module_window_1, inputs_showcase_1) {
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var InputsCase = (function (_super) {
		tslib_1.__extends(InputsCase, _super);
		function InputsCase() {
			var _this = _super.call(this) || this;
			_this.append(new default_module_window_1.DefaultModuleWindow("Campos de formulário", "")
				.append(new inputs_showcase_1.InputsShowcase()));
			_this.append(new default_module_window_1.DefaultModuleWindow("Campo simples", "Caixa de texto simples")
				.loadExample("examples/modules/show-cases/inputs/text-input-case", "TextInputCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("Com rótulo e placeholder", "Com rótulo e placeholder")
				.loadExample("examples/modules/show-cases/inputs/text-input-with-label-case", "TextInputWithLabelCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("Password", "Campo para senha")
				.loadExample("examples/modules/show-cases/inputs/password-input-case", "PasswordInputCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("Email", "Campo para email")
				.loadExample("examples/modules/show-cases/inputs/email-input-case", "EmailInputCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("NumericStepper", "Campo para números")
				.loadExample("examples/modules/show-cases/inputs/numeric-stepper-case", "NumericStepperCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("FileInput", "Campo para upload de arquivos")
				.loadExample("examples/modules/show-cases/inputs/file-input-case", "FileInputCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("Textarea", "Campo para textos longos")
				.loadExample("examples/modules/show-cases/inputs/textarea-case", "TextareaCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("Datepicker", "Campo para data")
				.loadExample("examples/modules/show-cases/inputs/date-picker-case", "DatePickerCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("Checkbox", "Input tipo checkbox")
				.loadExample("examples/modules/show-cases/inputs/checkbox-case", "CheckBoxCase"));
			_this.append(new default_module_window_1.DefaultModuleWindow("RadioGroup", "Grupo de opções")
				.loadExample("examples/modules/show-cases/inputs/radio-group-case", "RadioGroupCase"));
			return _this;
		}
		return InputsCase;
	}(container_1.Box));
	exports.InputsCase = InputsCase;
});

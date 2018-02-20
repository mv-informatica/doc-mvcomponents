import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";
import {InputsShowcase} from "./inputs-showcase";

export class Index extends Box{
	constructor(){
		super();	

		this.append(
			new DefaultModuleWindow("Campos de formulário","")
				.append(new InputsShowcase())
		);
		this.append(
			new DefaultModuleWindow("Campo simples","Caixa de texto simples")
				.loadExample("examples/modules/show-cases/inputs/text-input-case","TextInputCase")
		);
		this.append(
			new DefaultModuleWindow("Com rótulo e placeholder","Com rótulo e placeholder")
				.loadExample("examples/modules/show-cases/inputs/text-input-with-label-case","TextInputWithLabelCase")
		);
		this.append(
			new DefaultModuleWindow("Password","Campo para senha")
				.loadExample("examples/modules/show-cases/inputs/password-input-case","PasswordInputCase")
		);
		this.append(
			new DefaultModuleWindow("Email","Campo para email")
				.loadExample("examples/modules/show-cases/inputs/email-input-case","EmailInputCase")
		);
		this.append(
			new DefaultModuleWindow("NumericStepper","Campo para números")
				.loadExample("examples/modules/show-cases/inputs/numeric-stepper-case","NumericStepperCase")
		);
		this.append(
			new DefaultModuleWindow("FileInput","Campo para upload de arquivos")
				.loadExample("examples/modules/show-cases/inputs/file-input-case","FileInputCase")
		);
		this.append(
			new DefaultModuleWindow("Textarea","Campo para textos longos")
				.loadExample("examples/modules/show-cases/inputs/textarea-case","TextareaCase")
		);
		this.append(
			new DefaultModuleWindow("Datepicker","Campo para data")
				.loadExample("examples/modules/show-cases/inputs/date-picker-case","DatePickerCase")
		);
		this.append(
			new DefaultModuleWindow("DateTimepicker","Campo para data e hora")
				.loadExample("examples/modules/show-cases/inputs/date-time-picker-case","DateTimePickerCase")
		);
		this.append(
			new DefaultModuleWindow("Checkbox","Input tipo checkbox")
				.loadExample("examples/modules/show-cases/inputs/checkbox-case","CheckBoxCase")
		);
		this.append(
			new DefaultModuleWindow("RadioGroup","Grupo de opções")
				.loadExample("examples/modules/show-cases/inputs/radio-group-case","RadioGroupCase")
		);
	}
}

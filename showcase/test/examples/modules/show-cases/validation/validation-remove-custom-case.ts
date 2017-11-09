import {Form} from "mvcomponents/container";
import {TextInput,NumericStepper} from "mvcomponents/input";
import {Button} from "mvcomponents/button";
import {EMouseEvent,EVerticalAlign} from "mvcomponents/component";
import {Validations,Validation} from "mvcomponents/core";

export class ValidationRemoveCustomCase extends Form<{nome:string,email:string}>{
	constructor(){
		super();

		let itNome = new TextInput()
							.setLabel("nome")
							.setName("nome");
		this.append(itNome);

		let customValidation = new Validation();
		customValidation.setMethod(() => false);
		customValidation.setMessage(`esse validation sempre reprova!`);

		itNome.addValidation(customValidation);
		
		let btValidar = new Button("Validar").setVerticalAlign(EVerticalAlign.BOTTOM);
		btValidar.addEvent(EMouseEvent.CLICK,evt => {
			this
				.validate()
				.then(value => alert("campos ok!!!"))
				.catch(errs => alert(
						JSON.stringify( errs.map( input => input.errors[0] ) ) 
					)
				);
		});
		this.append(btValidar);

		let btRemoverValidacao = new Button("Remover validação").setVerticalAlign(EVerticalAlign.BOTTOM);
		btRemoverValidacao.addEvent(EMouseEvent.CLICK,evt => {
			// 1ª forma, removendo apenas do campo
			itNome.removeValidation(customValidation);
			// 2º forma, cancelando todas os campos que estiverem usando a validação
			customValidation.cancel();
			
			itNome.validate();
		});
		this.append(btRemoverValidacao);
	}
}

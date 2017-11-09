import {Form} from "mvcomponents/container";
import {TextInput,NumericStepper} from "mvcomponents/input";
import {Button} from "mvcomponents/button";
import {EMouseEvent,EVerticalAlign} from "mvcomponents/component";
import {Validations,Validation} from "mvcomponents/core";

export class ValidationCustomCase extends Form<{nome:string,email:string}>{
	constructor(){
		super();

		let itNome = new TextInput()
							.setLabel("nome")
							.setName("nome");
		this.append(itNome);

		let itEmail = new TextInput()
							.setLabel("email")
							.setName("email");
		this.append(itEmail);

		let nomeOrEmailValidation = new Validation();
		nomeOrEmailValidation.setMethod(() => {
			return itNome.getValue() || itEmail.getValue() ? true:false;
		});
		nomeOrEmailValidation.setMessage(`é preciso preencher o email ou o nome!`);

		itNome.addValidation(nomeOrEmailValidation);
		itEmail.addValidation(nomeOrEmailValidation);

		let btValidar = new Button("Validar").setVerticalAlign(EVerticalAlign.BOTTOM);
		btValidar.addEvent(EMouseEvent.CLICK,evt => {
			this
				.validate()
				.then(value => alert("campos ok!"))
				.catch(errs => alert( JSON.stringify( errs.map( input => input.errors[0] ) ) ) );
		});
		this.append(btValidar);
	}
}

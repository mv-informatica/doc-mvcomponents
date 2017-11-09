import {Form} from "mvcomponents/container";
import {TextInput,NumericStepper} from "mvcomponents/input";
import {Button} from "mvcomponents/button";
import {EMouseEvent,EVerticalAlign} from "mvcomponents/component";
import {Validations} from "mvcomponents/core";

export class ValidationFieldPredefinedCase extends Form<{id:number,email:string}>{
	constructor(){
		super();

		let itId = new NumericStepper()
							.setLabel("id")
							.setName("id");
		itId.addValidation(
			Validations.notEmpty()
			,Validations.greaterThan(10)
			);
		this.append(itId);
		
		let itEmail = new TextInput()
							.setLabel("email")
							.setName("email");
		itEmail.addValidation(
			Validations.notEmpty()
			,Validations.email()
			);
		this.append(itEmail);

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

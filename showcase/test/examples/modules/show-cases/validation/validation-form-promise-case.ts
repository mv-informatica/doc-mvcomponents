import {Form} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";
import {Validations} from "mvcomponents/core";

export class ValidationFormPromiseCase extends Form<{id:number,desc:string}>{
	constructor(){
		super();

		let itId = new TextInput().setName("id");
		itId.addValidation(Validations.notEmpty());
		this.append(itId);

		let itDesc = new TextInput().setName("desc");
		itDesc.addValidation(Validations.notEmpty());
		this.append(itDesc);
		
		let btValidar = new Button("Validar");
		btValidar.addEvent(EMouseEvent.CLICK,evt => {
			this
				.validate()
				.then(value => alert("campos ok!"))
				.catch(errs => alert( JSON.stringify( errs.map( input => input.errors[0] ) ) ) );
		});
		this.append(btValidar);
	}
}

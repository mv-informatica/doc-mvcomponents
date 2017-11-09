import {Form} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";
import {Validations} from "mvcomponents/core";

export class ValidationSimpleCase extends Form<{id:number,desc:string}>{
	constructor(){
		super();

		let itDesc = new TextInput();
		itDesc.addValidation(Validations.notEmpty());
		this.append(itDesc);

		let btValidar = new Button("Validar");
		btValidar.addEvent(EMouseEvent.CLICK,evt => {
			itDesc
				.validate()
				.then(value => {
					alert("campo ok!");
				})
				.catch(err => alert(err))
				.catch(err => console.log(err));
		});
		this.append(btValidar);
	}
}

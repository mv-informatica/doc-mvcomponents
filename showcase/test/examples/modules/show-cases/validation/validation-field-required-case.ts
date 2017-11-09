import {Form} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";
import {Button} from "mvcomponents/button";
import {EMouseEvent,EVerticalAlign} from "mvcomponents/component";

export class ValidationFieldRequiredCase extends Form<{id:number,desc:string}>{
	constructor(){
		super();

		let itDesc = new TextInput().setLabel("desc").setName("desc");
		itDesc.setRequired(true);
		this.append(itDesc);

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

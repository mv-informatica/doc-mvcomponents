import {Form,Fieldset} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";

export class DisabledShowcase extends Form<any>{
	private itDesc:TextInput;
	constructor(){
		super();
		this.setSize(5);
		let fieldset:Fieldset = new Fieldset("Exemplo");
		fieldset.setEnable(false);

		this.itDesc = new TextInput();
		this.itDesc
			.setLabel("desc")
			.setName("desc")
			.setSize(8);
		fieldset.append(this.itDesc);

		this.append(fieldset);
	}

}


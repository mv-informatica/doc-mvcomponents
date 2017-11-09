import {Form} from "mvcomponents/container";
import {TextInput,InputAddon} from "mvcomponents/input";


export class TextInputWithLabelCase extends Form<any>{
	constructor(){
		super();
		let txi = new TextInput()
					.setLabel("Exemplo:")
					.setPlaceholder("digite alguma informação...")
					.prepend(new InputAddon().setIcon("mv-basico-alerta"));	

		txi.getInput().css({textAlign:"right"});

		this.append(txi);

		
	}
}

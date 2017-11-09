import {Form} from "mvcomponents/container";
import {PasswordInput} from "mvcomponents/input";

export class PasswordInputCase extends Form<any>{
	constructor(){
		super();
		let txi = new PasswordInput()
					.setLabel("Senha:")
					.setPlaceholder("senha...");

		this.append(txi);
	}
}

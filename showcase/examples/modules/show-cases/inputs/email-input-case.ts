import {Form} from "mvcomponents/container";
import {EmailInput} from "mvcomponents/input";

export class EmailInputCase extends Form<any>{
	constructor(){
		super();
		let txi = new EmailInput()
					.setLabel("Email:")
					.setPlaceholder("email...");

		this.append(txi);
	}
}

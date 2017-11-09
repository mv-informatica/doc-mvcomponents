import {Form} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";

export class TextInputCase extends Form<any>{
	constructor(){
		super();
		let txi = new TextInput();
		this.append(txi);
	}
}

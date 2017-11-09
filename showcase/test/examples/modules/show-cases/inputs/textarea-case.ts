import {Form} from "mvcomponents/container";
import {TextArea} from "mvcomponents/input";

export class TextareaCase extends Form<any>{
	constructor(){
		super();
		let txi = new TextArea()
			.setLabel("obs.:");
		this.append(txi);
	}
}

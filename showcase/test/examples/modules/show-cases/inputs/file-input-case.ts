import {Form} from "mvcomponents/container";
import {FileInput} from "mvcomponents/input";

export class FileInputCase extends Form<any>{
	constructor(){
		super();
		let txi = new FileInput();
		this.append(txi);
	}
}

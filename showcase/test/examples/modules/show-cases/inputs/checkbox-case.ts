import {Form} from "mvcomponents/container";
import {CheckBox} from "mvcomponents/input";

export class CheckBoxCase extends Form<any>{
	constructor(){
		super();
		let cb = new CheckBox("Opção","sim")
					.setLabel("Exemplo:")
					.setName("option")
					.setCheckedValue("y")
					.setUncheckedValue("n");
		this.append(cb);
	}
}

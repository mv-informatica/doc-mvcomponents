import {Form} from "mvcomponents/container";
import {DatePickerInput} from "mvcomponents/input";

export class DatePickerCase extends Form<any>{
	constructor(){
		super();
		let txi = new DatePickerInput()
			.setLabel("data:");
		this.append(txi);
	}
}

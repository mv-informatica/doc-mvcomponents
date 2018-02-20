import {Form} from "mvcomponents/container";
import {DateTimePickerInput} from "mvcomponents/input";

export class DateTimePickerCase extends Form<any>{
	constructor(){
		super();
		let txi = new DateTimePickerInput()
			.setLabel("date time:");
		this.append(txi);
	}
}

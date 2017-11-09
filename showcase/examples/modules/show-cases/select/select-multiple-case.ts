import {Form} from "mvcomponents/container";
import {Select} from "mvcomponents/input";

export class SelectMultipleCase extends Form<any>{
	constructor(){
		super();
		let itselect1 = new Select({multiple:true});
		itselect1
			.setValueField("id")
			.setDescriptionField("name");

		this.append(itselect1);

		itselect1.setData([
			{id:1,name:"teste 1"}
			,{id:2,name:"teste 2"}
			,{id:3,name:"teste 3"}
		]);
	}
}

import {Form} from "mvcomponents/container";
import {Select} from "mvcomponents/input";

export class SelectCustomValueCase extends Form<any>{
	constructor(){
		super();
		let itselect1 = new Select<{id:number,name:string}>();
		itselect1
			.setValueField("id")
			.setDescriptionField("name")
			.setDisplayItem(item => `<strong>${item.id} - </strong> <span>${item.name}</span>`)

		this.append(itselect1);

		itselect1.setData([
			{id:1,name:"teste 1"}
			,{id:2,name:"teste 2"}
			,{id:3,name:"teste 3"}
		]);

		itselect1.setValue({id:2,name:""});
	}
}

import {Form} from "mvcomponents/container";
import {Select} from "mvcomponents/input";

export class SelectOneKeyCase extends Form<any>{
	constructor(){
		super();
		let itselect1 = new Select();
		itselect1
			.setValueField("user")
			.setDescriptionField("user");

		this.append(itselect1);

		itselect1.setData([
			{user:"pablo@teste.com.br"}
			,{user:"mario@ids.com.br"}
			,{user:"mariana.sicrano@gbail.com"}
		]);
	}
}

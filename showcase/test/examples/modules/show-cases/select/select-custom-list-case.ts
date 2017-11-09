import {Form} from "mvcomponents/container";
import {Select} from "mvcomponents/input";

export class SelectCustomListCase extends Form<any>{
	constructor(){
		super();
		let itselect1 = new Select<{id:number,name:string,icon:string}>();
		itselect1
			.setValueField("id")
			.setDescriptionField("name")
			.setDisplayListItem(item => `
				<i class="${item.icon}" style="float:left;margin:2px 5px 0 0"></i>
				<strong>${item.id} - </strong> 
				<span>${item.name}</span>
			`);

		this.append(itselect1);

		itselect1.setData([
			{id:1,name:"bom",icon:"mv-basico-desempenho_bom"}
			,{id:2,name:"médio",icon:"mv-basico-desempenho_medio"}
			,{id:3,name:"ruim",icon:"mv-basico-desempenho_ruim"}
		]);
	}
}

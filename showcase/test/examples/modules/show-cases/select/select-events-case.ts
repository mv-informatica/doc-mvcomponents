import {Form} from "mvcomponents/container";
import {Select} from "mvcomponents/input";

export class SelectEventsCase extends Form<any>{
	constructor(){
		super();
		let itselect1 = new Select<{id:number,name:string}>({multiple:true});
		itselect1
			.setValueField("id")
			.setDescriptionField("name");

		this.append(itselect1);

		itselect1.setData([
			{id:1,name:"teste 1"}
			,{id:2,name:"teste 2"}
			,{id:3,name:"teste 3"}
		]);

		itselect1.onSelect.subscribe(valores => {
			console.log(`valor:${valores[0].id} , nome:${valores[0].name}`);
		});

		itselect1.onNoResultsFound.subscribe(termo => {
			alert(`"${termo}" não encontrado!!!`)
		});

		itselect1.onBeforeDropdown.subscribe(() => {
			console.log("antes de mostrar lista!!!");
		});

		itselect1.onClearMultiItem.subscribe(item => {
			alert(`item ${item.name} removido da lista`)
		});
	}
}

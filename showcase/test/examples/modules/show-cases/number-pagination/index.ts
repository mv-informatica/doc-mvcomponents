import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("NumberPagination","Componente de paginação numérica.")
				.setMarginTopExample(50)
		);
		this.append(
			new DefaultModuleWindow("Exemplo simples","Exemplo de uso simples.")
				.loadExample("examples/modules/show-cases/number-pagination/basic-case","BasicCase")
		);
	}
}

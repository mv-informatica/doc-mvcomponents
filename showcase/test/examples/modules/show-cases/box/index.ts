import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Box","Conteiner usado para agrupar o layout da aplicação.")
				.setMarginTopExample(50)
		);
		this.append(
			new DefaultModuleWindow("Exemplo simples","organizando o layout em duas partes")
				.loadExample("examples/modules/show-cases/box/box-showcase","BoxShowcase")
		);
		this.append(
			new DefaultModuleWindow("Bloqueando box","bloqueando um container")
				.loadExample("examples/modules/show-cases/box/disable-case","DisableCase")
		);
	}
}

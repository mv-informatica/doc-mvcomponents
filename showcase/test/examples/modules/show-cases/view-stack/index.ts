import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("ViewStack","")
				.setMarginTopExample(50)
		);
		
		this.append(
			new DefaultModuleWindow("Exemplo simples","Criando viewstack e mudando o índice.")
				.loadExample("examples/modules/show-cases/view-stack/view-stack-showcase","ViewStackShowcase")
		);

		this.append(
			new DefaultModuleWindow("Usando 'state'","Criando viewstack e mudando o 'state'.")
				.loadExample("examples/modules/show-cases/view-stack/state-showcase","StateShowcase")
		);

		this.append(
			new DefaultModuleWindow("Eventos","Eventos do ViewStack.")
				.loadExample("examples/modules/show-cases/view-stack/events-showcase","EventsShowcase")
		);

	}
}

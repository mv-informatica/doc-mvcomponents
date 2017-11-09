import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Janela de dialogo","")
				.setMarginTopExample(50)
		);
		
		this.append(
			new DefaultModuleWindow("Exemplo simples","Criando abas para destribuir o conteudo.")
				.loadExample("examples/modules/show-cases/splitter/vertical-splitter-showcase","VerticalSplitterShowcase")
		);

		this.append(
			new DefaultModuleWindow("Eventos","Eventos do Dialog.")
				.loadExample("examples/modules/show-cases/splitter/events-showcase","EventsShowcase")
		);

	}
}

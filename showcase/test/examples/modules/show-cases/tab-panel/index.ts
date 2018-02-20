import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Painel de abas","abas.")
				.setMarginTopExample(50)
		);
		
		this.append(
			new DefaultModuleWindow("Exemplo simples","Criando abas para destribuir o conteudo.")
				.loadExample("examples/modules/show-cases/tab-panel/tab-panel-showcase","TabPanelShowcase")
		);

		this.append(
			new DefaultModuleWindow("Adicionando icone","Criando abas para destribuir o conteudo.")
				.loadExample("examples/modules/show-cases/tab-panel/icon-showcase","IconShowcase")
		);

		this.append(
			new DefaultModuleWindow("Fechavel","Criando abas que podem ser fechadas o conteudo.")
				.loadExample("examples/modules/show-cases/tab-panel/notclosable-showcase","NotClosableShowcase")
		);

		this.append(
			new DefaultModuleWindow("Desabilitando uma aba","Criando abas para destribuir o conteudo.")
				.loadExample("examples/modules/show-cases/tab-panel/disable-showcase","DisableShowcase")
		);

		this.append(
			new DefaultModuleWindow("Eventos","Criando abas para destribuir o conteudo.")
				.loadExample("examples/modules/show-cases/tab-panel/events-showcase","EventsShowcase")
		);
	}
}

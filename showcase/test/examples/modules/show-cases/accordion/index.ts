import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Accordion","Conteiner usado para agrupar o layout de campos de um formulário.")
				.setMarginTopExample(50)
		);
		this.append(
			new DefaultModuleWindow("Exemplo simples","Organizando para agrupar outros containers.")
				.loadExample("test/examples/modules/show-cases/accordion/accordion-showcase","AccordionShowcase")
		);
		this.append(
			new DefaultModuleWindow("Alterando icone","Bloqueando um fieldset com o método 'setEnable(false)'.")
				.loadExample("test/examples/modules/show-cases/accordion/icon-showcase","IconShowcase")
		);

		this.append(
			new DefaultModuleWindow("Alterando a posição do icone","Alterando a posição do icone do item do accordion'.")
				.loadExample("test/examples/modules/show-cases/accordion/icon-position-showcase","IconPositionShowcase")
		);

		this.append(
			new DefaultModuleWindow("Desabilitando item","Bloqueando um item do accordion.")
				.loadExample("test/examples/modules/show-cases/accordion/disabled-showcase","DisabledShowcase")
		);

		this.append(
			new DefaultModuleWindow("Eventos","Eventos do accordion.")
				.loadExample("test/examples/modules/show-cases/accordion/events-showcase","EventsShowcase")
		);


	}
}

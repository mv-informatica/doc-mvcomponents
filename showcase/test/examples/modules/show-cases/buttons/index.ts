import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();			

		this.append(
			new DefaultModuleWindow("Simples","Botão de ação simples")
				.loadExample("examples/modules/show-cases/buttons/case-1","ButtonCase")
		);	
		this.append(
			new DefaultModuleWindow("Com ícones","Adicionando ícone ao botão")
				.loadExample("examples/modules/show-cases/buttons/button-with-icon","ButtonWithIcon")
		);
		this.append(
			new DefaultModuleWindow("Cores","Aplicando cor ao botão")
				.loadExample("examples/modules/show-cases/buttons/button-with-color","ButtonWithColor")
		);	
		this.append(
			new DefaultModuleWindow("Eventos","Adicionando evento ao botão")
				.loadExample("examples/modules/show-cases/buttons/button-with-event","ButtonWithEvent")
		);	
		this.append(
			new DefaultModuleWindow("IconButton","Butão icone")
				.loadExample("examples/modules/show-cases/buttons/icon-button-case","IconButtonCase")
		);
	}
}

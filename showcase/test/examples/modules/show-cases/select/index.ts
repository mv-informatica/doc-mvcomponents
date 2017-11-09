import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";
import {EmbedVideo} from "../../default-module-window/embed-video";

import {LinkButton,ELinkTarget} from "mvcomponents/button";

export class Index extends Box{
	constructor(){
		super();	

		this.append(
			new DefaultModuleWindow("Autocomplete","exemplos com autocomplete")
		);

		this.append(
			new LinkButton("documentação completa aqui")
				.addStyleName("text-primary")
				.setCssProperties({marginBottom:"20px"})
				.setSize(12)
				.setURL("https://mv-informatica.github.io/doc-mvcomponents/mvcomponents/1.1.21/module-mvcomponents_input.Select.html")
				.setTarget(ELinkTarget.BLANK)
		);
		
		let tutorialVideo = new EmbedVideo();
		tutorialVideo.videoUrl = "https://player.vimeo.com/video/218790816?color=158e84&title=0&byline=0&portrait=0";
		this.append(tutorialVideo);

		this.append(
			new DefaultModuleWindow("Autocomplete","exemplo simples")
				.loadExample("examples/modules/show-cases/select/select-simple-case","SelectSimpleCase")
		);
		this.append(
			new DefaultModuleWindow("Chave única","Com uma lista de objetos com apenas uma chave")
				.loadExample("examples/modules/show-cases/select/select-one-key-case","SelectOneKeyCase")
		);
		this.append(
			new DefaultModuleWindow("Desabilitado","Autocomplete desabilitado")
				.loadExample("examples/modules/show-cases/select/select-disabled-case","SelectDisabledCase")
		);
		this.append(
			new DefaultModuleWindow("Valor customizado","Valor customizado")
				.loadExample("examples/modules/show-cases/select/select-custom-value-case","SelectCustomValueCase")
		);
		this.append(
			new DefaultModuleWindow("Lista customizada","Lista customizada")
				.loadExample("examples/modules/show-cases/select/select-custom-list-case","SelectCustomListCase")
		);
		this.append(
			new DefaultModuleWindow("Lista multipla","Lista multipla")
				.loadExample("examples/modules/show-cases/select/select-multiple-case","SelectMultipleCase")
		);		
		this.append(
			new DefaultModuleWindow("Eventos","Eventos da lista")
				.loadExample("examples/modules/show-cases/select/select-events-case","SelectEventsCase")
		);
	}
}

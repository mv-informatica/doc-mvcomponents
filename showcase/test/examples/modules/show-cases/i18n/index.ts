import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";
import {EmbedVideo} from "../../default-module-window/embed-video";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Internacionalização","Internacionalização com i18n.")
				.setMarginTopExample(50)
		);
		
		let tutorialVideo = new EmbedVideo();
		tutorialVideo.videoUrl = "https://player.vimeo.com/video/218838412?color=158e84&title=0&byline=0&portrait=0";
		this.append(tutorialVideo);

		this.append(
			new DefaultModuleWindow("Exemplo simples","Configurando e carregando arquivo de idioma.")
				.loadExample("test/examples/modules/show-cases/i18n/i18n-showcase","I18nShowcase")
		);
	}
}

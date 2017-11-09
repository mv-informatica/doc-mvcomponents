import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";
import {EmbedVideo} from "../../default-module-window/embed-video";
import {LinkButton,ELinkTarget} from "mvcomponents/button";

export class Index extends Box{
	constructor(){
		super();	

		this.append(
			new DefaultModuleWindow("Validações","exemplos de validação de campo e formulário.")
		);
		this.append(
			new LinkButton("documentação completa aqui")
					.addStyleName("text-primary")
					.setCssProperties({marginBottom:"20px"})
					.setSize(12)
					.setURL("https://mv-informatica.github.io/doc-mvcomponents/mvcomponents/1.1.21/module-mvcomponents_core.Validations.html")
					.setTarget(ELinkTarget.BLANK)
		);
		let tutorialVideo = new EmbedVideo();
		tutorialVideo.videoUrl = "https://player.vimeo.com/video/218850558?color=158e84&title=0&byline=0&portrait=0";
		this.append(tutorialVideo);

		this.append(
			new DefaultModuleWindow("Validação de campo"
					,"exemplo de validação individual de campo")
				.loadExample("examples/modules/show-cases/validation/validation-simple-case","ValidationSimpleCase")
		);
		this.append(
			new DefaultModuleWindow("Validação de formulário com inscrição"
					,"Se inscrevendo na validação de um formulário. Para que essa validação funcione corretamente é necessário que os campos possuam um nome estabelecido com o método 'setName'.")
				.loadExample("examples/modules/show-cases/validation/validation-form-event-emitter-case","ValidationFormEventEmitterCase")
		);
		this.append(
			new DefaultModuleWindow("Validação de formulário com promise"
					,"Validando um formulário e recebendo o retorno em uma promise. Para que essa validação funcione corretamente é necessário que os campos possuam um nome estabelecido com o método 'setName'.")
				.loadExample("examples/modules/show-cases/validation/validation-form-promise-case","ValidationFormPromiseCase")
		);
		this.append(
			new DefaultModuleWindow("Campo requerido"
					,"Obigando o preenchimento de um campo de formulário")
				.loadExample("examples/modules/show-cases/validation/validation-field-required-case","ValidationFieldRequiredCase")
		);
		this.append(
			new DefaultModuleWindow("Validações pré-definidas"
					,"Utilizando uma validação pré-definida")
				.loadExample("examples/modules/show-cases/validation/validation-field-predefined-case","ValidationFieldPredefinedCase")
		);
		this.append(
			new DefaultModuleWindow("Validação customizada"
					,"Criando uma validação de campo custumizada")
				.loadExample("examples/modules/show-cases/validation/validation-custom-case","ValidationCustomCase")
		);
		this.append(
			new DefaultModuleWindow("Removendo validação customizada"
					,"Removendo uma validação de campo custumizada")
				.loadExample("examples/modules/show-cases/validation/validation-remove-custom-case","ValidationRemoveCustomCase")
		);
	}
}

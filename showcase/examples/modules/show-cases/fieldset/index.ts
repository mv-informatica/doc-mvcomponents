import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("FieldSet","Conteiner usado para agrupar o layout de campos de um formulário.")
				.setMarginTopExample(50)
		);
		this.append(
			new DefaultModuleWindow("Exemplo simples","organizando o layout do formulário.")
				.loadExample("test/examples/modules/show-cases/fieldset/fieldset-showcase","FieldsetShowcase")
		);
		this.append(
			new DefaultModuleWindow("Bloqueando o fieldset","bloqueando um fieldset com o método 'setEnable(false)'.")
				.loadExample("test/examples/modules/show-cases/fieldset/disabled-showcase","DisabledShowcase")
		);
	}
}

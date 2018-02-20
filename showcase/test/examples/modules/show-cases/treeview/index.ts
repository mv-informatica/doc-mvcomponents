import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Treeview","Componente usado para mostrar itens em formato de arvore.")
				.setMarginTopExample(50)
		);
		this.append(
			new DefaultModuleWindow("Exemplo simples","Exemplo de componentes simples.")
				.loadExample("test/examples/modules/show-cases/treeview/basic-case","BasicCase")
		);
		this.append(
			new DefaultModuleWindow("Customizando","Com icones customizados.")
				.loadExample("test/examples/modules/show-cases/treeview/custom-case","CustomCase")
		);
	}
}

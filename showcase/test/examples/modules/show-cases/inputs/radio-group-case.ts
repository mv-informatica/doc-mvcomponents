import {Form,RadioGroup} from "mvcomponents/container";
import {RadioButton} from "mvcomponents/button";

export class RadioGroupCase extends Form<any>{
	constructor(){
		super();

		let grupoDeOpcoes = new RadioGroup("Ativo:");
		grupoDeOpcoes.setName("opcao");
		this.append(grupoDeOpcoes);

		let rbSim = new RadioButton("Sim","s");
		let rbNao = new RadioButton("Não","n");		

		grupoDeOpcoes
			.append(rbSim)
			.append(rbNao);
	}
}

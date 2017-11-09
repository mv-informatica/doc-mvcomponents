import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();
		this.append(
			new DefaultModuleWindow("Progressbar","Barra de progresso simples")
				.loadExample("examples/modules/show-cases/progressbar/progressbar-case1","ProgressbarCase1")
		);
		this.append(
			new DefaultModuleWindow("Cores e estilo","Aplicando cores e estilo")
				.loadExample("examples/modules/show-cases/progressbar/progressbar-case-colors","ProgressbarCaseColors")
		);
		this.append(
			new DefaultModuleWindow("Tamanho","Alterando a largura e altura da barra de progresso")
				.loadExample("examples/modules/show-cases/progressbar/progressbar-case-size","ProgressbarCaseSize")
		);
		this.append(
			new DefaultModuleWindow("Eventos","Eventos da barra de progresso")
				.loadExample("examples/modules/show-cases/progressbar/progressbar-case-events","ProgressbarCaseEvents")
		);
	}
}

import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Popover","exemplo simples")
				.setMarginTopExample(100)
				.loadExample("examples/modules/show-cases/popover/popover-simple-case","PopoverSimpleCase")
		);
		this.append(
			new DefaultModuleWindow("Com título","com título")
				.setMarginTopExample(100)
				.loadExample("examples/modules/show-cases/popover/popover-with-title-case","PopoverWithTitleCase")
		);
		this.append(
			new DefaultModuleWindow("Com botões","Vinculado a um botão e mostrado no evento click")
				.setMarginTopExample(100)
				.loadExample("examples/modules/show-cases/popover/popover-button-case","PopoverButtonCase")
		);
		this.append(
			new DefaultModuleWindow("Aplicando cores","Modificando a cor do título")
				.setMarginTopExample(100)
				.loadExample("examples/modules/show-cases/popover/popover-colors-case","PopoverColorsCase")
		);
	}
}

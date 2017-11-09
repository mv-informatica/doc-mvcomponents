import {Box} from "mvcomponents/container";
import {Popover} from "mvcomponents/widget";

export class PopoverSimpleCase extends Box{
	constructor(){
		super();
		
		let box = new Box().setSize(12);
		this.append(box);
		
		let pop = new Popover("","mostrando popover!");
		box.append(pop);
		pop.show();
	}
}

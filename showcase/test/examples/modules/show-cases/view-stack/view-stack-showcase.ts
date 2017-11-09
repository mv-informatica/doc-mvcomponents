import {ViewStack} from "mvcomponents/container";
import {InputsShowcase} from "../inputs/inputs-showcase";
import {SelectSimpleCase} from "../select/select-simple-case";
import {TileListShowcase} from "../tilelist/tile-list-showcase";

export class ViewStackShowcase extends ViewStack{
	constructor(){
		super();
		this.append(new InputsShowcase());
		this.append(new SelectSimpleCase());
		this.initTransition();
	}
	private initTransition(){
		this.selectedIndex = 0;
		window.setTimeout(() => {
			this.selectedIndex = 1;
		},3000);
	}
}

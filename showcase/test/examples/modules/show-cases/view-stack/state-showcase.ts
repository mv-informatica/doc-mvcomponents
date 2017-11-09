import {ViewStack} from "mvcomponents/container";
import {InputsShowcase} from "../inputs/inputs-showcase";
import {SelectSimpleCase} from "../select/select-simple-case";
import {TileListShowcase} from "../tilelist/tile-list-showcase";

export class StateShowcase extends ViewStack{
	constructor(){
		super();
		this.append(new InputsShowcase(),"state1");
		this.append(new SelectSimpleCase(),"state2");
		this.initTransition();
	}
	private initTransition(){
		this.selectedState = "state1";
		window.setTimeout(() => {
			this.selectedState = "state2";
		},10000);
	}
}

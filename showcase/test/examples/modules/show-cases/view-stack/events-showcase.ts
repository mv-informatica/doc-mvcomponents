import {ViewStack,Box,ButtonGroup} from "mvcomponents/container";
import {InputsShowcase} from "../inputs/inputs-showcase";
import {SelectSimpleCase} from "../select/select-simple-case";
import {TileListShowcase} from "../tilelist/tile-list-showcase";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component"

export class EventsShowcase extends Box{
	constructor(){
		super();
		let view1 = new ViewStack();
		view1.append(new InputsShowcase(),"state1");
		view1.append(new SelectSimpleCase(),"state2");
		let btn1 = new Button("alterar para state2")
		
		view1.selectedState = "state1";
		view1.onChangeState.subscribe(view => {
			let state = view.state === "state1" ? "state2" : "state1" ;
			btn1.setLabel(`alterar para ${state}`);
		});

		btn1.addEvent(EMouseEvent.CLICK,() => {
			view1.selectedState = (view1.selectedState === "state1") ? "state2" : "state1" ;
		});

		this.append(new ButtonGroup().append(btn1));
		this.append(view1);
	}
}

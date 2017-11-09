import {ButtonGroup} from "mvcomponents/container";
import {Button} from "mvcomponents/button";
import {Popover} from "mvcomponents/widget";
import {EMouseEvent} from "mvcomponents/component";

export class PopoverButtonCase extends ButtonGroup{
	constructor(){
		super();
		
		let btn = new Button("click aqui.");
		btn.addEvent(EMouseEvent.CLICK, evt => {
			pop.show();
		});
		this.append(btn);

		let pop = new Popover("Aviso","mostrando popover!")
		btn.append(pop);
	}
}

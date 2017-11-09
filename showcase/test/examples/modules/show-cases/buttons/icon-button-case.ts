import {ButtonGroup} from "mvcomponents/container";
import {IconButton} from "mvcomponents/button";
import {EBasicColorStatus} from "mvcomponents/component";

export class IconButtonCase extends ButtonGroup{
	constructor(){
		super();
		let ib = new IconButton()
			.setIcon("mv-basico-atributo")
			.setColor(EBasicColorStatus.PRIMARY);
		this.append(ib);
	}
}

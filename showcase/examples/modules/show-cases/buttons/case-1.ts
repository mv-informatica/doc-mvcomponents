import {ButtonGroup} from "mvcomponents/container";			
import {Button} from "mvcomponents/button";

export class ButtonCase extends ButtonGroup{
	constructor(){
		super();
		this.append(new Button("normal"));		
	}
}
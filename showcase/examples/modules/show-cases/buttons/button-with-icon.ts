import {ButtonGroup} from "mvcomponents/container";			
import {Button} from "mvcomponents/button";

export class ButtonWithIcon extends ButtonGroup{
	constructor(){
		super();
		let btn1 = new Button("com icone")
			.setIcon("glyphicon glyphicon-lock");
		this.append(btn1);

		let btn2 = new Button("com mv-icons")
			.setIcon("mv-basico-alerta_usuario");
		this.append(btn2);
	}
}
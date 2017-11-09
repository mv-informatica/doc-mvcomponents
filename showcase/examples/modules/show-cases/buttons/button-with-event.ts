import {ButtonGroup} from "mvcomponents/container";			
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";
import {EBasicColorStatus} from "mvcomponents/component";

export class ButtonWithEvent extends ButtonGroup{
	constructor(){
		super();
		let btn1 = new Button("clique aqui!")
			.setIcon("mv-basico-desempenho_bom");
		btn1.addEvent(EMouseEvent.CLICK,evt => {
			alert('evento de click!');
		});
		this.append(btn1);

		let btn2 = new Button("passe o mouse!")
			.setColor(EBasicColorStatus.INFO)
			.setIcon("mv-basico-retornar_situacao");
		btn2.addEvent(EMouseEvent.MOUSEOVER,evt => {
			btn2.setColor(EBasicColorStatus.SUCCESS);
		});
		btn2.addEvent(EMouseEvent.MOUSEOUT,evt => {
			btn2.setColor(EBasicColorStatus.INFO);
		});
		this.append(btn2);
	}
}
import {ButtonGroup} from "mvcomponents/container";			
import {Button} from "mvcomponents/button";
import {EBasicColorStatus} from "mvcomponents/component";

export class ButtonWithColor extends ButtonGroup{
	constructor(){
		super();
		let btn1 = new Button("danger")
			.setIcon("mv-basico-dados_demograficos")
			.setColor(EBasicColorStatus.DANGER);
		this.append(btn1);

		let btn2 = new Button("success")
			.setIcon("mv-basico-notificacao_email")
			.setColor(EBasicColorStatus.SUCCESS);
		this.append(btn2);

		let btn3 = new Button("info")
			.setIcon("mv-basico-calendario")
			.setColor(EBasicColorStatus.INFO);
		this.append(btn3);

		let btn4 = new Button("primary")
			.setIcon("mv-basico-atributo")
			.setColor(EBasicColorStatus.PRIMARY);
		this.append(btn4);

		let btn5 = new Button("warning")
			.setIcon("mv-basico-aviso_visualizar")
			.setColor(EBasicColorStatus.WARNING);
		this.append(btn5);
	}
}

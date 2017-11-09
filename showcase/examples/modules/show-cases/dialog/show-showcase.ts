import {Button} from "mvcomponents/button";
import {Box,Dialog} from "mvcomponents/container";
import {EMouseEvent} from "mvcomponents/component";
import {FieldsetShowcase} from "../fieldset/fieldset-showcase";

export class ShowShowcase extends Box{
	constructor(){
		super();
		this.setSize(12);
		this.buildDialog1();
	}
	private buildDialog1(){
		let dialog1 = new Dialog("Wellcome");

		let btn1 = new Button("exibir");
		btn1.addEvent(EMouseEvent.CLICK,evt => {
			btn1.setEnable(false);
			btn1.setLabel("exibindo!!!");			
			dialog1.show();
		});
		this.append(btn1);
		
		dialog1.onClose.subscribe(() => {
			btn1.setEnable(true);
			btn1.setLabel("exibir");
		});
	}
}

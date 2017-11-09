import {Box,Dialog} from "mvcomponents/container";
import {FieldsetShowcase} from "../fieldset/fieldset-showcase";
import {Label} from "mvcomponents/widget";

export class DialogShowcase extends Box{
	constructor(){
		super();
		this.setSize(12);

		let dialodAuto = new Dialog("Wellcome",true);
		dialodAuto.append(new Box().append(new Label("Exemplo modal.")));
		dialodAuto.show();
	}
}

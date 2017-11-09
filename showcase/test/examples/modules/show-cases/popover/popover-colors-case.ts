import {Box} from "mvcomponents/container";
import {Popover} from "mvcomponents/widget";
import {EBasicColorStatus} from "mvcomponents/component";

export class PopoverColorsCase extends Box{
	constructor(){
		super();
		
		let btInfo = new Box().setSize(3);
		this.append(btInfo);
		let popInfo = new Popover("Aviso","mostrando popover!");
		popInfo.setColor(EBasicColorStatus.INFO);
		popInfo.show();
		btInfo.append(popInfo);

		let btDanger = new Box().setSize(3);
		this.append(btDanger);
		let popDanger = new Popover("Aviso","mostrando popover!");
		popDanger.setColor(EBasicColorStatus.DANGER);
		popDanger.show();
		btDanger.append(popDanger);

		let btSuccess = new Box().setSize(3);
		this.append(btSuccess);
		let popSuccess = new Popover("Aviso","mostrando popover!");
		popSuccess.setColor(EBasicColorStatus.SUCCESS);
		popSuccess.show();
		btSuccess.append(popSuccess);

		let btWarning = new Box().setSize(3);
		this.append(btWarning);
		let popWarning = new Popover("Aviso","mostrando popover!");
		popWarning.setColor(EBasicColorStatus.WARNING);
		popWarning.show();
		btWarning.append(popWarning);

	}
}

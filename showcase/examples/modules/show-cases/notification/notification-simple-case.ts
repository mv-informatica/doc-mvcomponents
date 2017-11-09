import {ButtonGroup} from "mvcomponents/container";
import {ToastService} from "mvcomponents/widget";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";

export class NotificationSimpleCase extends ButtonGroup{
	constructor(){
		super();
		let  bt = new Button("mostrar notificação");
		bt.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.info({message:"Nova mensagem!!!"})
				.show();
		});	
		this.append(bt);
	}
}

import {ButtonGroup} from "mvcomponents/container";
import {ToastService} from "mvcomponents/widget";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";

export class NotificationTypesCase extends ButtonGroup{
	constructor(){
		super();
		let  btInfo = new Button("mostrar informação").setIcon("mv-basico-alerta");
		btInfo.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.info({message:"Nova mensagem!!!"})
				.show();
		});	
		this.append(btInfo);


		let  btSuccess = new Button("mensagem de sucesso").setIcon("mv-basico-confirmar");
		btSuccess.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.success({message:"Nova mensagem!!!"})
				.show();
		});	
		this.append(btSuccess);

		let  btErro = new Button("mensagem de erro").setIcon("mv-basico-erro");
		btErro.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.error({message:"Nova mensagem!!!"})
				.show();
		});	
		this.append(btErro);

		let  btWarning = new Button("mensagem de aviso").setIcon("mv-basico-aviso");
		btWarning.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.warn({message:"Nova mensagem!!!"})
				.show();
		});	
		this.append(btWarning);
	}
}

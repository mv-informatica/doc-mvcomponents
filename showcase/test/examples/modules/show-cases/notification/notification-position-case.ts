import {ButtonGroup} from "mvcomponents/container";
import {ToastService,EToastPosition} from "mvcomponents/widget";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";

export class NotificationPositionCase extends ButtonGroup{
	constructor(){
		super();
		let  btInfo = new Button("canto superior centro").setIcon("mv-basico-seta_cima");
		btInfo.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.info({message:"Nova mensagem!!!",position:EToastPosition.TOP_CENTER})
				.show();
		});	
		this.append(btInfo);


		let  btSuccess = new Button("canto superior direita").setIcon("mv-basico-subir");
		btSuccess.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.success({message:"Nova mensagem!!!",position:EToastPosition.TOP_RIGHT})
				.show();
		});	
		this.append(btSuccess);

		let  btErro = new Button("canto inferior esquerdo").setIcon("mv-basico-descer");
		btErro.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.error({message:"Nova mensagem!!!",position:EToastPosition.BOTTOM_LEFT})
				.show();
		});	
		this.append(btErro);

		let  btWarning = new Button("canto inferior centro").setIcon("mv-basico-seta_baixo");
		btWarning.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.warn({message:"Nova mensagem!!!",position:EToastPosition.BOTTOM_CENTER})
				.show();
		});	
		this.append(btWarning);

		let  btBottomRight = new Button("canto inferior direito").setIcon("mv-basico-seta_direita");
		btBottomRight.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.info({message:"Nova mensagem!!!",position:EToastPosition.BOTTOM_RIGHT})
				.show();
		});	
		this.append(btBottomRight);

		let  btTopRight = new Button("canto inferior esquerdo").setIcon("mv-basico-seta_esquerda");
		btTopRight.addEvent(EMouseEvent.CLICK, evt => {
			ToastService
				.info({message:"Nova mensagem!!!",position:EToastPosition.BOTTOM_LEFT})
				.show();
		});	
		this.append(btTopRight);
	}
}

import {Box} from "mvcomponents/container";
import {DefaultModuleWindow} from "../../default-module-window/default-module-window";

export class Index extends Box{
	constructor(){
		super();	
		this.append(
			new DefaultModuleWindow("Notificação","exemplo simples")
				.loadExample("examples/modules/show-cases/notification/notification-simple-case","NotificationSimpleCase")
		);
		this.append(
			new DefaultModuleWindow("Alterando o tipo","alterando o tipo de nofificação")
				.loadExample("examples/modules/show-cases/notification/notification-types-case","NotificationTypesCase")
		);
		this.append(
			new DefaultModuleWindow("Alterando o posicionamento","alterando a posição da nofificação")
				.loadExample("examples/modules/show-cases/notification/notification-position-case","NotificationPositionCase")
		);
	}
}

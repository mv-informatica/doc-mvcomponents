import {Box} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";
import {EventEmitter,IEventSubscribe} from "mvcomponents/core";
import {IModuleCreateEvent,IModuleDestroyEvent} from "mv-workspace";

export class EventEmitterShowcase extends Box implements IModuleCreateEvent,IModuleDestroyEvent{
	private inscs:IEventSubscribe[];
	public onTest = new EventEmitter<string>();	
	constructor(){
		super();
		this.inscs = [];
	}
	onCreate(){		
		this.inscs
			.push(
				this.onTest.subscribe(msg => this.append(new Label("recebendo mensagem - "+msg)))
			);
		this.onTest.emit('mensagem 1!');		
	}
	onDestroy(){
		//evitando problemas de "memory-leak"
		//cancelando as inscrições do módulo quando a tela for destruida
		this.inscs.forEach(insc => insc.cancel());
		//limpando todos inscritos
		this.onTest.unsubscribeAll();
	}
}
import {Box} from "mvcomponents/container";
import {ProgressBar} from "mvcomponents/widget";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";

export class ProgressbarCaseEvents extends Box{
	constructor(){
		super();
		let pb = new ProgressBar(15);
		pb.onProgress.subscribe(vl => {
			if(vl === 100){
				alert('progresso completo');
				window.setTimeout(() => pb.setProgress(0));
			}
		});
		this.append(pb);

		let btn = new Button("Aperte-me");
		btn.addEvent(EMouseEvent.CLICK, evt => {
			pb.setProgress(100);
		});
		this.append(btn);

	}
}

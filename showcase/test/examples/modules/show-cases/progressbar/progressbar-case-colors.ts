import {Box} from "mvcomponents/container";
import {ProgressBar,EProgressStyle} from "mvcomponents/widget";
import {EBasicColorStatus} from "mvcomponents/component"

export class ProgressbarCaseColors extends Box{
	constructor(){
		super();
		let pbInfo = new ProgressBar(15);
		pbInfo.setColor(EBasicColorStatus.INFO);
		this.append(pbInfo);

		let pbDanger = new ProgressBar(30);
		pbDanger
			.setColor(EBasicColorStatus.DANGER)
			.setStyle(EProgressStyle.STRIPED);
		this.append(pbDanger);

		let pbPrimary = new ProgressBar(45);
		pbPrimary.setColor(EBasicColorStatus.PRIMARY);
		this.append(pbPrimary);

		let pbSuccess = new ProgressBar(60);
		pbSuccess.setColor(EBasicColorStatus.SUCCESS);
		this.append(pbSuccess);

		let pbWarning = new ProgressBar(75);
		pbWarning.setColor(EBasicColorStatus.WARNING);
		this.append(pbWarning);
	}
}

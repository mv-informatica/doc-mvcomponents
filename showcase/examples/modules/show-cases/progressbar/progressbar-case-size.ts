import {Box} from "mvcomponents/container";
import {ProgressBar} from "mvcomponents/widget";

export class ProgressbarCaseSize extends Box{
	constructor(){
		super();
		let pbFull = new ProgressBar(15);
		pbFull.setSize(12)
		this.append(pbFull);

		let pbSix = new ProgressBar(30);
		pbSix.setSize(6)
		this.append(pbSix);

		let pbHeight = new ProgressBar(45);
		pbHeight.setHeight("5px");
		this.append(pbHeight);
	}
}

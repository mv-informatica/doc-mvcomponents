import {Box} from "mvcomponents/container";
import {ProgressBar} from "mvcomponents/widget";

export class ProgressbarCase1 extends Box{
	constructor(){
		super();
		let pb = new ProgressBar(25);
		this.append(pb);
	}
}

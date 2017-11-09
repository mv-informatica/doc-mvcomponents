import {Box} from "mvcomponents/container";

export class DisableCase extends Box{
	constructor(){
		super();
		let box1 = new Box();
		box1
			.setEnable(false)
			.setSize(2)
			.setCssProperties({"background-color":"#4d7498",height:"100px"});
		this.append(box1);
	}
}

import {Box} from "mvcomponents/container";
import {EViewSize} from "mvcomponents/component";

export class BoxShowcase extends Box{
 	constructor(){
 		super();
 		this.buildBox1();
 		this.buildBox2();
 	}

 	private buildBox1(){
 		let box1 = new Box();
 		box1
 			.setSize(3)
 			.setCssProperties({"background-color":"#4d7498",height:"100px"});
 		this.append(box1);
 	}

 	private buildBox2(){
 		let box2 = new Box();
 		box2
 			.setSize(9)
 			.setSize(3,EViewSize.MEDIUM)
 			.setCssProperties({"background-color":"#c3953c",height:"100px"});
 		this.append(box2);
 	}
}

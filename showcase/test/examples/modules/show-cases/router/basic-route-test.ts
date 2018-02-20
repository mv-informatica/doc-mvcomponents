import {Box} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";

export class BasicRouteTest extends Box{
	private id:number;
	private desc:string;
	constructor(){
		super();
		this.setSize(12)
		this.setCssProperties({backgroundColor: `#${((Math.floor((Math.random() * 1000000))+1000000)+"").substring(1,7)}`, height:"100%"});
	}
	private onCreate(){
		this
			.append(
				new Label(`id:${this.id} - desc:${this.desc}`).setCssProperties({color:"#fff"})
			);	
	}
}

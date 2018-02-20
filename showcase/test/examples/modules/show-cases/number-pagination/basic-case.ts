import {Box} from "mvcomponents/container";
import {NumberPagination} from "mvcomponents/widget";

export class BasicCase extends Box{
	constructor(){
		super();
		this.buildTreeview();
	}
	private buildTreeview(){
		let box1 = new Box();
		box1
			.setSize(12);
		this.append(box1);

		let numberPag = new NumberPagination({
			count:50
		});

		let numberPag2 = new NumberPagination({
			count:50
			,visiblePages:10
		});

		box1
			.append(numberPag)
			.append(numberPag2);

	}
}

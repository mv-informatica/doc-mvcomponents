import {Box} from "mvcomponents/container";
import {TreeView, INodeTreeView} from "mvcomponents/treeview";

export class BasicCase extends Box{
	constructor(){
		super();
		this.buildTreeview();
	}
	private buildTreeview(){
		let box1 = new Box();
		box1
			.setSize(3)
			.setCssProperties({"background-color":"#EEE",height:"200px"});
		this.append(box1);

		let treeview = new TreeView();
		box1.append(treeview);


		treeview.setNodes([
			{
				id:1
				,text:"folder 1"
			}
			,{
				id:2
				,text:"folder 2"
				,children:[
					{id:21,text:"folder a"}
					,{id:22,text:"folder b"}
					,{id:23,text:"folder c"}
				]
			}
			,{
				id:3
				,text:"folder 3"
			}
		]);
	}
}

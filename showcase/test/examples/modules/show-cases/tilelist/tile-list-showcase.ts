import {TileList} from "mvcomponents/tilelist";
import {Box,Form,ButtonGroup} from "mvcomponents/container";
import {Button} from "mvcomponents/button";
import {NumericStepper} from "mvcomponents/input";
import {EMouseEvent,EVerticalAlign,EInputEvent} from "mvcomponents/component";

export class TileListShowcase extends Box{
	constructor(){
		super();
		this.setSize(12);

		let myForm:Form<any> = new Form();
		myForm.setSize(12);
		this.append(myForm);

		

		let nsIndex:NumericStepper = new NumericStepper();

		myForm.append(nsIndex);
		
		let btnLoad = new Button("refresh").setIcon("glyphicon glyphicon-circle-arrow-down");
		myForm.append(new ButtonGroup().setSize(3).append(btnLoad.setVerticalAlign(EVerticalAlign.BOTTOM)));


		let listView:TileList<any> = new TileList({urlTemplate:"test/examples/modules/show-cases/tilelist/template/tile-list-showcase.template"});
		myForm.append(listView);




		btnLoad.addEvent(EMouseEvent.CLICK,()=>{

			listView.setData([
				{id:1,name:"Simple user case",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-user"}
				,{id:2,name:"Estudant user variant",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-education"}
				,{id:3,name:"Super user root admin",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-king"}
				,{id:4,name:"Executive user profile",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-briefcase"}
				,{id:1,name:"Simple user case",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-user"}
				,{id:2,name:"Estudant user variant",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-education"}
				,{id:3,name:"Super user root admin",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-king"}
				,{id:4,name:"Executive user profile",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-briefcase"}
				,{id:1,name:"Simple user case",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-user"}
				,{id:2,name:"Estudant user variant",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-education"}
				,{id:3,name:"Super user root admin",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-king"}
				,{id:4,name:"Executive user profile",desc:"sub description of item TEST1",icon:"glyphicon glyphicon-briefcase"}
			]);
			nsIndex.setMax(listView.getData().length-1);
			nsIndex.incrementHandler.setDisabled(false);
			nsIndex.decrementHandler.setDisabled(false);
			listView.clearSelecteds();
		});
		//listView.onSelectItem.unsubscribe
		listView.onSelectItem.subscribe(item=>{
			console.log(item);
			nsIndex.setValue(listView.index);
		});


		nsIndex
			.setLabel("Change index:")
			.setSize(2)
			.setStep(1)
			//.setEnable(false)
			.setMax(0)
			.setMin(0)
			.setValue(0)
			.addEvent(EInputEvent.CHANGE,()=>{
				if(listView.index != nsIndex.getValue()){
					listView.index = nsIndex.getValue();
				};				
			});


		listView
			.setSize(12)
			.setHeight(220);

		listView.onScrolledToBottom.once(on => {
			listView
				.addParams({"param1":"title test"})
				.refresh();
		})

	}
}
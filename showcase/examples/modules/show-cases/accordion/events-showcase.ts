import {Box,Form,Accordion,ButtonGroup} from "mvcomponents/container";
import {Label,Alert} from "mvcomponents/widget";
import {Button} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";

export class EventsShowcase extends Box{
	constructor(){
		super();
		this.setSize(12);
		this.buildAccordion1();
	}
	private buildAccordion1(){

		let alerts = new Alert();
		this.append(alerts);

		let accordion:Accordion = new Accordion().setSize(6);
		this.append(accordion);
		
		let lbTest:Label = new Label("Accordion A txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj")
									.setCssProperties({"fontWeight":"normal"});
		let frTest:Form<any> = new Form();
		frTest.append(lbTest);

		let lbTest2:Label = new Label("Expand canceled txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js")
									.setCssProperties({"fontWeight":"normal"});
		let frTest2:Form<any> = new Form();
		frTest2.append(lbTest2);

		
		let lbTest3:Label = new Label("Usando Prepend! txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js")
									.setCssProperties({"fontWeight":"normal"});
		let frTest3:Form<any> = new Form();
		frTest3.append(lbTest3);

		accordion
			.append(frTest,{"title":"Accordion A"})
			.append(frTest2,{"title":"Accordion B"})
			.append(frTest3,{"title":"Accordion C"});
	

		let btnGroup = new ButtonGroup().setSize(12);
		this.append(btnGroup);

		let btnExpandAll = new Button("Expandir");
		btnExpandAll.addEvent(EMouseEvent.CLICK,() => {
			accordion.expandAll();
		});
		btnGroup.append(btnExpandAll);

		let btnCollapseAll = new Button("Recolher");
		btnCollapseAll.addEvent(EMouseEvent.CLICK,() => {
			accordion.collapseAll();
		});
		btnGroup.append(btnCollapseAll);

		accordion.onExpand.subscribe(item => {
			alerts.setText(`item '${item.title}' expandido!`);
		});

		accordion.onCollapse.subscribe(item => {
			alerts.setText(`item '${item.title}' recolhido!`);
		});
	}
}

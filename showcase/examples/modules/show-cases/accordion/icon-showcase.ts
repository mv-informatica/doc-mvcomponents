import {Box,Form,Accordion} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";

export class IconShowcase extends Box{
	constructor(){
		super();
		this.setSize(12);
		this.buildAccordion1();
	}
	private buildAccordion1(){
		let accordion:Accordion = new Accordion().setSize(6);
		this.append(accordion);
		
		let lbTest:Label = new Label("Titulo Accordion A txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj").setCssProperties({"fontWeight":"normal"});
		let frTest:Form<any> = new Form();
		frTest.append(lbTest);

		accordion
			.append(frTest,
							{
								"title":"Titulo Accordion A"
								,expandIcon:"glyphicon glyphicon-folder-open"
								,collapseIcon:"glyphicon glyphicon-folder-close"
							});
	
	}
}

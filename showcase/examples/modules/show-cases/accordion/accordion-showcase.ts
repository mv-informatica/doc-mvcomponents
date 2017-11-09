import {Box,Form,Accordion} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";

export class AccordionShowcase extends Box{
	constructor(){
		super();
		this.setSize(12);
		this.buildAccordion1();
	}
	buildAccordion1(){
		let accordion:Accordion = new Accordion().setSize(6);
		this.append(accordion);
		
		let lbTest:Label = new Label("Usando Accordion A txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj");
		let frTest:Form<any> = new Form();
		frTest.append(lbTest);

		accordion
			.append(frTest,{"title":"Titulo Accordion A"})

		accordion.collapseAll();
	}
}

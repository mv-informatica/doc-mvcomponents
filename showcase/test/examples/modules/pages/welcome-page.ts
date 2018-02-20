import {Render,ICustomComponent} from "mvcomponents/core";

@Render({templateUrl:"examples/modules/pages/welcome-page.template"})
export class WelcomePage implements ICustomComponent{
	constructor(){
/*
		let lblTitle = new Label("Novo no MVComponents?")
							.addStyleName("h1 text-primary");
		this.append(lblTitle);

		let lblDesc = new Label("Antes de começar, talvez seja útil dar uma olhada em algumas coisas que preparamos para te ajudar:")
							.setCssProperties({"font-weight":"normal"});		
		this.append(lblDesc);
*/
	}
	attached(){}
}

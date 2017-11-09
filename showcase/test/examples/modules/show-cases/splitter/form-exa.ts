import {Form} from "mvcomponents/container";
import {EBasicColorStatus,EViewSize} from "mvcomponents/component";
import {TextInput,DatePickerInput,TextArea} from "mvcomponents/input";
import {Label} from "mvcomponents/widget";
import {IconButton} from "mvcomponents/button";
import {Separator} from "mvcomponents/separator";

export class FormExa extends Form<any>{
	constructor(){
		super();
		this
            .append(new Label("FORM PADRAO TESTE"))
            .append(new Separator().setColor("#3b7e92").setSize(12))
            .append(new TextInput().setLabel("nome:").setSize(8).setSize(12,EViewSize.SMALL,EViewSize.EXTRA_SMALL))
            .append(new DatePickerInput().setLabel("data").setSize(4))
            .append(new TextInput().setLabel("txt").setSize(6))
            .append(new TextArea().setLabel("obs").setSize(12))
            .append(new IconButton().setIcon("glyphicon glyphicon-ok").setColor(EBasicColorStatus.INFO)); 
        this.setCssProperties({"height":"300px"});
	}
}

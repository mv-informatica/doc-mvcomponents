import {Box,Tab,TabPanel} from "mvcomponents/container";
import {SelectSimpleCase} from "../select/select-simple-case";
import {InputsShowcase} from "../inputs/inputs-showcase";
import {EBasicColorStatus} from "mvcomponents/component";
import {Alert} from "mvcomponents/widget";

export class EventsShowcase extends Box{
    constructor(){
        super();
        this.build();
    }
    private build(){
        let alert1 = new Alert("Eventos");
        this.append(alert1);

        let tabPanel = new TabPanel().setSize(12);

        let tab = new Tab("test1");
        tab.setContent(new SelectSimpleCase());
        tabPanel.append(tab);        

        let tab2 = new Tab("test2");
        tab2.setContent(new InputsShowcase());
        tabPanel.append(tab2);

        this.append(tabPanel);

        tabPanel.onChange.subscribe(tab => {
        	alert1.setText(`alterado para "${tab.getTitle()}"`);
        });

        tab2.onActive.subscribe(() => { 
        	alert1.setText(`"${tab2.getTitle()}" ativada!`);
        });
    }
}

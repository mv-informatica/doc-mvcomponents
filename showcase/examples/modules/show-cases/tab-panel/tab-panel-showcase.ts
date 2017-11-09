import {Box,Tab,TabPanel} from "mvcomponents/container";
import {SelectSimpleCase} from "../select/select-simple-case";
import {InputsShowcase} from "../inputs/inputs-showcase";

export class TabPanelShowcase extends Box{
    constructor(){
        super();
        this.build();
    }
    private build(){
        let tabPanel = new TabPanel().setSize(12);

        let tab = new Tab("test1");
        tab.setContent(new SelectSimpleCase());
        tabPanel.append(tab);        

        let tab2 = new Tab("test2");
        tab2.setContent(new InputsShowcase());
        tabPanel.append(tab2);
        
        this.append(tabPanel);
    }
}

import {VerticalSplitter,Box} from "mvcomponents/container";
import {FormExa} from "./form-exa";

export class VerticalSplitterShowcase extends Box{
    constructor(){
        super();
        this.setSize(12);
        this.build();
    }
    private build(){
        let vsplitter:VerticalSplitter = new VerticalSplitter();
        let tmpbox:Box = new Box();
        tmpbox.setCssProperties({"background-color":"#c5d5e4","height":"400px"});

        let tmpbox3:Box = new Box();
        tmpbox3.setCssProperties({"background-color":"#47b38b","height":"400px"});

        vsplitter.setSize(12);
        vsplitter.append(tmpbox,{
            size:2
            ,minSize:0
            ,stepSize:2
            ,maxSize:2
        }).append(new FormExa(),{
            size:5
            ,minSize:3
            ,stepSize:1
        }).append(tmpbox3);
        this.append(vsplitter);
    }
}


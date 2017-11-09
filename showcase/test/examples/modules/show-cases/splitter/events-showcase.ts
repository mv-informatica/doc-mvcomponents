import {VerticalSplitter,Box} from "mvcomponents/container";
import {} from "mvcomponents/widget";
import jquery = require("jquery");


export class EventsShowcase extends Box{
    constructor(){
        super();
        this.setSize(12);
        this.build();
    }
    private build(){
        let vsplitter:VerticalSplitter = new VerticalSplitter();
        let tmpbox:Box = new Box();
        tmpbox.setCssProperties({"background-color":"#c5d5e4","height":"200px"});

        let tmpbox2:Box = new Box();
        tmpbox2.setCssProperties({"background-color":"#47b38b","height":"200px"});

        vsplitter.setSize(12);
        vsplitter
        	.append(tmpbox,{
	            size:4
	            ,minSize:2
	            ,stepSize:2
	            ,maxSize:4
        	})
        	.append(tmpbox2,{
	            size:8
	            ,minSize:4
	            ,stepSize:1
        	});
        this.append(vsplitter);
    }
}


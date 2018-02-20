import "./assets/nav-info.css!";
import {Render,ICustomComponent} from "mvcomponents/core";

@Render({
    templateUrl:"examples/structure/nav-info/assets/nav-info.template"
})
export class NavInfo implements ICustomComponent{
    private loaded:boolean;
    constructor(){
    }
    private refresh():void{
        (<ICustomComponent>this).refreshRender();
    }
    attached():void{
        setTimeout(()=>{
            this.loaded = true;
            this.refresh();
        },1200);
    }
}

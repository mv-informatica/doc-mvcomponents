import "./assets/system-info.css!";
import {Render,ICustomComponent} from "mvcomponents/core";
import moment = require("moment");

export interface ISystemInfo{
     companyName?:string
    ,userName?:string
    ,language?:string
    ,version?:string
    ,serverTime?:number
    ,refreshTime?:number 
}

@Render({
    templateUrl:"examples/structure/system-info/assets/system-info.template"
})
export class SystemInfo implements ICustomComponent,ISystemInfo{
    public companyName:string;
    public userName:string;
    public language:string;
    public serverTime:number;
    public version:string;
    public refreshTime:number;
    constructor(config?:ISystemInfo){

        let config_merged:ISystemInfo = Object.assign({},{
            companyName:""
            ,userName:""
            ,language:""
            ,version:""
            ,serverTime:new Date().getTime()
            ,refreshTime:30000
        },config);
        
        this.companyName = config_merged.companyName;
        this.userName = config_merged.userName;
        this.language = config_merged.language;
        this.version = config_merged.version;
        this.serverTime = config_merged.serverTime;
        this.refreshTime = config_merged.refreshTime;
        
    }
    private getTimeDisplay():string{
        this.serverTime+=this.refreshTime;
        return moment(new Date(this.serverTime)).format("DD/MM/YYYY HH:mm");  
    }
    attached():void{
        (<ICustomComponent>this).setStyleName("hidden-xs col-md-12 system-info");
    }
}
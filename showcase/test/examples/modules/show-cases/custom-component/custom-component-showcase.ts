import {Render,ICustomComponent} from "mvcomponents/core";

@Render({
    templateUrl:"js/teste/custom_element/hello_world"
})
class MyCustomComponent implements ICustomComponent{
    private name:string;
    private description:string;
    constructor(){
        this.name = "ops!";
        this.description = "my first component";
    }
    attached():void{
    }
}





import macrocomp = require("../custom_element/macro-comp");
import {MicroComp} from "./micro-comp";
import jquery = require("jquery");

@Render({
    templateUrl:"js/teste/custom_element/hello_world"
})
export class HelloWorldComp implements ICustomComponent{
    public element: HTMLElement;
    public message:string;
    private messages:string[];
    private todos:{id:number,text:string}[];
    private inputs:string[];
    constructor(){
        this.message = "okkk";
        this.messages = [];
        this.todos = [
            {id:1,text:'ops'}
            ,{id:2,text:'ops 2'}
            ,{id:3,text:'ops 3'}
            ,{id:4,text:'ops 4'}
            ,{id:5,text:'ops 5'}
        ];

       this.inputs =  [];
    }

    private addTodo(msg: string) {
        this.todos.push({
            id: new Date().getTime(),
            text: msg
        });
        this.refresh();
    }

    private microRender(data:any):string{
        //console.log(data);
        let fnName:string = Object.keys(macrocomp)[0];        
        //macrocomp[fnName]
        macrocomp[fnName](data);
        //macrocomp.macroComp();
        //return data.id+ "-"+ data.text;
        return "";
    }

    attached():void{
        //console.log(this);
        this.testmacrocomp();
    }

    private testmacrocomp():void{
        let ncomp = new MicroComp();
        //jquery("body:first").append((<any>ncomp).element);
        jquery(this.element).find(".container-test:first").append((<any>ncomp).element);
        console.log((<any>ncomp));

    }

    private refresh():void{
        (<ICustomComponent>this).refreshRender();
    }

    private generateRecords():void{
        this.inputs =  Array(6000).join("a-").split("-");
        this.refresh();
    }
    
    private addMessage(msg:string):void{
        if(msg){
            this.messages.push(msg);
        };        
    }
}



import {workspaceDispatch,IModuleCreateEvent,IModuleStopEvent,IModuleRestartEvent,IModuleDestroyEvent} from "mv-workspace";
import {ViewPager} from "mvcomponents/container";
import jquery = require("jquery");
declare let require:any;

interface IArea extends IModuleCreateEvent, IModuleStopEvent, IModuleRestartEvent,ViewPager{

}

interface IAreaInstance{
    name:string;
    path:string;
    instance?:IArea;
    visible?:boolean;
}

export class AreaManager{
    private areaInstances:IAreaInstance[];
    constructor(){
        this.areaInstances=[];
        this.init();
    }
    private init(){
        workspaceDispatch.onRegisterArea.subscribe(area => this.register(area));
        workspaceDispatch.onChangeArea.subscribe(area => this.loadArea(area));
        //inserindo documento dentro do body para capturar width e height máximo da página.
        jquery('<div id="bottom_element_position">').css({
            position:"fixed"
            ,top:"0px"
            ,left:"0px"
            ,right:"0px"
            ,bottom:"0px"
            ,backgrounColor:"red"
            ,zIndex:-1
            ,visibility:"hidden"
        }).appendTo('body:first');
        window.onresize = ()=>{
            this.calcWindowSize();
        }
    }
    private calcWindowSize(){       
        let rect = jquery('#bottom_element_position')[0].getBoundingClientRect();
        workspaceDispatch.onResize.emit({
            width:rect.right,height:rect.bottom
        });       
    }
    private register(area:IAreaInstance){
        //verifica se já tem uma área registrada com o mesmo alias para não duplicar as instâncias das áreas.
        if(!this.areaInstances.some(area_item => area_item.name == area.name )){
            this.areaInstances.push(area);
        };        
    }
    private hideAreas(p_area:{name:string}):Promise<boolean>{
        return new Promise((success,fail) => {
            let areasToHide = this
                .areaInstances
                .filter(area_item => area_item.name != p_area.name && area_item.visible && area_item.instance);
                
            areasToHide.forEach((area_item,indx) => {
                area_item.visible = false;               
                if(area_item.instance.onStop){
                    area_item.instance.onStop();                    
                }
                //area_item.instance.setVisible(false);
                area_item.visible = false;
                jquery(area_item.instance.element).fadeOut("fast",() => {
                    area_item.instance.setVisible(false); 
                    if(indx==0){
                        success(true);
                    }                    
                });
            });  
            if(!areasToHide.length){
                window.setTimeout(() => success(true) ,200)
            }                    
        });
    }
    private loadArea(p_area:{name:string,params?:{}}){        
        this.hideAreas(p_area).then(ok => {
            this.areaInstances
            .filter(area_item => area_item.name == p_area.name)
            .forEach(area_item => {
                if(area_item.instance){
                    if(area_item.instance.onRestart){
                         area_item.instance.onRestart(p_area.params);
                    }
                    //area_item.instance.setVisible(true);
                    jquery(area_item.instance.element).fadeIn("normal",() => area_item.instance.setVisible(true));
                    area_item.visible = true;
                    this.calcWindowSize();
                }else{
                    require([area_item.path], (_area_mod:IArea) => {
                        let moduleName:string = area_item.path.substring(area_item.path.lastIndexOf("/")+1,area_item.path.length); 
                        moduleName = moduleName
                                        .toLowerCase()
                                        .replace(
                                            /-(.)/g,
                                            (match, group1)=>{
                                            return group1.toUpperCase();
                                            }
                                        )
                                        .replace(/(^\w)/g,(p0,p1)=>p1.toUpperCase());
                        area_item.instance = new _area_mod[moduleName]();
                        area_item.instance.setVisible(false);
                        area_item.instance.appendTo("body:first");
                        if(area_item.instance.onCreate){
                            area_item.instance.onCreate(p_area.params);
                        }
                        area_item.visible = true;
                        this.calcWindowSize();
                        //area_item.instance.setVisible(true);
                        jquery(area_item.instance.element).fadeIn("normal",() => area_item.instance.setVisible(true));
                    });
                }
            });
        })


    }
}

export default new AreaManager();
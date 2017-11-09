import {TreeGrid, ITreeGridRow} from "mvcomponents/treegrid";
import {Box,ButtonGroup} from "mvcomponents/container";
import {Button} from "mvcomponents/button";
import {NumericStepper,CheckBox} from "mvcomponents/input";
import statusRender = require("./template/treegrid-showcase-status");
import {$http} from "mvcomponents/http";

import moment = require("moment");
import {EMouseEvent, EViewSize,EVerticalAlign} from "mvcomponents/component";


export interface ITempNode{
        cd: number;
        status?:number;
        node: string;
        information: string;
        cd_parent?: number ;
        checked_field?:string;
    };

export interface ITreeAgruped{
    id: number;
    alteracaoSequencial?:string;
    valorCampoAnterior: string;
    cadastro: number;
    tmpid:number;
    alteracaoSequencialString?:string;   
    usuario: {
        login:string
    };     
}   


export class TreegridShowcase extends Box{
    constructor(){
        super();
        this.build();
    }
    private build():void{
        let treegrid:TreeGrid<ITempNode> = new TreeGrid<ITempNode>({
            collapsedIcon:"glyphicon glyphicon-resize-small"
            ,expandedIcon:"glyphicon glyphicon-resize-full"
        });
        //treegrid.setHeight(180);
        let nodesarray:ITempNode;
        treegrid
            .setParentColumn("cd_parent")
            .setPrimaryColumn("cd")
            .setColumns([
                { name: "cd", title: "cod.",render: data =>`my id-${data.cd}` }
                , { name: "node", title: "node" }
                , { name: "information", title: "information",size:[
                    {size:2}
                ] ,render:data => data.information+ " : "+ data.cd}
                ,{name:"status",title:"status",template:statusRender.statusRender,size:[
                    {size:1}
                ] }
                , { 
                    name: "cd_parent"
                    , title: "parent"
                    , renderElement:$row => new NumericStepper().setSize(12).setValue( $row.cd_parent ? $row.cd_parent : 0  )
                    , size:[
                        {size:1,display:[EViewSize.EXTRA_SMALL,EViewSize.LARGE]}
                    ] 
                }
                ,{
                    name:"checked_field"
                    ,checkableHeader:true
                    ,checkableValue:"y"
                    ,checkableGroup:false
                    ,title:"active"
                    ,checkable:true
                    //,renderElement:$row => new CheckBox("","").setCheckedValue("y").setValue($row.checked_field)
                }
            ])
            ;



        treegrid.onSelect.subscribe((row3: ITempNode[]) => {
            console.log('on select:', row3[0]);
            console.log('group',JSON.stringify(treegrid.getSelectedGroups()));

        });
        treegrid.onCollapse.subscribe((row3: ITempNode) => {
            console.log('item collapesed!', row3);
        });
        treegrid.onExpand.subscribe((row3: ITempNode) => {
            console.log('item expanded!', row3);
        });


        this.append(treegrid);


        let btnSelectAll:Button = new Button("check some");

        btnSelectAll.addEvent(EMouseEvent.CLICK,() => {
            treegrid.setCheckeds(treegrid.getData().map((item,indx) => indx).filter(titem => !(titem & 1) ))
        })

        let btnGetAllChecked:Button = new Button("get checkeds");

        btnGetAllChecked.addEvent(EMouseEvent.CLICK,() => {
            console.log(treegrid.getCheckeds())
        })

        this.append(
                new ButtonGroup()
                    .setDefaultInnerVerticalAlign(EVerticalAlign.TOP)                    
                    .append(btnSelectAll)
                    .append(btnGetAllChecked)

            );
        
        let treegrid2:TreeGrid<ITreeAgruped> = new TreeGrid<ITreeAgruped>();
        treegrid2.setHeight(220);
        treegrid2
            .setColumns([    
                { name: "usuario.login",title: "login", group:true },
                 { name: "cadastro", title: "data cadastro",render: (historico: ITreeAgruped) => {
                    let cadastro = historico.cadastro && historico.id ? moment(historico.cadastro).format("DD/MM/YYYY HH:mm:ss") : ""; 
                    return cadastro;
                 }  } 
                ,{ name: "id",title: "cod. cadastro"}
                ,{ name: "alteracaoSequencial", title: "alt.Seq" }
                ,{ name: "valorCampoAnterior", title: "vl cmp Anterior"}
                ,{ name:"alteracaoSequencialString",title:"alt.Seq.Str"}
                
            ]);

        treegrid2.onSelect.subscribe(item=>{
           //console.log(item); 
        })

        treegrid2.onDoubleClick.subscribe(evt=>{
            //console.log(evt);
            if(treegrid2.getSelectedItems().length){
                console.log('itens:',JSON.stringify(treegrid2.getSelectedItems()));
            }else if(treegrid2.getSelectedGroups().length){
                console.log('grups',JSON.stringify(treegrid2.getSelectedGroups()));
            }
            
        })

        let btnLoad:Button = new Button("load");
        btnLoad.addEvent(EMouseEvent.CLICK,()=>{
            //treegrid2.setData([]);
            //if(!treegrid2.getData().length){
                $http
                .get("examples/modules/mocks/historico.json")
                .then((res:ITreeAgruped[])=>{
                    treegrid2.setData(res);
                });
            //}else{
                //treegrid.applyRender();
                //treegrid2.applyRender();
                //treegrid2.clearSelection();

                //console.log(treegrid2.getData());
            //}

            treegrid.setData([
                { "cd": 1, "node": "novo no dinamico","status":0, "information": "one more time!", "checked_field":"y"}
                , { "cd": 2, "node": "novo no dinamico2","status":2, "information": "one more time2!", "cd_parent": 1, "checked_field":"y" }
                , { "cd": 3, "node": "novo no dinamico3","status":1, "information": "one more time3!", "cd_parent": 2, "checked_field":"n" }
                , { "cd": 4, "node": "novo no dinamico4","status":0, "information": "one more time4!", "cd_parent": 2, "checked_field":"n" }
                , { "cd": 5, "node": "novo no dinamico5","status":2, "information": "one more time5!", "cd_parent": 1, "checked_field":"y" }
            ])

        });

        this.append(treegrid2).append(btnLoad);
        

    }
} 



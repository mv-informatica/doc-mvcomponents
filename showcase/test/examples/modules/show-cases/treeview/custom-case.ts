import {Box} from "mvcomponents/container";
import {TreeView, INodeTreeView} from "mvcomponents/treeview";
import {IItemMenu} from "mv-workspace";

export class CustomCase extends Box{
	private treeview:TreeView;
	constructor(){
		super();
		this
			.buildTreeview()
			.fetchData();
	}
	private buildTreeview():CustomCase{
		let box1 = new Box();
		box1
			.setSize(3)
			.setCssProperties({"background-color":"#EEE",height:"800px"});
		this.append(box1);

		this.treeview = new TreeView();
		box1.append(this.treeview);

		/*
		this.treeview.onSelect.subscribe(itens => {
			itens[0]["data"] = itens[0]["data"] || {autorized:true};
			let autorized = itens[0]["data"]["autorized"] ? false : true;
			itens[0].icon = autorized ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
			itens[0]["data"]["autorized"] = autorized;		
			(<any>this.treeview).updateNode(itens[0]);
		});
		*/
		this.treeview.onSelect.subscribe(itens => {
			console.log(itens[0]);
			if(itens[0]["data"] && itens[0]["data"]["isLastChild"]){
				let autorized = itens[0]["data"]["autorized"] ? false : true;
				itens[0].icon = autorized ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
				itens[0]["data"]["autorized"] = autorized;
				(<any>this.treeview).updateNode(itens[0]);
			}else if(itens[0].id == "20"){
				debugger;
				(<any>this.treeview).removeNode(itens[0]);
			}
			/*
			itens[0]["data"] = itens[0]["data"] || {autorized:true};
			let autorized = itens[0]["data"]["autorized"] ? false : true;
			itens[0].icon = autorized ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
			itens[0]["data"]["autorized"] = autorized;		
			(<any>this.treeview).updateNode(itens[0]);
			*/
		});
		return this;
	}
	private fetchData(){
		/*
		this.treeview.setNodes([
			{
				id:1
				,text:"folder 1"
				,icon:"glyphicon glyphicon-unchecked"
				,data:{"ooost12":"456"}
			}
			,{
				id:2
				,text:"folder 2"
				,children:[
					{id:21,text:"folder a",icon:"glyphicon glyphicon-unchecked"}
					,{id:22,text:"folder b",icon:"glyphicon glyphicon-unchecked"}
					,{id:23,text:"folder c",icon:"glyphicon glyphicon-unchecked"}
				]
			}
			,{
				id:3
				,text:"folder 3"
				,icon:"glyphicon glyphicon-unchecked"
			}
		]);
		*/
		
		fetch("examples/menu/menu.json")
			.then(res => res.json())
			.then((res:IItemMenu[]) => {
				let uid_id_inc = new Date().getTime();
				return res
				.filter(menu => menu.itens && menu.itens.length)
				.map(menu => ({
					id:`uid_${menu.id}_${uid_id_inc++}`
					,text:menu.label
					,icon:menu.icon
					,state:{opened:true}
					,children:menu.itens ? menu.itens.map(item => {
							return {
								id:`uid_${item.id}_${uid_id_inc++}`
								,text: item.label
								,icon:"glyphicon glyphicon-unchecked"
								,data:{
									isLastChild:item.itens && item.itens.length ? false : true
								}
								,state:{opened:false}
								,children:[
									{
										id:`uid_${item.id}_sub_${uid_id_inc++}`
										,icon:"glyphicon glyphicon-trash"
										,text:"permissão para excluir"
									}
									,{
										id:`uid_${item.id}_sub_${uid_id_inc++}`
										,icon:"glyphicon glyphicon-plus"
										,text:"permissão para adicionar"
									}
									,{
										id:`uid_${item.id}_sub_${uid_id_inc++}`
										,icon:"glyphicon glyphicon-pencil"
										,text:"permissão para alterar"
									}
								]
							};
						}) : []
				}))
			})
			.then(res => this.treeview.setNodes(res));
	}
}

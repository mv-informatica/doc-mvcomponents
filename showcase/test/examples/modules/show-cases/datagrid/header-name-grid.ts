import {IDataGridColumn} from "mvcomponents/datagrid";
import {Render,ICustomComponent} from "mvcomponents/core";

@Render({
    templateUrl:"examples/modules/show-cases/datagrid/template/header-name-grid"
})
export class HeaderNameGrid implements ICustomComponent{
	private checked:boolean;
	private title:string;
	constructor(row:IDataGridColumn<any>){
		this.title = row.title;
	}
	attached(){
		(<ICustomComponent>this).element.className = 'col-xs-8';
	}
	private toogleCheck(){
		this.checked = !this.checked;
		(<ICustomComponent>this).refreshRender();
	}
	private testeGid(){
		alert('clicado:'+this.checked);
	}
}

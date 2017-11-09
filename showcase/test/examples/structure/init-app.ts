// import 'mvcomponents/assets/bootstrap.min.css!';
// import 'mvcomponents/assets/mvtheme.min.css!';
// import 'mvcomponents/assets/mvcomponents.css!';
import "mv-hosp/css/mv-hosp.old.css!";
import "mv-basico/css/mv-basico.old.css!";
import jquery = require("jquery");
import {workspaceDispatch} from "mv-workspace";
import "./area-manager/area-manager";

//informando/registrando as áreas.
workspaceDispatch.onRegisterArea.emit({
	name:"showcase-area"
	,path:"examples/structure/areas/showcase-area"
});

//carregando a área de login.
workspaceDispatch.onChangeArea.emit({
    name:"showcase-area"
    ,params:{}
});

/*
interface IPages{
	count:number;
	actualPage:number;
	rowsPerPage:number;
	maxVisiblePages:number;
	pages?:number;
	baseUrl:string;	
	links?:{
		[key:string]:string;
	}
}

class Pagination{
	private config:IPages;
	constructor(config:IPages){
		this.config = config;
		this.config.pages = parseInt((config.count/config.rowsPerPage) +"");
	}
	public links(){
		let tmpconfig:IPages = Object.assign({},this.config);

		tmpconfig.links = {};

		let rangeFirstPage = tmpconfig.actualPage + tmpconfig.maxVisiblePages;
		let rangeLastPage = rangeFirstPage;

		for(let i = 0; i < tmpconfig.maxVisiblePages; i++){
			let incpage = i+tmpconfig.actualPage;
			if(incpage <= tmpconfig.pages){
				tmpconfig.links["page_"+incpage] = `${tmpconfig.baseUrl}?page=${incpage}&size=${tmpconfig.rowsPerPage}`;
				rangeLastPage = incpage;
			}
		}
		
		if(rangeLastPage < tmpconfig.pages){
			console.log("tem resto")
			for(let i = 0; i < tmpconfig.maxVisiblePages; i++){
				let incpage = i+tmpconfig.actualPage;
				if(incpage <= tmpconfig.pages){
					tmpconfig.links["page_"+incpage] = `${tmpconfig.baseUrl}?page=${incpage}&size=${tmpconfig.rowsPerPage}`;
					rangeLastPage = incpage;
				}
			}
		}
		
		if(tmpconfig.actualPage >= tmpconfig.maxVisiblePages){
			tmpconfig.links.first = `${tmpconfig.baseUrl}?page=1&size=${tmpconfig.rowsPerPage}`;
			if(tmpconfig.actualPage > 1){
				tmpconfig.links.prev = `${tmpconfig.baseUrl}?page=${tmpconfig.actualPage-1}&size=${tmpconfig.rowsPerPage}`;
			}
		}

		if(rangeLastPage < tmpconfig.pages){
			tmpconfig.links.last = `${tmpconfig.baseUrl}?page=${tmpconfig.pages}&size=${tmpconfig.rowsPerPage}`;
			tmpconfig.links.next = `${tmpconfig.baseUrl}?page=${tmpconfig.actualPage+1}&size=${tmpconfig.rowsPerPage}`;		
		}


		tmpconfig.links.self = `${tmpconfig.baseUrl}?page=${tmpconfig.actualPage}&size=${tmpconfig.rowsPerPage}`;

		return tmpconfig;
	}
}


let pags = new Pagination({
	count:100
	,actualPage:1
	,rowsPerPage:10
	,maxVisiblePages:4
	,baseUrl:"hummm/"
});



console.log('test1:',JSON.stringify(pags.links()))


for(let key in pags.links().links){
	console.log(key,pags.links().links[key]);
}

*/

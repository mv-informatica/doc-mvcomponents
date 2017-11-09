import {EMouseEvent, EHorizontalAlign, EVerticalAlign,EViewSize} from "mvcomponents/component";
import {EventEmitter} from "mvcomponents/core";
import {IStore} from "mvcomponents/store";
import {Button, IconButton} from "mvcomponents/button";
import {TextInput, PasswordInput, NumericStepper,CheckBox} from "mvcomponents/input";
import {Box,ButtonGroup, Panel, Form} from "mvcomponents/container";
import {DataGrid, EGridStyle, IDataGridColumn, EDataGridSortingDirection, PaginatedDataGrid} from "mvcomponents/datagrid";
import {Pagination} from "mvcomponents/pagination";
import jquery = require("jquery");
import template = require("./template/teste-grid");
//import headerNameTemplate = require("./template/header-name-grid");

import {HeaderNameGrid} from "./header-name-grid";

interface Pessoa {
	id?: number;
	nome: string;
	sobrenome: string;
	idade: number;
	pais: string;
	nascimento?:Date;
}

class PessoaStore implements IStore<Pessoa> {
	onChange:EventEmitter<any> = new EventEmitter();
	private data:Pessoa[] = [];

	get(): Pessoa[] {
		return this.data;
	}
	set(objs:Pessoa[]):void {
		this.data = objs;
		this.onChange.emit(this.data);
	}
	save(obj:Pessoa):void {

	}
	remove(obj:Pessoa):void {

	}
}

//let pessoaStore = new PessoaStore();

export class DatagridShowcase extends Box{
	constructor(){
		super();
		this.setCssProperties({height:"100%"});
		this.build();
	}

	private build(){
		let paginatedDataGrid = new PaginatedDataGrid<Pessoa>("/dist/mv-starter/pessoa/pagination");
		paginatedDataGrid
							.getPagination()
							.setTotalOfVisibleLinks(3);
		paginatedDataGrid
							.getPagination()
							.setPaginationInfoTemplate("Exibindo {from} - {to} de {of}");
		paginatedDataGrid
			.setColumns([
				{name: "nome", title: "Nome", sortable: true, width: 25},
				{name: "sobrenome", title: "Sobrenome", sortable: true, width: 25},
				{name: "idade", title: "Idade", sortable: true, width: 25, template: template.testeTemplate},
				{name: "pais", title: "País", sortable: true, width: 25}
			])
			.setPossiblePageSizes(3, 10, 20, 50, 100)
			//.setStore(pessoaStore)
			.loadPage({"page": 0, "size": 10})
			.addTableStyle(EGridStyle.TABLE_BORDERED,EGridStyle.TABLE_HOVER)    
			.setEmptyText("Sem dados para exibir")
			.getFilterInput()
			.setLabel("Filtro");

		let filtroPais = new TextInput().setLabel("País").setSize(2);
		let btnPesquisar = new IconButton().setIcon("glyphicon glyphicon-search").setVerticalAlign(EVerticalAlign.BOTTOM);
		let btnLimpar = new IconButton().setIcon("glyphicon glyphicon-erase").setVerticalAlign(EVerticalAlign.BOTTOM);
		btnLimpar.addEvent(EMouseEvent.CLICK, () => {
		paginatedDataGrid.getPagination().clear();
		});
		btnPesquisar.addEvent(EMouseEvent.CLICK, () => {
		let params:any = {};
		if (filtroPais.getValue()) {
		params["pais"] = filtroPais.getValue();
		}
		paginatedDataGrid.loadPage(params);
		})
		this.append(filtroPais);
		this.append(btnPesquisar);
		this.append(btnLimpar);
		this.append(paginatedDataGrid);

		paginatedDataGrid
			.getPageSizeSelect()
			.setLabel("Registros por página");

		//paginatedDataGrid.setBotton(50);

		let itLoopGrid = new NumericStepper()
			.setLabel("Create")
			.setMin(0)
			.setMax(500)
			.setStep(10)
			.setValue(150)
			.setSize(1);

		this.append(itLoopGrid);    

		let simpleGrid:DataGrid<Pessoa> = new DataGrid<Pessoa>({autoSort:true});

		//simpleGrid.setSingleSelection(false);

		let ops={
			testeGid:()=>{
				alert("ops haaaa");
			}
			,toogleCheck:function(){
				console.log("check-me",this.checked);
				this.checked = !this.checked;
				if(this.checked){
					simpleGrid.selectAll();

				}else{
					simpleGrid.clearSelection();
				}
				//simpleGrid.refresh();
			}
		}

		simpleGrid.addTableStyle(EGridStyle.TABLE_STRIPED,EGridStyle.TABLE_BORDERED,EGridStyle.TABLE_CONDENSED);
		//simpleGrid.setHeight(180);
		simpleGrid.setBottom(120);
		simpleGrid.setColumns([
			{
				name:"id"
				,title:"id"
				//,headerRenderElement:col => new CheckBox("","")
				,checkable:true

			},
		{
			name: "nome"
			, title: "Nome"
			, sortable: true
			//,headerRender:headerNameTemplate.testHeaderTemplate.bind(ops)
			,headerRender:col=>`${col.title}-${col.name}`
			,size:[{size:2}]
			,render:item=>`${item.nome}`
			/*
			,template:(row,rowid)=>{
				rowsToAppend.push(rowid);                
				//console.log(jquery("#"+rowid).append("<strong>CARA "+row.nome+"</strong>"));
				//jquery("#"+rowid).append(new PasswordInput("ops my friend").element);
			}
			*/
		},
		{
			name: "sobrenome"
			,headerRenderElement:col=>{
				return new Button(col.title);
			}
			, title: "Sobrenome", sortable: true,size:[
			{size:3}
		]},
		{
			name: "idade"
			//, title: "Idade"
			, sortable: false
			,template:template.testeTemplate
			, renderElement:$row => new NumericStepper()
				.setValue($row.idade)
				.setSize(12)
				//,template:p=>`p.`
				//,renderElement:
			,size:[
				{size:3}
			]
		},
		{name: "pais", title: "País", sortable: true
			,headerRenderElement:col=>{
				return new HeaderNameGrid(col);
			}
			,render:item=>`Nacionalidade de ${item.pais}`
			,size:[
			{size:1}
			,{size:4,display:[EViewSize.LARGE,EViewSize.MEDIUM]}
		]}
		]);
		
		this.append(simpleGrid);

		let btnGroup = new ButtonGroup();
		this.append(btnGroup);
		//(<any>simpleGrid).setSize(12);

		let btnClearSelection:Button = new Button("clear selection");

		btnClearSelection.addEvent(EMouseEvent.CLICK,()=>{
			simpleGrid.clearSelection();
		});

		let btnGetSelecteds:Button = new Button("selecteds");

		btnGetSelecteds.addEvent(EMouseEvent.CLICK,()=>{
			console.log(simpleGrid.getSelectedItems());
		});

		simpleGrid.onItemSelect.subscribe(item=>{
			//console.log(item);
		});

		simpleGrid.onSortingChange.subscribe(gridcolumn=>{
			//console.log(gridcolumn);
		})

		simpleGrid.onDoubleClick.subscribe(evt=>{
			//console.log(evt);
		});

		let btnLoad:Button = new Button("load").setIcon("mv-basico-atualizar");

		btnGroup.append(btnLoad).append(btnClearSelection).append(btnGetSelecteds);

		btnLoad.addEvent(EMouseEvent.CLICK,()=>{
			console.log(simpleGrid);
			let pessoas:Pessoa[] = []
			let tcreate = itLoopGrid.getValue();
			for(let i:number = 0;i<tcreate;i++){
				pessoas.push({
				nome:("pessoa-"+i)
				,sobrenome:"sobr."
				,idade:i*10
				,pais:"BR"
				,nascimento:new Date()
				});
			}
			pessoas[0].sobrenome = "test epslon iranc lorem solos claus faul ipsec not acep solloneus narmaulnes de lorem epsolon narius!";
			simpleGrid.setData(pessoas).setSize(12);  
			simpleGrid.setSelectedIndex(9999);
		});

		let btnSelectItem:Button = new Button("select index").setIcon("mv-basico-usuario");
		btnGroup.append(btnSelectItem);
		btnSelectItem.addEvent(EMouseEvent.CLICK,()=>{
			//simpleGrid.setSe
			simpleGrid.setSelectedIndex(2);
		});

		let btnSelectSomeIndex:Button = new Button("select some indexs").setIcon("mv-basico-liberar_item");

		btnGroup.append(btnSelectSomeIndex);

		btnSelectSomeIndex.addEvent(EMouseEvent.CLICK,()=>{
			let indicesImpares:number[] = [];           
			simpleGrid
				.getData()
				.filter(
					(item,indx)=>{
						if(!(indx & 1)){
							indicesImpares.push(indx);
						}
						return !(indx & 1);
					}
				);                
			simpleGrid.setSelectedIndexes(indicesImpares);
		});

		let btnCheckSomeIndex:Button = new Button("check some itens").setIcon("mv-basico-liberar_item");

		btnGroup.append(btnCheckSomeIndex);

		btnCheckSomeIndex.addEvent(EMouseEvent.CLICK,()=>{
			let indicesImpares:number[] = [];           
			simpleGrid
				.getData()
				.filter(
					(item,indx)=>{
						let isImpa = indx & 1;
						if(!isImpa){
							indicesImpares.push(indx);
						}                       
						return !isImpa;
					}
				);                
			simpleGrid.setCheckeds(indicesImpares);
		});

		simpleGrid.onItemChecked.subscribe(item=>{            
			console.log(`item ${item.nome} checked!!!!`);
		});

		simpleGrid.onItemUnChecked.subscribe(item=>{            
			console.log(`item ${item.nome} unchecked!!!!`);
		});

		simpleGrid.onItemCheckeds.subscribe(ok =>{

		});
	}
}

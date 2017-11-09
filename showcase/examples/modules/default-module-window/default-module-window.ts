import "./default-module-window.css!";
import {Box,Tab,TabPanel,CodeContainer} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";
import jquery = require("jquery");
import {$http} from "mvcomponents/http";

declare let require:any;
declare let Sunlight:any;

export class DefaultModuleWindow extends Box{
	private title:string;
	private description:string;
	private marginTopExample:number;
	constructor(title:string,description:string){
		super();
		this.addStyleName("default-module-window")
		this.title = title;
		this.description = description;
		this.marginTopExample = 21;
		this.buildHeader()
	}
	private buildHeader(){
		let lblTitle = new Label(this.title).addStyleName("h1 text-primary");
		let lblDescription = new Label(this.description).addStyleName("description-lbl-dft").setSize(12).setCssProperties({
			"font-weight": "normal"
    		,"font-size": "14px"
    		,"marginTop":"5px"
    		,"marginBottom":"16px"
		});
		this.append(lblTitle).append(lblDescription);
		return this;
	}
	private buildExample(path:string,className:string){
		require([path],(mod:any) => {
			this.append(new mod[className]());
			this.buildCodeBlock(path,className);
		});
		return this;
	}
	private buildCodeBlock(path:string,className:string){
		let codPanel = new TabPanel();
		codPanel
			.addStyleName("tab-panel-box-example-case cod-block")
			.setCssProperties({marginTop:this.marginTopExample+"px"});
		this.append(codPanel);
		let codTab = new Tab("JS")
			.setCssProperties({textAlign:"center"})
			.setSize(2);

		let codBlock = new CodeContainer();

		jquery(codBlock.element)
			.find("pre:first")
			.addClass("sunlight-highlight-actionscript");

		jquery.get("/"+path+".ts").then(dta => {
			codBlock.setCodeText(dta);
			window.setTimeout(() => {
				Sunlight.highlightAll({lineNumbers: false});
			},1000);
		});



		codTab.setContent(codBlock)
		codPanel.append(codTab);
		codPanel.setSize(12)
		return this;
	}
	loadExample(path:string,className:string){
		this.buildExample(path,className);
		return this;
	}
	public setMarginTopExample(margin:number){
		this.marginTopExample = margin;
		return this;
	}
}

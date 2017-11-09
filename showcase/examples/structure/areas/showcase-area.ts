import {SystemInfo} from "../system-info/system-info";
import {NavInfo} from "../nav-info/nav-info";
import {$http} from "mvcomponents/http";
import {Icon,LinkButton} from "mvcomponents/button";
import {EMouseEvent} from "mvcomponents/component";
import {workspaceDispatch,HeaderAreaLogo,WorkspaceViewPager,IItemMenu,IModuleCompleteEvents,IModuleCreateEvent,EItemMenuStatus} from "mv-workspace";
import {DropMenu,CodeContainer} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";
import jquery = require("jquery");

declare var System:any;

export class ShowcaseArea extends WorkspaceViewPager implements IModuleCreateEvent{
	private lastModule:IModuleCompleteEvents;
	constructor(){
		super();
		this.addStyleName('area-example');
	}
	private init():void{
		this
			//.buildWaitWindow()
			.buildSystemInfo()
			.buildLogo()
			.buildLogout()
			.buildMenu();
		this.footer.setHidden(true);
	}
	public onCreate(){
		this.init();
	}
	private buildWaitWindow():this{
		let navInfo:NavInfo = new NavInfo();
		this.append(navInfo);
		return this;
	}
	private buildLogo():this{
		let logoArea = new HeaderAreaLogo();
		//let resourcePath:string = System.normalizeSync('mv-workspace');
		//resourcePath = resourcePath.replace(".js","")+"/themes/modern-blue/header-area/img/soulmv_1cor.png";
		logoArea.setLogoURL("assets/imgs/mvcomponents-logo.png");
		logoArea.onClickToggleMenu.subscribe(() => {
		    this.menu.toggleCollapseMenu();
		});

		this.header.append(logoArea);
		logoArea.toggleMenuPosition = "left";
		logoArea.marginTop = "10px";
		workspaceDispatch.onResize.subscribe(size => {
			if(size.width < 600){
				this.menu.collapseMenu(true);
				logoArea.marginTop = "0px";
				logoArea.setToggleMenuVisibility(false);
			}else{
				logoArea.setToggleMenuVisibility(true);
				logoArea.marginTop = "10px";
			}
		});
		return this;
	}
	private buildSystemInfo():this{
		let menu = new DropMenu("versão 1.1.22");
		menu.addStyleName("hidden-xs pull-right");
		menu.append(new LinkButton("Perfil"));
		menu.append(new LinkButton("Mensagens"));
		menu.addSeparator();
		let btnOut = new LinkButton("Sair");
		btnOut.addEvent(EMouseEvent.CLICK, () => {    

		});
		menu.append(btnOut);
		this
			.header
			.rightArea
			.prepend(menu);
		return this;
	}
	private buildLogout():this{
		let iconLogout:Icon = new Icon().setIcon("mv-basico-notificacao").addStyleName("action-header-area pull-right").setCssProperties({"font-size":"24px"}).setColor("#FFFFFF");
		iconLogout.addEvent(EMouseEvent.CLICK,()=>{
			workspaceDispatch.onSignOut.emit(null).done(()=>{
			//mudando a url (caso use cas).
			//window.location.href = "logout";
			//carregando a área de login.
				workspaceDispatch.onChangeArea.emit({
				    name:"login-area"
				    ,params:{}
				});
		    });
		});
		this.header.leftArea.addStyleName("pull-left")
		this.header.rightArea.prepend(iconLogout);
		this.header.addStyleName("pull-right");
		workspaceDispatch.onResize.subscribe(size => {
			if(size.width < 600){
				iconLogout.setCssProperties({marginTop:"5px"})
			}else{
				iconLogout.setCssProperties({marginTop:"0px"})
			}
		});
		return this;
	}
	private buildMenu():this{
		this.menu.showTitle(false);
		//load rest menu
		$http.get("examples/menu/menu.json").then((dta:IItemMenu[])=>{
			this.menu.setMenu(dta
				.filter(item => !item["hidden"])
				.map(item => {
					item.itens = item.itens && item.itens.length ? item.itens.filter( subitem => !subitem["hidden"] ) : [];
					return item;
				})
			);
			//this.menuArea.loadMenuItem(1);
			setTimeout(()=>this.menu.loadMenuItem(0,0),0);
		});
		return this;
	}
}

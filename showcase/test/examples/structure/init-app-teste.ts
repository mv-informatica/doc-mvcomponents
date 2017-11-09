/*
import "./assets/structure.css!";
import "mv-hosp/css/mv-hosp.old.css!";
import "mv-basico/css/mv-basico.old.css!";
import {ViewPager,Tab,TabPanel,ToolBar,Accordion,ViewStack,VerticalSplitter,Form,Box} from "mvcomponents/container";
import {Button,IconButton,Icon} from "mvcomponents/button";
import {WorkspaceViewPager} from "mv-workspace/core";
import {HeaderAreaLogo} from "mv-workspace/header-area";
import {SystemInfo} from "./system-info/system-info";
import {NavInfo} from "./nav-info/nav-info";
//import {$http} from "mvcomponents/http";
import {IItemMenu} from "mv-workspace/menu";
import {EventEmitter,IEventSubscribe} from "mvcomponents/core";


declare var System:any;

class InitApp extends WorkspaceViewPager{	
	constructor(){
		super();
		this.setSize(12).addStyleName("init-app-view-pager");
		let headerApp:Box = new Box().addStyleName("header-app").setSize(12);
		this.append(headerApp);

		this.setCssProperties({height:" calc( 100% - 60px )"});
		this.applicationArea.setCssProperties({height:"98%"});
		//this.applicationArea.content.setCssProperties({height:"100%"});
	}

	public init():void{
		this.menuArea.showTitle(false);
		this
			//.buildWaitWindow()
			.buildLogo()
			.buildSystemInfo()
			.buildMenu();


	}
	private buildWaitWindow():this{
		let navInfo:NavInfo = new NavInfo();
		this.append(navInfo);
		return this;
	}
	private buildLogo():this{
		let logoArea = new HeaderAreaLogo();
		logoArea.toggleMenuPosition = "right";
		let resourcePath:string = System.normalizeSync('mv-workspace');
		resourcePath = resourcePath.replace(".js","")+"/themes/modern-blue/header-area/img/soulmv_1cor.png";
		logoArea.setLogoURL(resourcePath);
		logoArea.onClickToggleMenu.subscribe(() => {
		    this.menuArea.toggleCollapseMenu();
		});
		this.headerArea.append(logoArea);
		//areaExampleDispatch.showToogleMenuArea.subscribe(on=>logoArea.setToggleMenuVisibility(on));
		return this;
	}

	private buildSystemInfo():this{
		this
			.headerArea
			.rightArea
			.prepend(new SystemInfo({
				language:"PT-BR"
				,companyName:"MV-Sistemas"
				,version:"1.0.0"
				,userName:"Usuario Teste Sistema"
			}));
		return this;
	}
	private buildMenu():this{

		//load rest menu
		$http.get("examples/menu/menu.json").then((dta:IItemMenu[])=>{
		    this.menuArea.setMenu(dta);
		});
		return this;
	}
}


let initApp = new InitApp();
initApp.appendTo("body:first");
initApp.init();

import {Panel,Fieldset,Dialog} from "mvcomponents/container";

let viewLogin = new ViewPager();
viewLogin.addStyleName("view-login");
viewLogin.appendTo("body");


let viewAdm = new ViewPager();
viewAdm.addStyleName("view-adm");
viewAdm.appendTo("body");


let viewStack1 = new ViewStack();

viewLogin.append(viewStack1);

let panel1 = new Panel("Teste Panel 1");
viewStack1.append(panel1,'teste1');


let panel2 = new Panel("Teste Panel 2");
viewStack1.append(panel2,'teste2');

//viewStack1.selectedIndex = 1;

//viewStack1.selectedState = 'teste1';

window.setTimeout(() =>{
	//viewStack1.selectedIndex = 0;
	viewStack1.selectedState = 'teste2';
},2000);




let form1 = new Form();
//panel2.append(form1);



let fieldSet1 = new Fieldset("Separação:");
form1.append(fieldSet1);



let dialog1 = new Dialog("Confirmando!!!");
//dialog1.append(form1);
//dialog1.show();



let tabpanel1 = new TabPanel();
dialog1.append(tabpanel1);



let tab1 = new Tab("teste");
//tab1.setContent(form1);
tabpanel1.append(tab1);


let tab2 = new Tab("tab2");

tab2.setClosable(true);
tabpanel1.append(tab2);






let accordion1 = new Accordion();
viewStack1.append(accordion1,'state-3');
viewStack1.selectedState = 'state-3';

accordion1.append(form1,{
	title:'teste'
})


*/






//COMPONENTE VIEWPAGER


import {ViewPager} from "mvcomponents/container";



let viewpager1 = new ViewPager();



viewpager1.appendTo("body");
viewpager1.setCssProperties({backgroundColor:'#fff'});



//COMPONENTE BOX


import {Box} from "mvcomponents/container";


let box1 = new Box();

box1.setCssProperties({border:"1px solid #999",height:"200px"})
box1.setSize(10);
box1.setOffSet(1);

//viewpager1.append(box1);






//COMPONENTE PANEL


import {Panel} from "mvcomponents/container";



let panel1 = new Panel("teste 1");
box1.append(panel1);




//COMPONENTE DIALOG


import {Dialog} from "mvcomponents/container";


let dialog1 = new Dialog("dialog 1");

//dialog1.show();


//COMPONENTE VIEWSTACK

import {ViewStack} from "mvcomponents/container";


let viewstack1 = new ViewStack();

viewpager1.append(viewstack1);





let panelA = new Panel("panel A");
let panelB = new Panel("panel B");


viewstack1
	.append(panelA,'user-list')
	.append(panelB,'user-detail');


//viewstack1.selectedIndex = 0;
//viewstack1.selectedState = 'user-list';

window.setTimeout(evt => {
	//viewstack1.selectedIndex = 1;
	//viewstack1.selectedState = 'user-detail';
},2000)	






//COMPONENTE TAB-PANEL


import {TabPanel,Tab} from "mvcomponents/container";



let tabpanel1 = new TabPanel().setSize(12);
//viewpager1.append(tabpanel1);

let tab1 = new Tab("tab 1");
tab1.setContent(new Panel("panel1"));
tabpanel1.append(tab1);


let tab2 = new Tab("tab 2");
tab2.setClosable(true);
tab2.setContent(new Panel("panel2"));
tabpanel1.append(tab2);





//COMPONENTE FORM E FIELDSET

/*
import {Form,Fieldset} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";

let form1 = new Form();

form1
	.append(new TextInput().setLabel("id:"))
	.append(new TextInput().setLabel("name:"))


let fieldset1 =  new Fieldset("extras:");

form1.append(fieldset1);

fieldset1
	.append(new TextInput().setLabel("street:"))
	.append(new TextInput().setLabel("number:"))

viewpager1.append(form1);

*/



//COMPONENTE TEXTINPUT


import {Form} from "mvcomponents/container";
import {TextInput} from "mvcomponents/input";
import {EViewSize,EInputEvent,EKeyboardEvent} from "mvcomponents/component";


let form1 = new Form();
viewpager1.append(form1);


let t1 = new TextInput()
			.setLabel("id")
			.setSize(2,EViewSize.EXTRA_SMALL)
			.setName("id");

let t2 = new TextInput()
			.setLabel("name")
			.setSize(5,EViewSize.EXTRA_SMALL)
			.setOffSet(5)
			.setName("name");

t2.addEvent(EInputEvent.CHANGE,evt => {
	console.log(t2.getValue());
});		

t1.addEvent(EKeyboardEvent.KEYPRESS,evt => {
	console.log(t1.getValue());
})

form1
	.append(t1)
	.append(t2);






//COMPONENTES NUMERICSTEPPER


import {NumericStepper} from "mvcomponents/input";


let t3 = new NumericStepper()
				.setLabel("exp")
				.setSize(3)
				.setMax(15)
				.setMin(5)
				.setStep(5)

t3.setValue(5);

form1.append(t3);















//COMPONENTE DATEPICKER



import {DatePickerInput} from "mvcomponents/input";


let t4 = new DatePickerInput().setLabel("date")


form1.append(t4)



//COMPONENTE COLORPICKER



import {ColorPickerInput} from "mvcomponents/input";




let color = new ColorPickerInput()
				.setSize(3)
				.setLabel("color")

form1.append(color);



//COMPONENTE SELECT


import {Select} from "mvcomponents/input";

interface IUser{
	id:number;
	name:string;
}

let users:IUser[] = [
	{id:1,name:'test one'}
	,{id:2,name:'user one'}
	,{id:3,name:'user two'}
	,{id:4,name:'user three'}
];


let t5 = new Select<IUser>()
			.setLabel("users")
			.setValueField("id")
			.setDescriptionField("name")



form1.append(t5);

t5.setData(users);

t5.onSelect.subscribe(itemusers => alert(itemusers[0].name))




import {Form,Box,Panel,ButtonGroup,RadioGroup,ToolBar,Fieldset} from "mvcomponents/container";
import {Button,RadioButton,Icon,IconButton,LinkButton,Badge} from "mvcomponents/button";
import {EVerticalAlign,EBasicColorStatus} from "mvcomponents/component";
import {Separator} from "mvcomponents/separator";
import {Label} from "mvcomponents/widget";

export class ButtonsShowcase extends Panel{
	constructor(){
		super("buttons");
		let formButtons = new Form();
		this.append(formButtons);
		this.buildButtons(formButtons);
		this.buildButtonsToolbar(formButtons);
	}
	private buildButtons(formButtons:Form<any>):void{
		let fds1 = new Fieldset("Com group button");
		formButtons.append(fds1.append(new Separator().setTransparent(true).setHeight(2)));

		let bgButtons = new ButtonGroup().setDefaultInnerVerticalAlign(EVerticalAlign.TOP);
		fds1.append(bgButtons);

		let btn1 = new Button("normal");
		bgButtons.append(btn1);

		let btn2 = new Button("com icone").setIcon("glyphicon glyphicon-lock");
		bgButtons.append(btn2);

		let btn3 = new Button("com mv-icons").setIcon("mv-hosp-pertences");
		bgButtons.append(btn3);

		let btn4 = new Button("danger").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.DANGER);
		bgButtons.append(btn4);

		let btn5 = new Button("success").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.SUCCESS);
		bgButtons.append(btn5);

		let btn6 = new Button("info").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.INFO);
		bgButtons.append(btn6);

		let btn7 = new Button("primary").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.PRIMARY);
		bgButtons.append(btn7);

		let btn7b = new Button("").setIcon("mv-basico-adicionar").setColor(EBasicColorStatus.PRIMARY);
		bgButtons.append(btn7b);

		let btn7c = new Button("").setIcon("glyphicon glyphicon-plus").setColor(EBasicColorStatus.PRIMARY);
		bgButtons.append(btn7c);

		let btn8 = new Button("warning").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.WARNING);
		bgButtons.append(btn8);

		let bgIconsButtons = new ButtonGroup().setDefaultInnerVerticalAlign(EVerticalAlign.TOP);
		fds1.append(bgIconsButtons);

		let ib1 = new IconButton().setIcon("glyphicon glyphicon-th-large");
		bgIconsButtons.append(ib1);

		let ib2 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.WARNING);
		bgIconsButtons.append(ib2);

		let ib3 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.SUCCESS);
		bgIconsButtons.append(ib3);

		let ib4 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.INFO);
		bgIconsButtons.append(ib4);

		let ib5 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.PRIMARY);
		bgIconsButtons.append(ib5);

		let ib6 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.DANGER);
		bgIconsButtons.append(ib6);

        bgIconsButtons.append(new IconButton().setIcon("mv-hosp-pertences").setColor(EBasicColorStatus.INFO));
        bgIconsButtons.append(new IconButton().setIcon("mv-basico-confirmar").setColor(EBasicColorStatus.INFO));

		let bgIcons = new ButtonGroup().setDefaultInnerVerticalAlign(EVerticalAlign.TOP);
		fds1.append(bgIcons);

		let icon1 = new Icon().setIcon("glyphicon glyphicon-star");
		bgIcons.append(icon1);

		let icon2 = new Icon().setIcon("glyphicon glyphicon-star").setColor("#457885");
		bgIcons.append(icon2);

		let icon3 = new Icon().setIcon("glyphicon glyphicon-star").setColor("purple");
		bgIcons.append(icon3);

		let bgBadges = new ButtonGroup().setDefaultInnerVerticalAlign(EVerticalAlign.TOP);
		fds1.append(bgBadges);

		let bd1 = new Badge("teste");
		bgBadges.append(bd1);

		let bd2 = new Badge("teste").setColor(EBasicColorStatus.DANGER);
		bgBadges.append(bd2);

		let bd3 = new Badge("teste").setColor(EBasicColorStatus.PRIMARY);
		bgBadges.append(bd3);

		let bd4 = new Badge("teste").setColor(EBasicColorStatus.WARNING);
		bgBadges.append(bd4);

		let bd5 = new Badge("teste").setColor(EBasicColorStatus.SUCCESS);
		bgBadges.append(bd5);

		let bd6 = new Badge("teste").setColor(EBasicColorStatus.INFO);
		bgBadges.append(bd6);
	}

	private buildButtonsToolbar(formButtons:Form<any>):void{

		let fds1 = new Fieldset("Com toolbar");
		formButtons.append(fds1.append(new Separator().setTransparent(true).setHeight(2)));

		let bgButtons = new ToolBar();
		fds1.append(bgButtons);

		let btn1 = new Button("normal");
		bgButtons.append(btn1);

		let btn2 = new Button("com icone").setIcon("glyphicon glyphicon-lock");
		bgButtons.append(btn2);

		let btn3 = new Button("com mv-icons").setIcon("mv-hosp-pertences");
		bgButtons.append(btn3);

		let btn4 = new Button("danger").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.DANGER);
		bgButtons.append(btn4);

		let btn5 = new Button("success").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.SUCCESS);
		bgButtons.append(btn5);

		let btn6 = new Button("info").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.INFO);
		bgButtons.append(btn6);

		let btn7 = new Button("primary").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.PRIMARY);
		bgButtons.append(btn7);

		let btn8 = new Button("warning").setIcon("glyphicon glyphicon-lock").setColor(EBasicColorStatus.WARNING);
		bgButtons.append(btn8);

		let bgIconsButtons = new ToolBar();
		fds1.append(bgIconsButtons);

		let ib1 = new IconButton().setIcon("glyphicon glyphicon-th-large");
		bgIconsButtons.append(ib1);

		let ib2 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.WARNING);
		bgIconsButtons.append(ib2);

		let ib3 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.SUCCESS);
		bgIconsButtons.append(ib3);

		let ib4 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.INFO);
		bgIconsButtons.append(ib4);

		let ib5 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.PRIMARY);
		bgIconsButtons.append(ib5);

		let ib6 = new IconButton().setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.DANGER);
		bgIconsButtons.append(ib6);

		let tbMix1 = new ToolBar();
		fds1.append(tbMix1);

		let ex1 = new IconButton().setIcon("glyphicon glyphicon-th-large");
		tbMix1.append(ex1);

		let ex2 = new Button("teste").setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.SUCCESS);
		tbMix1.append(ex2);

		let ex3 = new Button("teste").setColor(EBasicColorStatus.DANGER);
		tbMix1.append(ex3);

		let ex4 = new IconButton().setIcon("glyphicon glyphicon-off").setColor(EBasicColorStatus.WARNING);
		tbMix1.append(ex4);

		let tbMix2 = new ToolBar();
		fds1.append(tbMix2);

		let ex4c = new Button("teste").setColor(EBasicColorStatus.DANGER);
		tbMix2.append(ex4c);

		let ex2a = new Button("teste").setIcon("glyphicon glyphicon-th-large").setColor(EBasicColorStatus.SUCCESS);
		tbMix2.append(ex2a);

		let ex3b = new IconButton().setIcon("glyphicon glyphicon-off").setColor(EBasicColorStatus.WARNING);
		tbMix2.append(ex3b);

		let ex1a = new IconButton().setIcon("glyphicon glyphicon-th-large");
		tbMix2.append(ex1a);
	}
}
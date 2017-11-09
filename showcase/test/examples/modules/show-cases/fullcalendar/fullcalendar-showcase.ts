import {EventEmitter} from "mvcomponents/core";
import {$http} from "mvcomponents/http";
import {Label,ToastService,EToastPosition,EToastType,IToastConfig} from "mvcomponents/widget";
import {EInputEvent,EMouseEvent,EBasicColorStatus} from "mvcomponents/component";
import {Select, TextInput, TextArea} from "mvcomponents/input";
import {Button,Icon} from "mvcomponents/button";
import {Box, Panel, Form, ToolBar} from "mvcomponents/container";
import {FullCalendar, IFullCalendarConfig, EFullCalendarView, IFullCalendarEvent, IFullCalendarPeriod} from "mvcomponents/calendar";
import {IModuleCreateEvent,IModuleDestroyEvent} from "mv-workspace";
//import moment = require("moment");
import jquery = require("jquery");
import * as moment from "moment";


export class FullcalendarShowcase extends Box implements IModuleCreateEvent,IModuleDestroyEvent{
	public calendar1:FullCalendar;
	public calendar2:FullCalendar;
	private context:FullCalendar;
	constructor(){
		super();
		
		//painel métodos
		let navigationPanel: Panel = new Panel("Métodos");
		navigationPanel.setSize(4);
		//form
		let form: Form<any> = new Form();
		//form >> select context
		let select:Select<{cal:string,value:number}> = new Select<{cal:string,value:number}>();
		select.setLabel("Contexto");
		select.setSize(12);
		select.setDescriptionField("cal");
		select.setValueField("value");
		select.setData([{cal: "Calendário 1", value: 1}, {cal: "Calendário 2", value: 2}]);
		select.addEvent(EInputEvent.CHANGE, () => {
			this.context = (select.getValue().value == 1) ? this.calendar1 : this.calendar2;
		});
		form.append(select);
		//toolbar >> select view
		let selectViewToolbar: ToolBar = new ToolBar();

		selectViewToolbar.append(this.createSelectViewButton("AGENDA_DAY", EFullCalendarView.AGENDA_DAY));
		selectViewToolbar.append(this.createSelectViewButton("AGENDA_WEEK", EFullCalendarView.AGENDA_WEEK));
		selectViewToolbar.append(this.createSelectViewButton("DAY", EFullCalendarView.DAY));
		selectViewToolbar.append(this.createSelectViewButton("MONTH", EFullCalendarView.MONTH));
		selectViewToolbar.append(this.createSelectViewButton("WEEK", EFullCalendarView.WEEK));
		selectViewToolbar.setSize(12);
		selectViewToolbar.addStyleName("fullcalendar-showcase-changeview");
		//toolbar >> navigate
		let navigateToolbar: ToolBar = new ToolBar();
		navigateToolbar.append(this.createNavigationButton("prevYear()", "prevYear"));
		navigateToolbar.append(this.createNavigationButton("prev()", "prev"));
		navigateToolbar.append(this.createNavigationButton("today()", "today"));
		navigateToolbar.append(this.createNavigationButton("next()", "next"));
		navigateToolbar.append(this.createNavigationButton("nextYear()", "nextYear"));
		navigateToolbar.setSize(12);
		//TextInput >> gotoDate
		let boxGotoDate: Box = new Box();
		let gotoDateInput: TextInput = new TextInput("2016-06-28");
		gotoDateInput.setLabel("Ir para a data");
		gotoDateInput.setSize(8);
		boxGotoDate.append(gotoDateInput);
		let btnGotoDate: Button = new Button("gotoDate()");
		btnGotoDate.addStyleName("fullcalendar-showcase-gotodate");
		btnGotoDate.addEvent(EMouseEvent.CLICK, () => this.context.gotoDate(moment(gotoDateInput.getValue()).toDate()));
		btnGotoDate.setSize(4);
		boxGotoDate.append(btnGotoDate);
		boxGotoDate.setSize(12);
		//TextArea >> Set Events
		let boxSetEvents: Box = new Box();
		let textAreaSetEvents:TextArea = new TextArea();
		textAreaSetEvents.setValue(this.generateEvents());
		textAreaSetEvents.setLabel("Atribuir Eventos");
		textAreaSetEvents.setSize(8);
		let btnSetEvents: Button = new Button("setCalendarEvents()");
		btnSetEvents.addStyleName("fullcalendar-showcase-gotodate");
		btnSetEvents.addEvent(EMouseEvent.CLICK, () => {
			let events = JSON.parse(textAreaSetEvents.getValue());
			//this.calendar1.events.push(...events);
			this.calendar1.events = events;
		});
		btnSetEvents.setSize(4);
		boxSetEvents.append(textAreaSetEvents);
		boxSetEvents.append(btnSetEvents);
		//TextArea >> Add Event Source
		let boxAddEventSource: Box = new Box();
		let textAreaAddEventSource:TextArea = new TextArea();
		//textAreaAddEventSource.setValue(generateEventSource());
		textAreaAddEventSource.setLabel("Atribuir Fonte de Eventos");
		textAreaAddEventSource.setSize(8);
		let btnAddEventSource: Button = new Button("addEventSource");
		btnAddEventSource.addStyleName("fullcalendar-showcase-gotodate");
		btnAddEventSource.addEvent(EMouseEvent.CLICK, () => {
			this.generateEventSource();
		});
		btnAddEventSource.setSize(4);
		boxAddEventSource.append(textAreaAddEventSource);
		boxAddEventSource.append(btnAddEventSource);
		//form appends
		form.append(select);
		form.append(new Label("Modo de visualização (changeView(view: EFullCalendarView))"));
		form.append(selectViewToolbar);
		form.append(new Label("Navegação"));
		form.append(navigateToolbar);
		form.append(boxGotoDate);
		form.append(boxSetEvents);
		form.append(boxAddEventSource);
		navigationPanel.append(form);
		//calendário 1
		let calendar1Panel: Panel = new Panel("Calendário 1");
		calendar1Panel.setSize(8).setColor(EBasicColorStatus.SUCCESS);
		let config1: IFullCalendarConfig = {
			defaultDate: new Date(),
			defaultView: EFullCalendarView.MONTH
		};
		this.calendar1 = new FullCalendar(config1);
		this.context = this.calendar1;
		calendar1Panel.append(this.calendar1);
		//calendário 2
		let calendar2Panel: Panel = new Panel("Calendário 2");
		calendar2Panel.setSize(8).setOffSet(4).setColor(EBasicColorStatus.WARNING).header.append(new Icon().setIcon("glyphicon glyphicon-calendar"));
		let config2: IFullCalendarConfig = {
			defaultDate: new Date(),
			defaultView: EFullCalendarView.WEEK
		};
		this.calendar2 = new FullCalendar(config2);
		calendar2Panel.append(this.calendar2);
		//appends no Box principal
		this.append(navigationPanel);
		this.append(calendar1Panel);
		this.append(calendar2Panel);
	}
	createSelectViewButton(title: string, view: EFullCalendarView) : Button {
		let btn: Button = new Button(title);
		btn.addEvent(EMouseEvent.CLICK, () => this.context.changeView(view));
		jquery(btn.element).attr("title", title);
		return btn;
	}
	createNavigationButton(title: string, method: string): Button {
		let btn: Button = new Button(title);
		btn.addEvent(EMouseEvent.CLICK, () => this.context[method]());
		jquery(btn.element).attr("title", title);
		return btn;
	}
	generateEvents() :string {
		let events: IFullCalendarEvent[] = [];
		let counter: number = 1;
		for (var i = -1; i <= 1; i++) {
			/*
			events.push({
				title: "Event " + counter,
				start: moment().add(i, "day").set("time", moment().add(i, "time").get("time")).toDate(),
				end: moment().add(1, "time").toDate()
			});
			*/
			counter++;
		}
		return JSON.stringify(events);
	}
	generateEventSource() :void {
		this.context.onPeriodChange.subscribe((periodo: IFullCalendarPeriod) => {
				$http
					.get("http://localhost:3000/test/mock/events.json")
					.params({"start": periodo.start.toISOString(), "end": periodo.end.toISOString()})
					.then((events: IFullCalendarEvent[]) => {
						console.log("Eventos recuperados...", events);
						this.context.events = events;
					});
		});
	}
	onCreate(){
		this.generateEventSource();
		console.log('iniciando calendários...');
		this.calendar1.onEventClick.subscribe((e: IFullCalendarEvent) => ToastService.info({
			message:e.title
			,title:"info!"
		}).show());
		this.calendar1.onDayClick.subscribe((day: moment.Moment) => ToastService.warn({
			message:"[Calendário 1] Clicou no dia: "+day.format()
			,title:"warning"
		}).show());
		this.calendar2.onDayClick.subscribe((day: moment.Moment) => ToastService.success({
			message:"[Calendário 2] Clicou no dia: "+day.format()
			,title:"success"
			,position:EToastPosition.TOP_CENTER
		}).show());
		this.calendar2.onEventClick.subscribe((e: IFullCalendarEvent) => alert(e.title));
	}
}

let fullCalendarShowCase:FullcalendarShowcase = new FullcalendarShowcase();

export default fullCalendarShowCase;



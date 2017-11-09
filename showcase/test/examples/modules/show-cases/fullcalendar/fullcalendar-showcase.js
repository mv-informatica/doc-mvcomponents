define(["require", "exports", "tslib", "mvcomponents/http", "mvcomponents/widget", "mvcomponents/component", "mvcomponents/input", "mvcomponents/button", "mvcomponents/container", "mvcomponents/calendar", "jquery", "moment"], function (require, exports, tslib_1, http_1, widget_1, component_1, input_1, button_1, container_1, calendar_1, jquery, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FullcalendarShowcase = (function (_super) {
        tslib_1.__extends(FullcalendarShowcase, _super);
        function FullcalendarShowcase() {
            var _this = _super.call(this) || this;
            var navigationPanel = new container_1.Panel("Métodos");
            navigationPanel.setSize(4);
            var form = new container_1.Form();
            var select = new input_1.Select();
            select.setLabel("Contexto");
            select.setSize(12);
            select.setDescriptionField("cal");
            select.setValueField("value");
            select.setData([{ cal: "Calendário 1", value: 1 }, { cal: "Calendário 2", value: 2 }]);
            select.addEvent(component_1.EInputEvent.CHANGE, function () {
                _this.context = (select.getValue().value == 1) ? _this.calendar1 : _this.calendar2;
            });
            form.append(select);
            var selectViewToolbar = new container_1.ToolBar();
            selectViewToolbar.append(_this.createSelectViewButton("AGENDA_DAY", calendar_1.EFullCalendarView.AGENDA_DAY));
            selectViewToolbar.append(_this.createSelectViewButton("AGENDA_WEEK", calendar_1.EFullCalendarView.AGENDA_WEEK));
            selectViewToolbar.append(_this.createSelectViewButton("DAY", calendar_1.EFullCalendarView.DAY));
            selectViewToolbar.append(_this.createSelectViewButton("MONTH", calendar_1.EFullCalendarView.MONTH));
            selectViewToolbar.append(_this.createSelectViewButton("WEEK", calendar_1.EFullCalendarView.WEEK));
            selectViewToolbar.setSize(12);
            selectViewToolbar.addStyleName("fullcalendar-showcase-changeview");
            var navigateToolbar = new container_1.ToolBar();
            navigateToolbar.append(_this.createNavigationButton("prevYear()", "prevYear"));
            navigateToolbar.append(_this.createNavigationButton("prev()", "prev"));
            navigateToolbar.append(_this.createNavigationButton("today()", "today"));
            navigateToolbar.append(_this.createNavigationButton("next()", "next"));
            navigateToolbar.append(_this.createNavigationButton("nextYear()", "nextYear"));
            navigateToolbar.setSize(12);
            var boxGotoDate = new container_1.Box();
            var gotoDateInput = new input_1.TextInput("2016-06-28");
            gotoDateInput.setLabel("Ir para a data");
            gotoDateInput.setSize(8);
            boxGotoDate.append(gotoDateInput);
            var btnGotoDate = new button_1.Button("gotoDate()");
            btnGotoDate.addStyleName("fullcalendar-showcase-gotodate");
            btnGotoDate.addEvent(component_1.EMouseEvent.CLICK, function () { return _this.context.gotoDate(moment(gotoDateInput.getValue()).toDate()); });
            btnGotoDate.setSize(4);
            boxGotoDate.append(btnGotoDate);
            boxGotoDate.setSize(12);
            var boxSetEvents = new container_1.Box();
            var textAreaSetEvents = new input_1.TextArea();
            textAreaSetEvents.setValue(_this.generateEvents());
            textAreaSetEvents.setLabel("Atribuir Eventos");
            textAreaSetEvents.setSize(8);
            var btnSetEvents = new button_1.Button("setCalendarEvents()");
            btnSetEvents.addStyleName("fullcalendar-showcase-gotodate");
            btnSetEvents.addEvent(component_1.EMouseEvent.CLICK, function () {
                var events = JSON.parse(textAreaSetEvents.getValue());
                _this.calendar1.events = events;
            });
            btnSetEvents.setSize(4);
            boxSetEvents.append(textAreaSetEvents);
            boxSetEvents.append(btnSetEvents);
            var boxAddEventSource = new container_1.Box();
            var textAreaAddEventSource = new input_1.TextArea();
            textAreaAddEventSource.setLabel("Atribuir Fonte de Eventos");
            textAreaAddEventSource.setSize(8);
            var btnAddEventSource = new button_1.Button("addEventSource");
            btnAddEventSource.addStyleName("fullcalendar-showcase-gotodate");
            btnAddEventSource.addEvent(component_1.EMouseEvent.CLICK, function () {
                _this.generateEventSource();
            });
            btnAddEventSource.setSize(4);
            boxAddEventSource.append(textAreaAddEventSource);
            boxAddEventSource.append(btnAddEventSource);
            form.append(select);
            form.append(new widget_1.Label("Modo de visualização (changeView(view: EFullCalendarView))"));
            form.append(selectViewToolbar);
            form.append(new widget_1.Label("Navegação"));
            form.append(navigateToolbar);
            form.append(boxGotoDate);
            form.append(boxSetEvents);
            form.append(boxAddEventSource);
            navigationPanel.append(form);
            var calendar1Panel = new container_1.Panel("Calendário 1");
            calendar1Panel.setSize(8).setColor(component_1.EBasicColorStatus.SUCCESS);
            var config1 = {
                defaultDate: new Date(),
                defaultView: calendar_1.EFullCalendarView.MONTH
            };
            _this.calendar1 = new calendar_1.FullCalendar(config1);
            _this.context = _this.calendar1;
            calendar1Panel.append(_this.calendar1);
            var calendar2Panel = new container_1.Panel("Calendário 2");
            calendar2Panel.setSize(8).setOffSet(4).setColor(component_1.EBasicColorStatus.WARNING).header.append(new button_1.Icon().setIcon("glyphicon glyphicon-calendar"));
            var config2 = {
                defaultDate: new Date(),
                defaultView: calendar_1.EFullCalendarView.WEEK
            };
            _this.calendar2 = new calendar_1.FullCalendar(config2);
            calendar2Panel.append(_this.calendar2);
            _this.append(navigationPanel);
            _this.append(calendar1Panel);
            _this.append(calendar2Panel);
            return _this;
        }
        FullcalendarShowcase.prototype.createSelectViewButton = function (title, view) {
            var _this = this;
            var btn = new button_1.Button(title);
            btn.addEvent(component_1.EMouseEvent.CLICK, function () { return _this.context.changeView(view); });
            jquery(btn.element).attr("title", title);
            return btn;
        };
        FullcalendarShowcase.prototype.createNavigationButton = function (title, method) {
            var _this = this;
            var btn = new button_1.Button(title);
            btn.addEvent(component_1.EMouseEvent.CLICK, function () { return _this.context[method](); });
            jquery(btn.element).attr("title", title);
            return btn;
        };
        FullcalendarShowcase.prototype.generateEvents = function () {
            var events = [];
            var counter = 1;
            for (var i = -1; i <= 1; i++) {
                counter++;
            }
            return JSON.stringify(events);
        };
        FullcalendarShowcase.prototype.generateEventSource = function () {
            var _this = this;
            this.context.onPeriodChange.subscribe(function (periodo) {
                http_1.$http
                    .get("http://localhost:3000/test/mock/events.json")
                    .params({ "start": periodo.start.toISOString(), "end": periodo.end.toISOString() })
                    .then(function (events) {
                    console.log("Eventos recuperados...", events);
                    _this.context.events = events;
                });
            });
        };
        FullcalendarShowcase.prototype.onCreate = function () {
            this.generateEventSource();
            console.log('iniciando calendários...');
            this.calendar1.onEventClick.subscribe(function (e) { return widget_1.ToastService.info({
                message: e.title,
                title: "info!"
            }).show(); });
            this.calendar1.onDayClick.subscribe(function (day) { return widget_1.ToastService.warn({
                message: "[Calendário 1] Clicou no dia: " + day.format(),
                title: "warning"
            }).show(); });
            this.calendar2.onDayClick.subscribe(function (day) { return widget_1.ToastService.success({
                message: "[Calendário 2] Clicou no dia: " + day.format(),
                title: "success",
                position: widget_1.EToastPosition.TOP_CENTER
            }).show(); });
            this.calendar2.onEventClick.subscribe(function (e) { return alert(e.title); });
        };
        return FullcalendarShowcase;
    }(container_1.Box));
    exports.FullcalendarShowcase = FullcalendarShowcase;
    var fullCalendarShowCase = new FullcalendarShowcase();
    exports.default = fullCalendarShowCase;
});

define(["require", "exports", "tslib", "../core/event-emitter", "jquery", "./abstract/a-widget", "./enum/e-full-calendar", "fullcalendar/dist/fullcalendar.min.css!", "./assets/css/fullcalendar.css!", "fullcalendar"], function (require, exports, tslib_1, event_emitter_1, jquery, a_widget_1, e_full_calendar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FullCalendar = (function (_super) {
        tslib_1.__extends(FullCalendar, _super);
        function FullCalendar(config) {
            var _this = _super.call(this, "div", "") || this;
            _this.onPeriodChange = new event_emitter_1.EventEmitter();
            _this.onEventClick = new event_emitter_1.EventEmitter();
            _this.onDayClick = new event_emitter_1.EventEmitter();
            _this._events = [];
            jquery(_this.element).addClass("FullCalendar");
            _this.config = config;
            return _this;
        }
        Object.defineProperty(FullCalendar.prototype, "events", {
            set: function (evts) {
                this._events = evts;
                this.removeCalendarEvents();
                this.calendar("addEventSource", this._events);
            },
            enumerable: true,
            configurable: true
        });
        FullCalendar.prototype.init = function () {
            var _this = this;
            jquery(this.element).fullCalendar(this.parseConfig(this.config));
            this.calendar("addEventSource", {
                events: function (start, end, timezone, addCalendarEvents) {
                    _this.onPeriodChange
                        .emit({ "start": start, "end": end })
                        .done(function () { return addCalendarEvents(_this._events); });
                }
            });
            return this;
        };
        FullCalendar.prototype.attached = function () {
            if (jquery(this.element).is(":visible")) {
                this.init();
            }
        };
        Object.defineProperty(FullCalendar.prototype, "calendar", {
            get: function () {
                return jquery(this.element).fullCalendar.bind(jquery(this.element));
            },
            enumerable: true,
            configurable: true
        });
        FullCalendar.prototype.parseConfig = function (config) {
            var _this = this;
            var cfg = jquery.extend({}, config);
            if (config.defaultView !== undefined) {
                cfg.defaultView = this.translateView(config.defaultView);
            }
            cfg.eventClick = function (event, jsEvent, view) {
                _this.onEventClick.emit(event);
            };
            cfg.dayClick = function (day, jsEvent, view) {
                _this.onDayClick.emit(day);
            };
            return cfg;
        };
        FullCalendar.prototype.translateView = function (view) {
            switch (view) {
                case e_full_calendar_1.EFullCalendarView.AGENDA_DAY: return "agendaDay";
                case e_full_calendar_1.EFullCalendarView.AGENDA_WEEK: return "agendaWeek";
                case e_full_calendar_1.EFullCalendarView.DAY: return "basicDay";
                case e_full_calendar_1.EFullCalendarView.MONTH: return "month";
                case e_full_calendar_1.EFullCalendarView.WEEK: return "basicWeek";
            }
            throw "Invalid Full Calendar View";
        };
        FullCalendar.prototype.removeCalendarEvents = function (events) {
            this.calendar("removeEvents", events);
        };
        FullCalendar.prototype.prev = function () {
            this.calendar("prev");
        };
        FullCalendar.prototype.next = function () {
            this.calendar("next");
        };
        FullCalendar.prototype.prevYear = function () {
            this.calendar("prevYear");
        };
        FullCalendar.prototype.nextYear = function () {
            this.calendar("nextYear");
        };
        FullCalendar.prototype.today = function () {
            this.calendar("today");
        };
        FullCalendar.prototype.gotoDate = function (date) {
            this.calendar("gotoDate", date);
        };
        FullCalendar.prototype.getDate = function () {
            return this.calendar("getDate");
        };
        FullCalendar.prototype.changeView = function (view) {
            this.calendar("changeView", this.translateView(view));
        };
        return FullCalendar;
    }(a_widget_1.AWidget));
    exports.FullCalendar = FullCalendar;
});

//# sourceMappingURL=full-calendar.js.map

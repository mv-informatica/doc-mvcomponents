

import { ICustomComponent } from "../core/interface/i-custom-component";
import { EventEmitter } from "../core/event-emitter";
import * as moment from "moment";
import "fullcalendar";
import { AWidget } from "./abstract/a-widget";
import { EFullCalendarView } from "./enum/e-full-calendar";
import { IFullCalendar, IFullCalendarConfig, IFullCalendarEvent, IFullCalendarPeriod } from "./interface/i-full-calendar";
export declare class FullCalendar extends AWidget implements IFullCalendar, ICustomComponent {
    protected config: IFullCalendarConfig;
    onPeriodChange: EventEmitter<IFullCalendarPeriod>;
    onEventClick: EventEmitter<IFullCalendarEvent>;
    onDayClick: EventEmitter<moment.Moment>;
    private _events;
    events: IFullCalendarEvent[];
    constructor(config: IFullCalendarConfig);
    init(): FullCalendar;
    attached(): void;
    readonly calendar: any;
    private parseConfig(config);
    private translateView(view);
    private removeCalendarEvents(events?);
    prev(): void;
    next(): void;
    prevYear(): void;
    nextYear(): void;
    today(): void;
    gotoDate(date: Date): void;
    getDate(): Date;
    changeView(view: EFullCalendarView): void;
}

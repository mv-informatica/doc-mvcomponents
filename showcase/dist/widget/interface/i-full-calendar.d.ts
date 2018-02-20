import { EFullCalendarView } from "../enum/e-full-calendar";
export interface IFullCalendarPeriod {
    start: Date;
    end: Date;
}
export interface IFullCalendarEvent {
    id?: string | number;
    title: string;
    start: Date;
    end?: Date;
    allDay?: boolean;
    url?: string;
    color?: string;
    textColor?: string;
    className?: string;
}
export interface IFullCalendar {
    prev(): void;
    next(): void;
    prevYear(): void;
    nextYear(): void;
    today(): void;
    gotoDate(date: Date): void;
    getDate(): Date;
    changeView(view: EFullCalendarView): void;
}
export interface IFullCalendarConfig {
    defaultDate: Date;
    defaultView: EFullCalendarView;
}

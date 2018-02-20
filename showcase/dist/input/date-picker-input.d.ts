
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min";
import "bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min";
import { AInput } from "./abstract/a-input";
export declare enum EDatePickerStartType {
    month = 0,
    year = 1,
    decade = 2,
}
export interface IConfigDatePicker {
    format?: string;
    startDate?: string;
    endDate?: string;
    todayBtn?: string;
    daysOfWeekDisabled?: number[];
    daysOfWeekHighlighted?: number[];
    autoclose?: boolean;
    language?: string;
    todayHighlight?: boolean;
    startView?: EDatePickerStartType;
}
export declare enum EDatePartType {
    day = 0,
    month = 1,
    year = 2,
}
export declare class DatePickerInput extends AInput<Date> {
    private format;
    constructor(options?: IConfigDatePicker);
    encode(value: Date): string;
    decode(value: string): Date;
    setMask(mask: string): this;
}

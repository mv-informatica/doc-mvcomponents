
import { AInput } from "./abstract/a-input";
import { IConfigDatePicker } from "./date-picker-input";
export declare class DateTimePickerInput extends AInput<Date> {
    private format;
    private hourInput;
    private minuteInput;
    private selectedDate;
    constructor(options?: IConfigDatePicker);
    private showHandler(evt);
    encode(value: Date): string;
    decode(value: string): Date;
    setMask(mask: string): this;
}

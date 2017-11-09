import { EMouseEvent } from "../enum/e-mouse-event";
import { EKeyboardEvent } from "../enum/e-keyboard-event";
import { EInputEvent } from "../enum/e-input-event";
import { IVisualComponent } from "../interface/i-visual-component";
import { IEvent } from "../interface/i-event";
import { ABasicComponent } from "./a-basic-component";
export declare class AVisualComponent extends ABasicComponent implements IVisualComponent {
    constructor(tagh: string, tagc?: string);
    addEvent(type: EMouseEvent | EKeyboardEvent, handler: (eventObject?: JQueryEventObject) => any): void;
    protected eventTypeToString(type_evt: EMouseEvent | EKeyboardEvent | EInputEvent): string;
    removeEvent(type: EMouseEvent | EKeyboardEvent, handler?: (eventObject?: JQueryEventObject) => any): void;
    removeAllEvents(callback?: Function): void;
    fireEvent(type: EMouseEvent | EKeyboardEvent, ...params: any[]): IEvent;
}

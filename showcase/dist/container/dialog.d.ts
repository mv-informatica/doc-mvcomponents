
import { AContainer } from "./abstract/a-container";
import { EventEmitter } from "../core/event-emitter";
import { EVerticalAlign } from "../component/enum/e-vertical-align";
import { EHorizontalAlign } from "../component/enum/e-horizontal-align";
import { Box } from "./box";
import { Form } from "./form";
export declare class Dialog extends AContainer<Box> {
    onClose: EventEmitter<Event>;
    footer: Box;
    private destroyOnHide;
    private isLoaded;
    constructor(title?: string, destroyOnHide?: boolean);
    private onCloseEvent(evt);
    protected insertItem(item: Form<any>, method: string): void;
    setTitle(title: string): this;
    setModal(modal: boolean): this;
    show(): this;
    hide(): this;
    setVerticalAlign(align: EVerticalAlign): this;
    setHorizontalAlign(align: EHorizontalAlign): this;
}

import { AContainer } from "./abstract/a-container";
import { Box } from "./box";
import { Form } from "./form";

import { Panel } from "./panel";
import { Tab } from "./tab";
import { EventEmitter } from "../core/event-emitter";
import { ICustomComponent } from "../core/interface/i-custom-component";
export declare type IContainerItemViewStack = Form<any> | Box | Tab | Panel | ICustomComponent;
export interface IViewStackState {
    index: number;
    state: string;
}
export declare class ViewStack extends AContainer<IContainerItemViewStack> {
    private renderableList;
    private _selectedIndex;
    onChangeState: EventEmitter<IViewStackState>;
    constructor();
    private prepareItemToInsert(item, state?);
    append(item: IContainerItemViewStack, state?: string): this;
    prepend(item: IContainerItemViewStack, state?: string): this;
    private getIndexByState(state);
    selectedIndex: number;
    selectedState: string;
    next(): this;
    prev(): this;
}

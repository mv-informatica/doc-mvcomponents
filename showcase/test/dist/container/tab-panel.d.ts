import { EventEmitter } from "../core/event-emitter";
import { AContainer } from "./abstract/a-container";
import { IContainer } from "./interface/i-container";
import { ITab } from "./tab";

export declare enum ETabPlacement {
    TOP = 0,
    BOTTOM = 1,
}
export interface ITabPanel extends IContainer<ITab> {
    onChange: EventEmitter<ITab>;
    onClose: EventEmitter<ITab>;
    onAdd: EventEmitter<ITab>;
    closeAll(): this;
    prepend(tab: ITab): this;
    append(tab: ITab): this;
}
export declare class TabPanel extends AContainer<ITab> implements ITabPanel {
    private $items;
    onChange: EventEmitter<ITab>;
    onClose: EventEmitter<ITab>;
    onAdd: EventEmitter<ITab>;
    constructor();
    protected readonly content: JQuery;
    protected readonly nav: JQuery;
    render(): void;
    setPlacement(placement: ETabPlacement): this;
    setActive(tab: number | ITab): this;
    closeAll(): this;
    private bind(tab);
    private onTabActive(tab);
    private onTabClose(tab);
    private getTabByElement(element);
    protected insertItem(tab: ITab, method: string): this;
}

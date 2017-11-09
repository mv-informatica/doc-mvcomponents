import { IContainer } from "./interface/i-container";
import { Badge } from "./../button/badge";
import { EventEmitter } from "../core/event-emitter";
import { IRenderable } from "../core/interface/i-renderable";
import { AButton } from "./../button/abstract/a-button";
export interface ITab extends IRenderable {
    onActive: EventEmitter<any>;
    onClose: EventEmitter<any>;
    close(): this;
    setContent(container: IContainer<any>): this;
    getContent(): IContainer<any>;
    setTitle(title: string): this;
    getTitle(): string;
    setActive(active: boolean): this;
    setClosable(closable: boolean): this;
}
export declare class Tab extends AButton implements ITab {
    onActive: EventEmitter<void>;
    onClose: EventEmitter<void>;
    content: IContainer<any>;
    private title;
    constructor(title?: string);
    setIcon(psrc: string): this;
    setBadge(badge: Badge): this;
    setLabel(label: string): this;
    close(): this;
    setContent(container: IContainer<any>): this;
    setTooltip(tooltip: string): this;
    getContent(): IContainer<any>;
    setActive(active: boolean): this;
    setTitle(title: string): this;
    getTitle(): string;
    setClosable(closable: boolean): this;
}

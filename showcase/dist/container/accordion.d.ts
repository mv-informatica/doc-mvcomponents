
import { EventEmitter } from "../core/event-emitter";
import { AContainer } from "./abstract/a-container";
import { Box } from "./box";
import { Form } from "./form";
import { IConfigAccordionItem } from "./accordion-item";
export declare type IContainerItemAccordion = Form<any> | Box;
export interface IConfigAccordion {
    colorIcon?: string;
    collapseIcon?: string;
    expandIcon?: string;
    iconPosition?: "left" | "right";
    titleColor?: string;
    titleRender?: string;
    animationSpeed?: number | string;
    isOpen?: boolean;
}
export declare class Accordion extends AContainer<IContainerItemAccordion> {
    onCollapse: EventEmitter<IConfigAccordionItem>;
    onExpand: EventEmitter<IConfigAccordionItem>;
    private itens;
    private config;
    constructor(config?: IConfigAccordion);
    private appendContainer(item, config, where);
    append(item: IContainerItemAccordion, config?: IConfigAccordionItem): this;
    prepend(item: IContainerItemAccordion, config?: IConfigAccordionItem): this;
    expandAll(): this;
    collapseAll(): this;
    expandIndex(index: number): this;
    collapseIndex(index: number): this;
    removeAllItens(): this;
}

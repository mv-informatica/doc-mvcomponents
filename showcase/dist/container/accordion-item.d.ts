import { Box } from "./box";
import { EventEmitter } from "../core/event-emitter";
export interface IConfigAccordionItem {
    title?: string;
    colorIcon?: string;
    collapseIcon?: string;
    expandIcon?: string;
    disabled?: boolean;
    iconPosition?: "left" | "right";
    titleColor?: string;
    titleRender?: string;
    animationSpeed?: number | string;
    isOpen?: boolean;
    originClick?: HTMLElement;
}
export declare class AccordionItem extends Box {
    header: Box;
    body: Box;
    config: IConfigAccordionItem;
    onCollapse: EventEmitter<IConfigAccordionItem>;
    onExpand: EventEmitter<IConfigAccordionItem>;
    private iconTitle;
    constructor(config: IConfigAccordionItem);
    private toogleHeight(evt);
    expand(): this;
    collapse(): this;
}

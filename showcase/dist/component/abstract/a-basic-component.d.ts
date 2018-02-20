import { EViewSize } from "../enum/e-view-size";
import { EventEmitter } from "../../core/event-emitter";
export interface IViewSizeAttr {
    extra_small?: number;
    small?: number;
    medium?: number;
    large?: number;
}
export declare abstract class ABasicComponent {
    element: HTMLElement;
    onBeforeDestroy: EventEmitter<{}>;
    protected _uid: number;
    constructor(tagh: string, tagc?: string);
    getUID(): string;
    getParent(): HTMLElement;
    setAttributes(properties: {
        [s: string]: string | boolean | number;
    }): this;
    setAttribute(attribute: string, value: string | boolean | number): this;
    getAttribute(properties: string): string;
    setCssProperties(properties: {
        [s: string]: string | number | boolean;
    }): this;
    hasStyleName(class_name: string): boolean;
    addStyleName(class_names: string): this;
    removeStyleName(class_names: string): this;
    setStyleName(class_names: string): this;
    private setSizeIndividual(size, view?);
    private getSizeDesc(view);
    private setOffSetIndividual(size, view?);
    private sizesToArray();
    addSize(sizes: IViewSizeAttr): this;
    addOffSet(sizes: IViewSizeAttr): this;
    setSize(size: number, ...views: EViewSize[]): this;
    setOffSet(size: number, ...views: EViewSize[]): this;
    setVisible(show: boolean): this;
    isVisible(): boolean;
    destroy(): void;
}

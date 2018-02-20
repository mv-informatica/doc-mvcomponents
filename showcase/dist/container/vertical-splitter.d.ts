import { AContainer } from "./abstract/a-container";
import { IRenderable } from "../core/interface/i-renderable";
import { EventEmitter } from "../core/event-emitter";

export interface IVerticalSplitterConfig {
    minSize?: number;
    maxSize?: number;
    stepSize?: number;
    size?: number;
}
export declare class VerticalSplitter extends AContainer<IRenderable> {
    onCollapse: EventEmitter<any>;
    onExpande: EventEmitter<any>;
    constructor();
    append(item: IRenderable, config?: IVerticalSplitterConfig): this;
    attached(): void;
    prepend(item: IRenderable, config?: IVerticalSplitterConfig): this;
    private getSplitterContentConfig(element);
    private insertSplitterItem(item, type, config?);
    private getRemaingAmountSize();
    private reCalculate();
    private reRender();
}

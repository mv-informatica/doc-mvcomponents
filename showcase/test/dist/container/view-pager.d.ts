import { AContainer } from "./abstract/a-container";
import { IRenderable } from "../core/interface/i-renderable";
export declare class ViewPager extends AContainer<IRenderable> {
    constructor();
    appendTo(p_target: string): void;
}

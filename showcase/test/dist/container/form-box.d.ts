import { AContainer } from "./abstract/a-container";
import { IInput } from "../input/interface/i-input";
import { IWidget } from "../widget/interface/i-widget";
export declare type IFormBoxItem = IInput<any> | IWidget;
export declare class FormBox extends AContainer<IFormBoxItem> {
    private inputs;
    isFieldset: boolean;
    constructor();
    protected insertItem(element: IFormBoxItem, method: string): void;
    private rendered();
    setEnable(on: boolean): this;
}

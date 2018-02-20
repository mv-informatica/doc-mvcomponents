import { AContainer } from "./abstract/a-container";
import { IWidget } from "../widget/interface/i-widget";
import { IButton } from "../button/interface/i-button";
import { ToolBar } from "./toolbar";
import { ButtonGroup } from "./button-group";
import { ICustomComponent } from "../core/interface/i-custom-component";
import { IInput } from "../input/interface/i-input";
import { EventEmitter } from "../core/event-emitter";
import { IDataGrid } from "../datagrid/interface/i-data-grid";
import { Fieldset } from "./fieldset";
export declare type IFormItem = IWidget | IButton | IInput<any> | ToolBar | ButtonGroup | ICustomComponent | Fieldset | IDataGrid<any>;
export interface IValidationResponse {
    input: IInput<any>;
    errors: string[];
}
export interface ISelectInput extends IInput<any> {
    setAssignedProperty(): string;
    getAssignedProperty(): string;
    getData(): any[];
    setValueForm(data: any): void;
}
export declare class Form<T> extends AContainer<IFormItem> {
    private _inputs;
    onValidate: EventEmitter<IValidationResponse[]>;
    private data;
    constructor();
    readonly inputs: {
        name: string;
        input: ISelectInput;
    }[];
    protected insertItem(element: IFormItem, method: string): void;
    clear(): Form<T>;
    isValid(): boolean;
    validate(): Promise<IValidationResponse[]>;
    setData(data: T): Form<T>;
    private getValueByPath(item, path);
    getData(): T;
    private setValueData(input, name, data);
    private updateValueByPath(value, pathObj, tree, branch?);
    reset(): this;
    rendered(): void;
}

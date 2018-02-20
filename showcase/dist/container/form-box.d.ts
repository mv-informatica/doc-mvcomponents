import { AContainer } from "./abstract/a-container";
import { IInput } from "../input/interface/i-input";
import { IWidget } from "../widget/interface/i-widget";
import { IButton } from "../button/interface/i-button";
import { ToolBar } from "./toolbar";
import { ButtonGroup } from "./button-group";
import { ICustomComponent } from "../core/interface/i-custom-component";
import { IDataGrid } from "../datagrid/interface/i-data-grid";
import { TreeGrid } from "../treegrid/tree-grid";
export declare type IFormBoxItem = IWidget | IButton | IInput<any> | ToolBar | ButtonGroup | ICustomComponent | IDataGrid<any> | TreeGrid<any>;
export declare class FormBox extends AContainer<IFormBoxItem> {
    private inputs;
    isFieldset: boolean;
    constructor();
    protected insertItem(element: IFormBoxItem, method: string): void;
    private rendered();
    setEnable(on: boolean): this;
}

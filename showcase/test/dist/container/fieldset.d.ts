
import { AContainer } from "./abstract/a-container";
import { IInput } from "../input/interface/i-input";
import { IWidget } from "../widget/interface/i-widget";
import { TreeGrid } from "../treegrid/tree-grid";
import { DataGrid } from "../datagrid/data-grid";
import { TileList } from "../widget/tile-list";
export declare type IFieldsetItem = IInput<any> | IWidget | TileList<any> | DataGrid<any> | TreeGrid<any>;
export declare class Fieldset extends AContainer<IFieldsetItem> {
    private inputs;
    isFieldset: boolean;
    constructor(legend: string);
    protected insertItem(element: IFieldsetItem, method: string): void;
    setLegend(legend: string): this;
    rendered(): void;
    setEnable(on: boolean): this;
}

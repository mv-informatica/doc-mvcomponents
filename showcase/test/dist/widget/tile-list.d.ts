import { EventEmitter } from "../core/event-emitter";
import { AWidget } from "./abstract/a-widget";
export interface IParamTileList {
    [key: string]: string | boolean | number | Date;
}
export declare class TileList<T> extends AWidget {
    private _tmpData;
    private _data;
    private _urlTemplate;
    private _islistview;
    private _selected_index;
    activate: boolean;
    onSelectItem: EventEmitter<T>;
    onScrolledToBottom: EventEmitter<boolean>;
    private scrollAtctived;
    private params;
    constructor(config: {
        urlTemplate: string;
    });
    private refreshItemRender();
    setData(p_dta: T[]): this;
    getData(): T[];
    refresh(): this;
    index: number;
    getSelectedItem(): T;
    private onChangeItemHandler(evt);
    private getRowCell();
    clearSelecteds(): this;
    private _changeSelectedItem(tgt, p_change_item?);
    setHeight(height: number, unit?: string): this;
    setParams(params: IParamTileList): this;
    addParams(params: IParamTileList): this;
    getParams(): IParamTileList;
}

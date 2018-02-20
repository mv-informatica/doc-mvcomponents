import { EventEmitter } from "../core/event-emitter";
import { IStore } from "../store/interface/i-store";
import { Box } from "../container/box";
import { TextInput } from "../input/text-input";
import { Select } from "../input/select";
import { EGridStyle } from "./enum/e-data-grid";
import { IDataGrid, IDataGridColumn } from "./interface/i-data-grid";
import { IPagination, IPaginationRequest } from "../pagination/interface/i-pagination";
export interface IPageSize {
    value: number;
    description: string;
}
export declare class PaginatedDataGrid<T> extends Box {
    private filterInput;
    private grid;
    private pagination;
    private store;
    private pageSizeSelect;
    private possiblePageSizes;
    private bottom;
    onItemSelect: EventEmitter<T>;
    onSortingChange: EventEmitter<IDataGridColumn<T>[]>;
    onDoubleClick: EventEmitter<T>;
    constructor(baseURL: string);
    setColumns(columns: IDataGridColumn<T>[]): this;
    addTableStyle(...style: EGridStyle[]): this;
    loadPage(params: IPaginationRequest, url?: string): this;
    setEmptyText(text: string): this;
    getFilterInput(): TextInput;
    getGrid(): IDataGrid<T>;
    getPagination(): IPagination<T>;
    setStore(store: IStore<T>): this;
    getStore(): IStore<T>;
    clear(): this;
    attached(): void;
    getPageSizeSelect(): Select<IPageSize>;
    setPossiblePageSizes(...pageSizes: number[]): this;
    private subscribeToGrid();
    private loadSortedPage(cols);
    private subscribeToPagination();
    private buildPageSizeSelect();
    private getPageSizes();
    private changePageSize(pageSize);
    private choosePageSize(pageSize);
    private buildBasicStore();
    setBotton(bottom: number): this;
}

import { EventEmitter } from "../../core/event-emitter";
import { IDataComponent } from "../../component/interface/i-data-component";
import { EDataGridSortingDirection, EGridStyle } from "../enum/e-data-grid";
import { IRenderable } from '../../core/interface/i-renderable';
import { EViewSize } from "../../component/enum/e-view-size";
export interface IDataGridColumn<T> {
    name: string;
    title?: string;
    width?: number;
    renderElement?: (value: T) => IRenderable;
    render?: (value: T) => string;
    template?: (value: T, idCell?: string, idRow?: string) => any;
    sortable?: boolean;
    sortingDirection?: EDataGridSortingDirection;
    size?: {
        size: number;
        display?: EViewSize[];
    }[];
    headerRender?: (value: IDataGridColumn<T>) => string;
    headerRenderElement?: (value: IDataGridColumn<T>) => IRenderable;
    checkable?: boolean;
}
export interface IDataGrid<T> extends IDataComponent<T> {
    onItemSelect: EventEmitter<T>;
    onSortingChange: EventEmitter<IDataGridColumn<T>[]>;
    onDoubleClick: EventEmitter<T>;
    addTableStyle(...style: EGridStyle[]): this;
    setEmptyText(text: string): this;
    setSingleSelection(isSingleSelection: boolean): this;
    isSingleSelection(): boolean;
    setColumns(columns: IDataGridColumn<T>[]): this;
    setInfiniteScroll(isInfiniteScroll: boolean): this;
    isInfiniteScroll(): boolean;
    setHeight(height: number): this;
    getHeight(): number;
    getEmptyText(): string;
    getStyle(): string;
    getSelectedItems(): T[];
    attached(): void;
    block(block: boolean): this;
    addData(data: T[]): this;
    getColumns(): IDataGridColumn<T>[];
    getData(): T[];
    setBottom(bottom: number): this;
    clearSelection(): this;
    selectAll(): this;
    setSelectedIndexes(indexs: number[]): this;
    addSelectedIndexes(indexs: number[]): this;
    setCheckeds(indexes: number[]): this;
    getCheckeds(): T[];
    getCheckedsIndexes(): number[];
    onItemUnChecked: EventEmitter<T>;
    onItemChecked: EventEmitter<T>;
    onItemCheckeds: EventEmitter<boolean>;
}

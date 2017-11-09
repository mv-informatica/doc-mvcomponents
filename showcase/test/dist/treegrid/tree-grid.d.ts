

import "jquery-treegrid/js/jquery.treegrid.min";
import { IRenderable } from "../core/interface/i-renderable";
import { EventEmitter } from "../core/event-emitter";
import { EViewSize } from "../component/enum/e-view-size";
import { ABasicComponent } from "../component/abstract/a-basic-component";
export interface ITreeGridColumn<T> {
    name: string;
    title: string;
    render?: (data: T) => string;
    template?: (data: any) => any;
    renderElement?: (value: T) => IRenderable;
    group?: boolean;
    checkable?: boolean;
    checkableHeader?: boolean;
    checkableGroup?: boolean;
    checkableValue?: number | string | boolean;
    size?: {
        size: number;
        display?: EViewSize[];
    }[];
}
export interface ITreeGridRow {
    id: string;
    parent: string;
}
export interface ITreeGridConfig {
    expandedIcon?: string;
    collapsedIcon?: string;
    primaryColumn?: string;
    parentColumn?: string;
}
export interface ITreeGridGroup<T> {
    data: T[];
    group: any;
    checked?: boolean;
}
export declare class TreeGrid<T> extends ABasicComponent {
    onSelect: EventEmitter<T[]>;
    onCollapse: EventEmitter<T>;
    onExpand: EventEmitter<T>;
    private columns;
    private loaded;
    private data;
    private primaryColumn;
    private parentColumn;
    private indexSelected;
    private expandedIcon;
    private collapsedIcon;
    private height;
    private selectedIndexs;
    private selectedGroupIds;
    private bottom;
    onDoubleClick: EventEmitter<T>;
    onItemChecked: EventEmitter<T>;
    onItemUnChecked: EventEmitter<T>;
    onItemCheckeds: EventEmitter<boolean>;
    onGroupChecked: EventEmitter<ITreeGridGroup<T>>;
    constructor(config?: ITreeGridConfig);
    private verifyScroll();
    private render();
    private verifyAllCheckablesGroup(column, row, addCheckedCount?);
    attached(): void;
    setCheckeds(indexes: number[]): this;
    getCheckeds(): T[];
    getCheckedsIndexes(): number[];
    getSelectedItems(): T[];
    getSelectedGroups(): T[];
    clearSelection(): this;
    refresh(): this;
    private applyRender();
    getData(): T[];
    private hasGroup();
    private getValueByPath(item, path);
    setData(data: T[]): this;
    clear(): this;
    setHeight(height: number): this;
    setColumns(columns: ITreeGridColumn<T>[]): this;
    addColumns(columns: ITreeGridColumn<T>[]): this;
    setPrimaryColumn(primaryColumn: string): this;
    setParentColumn(parentColumn: string): this;
    getPrimaryColumn(): string;
    getParentColumn(): string;
    setBottom(bottom: number): this;
}


import { ABaseInput } from "./abstract/a-base-input";
import { IInputAddon } from "./interface/i-input-addon";
import { EventEmitter } from "../core/event-emitter";
export interface ISelectOptions {
    url?: string;
    listPosition?: "top" | "bottom";
    placeholder?: string;
    minSearchLength?: number;
    multiple?: boolean;
    searchIgnoreCase?: boolean;
    clearOnEmptyTerm?: boolean;
    searchDelayTime?: number;
    autocomplete?: boolean;
    searchSimbol?: string;
}
export interface IParamsSearch {
    url?: string;
    params?: any;
}
export declare class Chooser<T> extends ABaseInput<T> {
    private config;
    private data;
    private itemSelected;
    private url;
    private params;
    private fnDisplayField;
    private fnDisplayListItem;
    private fnParams;
    private descriptionField;
    private searchFields;
    private assignedProperty;
    private lastTextSearch;
    private btnClear;
    onSelect: EventEmitter<T[]>;
    constructor(config?: ISelectOptions);
    protected insertAddon(method: string, addon: IInputAddon): this;
    private init();
    private fakeFocus(on);
    private render();
    showList(visible: boolean): this;
    setUrl(url: string): void;
    getUrl(): string;
    setParams(params: any): this;
    setAssignedProperty(field: string): this;
    getAssignedProperty(): string;
    getParams(): any;
    setDescriptionField(field: string): this;
    getDescriptionField(): string;
    setSearchFields(field: string[]): this;
    getSearchFields(): string[];
    private getDisplayItem();
    setPlaceholder(placeholder: string): this;
    setData(data: T[]): this;
    getData(): T[];
    setValue(item: T): this;
    getValue(): T;
    refresh(): this;
    load(configLoad?: IParamsSearch): Promise<T[]>;
    private getMenuListItem();
    private setList(data);
    setDisplayItem(display: (item: T) => string): this;
    setDisplayListItem(display: (item: T) => string): this;
    protected getInput(): JQuery;
    private getValueByPath(item, path);
}

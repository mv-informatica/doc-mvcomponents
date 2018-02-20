
import { ABaseInput } from "./abstract/a-base-input";
import { IDataComponent } from "../component/interface/i-data-component";
import { EventEmitter } from "../core/event-emitter";
import { IInputAddon } from "./interface/i-input-addon";
export interface ISelect<T> extends IDataComponent<T> {
    showList(visible: boolean): this;
    setValueField(field: string): this;
    getValueField(): string;
    setDescriptionField(field: string): this;
    getDescriptionField(): string;
    setPlaceholder(placeholder: string): this;
    getValue(): T;
    setValue(item: T): this;
    isValid(): boolean;
    getByValue(item: T): T;
    onSelect: EventEmitter<T[]>;
    getData(): T[];
}
export interface ISelectData {
    id: number | string;
    text: string;
    disabled?: boolean;
}
export interface ISelectOptions {
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
export declare class Select<T> extends ABaseInput<T> implements ISelect<T> {
    private config;
    private selector;
    private descriptionField;
    private valueField;
    private labelAll;
    private assignedProperty;
    private data;
    onBeforeDropdown: EventEmitter<any>;
    onSelect: EventEmitter<T[]>;
    onNoResultsFound: EventEmitter<string>;
    onClearMultiItem: EventEmitter<T>;
    private loaded;
    private preValue;
    private btnShowList;
    private searchTerm;
    private iconUp;
    private iconDown;
    private fnDisplayListItem;
    private fnDisplayField;
    private fnNoResultsDisplay;
    private selecteds;
    private searchDelayTimeIns;
    constructor(config?: ISelectOptions);
    private getValueByPath(item, path);
    private getMenuListItem();
    private getDisplayItem();
    private showFieldInput(showInput, forceFocus?);
    private render();
    private fakeFocus(on);
    private normalizeWidth();
    protected getInput(): JQuery;
    private updateValueByPath(value, pathObj, tree, branch?);
    setLabelAll(labelAll: string): this;
    private setList(data);
    private init();
    refresh(refreshData?: boolean): this;
    protected insertAddon(method: string, addon: IInputAddon): this;
    append(addon: IInputAddon): this;
    prepend(addon: IInputAddon): this;
    setNoResults(resultDisplay: (term: string) => string): this;
    setPlaceholder(placeholder: string): this;
    showList(visible: boolean): this;
    setValueField(field: string): this;
    setAssignedProperty(field: string): this;
    getAssignedProperty(): string;
    setDescriptionField(field: string): this;
    getValueField(): string;
    getDescriptionField(): string;
    setData(data: T[]): this;
    getData(): T[];
    clear(): this;
    getValue(): T;
    getValues(): T[];
    setValues(itens: T[]): this;
    addValues(itens: T[]): this;
    setValue(item: T): this;
    getRawValue(): string;
    getByValue(value: any): T;
    setDisplayListItem(display: (item: T) => string): this;
    setDisplayItem(display: (item: T) => string): this;
}

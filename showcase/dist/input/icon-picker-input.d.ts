import { ATextInput } from "./abstract/a-text-input";
export declare class IconPickerInput extends ATextInput {
    private _valuefield;
    private _labelfield;
    private _urlservice;
    private _rooturlservice;
    itemRender: (label: string, value: string) => string;
    constructor();
    resizeList(evt: Event): void;
    private getList();
    showList(p_on: boolean): void;
    getFromUpList(evt: Event): void;
    setValueField(p_column: string): void;
    setDescriptionField(p_column: string): void;
    getValueField(): string;
    getLabelField(): string;
    setData(data: any[]): void;
    getValue(): string;
    getText(): string;
    getDesc(): string;
    isValid(): boolean;
    setValue(value: string): this;
    getDescFromServiceByValue(p_vl: string): string;
}


import { ABaseInput } from "./abstract/a-base-input";
export declare class CheckBox extends ABaseInput<any> {
    protected checkedValue: any;
    protected uncheckedValue: any;
    constructor(label: string, innerlabel: string);
    protected getInput(): JQuery;
    displayLabel(on: boolean): this;
    setValue(value: any): this;
    isChecked(): boolean;
    getValue(): string;
    setRequired(required: boolean): this;
    getRequired(): boolean;
    setCheckedValue(value: string): this;
    setUncheckedValue(value: string): this;
}

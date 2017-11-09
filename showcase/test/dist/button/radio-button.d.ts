import { AButton } from "./abstract/a-button";
export declare class RadioButton extends AButton {
    constructor(label: string, value: string | number);
    setLabel(label: string): this;
    setName(name: string): this;
    setDisabled(disabled: boolean): this;
    isDisabled(): boolean;
    isChecked(): boolean;
    setTooltip(tooltip: string): this;
}

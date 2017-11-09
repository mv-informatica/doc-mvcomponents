
import 'jquery.maskedinput/src/jquery.maskedinput.js';
import { ABaseInput } from "./a-base-input";
import { IInputAddon } from './../interface/i-input-addon';
export declare abstract class AInput<T> extends ABaseInput<T> {
    protected fnDisplayItem: any;
    constructor(tipo: string, valor?: string);
    protected render(): this;
    protected getInput(): JQuery;
    protected insertAddon(method: string, addon: IInputAddon): this;
    append(addon: IInputAddon): this;
    prepend(addon: IInputAddon): this;
    setPlaceholder(p_placeholder: string): this;
    getValue(): T;
    setDisplayItem(display: (item: T) => string): this;
    setValue(value: T): this;
    protected abstract encode(value: T): string;
    protected abstract decode(value: string): T;
    getRawValue(): string;
    setRawValue(value: string): this;
}

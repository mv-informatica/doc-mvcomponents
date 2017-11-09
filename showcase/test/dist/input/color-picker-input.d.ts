import { TextInput } from "./text-input";
import "farbtastic";
export declare class ColorPickerInput extends TextInput {
    constructor(p_text?: string);
    private onFocusOut(evt);
    private onFocos(evt);
    private updateColor(color);
    private showColors(show);
    setValue(color: string): this;
}

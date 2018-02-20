import { IInputAddon } from "./interface/i-input-addon";
import { AVisualComponent } from "./../component/abstract/a-visual-component";
export declare class InputAddon extends AVisualComponent implements IInputAddon {
    constructor();
    setIcon(icon: string): this;
    setText(text: string): this;
    setDisabled(disabled: boolean): this;
    isDisabled(): boolean;
}

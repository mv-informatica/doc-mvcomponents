import { AWidget } from "./abstract/a-widget";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
export declare class Alert extends AWidget {
    constructor(text?: string);
    setText(text: string): this;
    getText(): string;
    setColor(basic_color: EBasicColorStatus): this;
    private insertText(text, type_append);
    prependText(text: string): this;
    appendText(text: string): this;
}

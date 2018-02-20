import { AButton } from "./abstract/a-button";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
export declare class Button extends AButton {
    constructor(label?: string);
    setIcon(psrc: string): this;
    setColor(color: EBasicColorStatus): this;
    setLabel(label: string): this;
    setLabelStyleName(labelClass: string): this;
    addLabelStyleName(labelClass: string): this;
    setTooltip(tooltip: string): this;
}

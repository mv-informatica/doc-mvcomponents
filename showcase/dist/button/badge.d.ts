
import { AButton } from "./abstract/a-button";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
export declare class Badge extends AButton {
    constructor(label?: string);
    setLabel(label: string): this;
    setTooltip(tooltip: string): this;
    setColor(color: EBasicColorStatus): this;
}


import { AWidget } from "./abstract/a-widget";
import { IPopover } from "./interface/i-popover";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
export declare class Popover extends AWidget implements IPopover {
    constructor(title: string, content: string);
    setTitle(title: string): this;
    private parsePlacement(placement);
    private parseBasicColor(basicColor);
    setColor(basicColor: EBasicColorStatus): this;
    show(): this;
    hide(): this;
    toggle(): this;
}

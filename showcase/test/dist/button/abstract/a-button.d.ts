
import { AVisualComponent } from "../../component/abstract/a-visual-component";
import { IButton } from "../interface/i-button";
import { IPopover } from "../../widget";
import { EVerticalAlign } from "../../component/enum/e-vertical-align";
import { EHorizontalAlign } from "../../component/enum/e-horizontal-align";
export declare abstract class AButton extends AVisualComponent implements IButton {
    setDisabled(disabled: boolean): this;
    setEnable(enable: boolean): this;
    isDisabled(): boolean;
    protected getColors(): string;
    setVerticalAlign(align: EVerticalAlign): this;
    getVerticalAlign(): EVerticalAlign;
    setHorizontalAlign(align: EHorizontalAlign): this;
    abstract setLabel(label: string): this;
    abstract setTooltip(tooltip: string): this;
    append(popover: IPopover): this;
}

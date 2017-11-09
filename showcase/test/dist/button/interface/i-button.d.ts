import { IVisualComponent } from "../../component/interface/i-visual-component";
export interface IButton extends IVisualComponent {
    setLabel(string: string): this;
    setTooltip(tooltip: string): this;
    setDisabled(disabled: boolean): this;
    setEnable(enable: boolean): this;
    isDisabled(): boolean;
}

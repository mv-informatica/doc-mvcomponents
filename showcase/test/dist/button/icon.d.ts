import { AVisualComponent } from "../component/abstract/a-visual-component";
export declare class Icon extends AVisualComponent {
    private _old_icon;
    constructor();
    setIcon(iconStyle: string): this;
    setColor(color: string): this;
    setTooltip(tooltip: string): this;
}

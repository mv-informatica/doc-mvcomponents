import { LinkButton } from "../../button/link-button";
import { EBasicColorStatus } from "../../component/enum/e-basic-color-status";
export interface IDropButton {
    setOrientation(orientantion: "DOWN" | "UP"): this;
    addSeparator(): this;
    setColor(color: EBasicColorStatus): this;
    append(button: LinkButton): this;
}

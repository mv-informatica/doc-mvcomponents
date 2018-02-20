import { AContainer } from "../container/abstract/a-container";
import { LinkButton } from "../button/link-button";
import { IDropMenu } from "./interface/i-drop-menu";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
export declare class DropMenu extends AContainer<LinkButton> implements IDropMenu {
    private type;
    constructor(title: string);
    protected insertItem(item: LinkButton, method: string): void;
    attached(): void;
    setOrientation(orientantion: "DOWN" | "UP"): this;
    addSeparator(): this;
    setColor(color: EBasicColorStatus): this;
    setTitle(title: string): this;
}

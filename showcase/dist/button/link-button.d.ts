import { AButton } from "./abstract/a-button";
import { Badge } from "./badge";
import { ELinkTarget } from "./enum/e-link-target";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
export declare class LinkButton extends AButton {
    constructor(label: string);
    getTarget(): ELinkTarget;
    setTarget(target: ELinkTarget): LinkButton;
    getURL(): string;
    setURL(url: string): LinkButton;
    setIcon(psrc: string): this;
    setBadge(badge: Badge): this;
    setLabel(label: string): this;
    setColor(color: EBasicColorStatus): this;
    setTooltip(tooltip: string): this;
}

import { IItemMenu, EItemMenuStatus } from "./i-item-menu";
import { AContainer } from "mvcomponents/container";
export declare class MenuAreaSeparator extends AContainer<any> implements IItemMenu {
    id: number;
    label: string;
    module: string;
    path: string;
    icon: string;
    image: string;
    order: number;
    params: {
        [attr: string]: string | boolean | number | Date;
    };
    state: EItemMenuStatus;
    constructor(config: IItemMenu);
    expand(): this;
    collapse(): this;
    active(): this;
}

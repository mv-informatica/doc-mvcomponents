import { IItemMenu, EItemMenuStatus } from "./i-item-menu";
import { AContainer } from "mvcomponents/container";
export declare class MenuAreaItem extends AContainer<any> implements IItemMenu {
    private boxMenu;
    private expandedIcon;
    private collapsedIcon;
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
    itens: MenuAreaItem[];
    constructor(config: IItemMenu);
    private setIcon(icon, color?);
    private setImg(imgsrc);
    expand(): this;
    collapse(): this;
    active(): this;
}

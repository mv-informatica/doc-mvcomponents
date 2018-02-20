


import { ViewPager } from "mvcomponents/container";
import { HeaderArea } from "../header-area/header-area";
import { ApplicationArea } from "../application-area/application-area";
import { FooterArea } from "../footer-area/footer-area";
import { MenuArea } from "../menu/menu-area";
import { IModuleCompleteEvents } from "../module/i-module";
export declare class WorkspaceViewPager extends ViewPager {
    header: HeaderArea;
    application: ApplicationArea;
    footer: FooterArea;
    menu: MenuArea;
    lastmodule: IModuleCompleteEvents;
    private size;
    constructor();
    private adjusteApplicationHeight(size);
    private buildHeaderArea();
    private buildApplicationArea();
    private buildFooterArea();
    private buildMenuArea();
    clearModule(): void;
    private loadModule(item_module);
}


import { Box } from "mvcomponents/container";
import { ICustomComponent, EventEmitter } from "mvcomponents/core";
import { IItemMenu } from "./i-item-menu";
export declare class MenuArea extends Box implements ICustomComponent {
    private itemmenu;
    private _title;
    private _displayTitle;
    private boxMenu;
    private boxContainer;
    private boxTitle;
    onSelect: EventEmitter<IItemMenu>;
    onCollpase: EventEmitter<boolean>;
    onClickTitle: EventEmitter<any>;
    constructor();
    showTitle(on: boolean): void;
    title: string;
    setMenu(itens_menu: IItemMenu[]): void;
    loadMenuItem(index: number, subItemIndex?: number): void;
    scaleToTop(on: boolean): void;
    scaleToBottom(on: boolean): void;
    collapseMenu(on: boolean): this;
    toggleCollapseMenu(): void;
    private menuOutBoxVisible(show);
}

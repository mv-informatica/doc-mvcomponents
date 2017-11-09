import { ICustomComponent, EventEmitter } from "mvcomponents/core";
export declare class HeaderAreaLogo implements ICustomComponent {
    onClickToggleMenu: EventEmitter<any>;
    private logoURL;
    height: string;
    marginTop: string;
    toggleMenuPosition: string;
    toggleMenuColor: string;
    private showToggleMenu;
    private loaded;
    constructor();
    attached(): void;
    private refresh();
    setLogoURL(url: string): this;
    getLogoURL(): string;
    setToggleMenuVisibility(on: boolean): void;
    setToggleMenuColor(color: string): void;
}

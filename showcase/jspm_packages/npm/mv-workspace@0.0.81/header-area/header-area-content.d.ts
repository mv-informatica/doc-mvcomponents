import { ICustomComponent, EventEmitter } from "mvcomponents/core";
import { AVisualComponent } from "mvcomponents/component";
import { Icon, IconButton, LinkButton } from "mvcomponents/button";
export declare class HeaderAreaContent extends AVisualComponent {
    protected isAttached: boolean;
    onAttached: EventEmitter<void>;
    protected defaultOrientation: string;
    constructor(tag_element: string, html_content: string);
    protected resolveAttachement(renderable: any): void;
    protected insertItem(item: ICustomComponent | Icon | IconButton | LinkButton, method: string): void;
    append(item: ICustomComponent | Icon | IconButton | LinkButton): this;
    prepend(item: ICustomComponent | Icon | IconButton | LinkButton): this;
    attached(): void;
}

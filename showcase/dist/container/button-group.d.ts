import { AContainer } from "./abstract/a-container";
import { Button } from "../button/button";
import { Badge } from "../button/badge";
import { Icon } from "../button/icon";
import { EVerticalAlign } from "../component/enum/e-vertical-align";
export declare type IGroupItem = Button | Badge | Icon;
export declare class ButtonGroup extends AContainer<IGroupItem> {
    private defaultVerticalAlign;
    constructor();
    setDefaultInnerVerticalAlign(align: EVerticalAlign): this;
    private prepareItem(item);
    append(item: IGroupItem): this;
    prepend(item: IGroupItem): this;
}

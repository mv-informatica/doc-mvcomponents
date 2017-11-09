import { EventEmitter } from "mvcomponents/core";
import { IItemMenu } from "./i-item-menu";
export declare class MenuItemDispatch {
    onChangeMenuItem: EventEmitter<IItemMenu>;
    onCollapseAll: EventEmitter<boolean>;
}
declare var _default: MenuItemDispatch;
export default _default;

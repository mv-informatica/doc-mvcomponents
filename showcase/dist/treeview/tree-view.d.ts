
import "jstree";
import { EventEmitter } from "../core/event-emitter";
import { AWidget } from "../widget/abstract/a-widget";
export interface INodeTreeView {
    id?: string | number;
    text: string;
    icon?: string;
    state?: {
        opened?: boolean;
        disabled?: boolean;
        selected?: boolean;
    };
    data?: any;
    children?: INodeTreeView[];
    a_attr?: {
        href: string;
        id?: string;
    };
}
export interface INodeTreeViewExtended extends INodeTreeView {
    parent: string;
}
export declare enum ETreeViewPosition {
    LAST = 0,
    FIRST = 1,
}
export declare class TreeView extends AWidget {
    private _loaded;
    onSelect: EventEmitter<INodeTreeView[]>;
    constructor();
    refresh(): this;
    clear(): this;
    addNode(p_node: INodeTreeView, p_posi?: ETreeViewPosition, p_parent?: any): TreeView;
    private removeNode(p_node);
    getSelectedNode(): INodeTreeView;
    setNodes(p_nodes: INodeTreeView[]): this;
    updateNode(p_node: INodeTreeView): this;
}

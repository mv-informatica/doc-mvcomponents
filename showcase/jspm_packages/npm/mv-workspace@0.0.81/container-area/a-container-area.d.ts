import { IContainerArea } from "./i-container-area";
import { ICustomComponent, EventEmitter } from "mvcomponents/core";
export declare abstract class ContainerArea implements ICustomComponent, IContainerArea {
    onChangeVisibility: EventEmitter<boolean>;
    constructor();
    setHidden(on: boolean): void;
    protected refresh(): void;
    attached(): void;
}

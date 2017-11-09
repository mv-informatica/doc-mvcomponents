
import { EventEmitter } from "mvcomponents/core";
import { Box } from "mvcomponents/container";
import { IContainerArea } from "../container-area/i-container-area";
export declare class FooterArea extends Box implements IContainerArea {
    onChangeVisibility: EventEmitter<boolean>;
    constructor();
    setHidden(on: boolean): void;
}

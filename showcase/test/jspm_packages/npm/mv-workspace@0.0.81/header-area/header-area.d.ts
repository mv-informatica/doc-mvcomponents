
import { EventEmitter } from "mvcomponents/core";
import { Box } from "mvcomponents/container";
import { HeaderAreaRight } from "./header-area-right";
import { HeaderAreaLeft } from "./header-area-left";
export declare class HeaderArea extends Box {
    rightArea: HeaderAreaRight;
    leftArea: HeaderAreaLeft;
    onChangeVisibility: EventEmitter<boolean>;
    constructor();
    setHidden(on: boolean): void;
    private buildAreas();
}

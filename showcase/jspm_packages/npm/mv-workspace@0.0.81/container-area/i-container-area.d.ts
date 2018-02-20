import { EventEmitter } from "mvcomponents/core";
export interface IContainerArea {
    onChangeVisibility: EventEmitter<boolean>;
    setHidden(on: boolean): void;
}

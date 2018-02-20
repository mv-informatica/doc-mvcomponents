
import { Box } from "mvcomponents/container";
export declare class ApplicationArea extends Box {
    content: Box;
    constructor();
    setFullView(on: boolean): ApplicationArea;
    scaleToTop(on: boolean): void;
    scaleToBottom(on: boolean): void;
    expand(on: boolean): this;
}

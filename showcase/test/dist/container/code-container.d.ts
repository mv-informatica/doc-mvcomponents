import { AContainer } from "./abstract/a-container";
import { Box } from "./box";
export declare class CodeContainer extends AContainer<Box> {
    constructor();
    setCodeText(codeText: string): this;
}

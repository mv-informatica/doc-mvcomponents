import { ATextInput } from "./abstract/a-text-input";
export declare class TextArea extends ATextInput {
    constructor();
    protected render(): this;
    getInput(): JQuery;
    setRows(rows: number): this;
    setHeight(height: string): this;
}

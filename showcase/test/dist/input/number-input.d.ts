import { AInput } from "./abstract/a-input";
export declare class NumberInput extends AInput<number> {
    constructor(value?: number);
    setMin(value: number): this;
    setMax(value: number): this;
    setStep(value: number): this;
    protected encode(value: number): string;
    protected decode(value: string): number;
}

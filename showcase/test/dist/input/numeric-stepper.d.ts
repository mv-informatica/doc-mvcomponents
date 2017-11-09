
import { AInput } from "./abstract/a-input";
import { InputAddon } from "./input-addon";
export declare class NumericStepper extends AInput<number> {
    private maxvl;
    private minvl;
    private stepvl;
    incrementHandler: InputAddon;
    decrementHandler: InputAddon;
    constructor();
    protected render(): this;
    setValue(value: number): this;
    protected encode(value: number): string;
    protected decode(value: string): number;
    private refreshHandlers();
    increaseValue(): this;
    reduceValue(): this;
    setMin(min: number): NumericStepper;
    setMax(max: number): NumericStepper;
    setStep(step: number): NumericStepper;
    setPlaceholder(placeholder: string): this;
}

import { AInput } from './a-input';
export declare abstract class ATextInput extends AInput<string> {
    private blankWhenNull;
    private nullable;
    setMask(mask: string): this;
    setBlankWhenNull(on: boolean): this;
    isBlankWhenNull(): boolean;
    setNullable(on: boolean): this;
    isNullable(): boolean;
    getValue(): string;
    getRawValue(): string;
    setRawValue(value: string): this;
    setMaxLength(value: number): this;
    protected decode(value: string): string;
    protected encode(value: string): string;
}

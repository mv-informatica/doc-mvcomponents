import { IVisualComponent } from './../../component/interface/i-visual-component';
import { IValidator } from '../../core/interface/i-validator';
export interface IInput<T> extends IVisualComponent {
    validator: IValidator<T>;
    focus(): this;
    setValue(value: T): this;
    getValue(): T;
    isValid(): boolean;
    isDirty(): boolean;
    setDirty(dirty: boolean): this;
    isDisabled(): boolean;
    setDisabled(disabled: boolean): this;
    setEnable(enable: boolean): this;
    setName(name: string): this;
    getName(): string;
    validate(): Promise<string[]>;
    setDefaultValue(value: T): this;
    getDefaultValue(): T;
    reset(): this;
    setCleanable(on: boolean): this;
    isCleanable(): boolean;
    markInvalid(on: boolean): this;
}

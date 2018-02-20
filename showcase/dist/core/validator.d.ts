import { IConfigurable } from "./interface/i-configurable";
import { IValidator } from "./interface/i-validator";
import { IAsyncValidation, ISyncValidation, IValidation } from "./interface/i-validation";
import { EventEmitter } from "./event-emitter";
export declare class Validator<T> implements IValidator<T>, IConfigurable {
    onValidate: EventEmitter<string[]>;
    private sync;
    private async;
    configure(method: (me: this) => any): this;
    add(...validations: ISyncValidation<T>[]): this;
    addAsync(...validations: IAsyncValidation<T>[]): this;
    private checkToCancel();
    validate(value: T): Promise<string[]>;
    remove(...validations: IValidation<T, boolean | Promise<boolean>>[]): this;
}

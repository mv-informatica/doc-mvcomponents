import { IValidation, ISyncValidation, IAsyncValidation } from './i-validation';
import { EventEmitter } from '../event-emitter';
export interface IValidator<T> {
    onValidate: EventEmitter<string[]>;
    add(...validation: ISyncValidation<T>[]): this;
    addAsync(...validation: IAsyncValidation<T>[]): this;
    validate(value: T): Promise<string[]>;
    remove(...validations: IValidation<T, boolean | Promise<boolean>>[]): this;
}

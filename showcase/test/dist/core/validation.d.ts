import { IOnValidateMethod, ISyncValidation, IValidation, IAsyncValidation, IValidationMethod } from "./interface/i-validation";
export declare abstract class AbstractValidation<T, R> implements IValidation<T, R> {
    protected method: IValidationMethod<T, R>;
    protected callback: IOnValidateMethod<this>;
    template: string;
    private tokenId;
    isCanceled: boolean;
    setMethod(method: IValidationMethod<T, R>): this;
    getMethod(): IValidationMethod<T, R>;
    setMessage(template: string): this;
    onValidate(method: IOnValidateMethod<this>): this;
    getMessage($value: T): string;
    cancel(): void;
    abstract validate(value: T): R;
}
export declare class Validation<T> extends AbstractValidation<T, boolean> implements ISyncValidation<T> {
    validate(value: T): boolean;
}
export declare class AsyncValidation<T> extends AbstractValidation<T, Promise<boolean>> implements IAsyncValidation<T> {
    validate(value: T): Promise<boolean>;
}

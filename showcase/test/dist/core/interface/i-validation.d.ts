export interface IValidationMethod<T, R> {
    (value: T): R;
}
export interface IOnValidateMethod<T> {
    (error: string, validation?: T): any;
}
export interface IValidation<T, R> {
    setMethod(method: IValidationMethod<T, R>): this;
    getMessage(value: T): string;
    setMessage(message: string): this;
    validate(value: T): R;
    onValidate(method: IOnValidateMethod<this>): this;
    cancel(): void;
    isCanceled: boolean;
}
export interface IAsyncValidation<T> extends IValidation<T, Promise<boolean>> {
}
export interface ISyncValidation<T> extends IValidation<T, boolean> {
}

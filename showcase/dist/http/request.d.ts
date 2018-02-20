import "es6-shim";
import { IRequestConfig } from "./interface/i-request-config";
import { IErrorResponse } from "./interface/i-error-response";
export declare class SimplestRequest<T> {
    private param;
    protected config: JQueryAjaxSettings;
    constructor(config: JQueryAjaxSettings);
    params(params: {}, traditional?: boolean): this;
    header(prop: {}): this;
    then(success: (data: T, config?: IRequestConfig, responseHeaders?: {
        getResponseHeader: (key: string) => string;
        getAllResponseHeaders: () => string;
    }) => any, failure?: (response?: IErrorResponse, request?: IRequestConfig) => any): Promise<any>;
}
export declare class Request<T> extends SimplestRequest<T> {
    body(data: {}): this;
    then(success: (data: T, config?: IRequestConfig, responseHeaders?: {
        getResponseHeader: (key: string) => string;
        getAllResponseHeaders: () => string;
    }) => any, failure?: (response?: IErrorResponse, request?: JQueryAjaxSettings) => any): Promise<T>;
}
export declare class FileUploadRequest<T> extends Request<T> {
    body(data: {}): this;
}

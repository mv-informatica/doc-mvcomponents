import "es6-shim";
import { IRequestConfig } from "./interface/i-request-config";
import { SimplestRequest, Request, FileUploadRequest } from "./request";
export declare class HttpStatic {
    rootUrl: string;
    beforeRequest: (config: IRequestConfig) => IRequestConfig;
    defaults: IRequestConfig;
    constructor();
    format: string;
    contentType: string;
    private getDefaultConfig(config);
    private getDefaultTaskRequest<T>(method, url, config?);
    configure(method: (config: IRequestConfig) => void): void;
    get<T>(url: string, config?: IRequestConfig): SimplestRequest<T>;
    delete<T>(url: string, config?: IRequestConfig): Request<T>;
    post<T>(url: string, config?: IRequestConfig): Request<T>;
    put<T>(url: string, config?: IRequestConfig): Request<T>;
    upload<T>(url: string, config?: IRequestConfig): FileUploadRequest<T>;
}
export declare var $http: HttpStatic;

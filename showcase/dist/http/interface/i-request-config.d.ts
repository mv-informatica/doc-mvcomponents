export interface IRequestConfig {
    format?: string;
    url?: string;
    method?: string;
    rootUrl?: string;
    queryData?: any;
    body?: any;
    contentType?: string;
    fileUpload?: boolean;
    headers?: {
        [key: string]: string;
    };
}

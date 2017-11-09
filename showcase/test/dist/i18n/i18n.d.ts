export interface I18nOptions {
    lng?: string;
    replace?: {};
    backend?: any;
}
export interface I18nOptionsConfig {
    lng?: string;
    backend?: any;
}
export declare class I18nStatic {
    private defaults;
    private keys;
    constructor();
    readonly lng: string;
    setConfig(config: I18nOptions): this;
    key(key: string, objReplace?: {}, configs?: I18nOptions): string;
    loadResource(url: string, config?: I18nOptionsConfig): Promise<any>;
}
export declare var i18n: I18nStatic;

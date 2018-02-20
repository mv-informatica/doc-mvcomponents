

import "./globals";
export declare class SystemApplicationStatic {
    private _uid;
    private _projectVersion;
    relativePathPackage: string;
    constructor();
    getUid(): number;
    getLastUid(): number;
    getNextUid(): number;
    getUrlParam(p_name: string): string;
    private removeInvalidChars(p_url);
    getLocation(): string;
    getDomain(): string;
}
export declare var SystemApplication: SystemApplicationStatic;

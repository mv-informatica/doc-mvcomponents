import { Box } from "../container/box";
export declare enum ERouterViewMode {
    HASHBANG = 0,
    NORMAL = 1,
}
export interface IRouterViewConfig {
    name: string;
    mode?: ERouterViewMode;
}
export declare class RouterView extends Box {
    private name;
    private mode;
    constructor(config: IRouterViewConfig);
}

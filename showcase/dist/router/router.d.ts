import { Box } from "../container/box";
export interface IRoute {
    path: string;
    module: any;
    routerView: string;
    routerViewInstance?: Box;
}
export declare class Router {
    private routes;
    push(route: IRoute): void;
}
export declare var router: Router;

import { ICustomComponent } from "../../core/interface/i-custom-component";
import { IStore } from "../../store/interface/i-store";
export interface IPaginationSorting {
    direction: string;
    property: string;
    ignoreCase?: boolean;
    nullHandling?: string;
    ascending?: boolean;
}
export interface IPaginationLink {
    href: string;
}
export interface IPaginationRequest {
    page: number;
    size?: number;
    sort?: IPaginationSorting[];
}
export interface IPaginationResult<T> {
    content: T[];
    size: number;
    number: number;
    sort?: IPaginationSorting[];
    first: boolean;
    totalPages: number;
    numberOfElements: number;
    totalElements: number;
    last: boolean;
    _links?: {
        first: IPaginationLink;
        last: IPaginationLink;
        next: IPaginationLink;
        prev: IPaginationLink;
        self: IPaginationLink;
    };
}
export interface IPagination<T> extends ICustomComponent {
    loadPage(params: IPaginationRequest, p_link?: string): this;
    setTotalOfVisibleLinks(total: number): this;
    getPaginationInfo(): string;
    setPaginationInfoTemplate(template: string): this;
    getLastPaginationRequest(): IPaginationRequest;
    setStore(store: IStore<T>): this;
    getLastPaginationResult(): IPaginationResult<T>;
    getLastURL(): string;
    clear(): this;
}

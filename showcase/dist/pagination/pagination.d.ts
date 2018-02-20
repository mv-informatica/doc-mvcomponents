import { ICustomComponent } from "../core/interface/i-custom-component";
import { IStore } from "../store/interface/i-store";
import { IPagination, IPaginationResult, IPaginationRequest } from "./interface/i-pagination";

export declare class Pagination<T> implements IPagination<T>, ICustomComponent {
    paginationResult: IPaginationResult<T>;
    private visiblePageNumbers;
    private visiblePageNumbersTotal;
    private pageSize;
    private lastPaginationRequest;
    private lastURL;
    private store;
    private previousButtonDisabledClass;
    private nextButonDisabledClass;
    private paginationInfoTemplate;
    constructor(baseURL: string);
    loadPage(params: IPaginationRequest, p_link?: string): this;
    setStore(store: IStore<T>): this;
    setTotalOfVisibleLinks(total: number): this;
    getLastPaginationRequest(): IPaginationRequest;
    getLastPaginationResult(): IPaginationResult<T>;
    getLastURL(): string;
    getPaginationInfo(): string;
    setPaginationInfoTemplate(template: string): this;
    clear(): this;
    attached(): void;
    private prepareSortingParams(params);
    private onPaginationResultReceived(paginationResult);
    private calculateVisiblePageNumbers(startPage?);
    private needsRecalculateVisiblePageNumbers(startPage);
    private nextVisiblePageNumbers();
    private previousVisiblePageNumbers();
    private requestPage(page);
    private refresh();
    private getNavigationButtonClass(btn);
}
